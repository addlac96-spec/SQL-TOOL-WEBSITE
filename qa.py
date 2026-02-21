import re
import json

app_file = 'app.js'
with open(app_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Extract setups
setups = {}
parts = text.split('INDUSTRY_CONFIGS = {')[1].split('const lessons =')[0]
# crude parsing: find "name:" and "setup:`...`"
industries = re.findall(r'"([^"]+)":\s*{\s*name:\s*"([^"]+)",.*?setup:\s*`([^`]+)`', parts, re.DOTALL)
for ind_key, name, setup in industries:
    setups[ind_key] = setup

# Extract managerRequestsByIndustry
requests_text = text.split('const managerRequestsByIndustry = {')[1].split('let currentIndustry')[0]
# we can't easily eval JS, but we can regex match industry -> level -> items
cur_ind = None
cur_lvl = None

# A simplistic regex parser for { req: "...", check: (res, sql) => ..., hint: "..." }
reqs_by_ind = {}
for line in requests_text.split('\n'):
    line = line.strip()
    if '": {' in line or "': {" in line:
        pass
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
    
    match_req = re.match(r'{\s*req:\s*"([^"]+)",\s*check:\s*(.*?),\s*hint:\s*"([^"]+)"\s*}', line)
    if match_req:
        req = match_req.group(1)
        check = match_req.group(2)
        hint = match_req.group(3)
        reqs_by_ind[cur_ind][cur_lvl].append({'req': req, 'check': check, 'hint': hint})

with open('qa_report.txt', 'w', encoding='utf-8') as f:
    for ind, data in reqs_by_ind.items():
        f.write(f"=== INDUSTRY: {ind} ===\n\n")
        f.write(f"SETUP SQL:\n{setups.get(ind, 'N/A')}\n\n")
        
        for lvl, reqs in data.items():
            f.write(f"  -- LESSON {lvl} --\n")
            for i, r in enumerate(reqs):
                f.write(f"    Q{i+1}: {r['req']}\n")
                f.write(f"    Check: {r['check']}\n")
                f.write(f"    Hint:  {r['hint']}\n\n")

print("Generated qa_report.txt")
