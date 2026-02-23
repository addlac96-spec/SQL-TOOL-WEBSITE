import sqlite3
import re
import json

def extract_schema_from_js(js_content, industry_name):
    # Extremely basic regex to extract the setup string for an industry
    pattern = rf'"{industry_name}":\s*{{[^}}]*setup:\s*`(.*?)`'
    match = re.search(pattern, js_content, re.DOTALL)
    if match:
        return match.group(1)
    return ""

def extract_lessons(js_content):
    # Extract the lessons JSON-like array
    start_idx = js_content.find("const lessons = [")
    if start_idx == -1:
        return []
    
    end_idx = js_content.find("];", start_idx) + 1
    lessons_js = js_content[start_idx:end_idx]
    
    lessons = []
    
    # Just find EVERY example string in the block
    pattern = r'id:\s*"(\d+)".*?example:\s*"(.*?)"'
    matches = re.finditer(pattern, lessons_js, re.DOTALL)
    
    for match in matches:
        l_id = match.group(1)
        example = match.group(2).replace('\\n', '\n')
        example = re.sub(r'--.*?\n', '', example).strip()
        lessons.append({"id": l_id, "example": example})
            
    return lessons

def validate_examples():
    with open('app.js', 'r', encoding='utf-8') as f:
        js_content = f.read()

    lessons = extract_lessons(js_content)
    
    # We will test against Ecommerce.
    # (Some examples might technically fail if they specifically request SaaS data, 
    # but the generic beginner ones should work on Ecommerce).
    ecommerce_setup = extract_schema_from_js(js_content, "ecommerce")
    
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()
    
    try:
        cursor.executescript(ecommerce_setup)
    except Exception as e:
        print(f"Error setting up Ecommerce DB: {e}")
        return
        
    print(f"Loaded {len(lessons)} lessons to validate.\n")
    
    failures = 0
    for lesson in lessons:
        if not lesson["example"]: continue
        
        # We manually patch some examples that are purely hypothetical 
        # based on tables that don't exist in our limited schema
        example_sql = lesson["example"]
        
        # Known hypothetical schema examples in the curriculum that we skip validation for:
        if 'employees' in example_sql or 'salaries' in example_sql or 'accounts' in example_sql or 'patients' in example_sql or 'marketing_leads' in example_sql or 'transactions' in example_sql or 'usage_logs' in example_sql:
            print(f"Lesson {lesson['id']} (Skipped): Depends on hypothetical schema -> {example_sql}")
            continue

        try:
            cursor.execute(example_sql)
            rows = cursor.fetchall()
            print(f"Lesson {lesson['id']} [PASS] Returned {len(rows)} rows -> {example_sql}")
        except Exception as e:
            print(f"Lesson {lesson['id']} [FAIL] SQL Error: {e} -> {example_sql}")
            failures += 1
            
    print(f"\nValidation complete. {failures} runtime failures.")

if __name__ == '__main__':
    validate_examples()
