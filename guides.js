// ============================================================
// LESSON GUIDES — Rich in-depth content for the Resource Hub
// ============================================================
const LESSON_GUIDES = {

    // ── LESSON 101 ──────────────────────────────────────────────
    "101": {
        title: "Welcome to SQL",
        emoji: "👋",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Imagine you just got hired at a company and your boss says, \"All our data is in this database — go find what we need.\" That's exactly what SQL helps you do. It's the universal language for talking to databases, and by the end of this guide you'll understand exactly how it works." },
            { type: "concept", heading: "What Is a Database?", content: "A database is just an organized collection of information stored in tables — think of a spreadsheet with rows and columns. Each table holds one type of thing (users, products, orders). SQL is the language you use to ask questions about that data.", analogy: "Think of a database as a filing cabinet. Each drawer (table) holds folders (rows) with labeled tabs (columns). SQL is how you tell someone which drawer to open and which folders to pull." },
            { type: "syntax", heading: "Your First SQL Command", code: "SELECT * FROM table_name;", annotations: ["SELECT — the command that says 'give me data'", "* (asterisk) — a shortcut meaning 'all columns'", "FROM table_name — tells SQL which table to look in", "The semicolon (;) at the end tells SQL you're done"] },
            {
                type: "examples", heading: "Try These", items: [
                    { sql: "SELECT * FROM users;", explain: "Shows every column and every row in the users table" },
                    { sql: "SELECT * FROM products;", explain: "See all your product data — names, prices, categories" },
                    { sql: "SELECT * FROM orders;", explain: "View every order in the system" }
                ]
            },
            { type: "mistakes", heading: "Common Mistakes", items: ["Forgetting the semicolon at the end of your statement", "Using single quotes for column names (use them only for text values)", "Thinking SQL is case-sensitive — SELECT, select, and Select all work the same"] },
            { type: "realworld", heading: "Why This Matters", content: "Every tech company, bank, hospital, and online store runs on databases. Whether you're a marketer pulling campaign stats, an analyst building reports, or a developer building features — SQL is the skill that connects you to the data. It's consistently one of the most in-demand technical skills in job postings." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "SELECT *", def: "Get all columns from a table" },
                    { term: "FROM table", def: "Which table to look in" },
                    { term: ";", def: "Ends every SQL statement" },
                    { term: "-- comment", def: "Text the database ignores" }
                ]
            }
        ]
    },

    // ── LESSON 102 ──────────────────────────────────────────────
    "102": {
        title: "SQL SELECT — Picking the Data You Need",
        emoji: "🔦",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "Your manager walks over and says, \"Can you pull me a list of customer emails?\" You don't need everything in the database — just specific columns from a specific table. That's what SELECT does. It's the most-used command in SQL, and you'll write it hundreds of times." },
            { type: "concept", heading: "How SELECT Works", content: "SELECT tells the database which columns you want to see. You pair it with FROM to say which table to look in. Together they form the backbone of every query you'll ever write.", analogy: "Imagine a restaurant menu with columns: dish name, price, category, calories. SELECT is like telling your waiter, 'I only want to see the names and prices.' You're not changing the menu — you're just choosing what to look at." },
            { type: "syntax", heading: "The Syntax", code: "SELECT column1, column2 FROM table_name;\nSELECT * FROM table_name;", annotations: ["column1, column2 — list the specific columns you want, separated by commas", "FROM table_name — which table to pull from", "* (asterisk) — a shortcut meaning 'all columns'"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM users;", explain: "Returns every column and every row from the users table" },
                    { sql: "SELECT name FROM users;", explain: "Returns only the name column — much cleaner when that's all you need" },
                    { sql: "SELECT name, email FROM users;", explain: "Returns two columns side by side" },
                    { sql: "SELECT email, name FROM users;", explain: "Same data, but columns appear in the order you list them" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Using SELECT * in production — it's slow on big tables because it grabs everything", "Misspelling column names — SQL will give you an error, not a guess", "Forgetting FROM — SELECT alone doesn't know where to look"] },
            { type: "realworld", heading: "Real-World Use", content: "Every report, dashboard, and data export starts with SELECT. When your marketing team needs an email list for a campaign, when finance needs a revenue summary, when support needs to look up a customer — it all begins with SELECT ... FROM." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "SELECT *", def: "Get all columns" },
                    { term: "SELECT col1, col2", def: "Get specific columns" },
                    { term: "FROM table", def: "Which table to query" },
                    { term: "Order matters", def: "Columns appear in the order you list them" }
                ]
            }
        ]
    },

    // ── LESSON 103 ──────────────────────────────────────────────
    "103": {
        title: "SQL WHERE — Filtering Your Results",
        emoji: "📍",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "You can pull all the data from a table, but usually you only want specific rows. \"Show me orders from last month\" or \"Find users in California\" — that's filtering, and WHERE is how you do it." },
            { type: "concept", heading: "What WHERE Does", content: "WHERE acts as a filter after FROM. The database looks at every row and only keeps the ones that match your condition. Think of it as a bouncer at a club — only rows that meet the criteria get through.", analogy: "Imagine sorting through a stack of job applications. WHERE is like saying 'only show me applications from people with 5+ years of experience.' The stack doesn't change — you're just filtering what you see." },
            { type: "syntax", heading: "The Syntax", code: "SELECT columns FROM table WHERE condition;", annotations: ["WHERE comes after FROM", "condition uses operators: = (equals), > (greater than), < (less than), >= , <= , != (not equal)", "Text values must be wrapped in single quotes: WHERE name = 'Alice'", "Numbers don't need quotes: WHERE price > 50"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM products WHERE price > 100;", explain: "Only products costing more than $100" },
                    { sql: "SELECT * FROM users WHERE name = 'Alice Smith';", explain: "Find one specific user by name (text needs quotes)" },
                    { sql: "SELECT name, email FROM users WHERE user_id = 3;", explain: "Combine SELECT columns with WHERE filtering" },
                    { sql: "SELECT * FROM orders WHERE order_date = '2023-05-01';", explain: "Filter by a specific date (dates use quotes too)" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Using double quotes instead of single quotes for text values", "Forgetting quotes around text/dates: WHERE name = Alice won't work", "Using = for comparisons, not == (that's for programming languages, not SQL)", "Putting WHERE before FROM — the order matters"] },
            { type: "realworld", heading: "Real-World Use", content: "Almost every query you write will have a WHERE clause. 'Show me this customer's orders.' 'Find all overdue invoices.' 'Which products are low on stock?' Filtering is the difference between drowning in data and finding exactly what you need." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "=", def: "Exactly equals" },
                    { term: "> / <", def: "Greater than / less than" },
                    { term: ">= / <=", def: "Greater or equal / less or equal" },
                    { term: "!=", def: "Not equal to" },
                    { term: "'text'", def: "Wrap text/dates in single quotes" }
                ]
            }
        ]
    },

    // ── LESSON 104 ──────────────────────────────────────────────
    "104": {
        title: "AND, OR, NOT — Combining Conditions",
        emoji: "❌",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "One filter is useful. But real questions are more specific: \"Show me Electronics that cost under $50\" or \"Find users who joined this year but haven't placed an order.\" That's where AND, OR, and NOT come in — they let you stack multiple conditions together." },
            { type: "concept", heading: "Logical Operators", content: "AND means both conditions must be true. OR means at least one must be true. NOT flips a condition to its opposite. You can combine them with parentheses to build precise filters.", analogy: "Think of a coffee order: 'I want a latte AND it must be iced' — both conditions matter. 'I'll take a latte OR a cappuccino' — either works. 'Anything NOT decaf' — excludes one option." },
            { type: "syntax", heading: "The Syntax", code: "SELECT * FROM table WHERE cond1 AND cond2;\nSELECT * FROM table WHERE cond1 OR cond2;\nSELECT * FROM table WHERE NOT condition;\nSELECT * FROM table WHERE cond1 AND (cond2 OR cond3);", annotations: ["AND — both sides must be true", "OR — at least one side must be true", "NOT — reverses the condition", "Use parentheses ( ) to control the order of evaluation"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM products WHERE category = 'Electronics' AND price < 50;", explain: "Electronics under $50 — both conditions must match" },
                    { sql: "SELECT * FROM users WHERE name = 'Alice Smith' OR name = 'Bob Jones';", explain: "Either Alice or Bob — either match works" },
                    { sql: "SELECT * FROM products WHERE NOT category = 'Furniture';", explain: "Everything except Furniture" },
                    { sql: "SELECT * FROM orders WHERE quantity > 1 AND (order_date > '2023-03-01' OR user_id = 1);", explain: "Parentheses ensure OR is evaluated first, then AND" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Forgetting parentheses — AND is evaluated before OR by default, which can give unexpected results", "Writing 'WHERE price > 50 AND < 100' — you need the full condition on both sides: 'WHERE price > 50 AND price < 100'", "Using AND when you mean OR — 'WHERE category = A AND category = B' returns nothing because a category can't be both at once"] },
            { type: "realworld", heading: "Real-World Use", content: "Business questions are rarely simple. 'High-value customers who haven't purchased in 90 days.' 'Products in Electronics or Clothing that are on sale.' Logical operators turn vague questions into precise data filters." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "AND", def: "Both conditions must be true" },
                    { term: "OR", def: "At least one condition must be true" },
                    { term: "NOT", def: "Reverses the condition" },
                    { term: "( )", def: "Groups conditions — evaluated first" }
                ]
            }
        ]
    },

    // ── LESSON 105 ──────────────────────────────────────────────
    "105": {
        title: "SQL BETWEEN — Range Filtering",
        emoji: "🖖",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Sometimes you need data within a range: prices between $20 and $100, dates from January to March, or IDs from 5 to 10. BETWEEN is a clean shorthand that replaces writing out two conditions with AND." },
            { type: "concept", heading: "How BETWEEN Works", content: "BETWEEN selects values within a range, and both endpoints are included. It works with numbers, text, and dates.", analogy: "Think of a number line. BETWEEN 10 AND 50 highlights everything from 10 to 50, including 10 and 50 themselves. It's like saying 'give me everything in this zone.'" },
            { type: "syntax", heading: "The Syntax", code: "SELECT * FROM table WHERE column BETWEEN value1 AND value2;", annotations: ["BETWEEN is inclusive — both value1 and value2 are included", "value1 should be the lower bound, value2 the upper bound", "Works with numbers, dates, and even text (alphabetical order)"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM products WHERE price BETWEEN 20 AND 100;", explain: "Products priced from $20 to $100 (inclusive)" },
                    { sql: "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-03-31';", explain: "Orders from Q1 2023" },
                    { sql: "SELECT * FROM users WHERE user_id BETWEEN 2 AND 4;", explain: "Users with IDs 2, 3, or 4" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Putting the larger value first — BETWEEN 100 AND 20 returns nothing", "Forgetting that BETWEEN is inclusive — if you want to exclude the endpoints, use > and < instead", "Not quoting date values — dates need single quotes like text"] },
            { type: "realworld", heading: "Real-World Use", content: "Date ranges are everywhere in business: quarterly reports, campaign windows, fiscal years. Price ranges help with market segmentation. BETWEEN keeps these queries clean and readable." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "BETWEEN a AND b", def: "Values from a to b (inclusive)" },
                    { term: "NOT BETWEEN", def: "Values outside the range" },
                    { term: "Inclusive", def: "Both endpoints are included" }
                ]
            }
        ]
    },

    // ── LESSON 106 ──────────────────────────────────────────────
    "106": {
        title: "SQL IN — Matching a List of Values",
        emoji: "🔍",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "What if you need rows matching several specific values? Instead of writing OR over and over — 'where status is Active OR Frozen OR Pending' — you can use IN to pass a tidy list." },
            { type: "concept", heading: "How IN Works", content: "IN checks whether a column's value matches any value in a list you provide. It's a shorthand for multiple OR conditions and is much easier to read.", analogy: "It's like a guest list at an event. Instead of checking 'Are you Alice? Are you Bob? Are you Carol?' one by one, you just check the list: 'Is your name on this list?'" },
            { type: "syntax", heading: "The Syntax", code: "SELECT * FROM table WHERE column IN (val1, val2, val3);", annotations: ["Values in the list are separated by commas", "Text values need single quotes", "Numbers don't need quotes", "NOT IN returns rows that don't match any value in the list"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM products WHERE category IN ('Electronics', 'Furniture');", explain: "Products in either category" },
                    { sql: "SELECT * FROM users WHERE user_id IN (1, 3, 5);", explain: "Users with IDs 1, 3, or 5" },
                    { sql: "SELECT * FROM products WHERE category NOT IN ('Clothing');", explain: "Everything except Clothing" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Forgetting quotes around text values inside the list", "Using AND instead of commas between list items", "Confusing IN with BETWEEN — IN is for specific values, BETWEEN is for ranges"] },
            { type: "realworld", heading: "Real-World Use", content: "IN is perfect when you have a specific set to check against: a list of order IDs to investigate, a set of product categories to report on, or a group of customer statuses to filter." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "IN (a, b, c)", def: "Matches any value in the list" },
                    { term: "NOT IN", def: "Excludes values in the list" },
                    { term: "vs OR", def: "IN is cleaner shorthand for multiple ORs" }
                ]
            }
        ]
    },

    // ── LESSON 107 ──────────────────────────────────────────────
    "107": {
        title: "SQL LIKE — Pattern Matching",
        emoji: "❤️",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "Sometimes you don't know the exact value you're looking for. You want names that start with 'J', or emails ending in '@gmail.com'. LIKE lets you search for patterns instead of exact matches." },
            { type: "concept", heading: "How LIKE Works", content: "LIKE uses two wildcard characters: % matches any number of characters (including zero), and _ matches exactly one character. You combine them with your search text to define a pattern.", analogy: "Think of LIKE as a 'fill in the blanks' game. % is a blank that can be any length: 'J%' means 'starts with J, followed by anything.' _ is a single blank: '_ohn' means 'one character, then ohn' — matching 'John' but not 'Bjohn'." },
            { type: "syntax", heading: "The Syntax", code: "SELECT * FROM table WHERE column LIKE 'pattern';", annotations: ["% — matches zero or more characters", "_ — matches exactly one character", "'J%' — starts with J", "'%son' — ends with 'son'", "'%sql%' — contains 'sql' anywhere", "'_o%' — second character is 'o'"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM users WHERE name LIKE 'A%';", explain: "Names starting with A (Alice, Alex, etc.)" },
                    { sql: "SELECT * FROM users WHERE email LIKE '%@example.com';", explain: "Emails at example.com" },
                    { sql: "SELECT * FROM products WHERE name LIKE '%Pro%';", explain: "Product names containing 'Pro' anywhere" },
                    { sql: "SELECT * FROM users WHERE name LIKE '_____%';", explain: "Names with 5+ characters (five underscores + %)" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Forgetting the quotes around the pattern", "Using * instead of % — SQL uses % for wildcards, not *", "LIKE is case-insensitive in many databases, but not all — test yours", "Overusing % at both ends ('%%') — it makes queries slow on large tables"] },
            { type: "realworld", heading: "Real-World Use", content: "LIKE powers search features, fuzzy matching, and data cleanup. Finding all Gmail users, searching for products by partial name, or identifying incomplete records — it's your go-to for text-based filtering." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "%", def: "Any number of characters" },
                    { term: "_", def: "Exactly one character" },
                    { term: "'A%'", def: "Starts with A" },
                    { term: "'%z'", def: "Ends with z" },
                    { term: "'%mid%'", def: "Contains 'mid'" }
                ]
            }
        ]
    },

    // ── LESSON 108 ──────────────────────────────────────────────
    "108": {
        title: "Filtering Review — Putting It All Together",
        emoji: "🔄",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "You now have a full toolkit for filtering data: WHERE, AND/OR/NOT, BETWEEN, IN, and LIKE. This guide helps you see how they all work together in real queries." },
            { type: "concept", heading: "The Filtering Toolkit", content: "Each filtering tool has its sweet spot. WHERE sets the stage, comparison operators handle simple checks, AND/OR/NOT combine multiple checks, BETWEEN handles ranges, IN handles lists, and LIKE handles patterns. The power comes from combining them.", analogy: "Think of each filter as a different kitchen tool. A knife (WHERE) is essential. A peeler (BETWEEN) handles specific jobs efficiently. A strainer (IN) filters from a set. A grater (LIKE) works with patterns. Great cooking — and great queries — use the right tool for each ingredient." },
            { type: "syntax", heading: "Combined Example", code: "SELECT * FROM table\nWHERE (cond1 OR cond2)\nAND column BETWEEN val1 AND val2\nAND column IN (val3, val4)\nAND column LIKE 'pattern%';", annotations: ["Stack filters in a logical order", "Use parentheses for clarity", "Each AND/OR adds another layer of precision"] },
            {
                type: "examples", heading: "Real Scenarios", items: [
                    { sql: "SELECT * FROM products WHERE category IN ('Electronics','Clothing') AND price BETWEEN 10 AND 50;", explain: "Electronics or Clothing priced $10–$50" },
                    { sql: "SELECT * FROM users WHERE name LIKE 'A%' AND joined_date > '2023-01-01';", explain: "Users whose names start with A who joined after Jan 2023" },
                    { sql: "SELECT name, email FROM users WHERE email LIKE '%example.com' AND user_id NOT IN (1, 2);", explain: "Example.com emails excluding users 1 and 2" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Overcomplicating queries — start simple and add filters one at a time", "Forgetting parentheses when mixing AND and OR", "Not testing each filter independently before combining them"] },
            { type: "realworld", heading: "Real-World Use", content: "Complex business questions require combined filters. 'Show me high-value Electronics orders from Q1 that aren't from our test accounts.' Real SQL in the wild almost always uses multiple filtering techniques in a single query." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "WHERE", def: "Basic filter" },
                    { term: "AND / OR / NOT", def: "Combine conditions" },
                    { term: "BETWEEN", def: "Range filter" },
                    { term: "IN", def: "List filter" },
                    { term: "LIKE", def: "Pattern filter" }
                ]
            }
        ]
    },

    // ── LESSON 109 ──────────────────────────────────────────────
    "109": {
        title: "SQL ORDER BY — Sorting Your Results",
        emoji: "↕️",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Data from a database comes back in no guaranteed order. If your boss wants 'the top 5 most expensive products' or 'newest users first,' you need to sort the results. ORDER BY does exactly that." },
            { type: "concept", heading: "How ORDER BY Works", content: "ORDER BY sorts your results by one or more columns. ASC (ascending) goes low to high or A to Z — it's the default. DESC (descending) goes high to low or Z to A.", analogy: "Think of organizing a bookshelf. ORDER BY title ASC puts books alphabetically A→Z. ORDER BY price DESC puts the most expensive ones first. You can even sort by author first, then by title within each author." },
            { type: "syntax", heading: "The Syntax", code: "SELECT * FROM table ORDER BY column ASC;\nSELECT * FROM table ORDER BY column DESC;\nSELECT * FROM table ORDER BY col1 DESC, col2 ASC;", annotations: ["ASC = ascending (default, so you can omit it)", "DESC = descending", "Multiple columns: sorts by the first, then breaks ties with the second", "ORDER BY always goes at the end of your query"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM products ORDER BY price DESC;", explain: "Most expensive products first" },
                    { sql: "SELECT * FROM users ORDER BY name ASC;", explain: "Users alphabetically by name" },
                    { sql: "SELECT * FROM orders ORDER BY order_date DESC, quantity ASC;", explain: "Newest orders first, ties broken by smallest quantity" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Putting ORDER BY before WHERE — WHERE must come first", "Forgetting that ASC is the default — you don't need to type it", "Trying to ORDER BY a column that doesn't exist in the table"] },
            { type: "realworld", heading: "Real-World Use", content: "Sorting is essential for reports and dashboards. Top customers by revenue, newest signups, cheapest available inventory — ORDER BY turns raw data into meaningful, ranked information." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "ORDER BY col", def: "Sort ascending (default)" },
                    { term: "ORDER BY col DESC", def: "Sort descending" },
                    { term: "Multi-column", def: "ORDER BY col1, col2" },
                    { term: "Position", def: "Always last in the query" }
                ]
            }
        ]
    },

    // ── LESSON 110 ──────────────────────────────────────────────
    "110": {
        title: "Beginner Master Challenge",
        emoji: "🏆",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "This is your capstone. Everything you've learned — SELECT, WHERE, AND/OR, BETWEEN, IN, LIKE, ORDER BY — comes together here. If you can solve these challenges, you've truly mastered the basics." },
            { type: "concept", heading: "Combining Everything", content: "Real-world queries rarely use just one skill. A typical business question might need you to select specific columns, filter with multiple conditions, and sort the output — all in one query.", analogy: "Think of it like cooking a full meal instead of practicing individual techniques. You're not just chopping or sautéing — you're combining everything into a finished dish." },
            { type: "syntax", heading: "The Full Pattern", code: "SELECT column1, column2\nFROM table_name\nWHERE condition1\n  AND condition2\n  OR condition3\nORDER BY column1 DESC;", annotations: ["SELECT — what columns", "FROM — which table", "WHERE — which rows (with AND/OR/NOT, BETWEEN, IN, LIKE)", "ORDER BY — what order"] },
            {
                type: "examples", heading: "Challenge-Level Examples", items: [
                    { sql: "SELECT name, price FROM products WHERE category = 'Electronics' AND price > 50 ORDER BY price DESC;", explain: "Expensive electronics, most costly first" },
                    { sql: "SELECT * FROM users WHERE name LIKE 'A%' AND joined_date BETWEEN '2023-01-01' AND '2023-12-31' ORDER BY joined_date;", explain: "Users with A-names who joined in 2023, chronologically" },
                    { sql: "SELECT name, email FROM users WHERE user_id IN (1,3,5) ORDER BY name ASC;", explain: "Specific users, alphabetical" }
                ]
            },
            { type: "mistakes", heading: "Final Tips", items: ["Always check clause order: SELECT → FROM → WHERE → ORDER BY", "Build queries step by step — get the basic SELECT FROM working first, then add WHERE, then ORDER BY", "Read your query out loud — it should sound like an English sentence"] },
            { type: "realworld", heading: "You're Ready", content: "With these fundamentals, you can handle most reporting tasks at any company. You can pull customer lists, filter transaction logs, sort inventory — the foundation for everything that comes next." },
            {
                type: "cheatsheet", heading: "Clause Order", items: [
                    { term: "1. SELECT", def: "What to show" },
                    { term: "2. FROM", def: "Where to look" },
                    { term: "3. WHERE", def: "How to filter" },
                    { term: "4. ORDER BY", def: "How to sort" }
                ]
            }
        ]
    },

    // ── LESSON 201 ──────────────────────────────────────────────
    "201": {
        title: "Leveling Up",
        emoji: "😎",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "You've mastered the basics — selecting, filtering, sorting. Now it's time to level up. Intermediate SQL is about summarizing data: counting, averaging, grouping, and calculating. This is where SQL transforms from 'show me data' to 'tell me insights.'" },
            { type: "concept", heading: "From Rows to Summaries", content: "Basic SQL shows you individual rows. Intermediate SQL collapses many rows into summary numbers. Instead of seeing every order, you can see 'total orders per customer' or 'average price by category.'", analogy: "Imagine you have a stack of receipts. Basic SQL lets you look at each one. Intermediate SQL lets you say 'what's the total? the average? how many from each store?' — you're turning raw data into answers." },
            { type: "syntax", heading: "What's Coming", code: "SELECT AGG_FUNCTION(column) FROM table;\nSELECT column, AGG_FUNCTION(column) FROM table GROUP BY column;", annotations: ["Aggregate functions: SUM, AVG, COUNT, MIN, MAX", "GROUP BY: create summaries per category", "HAVING: filter those summaries", "Plus: arithmetic, math functions, NULL handling"] },
            {
                type: "examples", heading: "A Preview", items: [
                    { sql: "SELECT COUNT(*) FROM orders;", explain: "How many total orders exist?" },
                    { sql: "SELECT category, AVG(price) FROM products GROUP BY category;", explain: "Average price per product category" }
                ]
            },
            { type: "mistakes", heading: "Mindset Shift", items: ["Don't think row-by-row anymore — think in groups and totals", "Aggregate functions ignore individual rows and return ONE value", "GROUP BY changes the grain of your output — fewer rows, more insight"] },
            { type: "realworld", heading: "Why This Matters", content: "This is where you go from 'data worker' to 'data analyst.' Executives don't want to see 10,000 rows — they want 'revenue by quarter' or 'top 5 products by sales.' Aggregation is how you deliver that." },
            {
                type: "cheatsheet", heading: "Coming Up", items: [
                    { term: "SUM / AVG / COUNT", def: "Aggregate functions" },
                    { term: "GROUP BY", def: "Summarize by category" },
                    { term: "HAVING", def: "Filter grouped results" },
                    { term: "DISTINCT", def: "Remove duplicates" },
                    { term: "Arithmetic", def: "Calculations in queries" }
                ]
            }
        ]
    },

    // ── LESSON 202 ──────────────────────────────────────────────
    "202": {
        title: "SUM, AVG, COUNT — Aggregate Functions",
        emoji: "⚙️",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "'How many orders do we have?' 'What's our average product price?' 'What's the total revenue?' These are the questions aggregate functions answer. They take many rows and crunch them down to a single number." },
            { type: "concept", heading: "The Big Three", content: "COUNT counts rows. SUM adds up values. AVG calculates the average. There's also MIN (smallest value) and MAX (largest value). Each one reads a whole column and returns one result.", analogy: "Imagine a column of numbers on a calculator. COUNT = how many entries. SUM = hitting the total button. AVG = total divided by count. MIN/MAX = scanning for the smallest and biggest." },
            { type: "syntax", heading: "The Syntax", code: "SELECT COUNT(*) FROM table;\nSELECT SUM(column) FROM table;\nSELECT AVG(column) FROM table;\nSELECT MIN(column), MAX(column) FROM table;", annotations: ["COUNT(*) counts all rows, including NULLs", "COUNT(column) counts only non-NULL values in that column", "SUM and AVG only work on numeric columns", "You can use multiple aggregates in one SELECT"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT COUNT(*) FROM users;", explain: "Total number of users" },
                    { sql: "SELECT SUM(quantity) FROM orders;", explain: "Total items ordered across all orders" },
                    { sql: "SELECT AVG(price) FROM products;", explain: "Average product price" },
                    { sql: "SELECT MIN(price), MAX(price) FROM products;", explain: "Cheapest and most expensive product prices" },
                    { sql: "SELECT COUNT(*) AS total_orders, SUM(quantity) AS total_items FROM orders;", explain: "Multiple aggregates with friendly names using AS" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Trying to SUM or AVG a text column — it only works on numbers", "Mixing aggregate and non-aggregate columns without GROUP BY (covered next lesson)", "Forgetting that COUNT(*) includes NULL rows but COUNT(column) doesn't"] },
            { type: "realworld", heading: "Real-World Use", content: "Every business dashboard uses aggregates. Total revenue (SUM), average order value (AVG), customer count (COUNT), highest sale (MAX). These are the building blocks of business intelligence." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "COUNT(*)", def: "Number of rows" },
                    { term: "SUM(col)", def: "Total of all values" },
                    { term: "AVG(col)", def: "Average value" },
                    { term: "MIN(col)", def: "Smallest value" },
                    { term: "MAX(col)", def: "Largest value" }
                ]
            }
        ]
    },

    // ── LESSON 203 ──────────────────────────────────────────────
    "203": {
        title: "SQL GROUP BY — Summarize by Category",
        emoji: "📊",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "Aggregate functions give you one number for the whole table. But what if you want totals per category? 'Sales by region,' 'orders per customer,' 'average price by product type' — that's GROUP BY." },
            { type: "concept", heading: "How GROUP BY Works", content: "GROUP BY splits your table into groups based on a column, then runs the aggregate function separately for each group. You get one row per group instead of one row total.", analogy: "Imagine sorting a pile of laundry by color. GROUP BY color gives you separate piles. Then you COUNT each pile: '12 whites, 8 darks, 5 colors.' You're summarizing per group." },
            { type: "syntax", heading: "The Syntax", code: "SELECT column, AGG_FUNC(column)\nFROM table\nGROUP BY column;", annotations: ["The column in GROUP BY must also appear in SELECT", "The aggregate function runs once per group", "You can group by multiple columns: GROUP BY col1, col2"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT category, COUNT(*) FROM products GROUP BY category;", explain: "How many products in each category" },
                    { sql: "SELECT category, AVG(price) FROM products GROUP BY category;", explain: "Average price per category" },
                    { sql: "SELECT user_id, SUM(quantity) FROM orders GROUP BY user_id;", explain: "Total items ordered per user" },
                    { sql: "SELECT user_id, COUNT(*) AS order_count FROM orders GROUP BY user_id;", explain: "Number of orders per user, with a clean column name" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Selecting a column that isn't in GROUP BY and isn't aggregated — SQL doesn't know which value to show", "Confusing WHERE and HAVING — WHERE filters rows before grouping, HAVING filters after", "Forgetting GROUP BY when using an aggregate with a regular column"] },
            { type: "realworld", heading: "Real-World Use", content: "GROUP BY powers every 'by category' report: revenue by region, users by signup month, tickets by priority, sales by product line. It's the core of data analysis." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "GROUP BY col", def: "One row per unique value" },
                    { term: "Must match SELECT", def: "Grouped columns appear in SELECT" },
                    { term: "Multiple groups", def: "GROUP BY col1, col2" },
                    { term: "Use with", def: "COUNT, SUM, AVG, MIN, MAX" }
                ]
            }
        ]
    },

    // ── LESSON 204 ──────────────────────────────────────────────
    "204": {
        title: "SQL HAVING — Filter After Grouping",
        emoji: "👈",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "GROUP BY gives you summaries, but what if you only want groups that meet a condition? 'Categories with more than 3 products' or 'users with average orders above $100.' WHERE can't filter aggregates — HAVING can." },
            { type: "concept", heading: "WHERE vs HAVING", content: "WHERE filters individual rows BEFORE they're grouped. HAVING filters the grouped results AFTER aggregation. They're both filters, but they work at different stages of the query.", analogy: "Imagine grading exams. WHERE is like removing blank exams before you start grading. HAVING is like only reporting classes where the average score is above 70 — you grade first, then filter the summaries." },
            { type: "syntax", heading: "The Syntax", code: "SELECT column, AGG_FUNC(col)\nFROM table\nWHERE row_condition\nGROUP BY column\nHAVING AGG_FUNC(col) > value;", annotations: ["HAVING comes after GROUP BY", "HAVING uses aggregate functions in its condition", "You can use both WHERE and HAVING in the same query", "WHERE = pre-filter, HAVING = post-filter"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 1;", explain: "Categories with more than 1 product" },
                    { sql: "SELECT user_id, SUM(quantity) FROM orders GROUP BY user_id HAVING SUM(quantity) >= 3;", explain: "Users who ordered 3+ total items" },
                    { sql: "SELECT category, AVG(price) FROM products GROUP BY category HAVING AVG(price) > 50;", explain: "Categories with average price above $50" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Using WHERE with an aggregate function — it won't work, use HAVING", "Putting HAVING before GROUP BY — order matters", "Forgetting that HAVING only makes sense with GROUP BY"] },
            { type: "realworld", heading: "Real-World Use", content: "HAVING is essential for threshold-based reporting: departments exceeding budget, products with low review averages, customers with high return rates. It turns grouped data into actionable insights." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "HAVING", def: "Filters grouped results" },
                    { term: "WHERE", def: "Filters individual rows" },
                    { term: "Order", def: "WHERE → GROUP BY → HAVING" },
                    { term: "Uses aggregates", def: "HAVING COUNT(*) > 5" }
                ]
            }
        ]
    },

    // ── LESSON 205 ──────────────────────────────────────────────
    "205": {
        title: "SQL DISTINCT — Remove Duplicates",
        emoji: "⭐",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Sometimes a column has repeated values and you just want the unique ones. 'What categories do we carry?' or 'Which cities are our users from?' DISTINCT strips out the duplicates." },
            { type: "concept", heading: "How DISTINCT Works", content: "SELECT DISTINCT returns only unique values. If a column has 'Electronics' appearing 50 times, DISTINCT shows it once. It works on one or multiple columns.", analogy: "Imagine a roll call with 30 students but only 5 unique first names. DISTINCT is like saying 'just tell me the different names, not how many times each appears.'" },
            { type: "syntax", heading: "The Syntax", code: "SELECT DISTINCT column FROM table;\nSELECT DISTINCT col1, col2 FROM table;", annotations: ["DISTINCT goes right after SELECT", "With multiple columns, it returns unique combinations", "DISTINCT applies to the entire row, not just one column"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT DISTINCT category FROM products;", explain: "List of unique product categories" },
                    { sql: "SELECT DISTINCT user_id FROM orders;", explain: "Which users have placed orders" },
                    { sql: "SELECT COUNT(DISTINCT category) FROM products;", explain: "How many unique categories exist" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["DISTINCT is not a function — don't write DISTINCT(column), write DISTINCT column", "DISTINCT on multiple columns looks at the combination, not each column separately", "Using DISTINCT when GROUP BY would be more appropriate for aggregations"] },
            { type: "realworld", heading: "Real-World Use", content: "DISTINCT is great for exploration: 'What values exist in this column?' It helps you understand your data before building complex queries." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "SELECT DISTINCT col", def: "Unique values only" },
                    { term: "COUNT(DISTINCT col)", def: "Number of unique values" },
                    { term: "Multi-column", def: "Unique combinations" }
                ]
            }
        ]
    },

    // ── LESSON 206 ──────────────────────────────────────────────
    "206": {
        title: "SQL Arithmetic — Calculations in Queries",
        emoji: "🔢",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "SQL isn't just for looking up data — you can calculate with it too. Need to compute total cost (price × quantity), apply a tax rate, or find profit margins? Arithmetic operators let you do math right inside your query." },
            { type: "concept", heading: "Math in SELECT", content: "You can use +, -, *, / directly on columns or values in your SELECT statement. The result appears as a new column in your output. Use AS to give it a meaningful name.", analogy: "Think of a spreadsheet formula. In Excel you might write =A1*B1 in cell C1. In SQL, you write SELECT price * quantity AS total — same idea, different syntax." },
            { type: "syntax", heading: "The Syntax", code: "SELECT col1 + col2 AS sum_result FROM table;\nSELECT col1 * 1.1 AS with_tax FROM table;\nSELECT col1 - col2, col1 / col2 FROM table;", annotations: ["+  addition", "−  subtraction", "*  multiplication", "/  division", "AS gives your calculated column a name"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT name, price * quantity AS total FROM orders;", explain: "Total cost per order line (this assumes price is in orders)" },
                    { sql: "SELECT name, price, price * 1.08 AS price_with_tax FROM products;", explain: "Product prices with 8% tax added" },
                    { sql: "SELECT name, price, price - 10 AS discounted FROM products;", explain: "$10 off every product" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Integer division: 5/2 = 2 in many databases (not 2.5) — use CAST or multiply by 1.0 to get decimals", "Forgetting AS — without it, the column name will be the raw expression like 'price * quantity'", "Dividing by zero — causes an error, so guard against it when the divisor could be 0"] },
            { type: "realworld", heading: "Real-World Use", content: "Arithmetic is everywhere: calculating margins, conversion rates, year-over-year growth, tax amounts, discounts. Any time a report needs a derived metric, you're doing math in SQL." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "+  −  *  /", def: "Basic math operators" },
                    { term: "AS alias", def: "Name your calculated column" },
                    { term: "* 1.0", def: "Force decimal division" },
                    { term: "Order of ops", def: "Same as math: * / before + −" }
                ]
            }
        ]
    },

    // ── LESSON 207 ──────────────────────────────────────────────
    "207": {
        title: "Math Functions — ROUND, ABS, and More",
        emoji: "📈",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Basic arithmetic gets you far, but sometimes you need more precision: rounding to 2 decimal places, getting absolute values, or finding ceiling/floor values. Math functions handle the details." },
            { type: "concept", heading: "Scalar Math Functions", content: "Unlike aggregate functions (SUM, AVG) that work on many rows, scalar functions work on each value individually. ROUND, ABS, CEIL, FLOOR — each transforms one number at a time.", analogy: "Aggregate functions are like a blender — many items in, one result out. Scalar functions are like a cookie cutter — each item gets shaped individually." },
            { type: "syntax", heading: "The Syntax", code: "SELECT ROUND(column, decimals) FROM table;\nSELECT ABS(column) FROM table;\nSELECT CEIL(column), FLOOR(column) FROM table;", annotations: ["ROUND(value, 2) — rounds to 2 decimal places", "ABS(value) — removes negative sign", "CEIL(value) — rounds up to next integer", "FLOOR(value) — rounds down to previous integer"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT name, ROUND(price, 2) FROM products;", explain: "Prices rounded to 2 decimal places" },
                    { sql: "SELECT name, ROUND(price * 1.08, 2) AS with_tax FROM products;", explain: "Tax-inclusive price, neatly rounded" },
                    { sql: "SELECT ABS(-42);", explain: "Returns 42 — absolute value removes the negative" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["ROUND(price) without a second argument rounds to 0 decimal places (whole number)", "Different databases may have slightly different function names", "CEIL and FLOOR return integers, which may affect further calculations"] },
            { type: "realworld", heading: "Real-World Use", content: "Financial reports need clean numbers — ROUND(revenue, 2) ensures $1,234.567 displays as $1,234.57. Data science uses ABS for distance calculations, FLOOR for binning data into groups." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "ROUND(x, n)", def: "Round to n decimals" },
                    { term: "ABS(x)", def: "Absolute value" },
                    { term: "CEIL(x)", def: "Round up" },
                    { term: "FLOOR(x)", def: "Round down" }
                ]
            }
        ]
    },

    // ── LESSON 208 ──────────────────────────────────────────────
    "208": {
        title: "SQL Division — Getting Precise Results",
        emoji: "➗",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Division in SQL has a gotcha that trips up everyone: integer division. If both numbers are integers, SQL drops the decimal part. 5 ÷ 2 = 2, not 2.5. This guide shows you how to get the precise results you need." },
            { type: "concept", heading: "Integer vs. Float Division", content: "When you divide two integers, most databases return an integer (truncated, not rounded). To get a decimal result, you need to make at least one number a float using CAST or by multiplying by 1.0.", analogy: "It's like asking 'how many whole pizzas can 5 people share with 2 pizzas?' The integer answer is 0 (nobody gets a whole pizza). But the real answer is 0.4 pizzas each — you need to tell SQL you want the real answer." },
            { type: "syntax", heading: "The Syntax", code: "-- Integer division (truncated)\nSELECT 5 / 2;  -- Returns 2\n\n-- Float division (precise)\nSELECT CAST(5 AS FLOAT) / 2;  -- Returns 2.5\nSELECT 5 * 1.0 / 2;  -- Returns 2.5", annotations: ["CAST(value AS FLOAT) explicitly converts to decimal", "Multiplying by 1.0 is a quick trick to force float division", "ROUND the result if you need a specific number of decimal places"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT 10 / 3;", explain: "Returns 3 (integer division drops the .333)" },
                    { sql: "SELECT CAST(10 AS FLOAT) / 3;", explain: "Returns 3.333... (float division)" },
                    { sql: "SELECT name, ROUND(CAST(price AS FLOAT) / quantity, 2) AS unit_price FROM orders;", explain: "Per-unit price rounded to 2 decimals" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Assuming division always returns decimals — it doesn't with integers", "Dividing by zero — always check that your divisor isn't 0", "Forgetting to ROUND — float division can give you 15+ decimal places"] },
            { type: "realworld", heading: "Real-World Use", content: "Percentages, ratios, per-unit costs, conversion rates — all require division. Getting clean decimal results is critical for financial calculations, KPI dashboards, and analytics." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "5 / 2 = 2", def: "Integer division (truncated)" },
                    { term: "CAST(x AS FLOAT)", def: "Convert to decimal" },
                    { term: "x * 1.0", def: "Quick float trick" },
                    { term: "ROUND(x/y, 2)", def: "Clean decimal output" }
                ]
            }
        ]
    },

    // ── LESSON 209 ──────────────────────────────────────────────
    "209": {
        title: "SQL NULL Handling — Missing Data",
        emoji: "🚫",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "Real-world data is messy. Not every cell has a value — a user might not have a phone number, an order might not have a ship date yet. SQL represents this missing data as NULL, and it behaves differently from everything else." },
            { type: "concept", heading: "What NULL Means", content: "NULL isn't zero, isn't empty string, isn't 'nothing.' It means 'unknown' or 'not applicable.' Because it's unknown, you can't use = to check for it — you need special syntax: IS NULL and IS NOT NULL.", analogy: "Imagine a form with a blank field. Is the answer zero? No. Is it an empty string? No. It's simply not filled in — we don't know the answer. That's NULL. You can't compare something unknown to something known." },
            { type: "syntax", heading: "The Syntax", code: "SELECT * FROM table WHERE column IS NULL;\nSELECT * FROM table WHERE column IS NOT NULL;\nSELECT COALESCE(column, 'default') FROM table;", annotations: ["IS NULL — finds rows where the value is missing", "IS NOT NULL — finds rows where a value exists", "COALESCE(col, default) — replaces NULL with a default value", "Never use = NULL or != NULL — they don't work as expected"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT * FROM users WHERE email IS NULL;", explain: "Find users with no email on file" },
                    { sql: "SELECT * FROM orders WHERE order_date IS NOT NULL;", explain: "Only orders with a recorded date" },
                    { sql: "SELECT name, COALESCE(email, 'no email') FROM users;", explain: "Show 'no email' instead of blank for missing emails" }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Using WHERE column = NULL — this NEVER works, always use IS NULL", "NULL in calculations makes the whole result NULL: 5 + NULL = NULL", "COUNT(*) counts NULLs, but COUNT(column) skips them — be aware of which you're using", "Sorting: NULLs typically appear first or last depending on the database"] },
            { type: "realworld", heading: "Real-World Use", content: "Data quality checks often start with NULL counts: 'How many customers are missing phone numbers?' COALESCE is used in reports to show friendly defaults instead of blank cells. Understanding NULL is essential for accurate aggregations — NULL values are silently excluded from AVG and SUM." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "IS NULL", def: "Check for missing value" },
                    { term: "IS NOT NULL", def: "Check value exists" },
                    { term: "COALESCE(a, b)", def: "Use b if a is NULL" },
                    { term: "≠ empty or 0", def: "NULL is unknown, not blank" }
                ]
            }
        ]
    },

    // ── LESSON 210 ──────────────────────────────────────────────
    "210": {
        title: "SQL CASE — Conditional Logic",
        emoji: "💼",
        readTime: "4 min",
        sections: [
            { type: "intro", content: "SQL isn't just for fetching data—it can also make decisions. The CASE statement lets you categorize data on the fly, like turning a test score into a grade or a price into a 'High/Low' label. It's the IF-THEN logic of SQL." },
            { type: "concept", heading: "Dynamic Categorization", content: "CASE evaluates conditions row by row and returns a specific value when a condition is met. If no conditions are met, it returns the ELSE value.", analogy: "Think of a traffic cop directing cars. If the car is an ambulance (WHEN type = 'Emergency'), send it to the fast lane (THEN 'Fast'). If it's a truck (WHEN type = 'Truck'), send it to the slow lane (THEN 'Slow'). ELSE, stay in the middle." },
            { type: "syntax", heading: "The Syntax", code: "SELECT column,\n       CASE\n           WHEN distinct_condition THEN 'Value A'\n           WHEN other_condition THEN 'Value B'\n           ELSE 'Default Value'\n       END AS new_label\nFROM table;", annotations: ["Starts with CASE, ends with END", "WHEN checks a condition (like WHERE)", "THEN is the result if true", "ELSE is the fallback", "AS names the new column"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT name, CASE WHEN price > 100 THEN 'Expensive' ELSE 'Cheap' END AS category FROM products;", explain: "Labels products based on price threshold." },
                    { sql: "SELECT name, CASE WHEN quantity < 10 THEN 'Low Stock' WHEN quantity > 50 THEN 'Overstocked' ELSE 'OK' END AS stock_status FROM products;", explain: "Multiple conditions checked in order." }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Forgetting the END keyword at the end of the statement", "Mixing data types in results (e.g., returning text in one THEN and a number in another)", "Not using ELSE results in NULL for unmatched rows"] },
            { type: "realworld", heading: "Real-World Use", content: "Data analysts use CASE constantly to create custom segments for reporting. 'Active' vs 'Churned' users, 'Small' vs 'Enterprise' clients, or grouping states into 'Regions'. It's essential for cleaning and organizing raw data." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "CASE WHEN", def: "Start the logic" },
                    { term: "THEN", def: "Result if true" },
                    { term: "ELSE", def: "Fallback result" },
                    { term: "END", def: "Closes the statement" }
                ]
            }
        ]
    },

    // ── LESSON 211 ──────────────────────────────────────────────
    "211": {
        title: "SQL JOINs — Connecting Tables",
        emoji: "🔗",
        readTime: "5 min",
        sections: [
            { type: "intro", content: "Real data is rarely in just one table. Users are in one place, orders in another. JOINs allow you to connect these tables based on a shared column (usually an ID) to see the full picture." },
            { type: "concept", heading: "Venn Diagrams for Data", content: "INNER JOIN returns only rows that match in BOTH tables (the intersection). LEFT JOIN keeps everything from the first table and adds matching data from the second (or NULL if no match).", analogy: "Imagine two contact lists: yours and your friend's. INNER JOIN is the people you BOTH know. LEFT JOIN is your entire list, plus details from your friend's list if they know them too." },
            { type: "syntax", heading: "The Syntax", code: "SELECT users.name, orders.amount\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\nSELECT users.name, orders.amount\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;", annotations: ["FROM table1 is the 'left' table", "JOIN table2 is the 'right' table", "ON defines the shared key connecting them", "Dot notation (table.col) clears up ambiguity"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT users.name, orders.order_date FROM users INNER JOIN orders ON users.id = orders.user_id;", explain: "Shows only users who have placed an order." },
                    { sql: "SELECT users.name, orders.order_date FROM users LEFT JOIN orders ON users.id = orders.user_id;", explain: "Shows ALL users, with NULL for order info if they haven't bought anything." }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Ambiguous column names—if both tables have 'id', you must say 'users.id'", "Forgetting the ON clause—this creates a mess (Cartesian product)", "Using INNER when you meant LEFT (losing data vs showing NULLs)"] },
            { type: "realworld", heading: "Real-World Use", content: "Joins are the backbone of relational databases. You'll link Patients to Appointments, Students to Classes, or Employees to Departments. Mastering JOINs is what moves you from basic queries to true database mastery." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "INNER JOIN", def: "Matches only" },
                    { term: "LEFT JOIN", def: "Keep all left + matches" },
                    { term: "ON a.id = b.id", def: "The link" },
                    { term: "table.column", def: "Specify source" }
                ]
            }
        ]
    },

    // ── LESSON 212 ──────────────────────────────────────────────
    "212": {
        title: "Date & Time Functions — Time Travel",
        emoji: "📅",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "Business questions often revolve around time: 'How many signups last month?' 'What's the revenue year-over-year?' SQL provides powerful functions to extract parts of dates or calculate differences." },
            { type: "concept", heading: "Dates are Strings (Mostly)", content: "In SQLite (and many inputs), dates are text strings like '2023-12-31'. Functions like `strftime` let you parse these strings to get the Year, Month, or Day.", analogy: "Think of a date string as a packed suitcase. You can't just 'wear' the suitcase. You need to unpack it (use functions) to get the shirt (Year) or shoes (Month) inside." },
            { type: "syntax", heading: "The Syntax", code: "SELECT strftime('%Y', date_col) FROM table;\nSELECT date(date_col, '+7 days') FROM table;\nSELECT strftime('%Y-%m', date_col) AS year_month;", annotations: ["%Y = 4-digit Year", "%m = Month (01-12)", "%d = Day", "%w = Day of Week (0-6)", "'+N days' adds time"] },
            {
                type: "examples", heading: "Step by Step", items: [
                    { sql: "SELECT strftime('%Y', order_date) FROM orders;", explain: "Extracts just '2023', '2024', etc." },
                    { sql: "SELECT strftime('%m', joined_date) FROM users;", explain: "Gets the month for seasonality analysis." },
                    { sql: "SELECT date('now');", explain: "Returns today's date." },
                    { sql: "SELECT date(order_date, '+30 days') FROM orders;", explain: "Calculates a return deadline 30 days out." }
                ]
            },
            { type: "mistakes", heading: "Watch Out For", items: ["Case sensitivity in format strings (%m vs %M) varies by DB", "Storing dates in inconsistent formats (always use YYYY-MM-DD)", "Assuming +1 month always works perfectly (dates are tricky)"] },
            { type: "realworld", heading: "Real-World Use", content: "Cohort analysis (grouping users by signup month), financial reporting (fiscal quarters), and operational scheduling (appointments) all rely heavily on date functions." },
            {
                type: "cheatsheet", heading: "Quick Reference", items: [
                    { term: "strftime('%Y', col)", def: "Get Year" },
                    { term: "strftime('%m', col)", def: "Get Month" },
                    { term: "date(col, '+N days')", def: "Add days" },
                    { term: "now", def: "Current date" }
                ]
            }
        ]
    },

    // ── LESSON 301 ──────────────────────────────────────────────
    "301": {
        title: "Intermediate Master Challenge",
        emoji: "🏆",
        readTime: "3 min",
        sections: [
            { type: "intro", content: "You've made it to the Intermediate capstone. This challenge combines aggregations, grouping, arithmetic, and everything you've learned into real analytical queries. Time to prove you can deliver business insights." },
            { type: "concept", heading: "The Full Analytical Query", content: "At this level, a single query might: filter raw data (WHERE), group it (GROUP BY), aggregate it (SUM/AVG/COUNT), filter the groups (HAVING), do math on the results (arithmetic), and sort the output (ORDER BY). You need to think about the entire pipeline.", analogy: "You're not just cooking one dish anymore — you're running the whole kitchen. Prep (WHERE), organize stations (GROUP BY), cook (aggregate), quality check (HAVING), plate (arithmetic + AS), and present (ORDER BY)." },
            { type: "syntax", heading: "The Full Pipeline", code: "SELECT group_col,\n       COUNT(*) AS count,\n       ROUND(AVG(metric), 2) AS avg_metric,\n       SUM(metric) AS total\nFROM table\nWHERE row_filter\nGROUP BY group_col\nHAVING COUNT(*) > threshold\nORDER BY total DESC;", annotations: ["SELECT — columns + aggregates + math", "FROM — source table", "WHERE — filter rows first", "GROUP BY — create categories", "HAVING — filter categories", "ORDER BY — sort the final output"] },
            {
                type: "examples", heading: "Challenge-Level Examples", items: [
                    { sql: "SELECT category, COUNT(*) AS num_products, ROUND(AVG(price),2) AS avg_price FROM products GROUP BY category HAVING COUNT(*) > 1 ORDER BY avg_price DESC;", explain: "Categories with 2+ products, showing count and average price, sorted by price" },
                    { sql: "SELECT user_id, SUM(quantity) AS total_items, COUNT(*) AS num_orders FROM orders GROUP BY user_id HAVING SUM(quantity) >= 3;", explain: "Active users (3+ items) with their order stats" }
                ]
            },
            { type: "mistakes", heading: "Final Tips", items: ["Clause order is non-negotiable: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY", "Build incrementally — get GROUP BY working before adding HAVING", "Use AS liberally — make your output readable for stakeholders"] },
            { type: "realworld", heading: "Analyst-Ready", content: "These are the exact queries data analysts write daily: performance reports, KPI dashboards, executive summaries. With intermediate SQL mastered, you can handle most business intelligence tasks independently." },
            {
                type: "cheatsheet", heading: "Full Clause Order", items: [
                    { term: "1. SELECT", def: "Columns + aggregates + math" },
                    { term: "2. FROM", def: "Source table" },
                    { term: "3. WHERE", def: "Filter rows" },
                    { term: "4. GROUP BY", def: "Create groups" },
                    { term: "5. HAVING", def: "Filter groups" },
                    { term: "6. ORDER BY", def: "Sort output" }
                ]
            }
        ]
    }

}; // end LESSON_GUIDES
