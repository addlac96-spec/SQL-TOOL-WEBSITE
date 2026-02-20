
import json
import re
import random

# Professional Persona Templates for each industry
PERSONAS = {
    "ecommerce": {
        "role": "Sales Director / Inventory Manager",
        "templates": [
            "Our Q3 sales analysis is coming up. I need you to pull {context}. Make sure it's accurate.",
            "The merchandising team is finalizing the new catalog. Please extract {context} for their review.",
            "We're auditing our stock levels. Can you generate a report of {context} ASAP?",
            "Customer support reported an issue. I need to verify {context} to troubleshoot.",
            "Marketing needs a list for their upcoming campaign. Please find {context}.",
            "We need to evaluate our pricing strategy. Get me a list of {context}.",
            "To prepare for the board meeting, I need an overview of {context}.",
            "Let's check our inventory health. Show me {context}.",
            "I'm analyzing our top-performing categories. Can you list {context}?",
            "We found a discrepancy in the logs. Please pull {context} to help us investigate."
        ]
    },
    "saas": {
        "role": "Product Manager / Solutions Architect",
        "templates": [
            "We're monitoring user engagement for the new feature. Please retrieve {context}.",
            "I need to analyze our churn rate. Can you pull a list of {context}?",
            "The engineering team needs to debug a login issue. Find {context} for them.",
            "We're preparing the monthly active user report. I need you to show me {context}.",
            "To optimize our onboarding flow, please extract {context}.",
            "We need to audit our subscription tiers. List {context} for review.",
            "Compliance needs a report on user data access. Please find {context}.",
            "I'm investigating a potential data inconsistency. Show me {context}.",
            "We're planning a database migration. I need a dump of {context}.",
            "For our Q1 growth analysis, please get me {context}."
        ]
    },
    "hr": {
        "role": "HR Business Partner / People Ops",
        "templates": [
            "We're finalizing the annual headcount report. Please list {context}.",
            "The benefits team needs to verify employee eligibility. Find {context}.",
            "We're conducting a compensation review. I need to see {context}.",
            "For the upcoming diversity and inclusion audit, please extract {context}.",
            "We need to track our recruitment pipeline. Can you show me {context}?",
            "I'm updated the employee directory. Please pull {context}.",
            "Legal requires a report on hiring dates. Find {context} immediately.",
            "We're analyzing retention rates by department. List {context} for me.",
            "To prepare for the performance review cycle, I need {context}.",
            "We need to verify salary bands. Please get me {context}."
        ]
    },
    "healthcare": {
        "role": "Clinical Data Analyst / Hospital Admin",
        "templates": [
            "We're preparing for the joint commission audit. Please retrieve {context}.",
            "The Chief Medical Officer needs a report on patient outcomes. Find {context}.",
            "We need to verify doctor schedules for the new wing. Show me {context}.",
            "For our medication inventory compliance check, please list {context}.",
            "We're analyzing admission rates for the last quarter. Extract {context}.",
            "Billing needs to reconcile some patient accounts. Please find {context}.",
            "We're updating our patient demographic records. I need {context}.",
            "To track treatment efficacy, please pull a list of {context}.",
            "We need to audit access to sensitive patient files. Show me {context}.",
            "For the departmental budget review, please get me {context}."
        ]
    },
    "finance": {
        "role": "Audit Manager / CFO / Controller",
        "templates": [
            "The external auditors are arriving next week. I need you to pull {context}.",
            "We're closing the books for the fiscal year. Please list {context}.",
            "I need to investigate a variance in the quarterly report. Find {context}.",
            "Risk management requires an analysis of high-value transactions. Show me {context}.",
            "We're reconciling the expense accounts. Please extract {context}.",
            "To verify our liquidity position, I need a list of {context}.",
            "We need to audit all transactions above the approval threshold. Find {context}.",
            "For the investor relations deck, please get me {context}.",
            "We're analyzing cost centers for efficiency. List {context}.",
            "I need to verify the tax liability for this period. Show me {context}."
        ]
    }
}

def unwrap_request(text):
    """
    Attempts to strip known persona templates from the text to get back to the core request.
    """
    for industry_data in PERSONAS.values():
        for template in industry_data["templates"]:
            if "{context}" not in template:
                # Basic prefix match
                if text.startswith(template + " "):
                     return text[len(template)+1:]
                continue
                
            parts = template.split("{context}")
            prefix = parts[0]
            suffix = parts[1] if len(parts) > 1 else ""
            
            if text.startswith(prefix) and text.endswith(suffix):
                # Extract middle
                if suffix:
                    return text[len(prefix):-len(suffix)]
                else:
                    return text[len(prefix):]
    
    return text

def clean_context(text):
    """
    Aggressively cleans the inner request to make it a good noun phrase.
    """
    # Remove common conversational prefixes
    prefixes = [
        "can you show me ", "can you find ", "can you list ", "can you pull ", "can you generate a report of ", "can you get me ",
        "please show me ", "please find ", "please list ", "please extract ", "please pull ", "please get me ", "please give me ",
        "i need you to ", "i need to see ", "i need ", "show me ", "find ", "list ", "get me ", "pull ", "extract ", "give me ",
        "just ", "hey! ", "welcome! ", "welcome to the team! ", "let's see ", "let's ", "count ", "how many ", "what are ", "which ",
        "calculate ", "compute ", "checking if ", "to review ", "verify ", "can you give me "
    ]
    
    cleaned = text
    
    # Run loop multiple times to catch stacked prefixes like "Hey! Can you..."
    for _ in range(3):
        lower_c = cleaned.lower()
        matched = False
        for p in prefixes:
            if lower_c.startswith(p):
                cleaned = cleaned[len(p):].strip()
                lower_c = cleaned.lower() # update for next check
                matched = True
        
        # Also strip leading punctuation/chatty junk using regex
        # e.g. "Hey!" -> ""
        if re.match(r"^[A-Za-z]+! ", cleaned):
             cleaned = re.sub(r"^[A-Za-z]+! ", "", cleaned)
             matched = True
             
        if not matched:
            break
            
    # Remove " me " if it appears at start? e.g. "show me..." -> "me..." -> "..."
    if cleaned.lower().startswith("me "):
        cleaned = cleaned[3:].strip()
        
    # Remove trailing punctuation
    cleaned = cleaned.rstrip("?.!")
    
    # Specific fixes for "How many..." or "Which..." leftovers
    # If original was "How many users...", we stripped "How many ". Remaining: "users..."
    # If original was "Which products...", we stripped "Which ". Remaining: "products..."
    # This usually leaves a good noun phrase.
    
    # Capitalization adjustment
    if cleaned:
        # If it looks like a proper noun (e.g. SQL), keep it. Otherwise lowercase first char.
        first_word = cleaned.split()[0]
        if not first_word.isupper():
            cleaned = cleaned[0].lower() + cleaned[1:]
            
    return cleaned

def smart_wrap(industry, original_req):
    # 1. Unwrap (in case it's already wrapped)
    core_req = unwrap_request(original_req).strip()
    
    # 2. Clean
    context = clean_context(core_req)
    
    # 3. Re-wrap
    template = random.choice(PERSONAS[industry]["templates"])
    
    # Fallback if context became empty
    if not context:
        context = "the data"
        
    return template.format(context=context)

def process_app_js(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    pattern = r'(req:\s*")((?:[^"\\]|\\.)*)(")' 
    lines = content.splitlines()
    new_lines = []
    
    current_industry = "ecommerce" # Default default
    
    industry_map = {
        '"ecommerce":': "ecommerce",
        '"saas":': "saas",
        '"hr":': "hr",
        '"healthcare":': "healthcare",
        '"finance":': "finance"
    }
    
    random.seed(42) # Deterministic results
    
    for line in lines:
        stripped = line.strip()
        
        # Check for industry start
        for key, ind in industry_map.items():
            if stripped.startswith(key):
                current_industry = ind
        
        # Process request line
        if "req:" in line and "check:" in line:
            match = re.search(pattern, line)
            if match:
                original_req = match.group(2)
                
                # Careful not to destroy the "check" or "hint" if they were somehow in the group (regex should match quotes correctly)
                
                new_req = smart_wrap(current_industry, original_req)
                
                # Escape quotes
                safe_new_req = new_req.replace('"', '\\"')
                
                # Replace
                line = line[:match.start(2)] + safe_new_req + line[match.end(2):]
                
        new_lines.append(line)
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("\n".join(new_lines))
    print("Successfully corrected and updated app.js with professional personas.")

if __name__ == "__main__":
    process_app_js("/Users/addissonlacroix/Desktop/SQL Teacher Tool /app.js")

