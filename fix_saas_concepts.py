import re
import json

app_file = 'app.js'
with open(app_file, 'r', encoding='utf-8') as f:
    text = f.read()

# We need to replace saas 105 Q7-11 to be BETWEEN
replacements = [
    (
        r'''\{ req: "The engineering team needs to debug a login issue. Find subscriptions on 'Basic', 'Pro', or 'Enterprise' plans for them.", check: \(res, sql\) => sql\.toLowerCase\(\)\.includes\("in \("\), hint: "Think about a way to check if the plan matches any item in a specific list\." \}''',
        '''{ req: "The engineering team needs to debug a login issue. Find subscriptions with revenue between $10 and $100.", check: (res, sql) => sql.toLowerCase().includes("between 10 and 100"), hint: "Use the BETWEEN operator to define a range for monthly revenue." }'''
    ),
    (
        r'''\{ req: "Compliance needs a report on user data access. Please find usage logs for 'Dashboard', 'Login', or 'Billing'\.", check: \(res, sql\) => sql\.toLowerCase\(\)\.includes\("in \("\), hint: "Filter the usage data for a list of specific feature names\." \}''',
        '''{ req: "Compliance needs a report on user data access. Please find usage logs lasting between 15 and 45 minutes.", check: (res, sql) => sql.toLowerCase().includes("between 15 and 45"), hint: "Apply the BETWEEN operator to the duration column." }'''
    ),
    (
        r'''\{ req: "We're monitoring user engagement for the new feature. Please retrieve leads came from 'Google', 'Bing', or 'Yahoo'\.", check: \(res, sql\) => sql\.toLowerCase\(\)\.includes\("in \("\), hint: "Search for lead sources that appear in a specific set of target platforms\." \}''',
        '''{ req: "We're monitoring user engagement for the new feature. Please retrieve leads with scores between 50 and 75.", check: (res, sql) => sql.toLowerCase().includes("between 50 and 75"), hint: "Use BETWEEN on the score column to find leads within the range." }'''
    ),
    (
        r'''\{ req: "Compliance needs a report on user data access. Please find subscriptions with statuses 'Active' or 'Trialing'\.", check: \(res, sql\) => sql\.toLowerCase\(\)\.includes\("in \("\), hint: "Identify subscription states that match any of the targets in your list\." \}''',
        '''{ req: "Compliance needs a report on user data access. Please find subscriptions where the revenue is between $50 and $250.", check: (res, sql) => sql.toLowerCase().includes("between 50 and 250"), hint: "Filter the monthly revenue using the BETWEEN operator." }'''
    ),
    (
        r'''\{ req: "To optimize our onboarding flow, please extract usage logs for user IDs 501, 502, or 505\.", check: \(res, sql\) => sql\.toLowerCase\(\)\.includes\("in \("\), hint: "Filter for user identifiers that are present in a given set of IDs\." \}''',
        '''{ req: "To optimize our onboarding flow, please extract usage logs where the user ID is between 500 and 505.", check: (res, sql) => sql.toLowerCase().includes("between 500 and 505"), hint: "Use BETWEEN to find user IDs falling inside that numeric boundary." }'''
    )
]

# SaaS 108 is purely aggregates instead of "Filtering Review". We must replace the whole 108 array for SaaS.
saas_108_replacement = '''"108": [
            { req: "We're planning a database migration. I need a dump of subscriptions that are NOT 'Active'.", check: (res, sql) => sql.toLowerCase().includes("not") && sql.toLowerCase().includes("active"), hint: "Filter the subscription status using the NOT operator." },
            { req: "I need to analyze our churn rate. Can you pull a list of usage logs that did NOT last between 10 and 20 minutes?", check: (res, sql) => sql.toLowerCase().includes("not between") && sql.toLowerCase().includes("10 and 20"), hint: "Use NOT BETWEEN to exclude a specific duration range." },
            { req: "The engineering team needs to debug a login issue. Find marketing leads whose source does NOT contain 'Google'.", check: (res, sql) => sql.toLowerCase().includes("not like") && sql.toLowerCase().includes("google"), hint: "Use NOT LIKE with wildcard characters to exclude Google sources." },
            { req: "I need to analyze our churn rate. Can you pull a list of subscriptions that do NOT have a 'Pro' plan?", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("pro"), hint: "Exclude Pro tier subscriptions using a negative filter." },
            { req: "For our Q1 growth analysis, please get me leads where the score is NOT between 0 and 40.", check: (res, sql) => sql.toLowerCase().includes("not between 0 and 40"), hint: "Use NOT BETWEEN to omit the lower band of scores." },
            { req: "I need to analyze our churn rate. Can you pull a list of usage logs where the feature is NOT 'Dashboard' or 'Login'?", check: (res, sql) => sql.toLowerCase().includes("not in") && sql.toLowerCase().includes("dashboard") && sql.toLowerCase().includes("login"), hint: "Use NOT IN with a list to exclude multiple specific features." },
            { req: "We're preparing the monthly active user report. I need you to show me subscriptions with revenue NOT between $10 and $50.", check: (res, sql) => sql.toLowerCase().includes("not between 10 and 50"), hint: "Omit a specific revenue range using NOT BETWEEN." },
            { req: "Compliance needs a report on user data access. Please find leads whose email does NOT end in '.net'.", check: (res, sql) => sql.toLowerCase().includes("not like") && sql.toLowerCase().includes(".net"), hint: "Filter out emails ending in .net using NOT LIKE." },
            { req: "I need to analyze our churn rate. Can you pull a list of subscriptions where the status is != 'Cancelled'?", check: (res, sql) => sql.toLowerCase().includes("!=") || sql.toLowerCase().includes("not"), hint: "Use the inequality operator (!=) or NOT to exclude cancelled statuses." },
            { req: "For our Q1 growth analysis, please get me usage logs where the user ID is NOT IN (501, 502, 503).", check: (res, sql) => sql.toLowerCase().includes("not in") && sql.toLowerCase().includes("501"), hint: "Use NOT IN to exclude a specific set of user IDs." },
            { req: "We're preparing the monthly active user report. I need you to show me leads that do NOT have a score of 100.", check: (res, sql) => (sql.toLowerCase().includes("!=") || sql.toLowerCase().includes("not")) && sql.toLowerCase().includes("100"), hint: "Exclude perfect scores using a not equal constraint." }
        ],'''

# Replace SaaS 108 Block
start_saas = text.find('"saas": {')
end_saas = text.find('"hr": {', start_saas)
saas_block = text[start_saas:end_saas]

start_108 = saas_block.find('"108": [')
end_108 = saas_block.find('"109": [', start_108)

new_saas_block = saas_block[:start_108] + saas_108_replacement + "\n        " + saas_block[end_108:]
text = text[:start_saas] + new_saas_block + text[end_saas:]

# Apply 105 individual replacements
for old, new in replacements:
    text = re.sub(old, new, text)
    
# HR 207 Q2: change ceil to round
text = text.replace(
    '''{ req: "We need to verify salary bands. Please get me the ceiling (CEIL) of performance_score divided by 2.", check: (res, sql) => sql.toLowerCase().includes("ceil"), hint: "Calculate performance score divided by 2 and round it up." }''',
    '''{ req: "We need to verify salary bands. Please get me the ROUND of performance_score divided by 2.", check: (res, sql) => sql.toLowerCase().includes("round"), hint: "Use ROUND() on the performance score divided by 2." }'''
)

with open(app_file, 'w', encoding='utf-8') as f:
    f.write(text)

print("Applied conceptual fixes to saas 105, saas 108, hr 207")
