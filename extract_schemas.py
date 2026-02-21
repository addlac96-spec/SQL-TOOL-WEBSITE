import re

with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('const INDUSTRY_CONFIGS = {')
end_idx = text.find('};\n\n// --- LESSON DATA ---')

config_block = text[start_idx:end_idx]

# Pattern to extract industry names and setup blocks
pattern = r'"([^"]+)"\s*:\s*{.*?setup\s*:\s*`([^`]+)`'
matches = re.findall(pattern, config_block, re.DOTALL)

for ind, setup in matches:
    print(f"=== {ind.upper()} ===")
    lines = setup.strip().split('\n')
    for line in lines:
        line = line.strip()
        if line.startswith('CREATE TABLE'):
            print(line)
        elif line.startswith('INSERT INTO'):
            # Just print the first insert for each table to see the schema
            print("  " + line)
    print()
