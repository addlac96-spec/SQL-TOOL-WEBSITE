import re

app_file = 'app.js'
with open(app_file, 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('const managerRequestsByIndustry = {')
end_idx = text.find('let currentIndustry =', start_idx)

if start_idx == -1 or end_idx == -1:
    print("Could not find managerRequestsByIndustry block")
    exit(1)

req_text = text[start_idx:end_idx]

# Parse requests
cur_ind = None
cur_lvl = None
reqs_by_ind = {}

for line in req_text.split('\n'):
    line = line.strip()
    match_ind = re.match(r'"([^"]+)":\s*{', line)
    if match_ind:
        cur_ind = match_ind.group(1)
        reqs_by_ind[cur_ind] = {}
        continue
    
    match_lvl = re.match(r'"(\d+)":\s*\[', line)
    if match_lvl:
        cur_lvl = match_lvl.group(1)
        reqs_by_ind[cur_ind][cur_lvl] = []
        continue
    
    match_req = re.search(r'{\s*req:\s*["\'](.*?)["\'],\s*check:\s*(.*?),\s*hint:', line)
    if match_req:
        req = match_req.group(1)
        check = match_req.group(2)
        reqs_by_ind[cur_ind][cur_lvl].append((req, check))

# Rules mapping lesson -> required substrings in check (case-insensitive search loosely applied)
rules = {
    "103": [">", "<", "=", "!="],
    "104": ["and", "or", "not"],
    "105": ["between"],
    "106": ["in"],
    "107": ["like"],
    "108": ["not"],
    "109": ["order by"],
    "201": ["count"],
    "202": ["sum", "avg", "max", "min"],
    "203": ["group by"],
    "204": ["having"],
    "205": ["distinct"],
    "206": ["+", "-", "*", "/"],
    "207": ["round", "abs"],
    "209": ["limit", "offset"],
    "210": ["case", "when", "then"],
    "211": ["join"],
    "212": ["date", "strftime", "now"]
}

warnings = []

for ind, levels in reqs_by_ind.items():
    for lvl, qs in levels.items():
        if lvl not in rules: continue
        required_keywords = rules[lvl]
        for i, (req, check) in enumerate(qs):
            check_lower = check.lower()
            # Does the check enforce at least one of the required keywords?
            has_keyword = False
            for kw in required_keywords:
                # We look for the keyword in the check string 
                # e.g., sql.toLowerCase().includes("in") -> the check string will literally have "in"
                # so we can just check if '"' + kw + '"' is in check_lower or "'" + kw + "'"
                # Some are operators like ">" or "+"
                if kw in ["+", "-", "*", "/", ">", "<", "=", "!="]:
                    if kw in check_lower:
                        has_keyword = True
                        break
                else:
                    if f'"{kw}' in check_lower or f"'{kw}" in check_lower or f"{kw} " in check_lower or f"{kw}(" in check_lower:
                        has_keyword = True
                        break
            
            if not has_keyword:
                warnings.append(f"[{ind}] Lesson {lvl} Q{i+1}: Missing required SQL concept validation '{required_keywords}'.\n  Req: {req}\n  Check: {check}")

with open('qa_conceptual_audit.txt', 'w', encoding='utf-8') as f:
    if warnings:
        f.write("\n".join(warnings))
        print(f"Found {len(warnings)} conceptual warnings. See qa_conceptual_audit.txt")
    else:
        f.write("All checks seem to enforce lesson concepts!\n")
        print("All checks seem to enforce lesson concepts!")
