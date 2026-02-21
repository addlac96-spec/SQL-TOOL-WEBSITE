import re

app_file = 'app.js'
with open(app_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Instead of general replace, let's find `req: "..."` or `req: '...'` using regex and replace inside the matches.
def fix_req_string(match):
    req_text = match.group(1)
    
    # Common grammar mistakes due to bad concatenation:
    req_text = req_text.replace("Please extract i'm prepping", "I'm prepping")
    req_text = req_text.replace("I need you to pull we can see", "I need you to pull")
    req_text = req_text.replace("generate a report of a dump of", "dump")
    req_text = req_text.replace("Please pull can we look at", "Please pull")
    req_text = req_text.replace("overview of listing all", "overview of all")
    req_text = req_text.replace("extract info for users", "extract users")
    req_text = req_text.replace("Please extract can you solve this query", "Please execute this query")
    req_text = req_text.replace("pull are there", "pull")
    req_text = req_text.replace("overview of items are", "overview of items that are")
    req_text = req_text.replace("pull products are", "pull products that are")
    req_text = req_text.replace("pull users are", "pull users who are")
    req_text = req_text.replace("extract 'Electronics' products are priced", "extract 'Electronics' products that are priced")
    req_text = req_text.replace("list columns show", "list the columns that show")
    req_text = req_text.replace("list of the user with ID", "list of the user with ID")
    req_text = req_text.replace("Please pull joined dates", "Please pull users with joined dates")
    req_text = req_text.replace("overview of product categories in", "overview of product categories sorted in")

    # Remove hints:
    hints = [
        r"\(Use IN\)", r"\(use IN\)", r"\(Use NOT BETWEEN\)", r"\(Use NOT LIKE\)", r"\(Use LIKE.*?\"\)", r"\(Use LIKE.*?\)",
        r"\(SUM of price\)", r"\(MAX\)", r"\(MIN of price\)", r"using the IN clause", r"using IN", r"using BETWEEN",
        r"Use IN", r"Use NOT BETWEEN", r"Use NOT LIKE", r"\(ABS\)"
    ]
    
    for hint in hints:
        req_text = re.sub(r'\s*' + hint + r'\s*', ' ', req_text, flags=re.IGNORECASE)
    
    # Fix double spaces and punctuation
    req_text = re.sub(r'\s+', ' ', req_text)
    req_text = req_text.replace("? ?", "?")
    req_text = req_text.replace(". .", ".")
    req_text = req_text.replace(" .", ".")
    req_text = req_text.replace(" ?", "?")
    req_text = req_text.replace(" ,", ",")
    req_text = req_text.strip()
    
    return f'req: "{req_text}"'

new_text = re.sub(r'req:\s*"([^"]+)"', fix_req_string, text)
new_text = re.sub(r"req:\s*'([^']+)'", fix_req_string, new_text)

# Save back
with open(app_file, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Grammar fixes applied!")
