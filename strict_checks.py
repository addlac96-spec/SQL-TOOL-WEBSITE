import re

app_file = 'app.js'
with open(app_file, 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('const managerRequestsByIndustry = {')
end_idx = text.find('let currentIndustry =', start_idx)

config_block = text[start_idx:end_idx]

rules = {
    "103": '(sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!="))', 
    "104": '(sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not"))',
    "105": 'sql.toLowerCase().includes("between")',
    "106": 'sql.toLowerCase().includes("in")',
    "107": 'sql.toLowerCase().includes("like")',
    "108": 'sql.toLowerCase().includes("not ")',
    "109": 'sql.toLowerCase().includes("order by")',
    "201": 'sql.toLowerCase().includes("count")',
    "202": '(sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min"))',
    "203": 'sql.toLowerCase().includes("group by")',
    "204": 'sql.toLowerCase().includes("having")',
    "205": 'sql.toLowerCase().includes("distinct")',
    "206": '(sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/"))',
    "207": '(sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil"))',
    "209": '(sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null"))',
    "210": 'sql.toLowerCase().includes("case")',
    "211": 'sql.toLowerCase().includes("join")',
    "212": '(sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute"))'
}

new_lines = []
cur_lvl = None
for line in config_block.split('\n'):
    match_lvl = re.search(r'"(\d+)":\s*\[', line)
    if match_lvl:
        cur_lvl = match_lvl.group(1)
        new_lines.append(line)
        continue
        
    if cur_lvl in rules and 'check: (res, sql) =>' in line:
        rule_str = rules[cur_lvl]
        
        match = re.search(r'(check:\s*\(res,\s*sql\)\s*=>\s*)(.*?)(,\s*hint:)', line)
        if match:
            prefix = match.group(1)
            original_logic = match.group(2).strip()
            suffix = match.group(3)
            
            if not original_logic.startswith(f"{rule_str} && "):
                new_logic = f"{rule_str} && ({original_logic})"
                line = line[:match.start()] + prefix + new_logic + suffix + line[match.end():]
                
    new_lines.append(line)

new_config_block = '\n'.join(new_lines)
text = text[:start_idx] + new_config_block + text[end_idx:]

with open(app_file, 'w', encoding='utf-8') as f:
    f.write(text)

print("Applied strict checks to all lessons.")
