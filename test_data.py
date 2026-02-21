import sqlite3
import re
import os

with open('qa_report.txt', 'r', encoding='utf-8') as f:
    text = f.read()

industries = text.split("=== INDUSTRY: ")
for ind_part in industries[1:]:
    lines = ind_part.split('\n')
    ind_name = lines[0].strip(" =")
    
    setup_sql = ""
    in_setup = False
    for line in lines:
        if line.startswith("SETUP SQL:"):
            in_setup = True
            continue
        if in_setup and ("-- LESSON" in line):
            in_setup = False
        if in_setup:
            setup_sql += line + "\n"
            
    # initialize SQLite
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()
    try:
        cursor.executescript(setup_sql)
    except Exception as e:
        print(f"Error initializing DB for {ind_name}: {e}\nSQL:\n{setup_sql}")
        continue
    
    print(f"\n--- {ind_name.upper()} DATA CHECK ---")

    missing_warnings = set()
    
    for line in lines:
        if "Check: (res, sql)" in line:
            # find strings in quotes in the check function
            literals = re.findall(r'"([^"]+)"', line) + re.findall(r"'([^']+)'", line)
            
            for lit in literals:
                lit_l = lit.lower()
                
                # Filter out pure SQL syntax hints
                ignore_list = [
                    "not", "in", "like", "between", "order by", "desc", "count", 
                    "sum", "avg", "max", "min", "distinct", "group by", "having", "not like",
                    "not in", "not between", "and", "or", "!= ", "+", "-", "*", "/", "abs", "round"
                ]
                
                # Check if literal starts with or is one of the ignored
                should_ignore = False
                for ig in ignore_list:
                    if lit_l.startswith(ig) or lit_l == ig or ig + "(" in lit_l or " " + ig + " " in lit_l:
                        should_ignore = True
                        break
                
                if should_ignore or len(lit.strip("()=><!%_- ")) < 2:
                    continue
                
                # Clean literal to search in setup
                clean_lit = lit_l.strip("()=><!%_ ")
                clean_lit = clean_lit.replace("=", "").replace(">", "").replace("<", "").replace("!", "").strip()
                
                if not clean_lit:
                    continue

                if clean_lit not in setup_sql.lower():
                    # Check if it's a column name (which we know exists if the check passes)
                    if not re.match(r'^[a-z_][a-z0-9_]*$', clean_lit):
                        missing_warnings.add(clean_lit)
                    
    if missing_warnings:
        print(f"  WARNING: Potential missing data for constraints: {missing_warnings}")
    else:
        print("  OK.")

print("\nDone checking.")
