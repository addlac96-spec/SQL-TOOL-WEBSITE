const INDUSTRY_CONFIGS = {
    "ecommerce": {
        name: "E-Commerce",
        icon: "🛒",
        setup: `
            CREATE TABLE users (user_id INT, name TEXT, email TEXT, joined_date DATE);
            INSERT INTO users VALUES (1, 'Alice Smith', 'alice@example.com', '2023-01-15');
            INSERT INTO users VALUES (2, 'Bob Jones', 'bob@example.com', '2023-02-20');
            INSERT INTO users VALUES (3, 'Charlie Brown', 'charlie@example.com', '2023-03-10');
            INSERT INTO users VALUES (4, 'Diana Prince', 'diana@example.com', '2023-04-05');

            CREATE TABLE products (product_id INT, name TEXT, category TEXT, price REAL);
            INSERT INTO products VALUES (101, 'Laptop', 'Electronics', 1200.00);
            INSERT INTO products VALUES (102, 'Mouse', 'Electronics', 25.00);
            INSERT INTO products VALUES (103, 'Desk Chair', 'Furniture', 150.00);
            INSERT INTO products VALUES (104, 'Keyboard', 'Electronics', 45.00);
            INSERT INTO products VALUES (105, 'Monitor', 'Electronics', 200.00);
            
            CREATE TABLE orders (order_id INT, user_id INT, product_id INT, order_date DATE, quantity INT);
            INSERT INTO orders VALUES (1001, 1, 101, '2023-05-01', 1);
            INSERT INTO orders VALUES (1002, 2, 102, '2023-05-02', 2);
            INSERT INTO orders VALUES (1003, 1, 103, '2023-05-03', 1);
            INSERT INTO orders VALUES (1004, 3, 101, '2023-05-04', 1);
            INSERT INTO orders VALUES (1005, 4, 104, '2023-05-05', 2);
        
            INSERT INTO users VALUES (5, 'Eve Adams', 'eve@example.com', '2022-11-01');
            INSERT INTO users VALUES (6, 'Frank White', 'frank@example.com', '2023-06-15');
            INSERT INTO users VALUES (7, 'Grace Kelly', 'grace@ecommerce.com', '2023-08-20');
            INSERT INTO users VALUES (8, 'Hank Moody', 'hank.m@example.com', '2023-12-01');
            INSERT INTO users VALUES (9, 'Ivy Green', 'ivy@example.com', '2024-01-10');
            INSERT INTO users VALUES (10, 'Jack Black', 'jack@example.com', '2024-02-28');
            
            INSERT INTO products VALUES (106, 'Office Chair', 'Office', 199.99);
            INSERT INTO products VALUES (107, 'Desk', 'Furniture', 450.00);
            INSERT INTO products VALUES (108, 'Tablet', 'Electronics', 350.00);
            INSERT INTO products VALUES (109, 'Headphones', 'Electronics', 80.00);
            INSERT INTO products VALUES (110, 'Notebook', 'Office', 5.00);
            INSERT INTO products VALUES (111, 'Smartwatch', 'Electronics', 250.00);
            INSERT INTO products VALUES (112, 'Whiteboard', 'Office', 120.00);
            
            INSERT INTO orders VALUES (1006, 5, 106, '2023-06-01', 3);
            INSERT INTO orders VALUES (1007, 6, 108, '2023-07-15', 1);
            INSERT INTO orders VALUES (1008, 1, 107, '2023-08-20', 2);
            INSERT INTO orders VALUES (1009, 3, 109, '2023-09-05', 4);
            INSERT INTO orders VALUES (1010, 7, 110, '2023-10-10', 10);
            INSERT INTO orders VALUES (1011, 4, 111, '2023-11-20', 1);
            INSERT INTO orders VALUES (1012, 8, 101, '2023-12-05', 2);
            INSERT INTO orders VALUES (1013, 9, 103, '2024-01-15', 1);
            INSERT INTO orders VALUES (1014, 2, 105, '2024-02-14', 1);
            INSERT INTO orders VALUES (1015, 1, 101, '2024-03-01', 3);
    `,
        tables: ['users', 'products', 'orders']
    },
    "saas": {
        name: "SaaS & Marketing",
        icon: "☁️",
        setup: `
            CREATE TABLE subscriptions (sub_id INT, user_id INT, plan TEXT, status TEXT, start_date DATE, monthly_revenue INT);
            INSERT INTO subscriptions VALUES (1, 501, 'Pro', 'Active', '2023-01-01', 49);
            INSERT INTO subscriptions VALUES (2, 502, 'Free', 'Active', '2023-02-15', 0);
            INSERT INTO subscriptions VALUES (3, 503, 'Enterprise', 'Cancelled', '2023-03-01', 500);
            INSERT INTO subscriptions VALUES (4, 504, 'Pro', 'Active', '2023-04-10', 49);

            CREATE TABLE usage_logs (log_id INT, user_id INT, feature TEXT, duration_mins INT, date DATE);
            INSERT INTO usage_logs VALUES (101, 501, 'Dashboard', 45, '2023-04-01');
            INSERT INTO usage_logs VALUES (102, 501, 'API', 120, '2023-04-01');
            INSERT INTO usage_logs VALUES (103, 502, 'Reports', 15, '2023-04-02');

            CREATE TABLE marketing_leads (lead_id INT, email TEXT, source TEXT, status TEXT, score INT);
            INSERT INTO marketing_leads VALUES (1, 'john@startup.io', 'LinkedIn', 'Qualified', 85);
            INSERT INTO marketing_leads VALUES (2, 'sarah@web.com', 'Google', 'New', 40);
            INSERT INTO marketing_leads VALUES (3, 'mike@tech.co', 'LinkedIn', 'Qualified', 90);

    `,
        tables: ['subscriptions', 'usage_logs', 'marketing_leads']
    },

    "hr": {
        name: "HR & Operations",
        icon: "👥",
        setup: `
            CREATE TABLE employees (emp_id INT, name TEXT, dept_id INT, role TEXT, hire_date DATE, performance_score INT);
            INSERT INTO employees VALUES (1, 'Michael Scott', 1, 'Manager', '2005-03-01', 5);
            INSERT INTO employees VALUES (2, 'Dwight Schrute', 2, 'Sales', '2005-04-10', 10);
            INSERT INTO employees VALUES (3, 'Jim Halpert', 2, 'Sales', '2006-01-15', 8);
            INSERT INTO employees VALUES (4, 'Pam Beesly', 1, 'Admin', '2006-05-20', 9);

            CREATE TABLE departments (dept_id INT, name TEXT, location TEXT);
            INSERT INTO departments VALUES (1, 'Management', 'Scranton');
            INSERT INTO departments VALUES (2, 'Sales', 'Scranton');
            INSERT INTO departments VALUES (3, 'Accounting', 'Stamford');

            CREATE TABLE salaries (emp_id INT, amount INT, currency TEXT, last_raise DATE);
            INSERT INTO salaries VALUES (1, 85000, 'USD', '2022-01-01');
            INSERT INTO salaries VALUES (2, 65000, 'USD', '2022-06-01');
            INSERT INTO salaries VALUES (3, 62000, 'USD', '2023-01-01');

    `,
        tables: ['employees', 'departments', 'salaries']
    },
    "healthcare": {
        name: "Healthcare",
        icon: "🏥",
        setup: `
            CREATE TABLE patients (patient_id INT, name TEXT, dob DATE, gender TEXT, blood_type TEXT);
            INSERT INTO patients VALUES (1, 'John Doe', '1985-05-15', 'M', 'A+');
            INSERT INTO patients VALUES (2, 'Jane Smith', '1990-11-20', 'F', 'O-');
            INSERT INTO patients VALUES (3, 'Robert Brown', '1975-02-10', 'M', 'B+');

            CREATE TABLE appointments (app_id INT, patient_id INT, doctor_id INT, date DATE, status TEXT, reason TEXT);
            INSERT INTO appointments VALUES (101, 1, 10, '2023-10-01', 'Completed', 'Checkup');
            INSERT INTO appointments VALUES (102, 2, 11, '2023-10-02', 'Pending', 'Fever');
            INSERT INTO appointments VALUES (103, 3, 10, '2023-10-05', 'Cancelled', 'Injury');

            CREATE TABLE doctors (doctor_id INT, name TEXT, specialty TEXT, years_exp INT);
            INSERT INTO doctors VALUES (10, 'Dr. Gregory House', 'Diagnostics', 20);
            INSERT INTO doctors VALUES (11, 'Dr. Allison Cameron', 'Immunology', 8);
            INSERT INTO doctors VALUES (12, 'Dr. Robert Chase', 'Surgery', 10);

    `,
        tables: ['patients', 'appointments', 'doctors']
    },
    "finance": {
        name: "Finance & Banking",
        icon: "💰",
        setup: `
            CREATE TABLE accounts (acc_id INT, user_id INT, type TEXT, balance REAL, status TEXT);
            INSERT INTO accounts VALUES (1, 1001, 'Checking', 1250.50, 'Active');
            INSERT INTO accounts VALUES (2, 1001, 'Savings', 5400.00, 'Active');
            INSERT INTO accounts VALUES (3, 1002, 'Checking', 300.25, 'Frozen');
            INSERT INTO accounts VALUES (4, 1003, 'Savings', 150.00, 'Active');

            CREATE TABLE transactions (tx_id INT, acc_id INT, amount REAL, category TEXT, date DATE);
            INSERT INTO transactions VALUES (501, 1, -45.00, 'Food', '2023-09-01');
            INSERT INTO transactions VALUES (502, 1, 1200.00, 'Salary', '2023-09-01');
            INSERT INTO transactions VALUES (503, 2, -10.00, 'Service Fee', '2023-09-02');

            CREATE TABLE loans (loan_id INT, user_id INT, amount INT, interest_rate REAL, term_months INT);
            INSERT INTO loans VALUES (1, 1001, 15000, 4.5, 60);
            INSERT INTO loans VALUES (2, 1002, 5000, 7.2, 24);
        
            INSERT INTO accounts VALUES (5, 1004, 'Credit', 0.00, 'Active');
            INSERT INTO accounts VALUES (6, 1005, 'Checking', -100.00, 'Frozen');
            INSERT INTO accounts VALUES (7, 1006, 'Savings', 50000.00, 'Active');
            INSERT INTO accounts VALUES (8, 1007, 'Loan', 10000.00, 'Active');
            INSERT INTO accounts VALUES (9, 1008, 'Investing', 150000.00, 'Active');
            INSERT INTO accounts VALUES (10, 1009, 'Checking', 0.00, 'Active');
            
            INSERT INTO transactions VALUES (504, 5, 500.00, 'Withdrawal', '2023-06-15');
            INSERT INTO transactions VALUES (505, 6, 35.00, 'Fee', '2023-07-20');
            INSERT INTO transactions VALUES (506, 7, 10000.00, 'Deposit', '2023-09-10');
            INSERT INTO transactions VALUES (507, 8, 500.00, 'Payment', '2023-11-05');
            INSERT INTO transactions VALUES (508, 9, 25000.00, 'Deposit', '2024-01-20');
            INSERT INTO transactions VALUES (509, 10, 50.00, 'Fee', '2024-03-05');
            INSERT INTO transactions VALUES (510, 1, 200.00, 'Deposit', '2024-03-10');
            INSERT INTO transactions VALUES (511, 2, -1000.00, 'Withdrawal', '2024-03-15');
            INSERT INTO transactions VALUES (512, 1, 0.00, 'Correction', '2024-04-01');
            INSERT INTO transactions VALUES (513, 2, 5000.00, 'Deposit', '2024-04-05');
            
            INSERT INTO loans VALUES (3, 1003, 100000, 3.5, 360);
            INSERT INTO loans VALUES (4, 1004, 25000, 5.0, 48);
            INSERT INTO loans VALUES (5, 1005, 2000, 12.0, 12);
    `,
        tables: ['accounts', 'transactions', 'loans']
    }
};

const lessons = [
    {
        id: "101",
        section: "Beginner Basics",
        title: "Welcome to SQL",
        emoji: "👋",
        desc: "Your first SQL queries — learn to explore tables and pull real data from a database.",
        tutorial: {
            concept: "Every database is made of tables (like spreadsheets). In this lesson, you'll learn to use SELECT * to view all the data inside a table — the most fundamental skill in SQL.",
            syntax: "-- View everything in a table\nSELECT * FROM table_name;",
            example: "-- Show all users\nSELECT * FROM users;"
        }
    },
    {
        id: "102",
        section: "Beginner Basics",
        title: "SQL SELECT",
        emoji: "🔦",
        desc: "Master the fundamental syntax for extracting data from single tables.",
        tutorial: {
            concept: "The SELECT statement is used to retrieve specific columns of data from a table. It is the most common operation in SQL.",
            syntax: "SELECT column1, column2 FROM table_name;",
            example: "SELECT name, email FROM users;"
        }
    },
    {
        id: "103",
        section: "Beginner Basics",
        title: "SQL WHERE",
        emoji: "📍",
        desc: "Learn to apply basic conditional logic to filter your query results.",
        tutorial: {
            concept: "The WHERE clause filters records, ensuring only those that meet a specified condition are returned in the result set.",
            syntax: "SELECT columns FROM table_name WHERE condition;",
            example: "SELECT * FROM products WHERE price > 50;"
        }
    },
    {
        id: "104",
        section: "Beginner Basics",
        title: "AND, OR, NOT",
        emoji: "❌",
        desc: "Combine multiple logical statements to build powerful data filters.",
        tutorial: {
            concept: "Logical operators (AND, OR, NOT) allow you to combine multiple conditions in a WHERE clause for more granular filtering.",
            syntax: "SELECT * FROM table_name WHERE cond1 AND (cond2 OR cond3);",
            example: "SELECT * FROM orders WHERE user_id = 1 AND quantity != 2;"
        }
    },
    {
        id: "105",
        section: "Beginner Basics",
        title: "SQL BETWEEN",
        emoji: "🖖",
        desc: "Identify data points that fall within specific numerical or date ranges.",
        tutorial: {
            concept: "The BETWEEN operator selects values within a given range (inclusive). It works for numbers, text, and dates.",
            syntax: "SELECT columns FROM table_name WHERE column BETWEEN val1 AND val2;",
            example: "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-03-31';"
        }
    },
    {
        id: "106",
        section: "Beginner Basics",
        title: "SQL IN",
        emoji: "🔍",
        desc: "Use set-based filtering to efficiently match against multiple values.",
        tutorial: {
            concept: "The IN operator allows you to specify multiple values in a WHERE clause, acting as a shorthand for multiple OR conditions.",
            syntax: "SELECT columns FROM table_name WHERE column IN (val1, val2, ...);",
            example: "SELECT * FROM products WHERE category IN ('Electronics', 'Furniture');"
        }
    },
    {
        id: "107",
        section: "Beginner Basics",
        title: "SQL LIKE",
        emoji: "❤️",
        desc: "Harness pattern matching to identify data strings and specific text motifs.",
        tutorial: {
            concept: "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column using wildcards (% for multiple chars, _ for one).",
            syntax: "SELECT columns FROM table_name WHERE column LIKE 'pattern%';",
            example: "SELECT * FROM users WHERE name LIKE 'A%';"
        }
    },
    {
        id: "108",
        section: "Beginner Basics",
        title: "Filtering Review",
        emoji: "🔄",
        desc: "Consolidate your knowledge of row-level filtering and logical operators.",
        tutorial: {
            concept: "Consolidating filtering techniques: using comparison operators (=, <, >), logical connectors, and pattern matching together.",
            syntax: "-- Combine multiple techniques\nSELECT * FROM table_name WHERE (cond1 OR cond2) AND cond3;",
            example: "SELECT * FROM products WHERE category = 'Electronics' AND price > 100;"
        }
    },
    {
        id: "109",
        section: "Beginner Basics",
        title: "SQL ORDER BY",
        emoji: "↕️",
        desc: "Structure your output by sorting results based on one or more variables.",
        tutorial: {
            concept: "The ORDER BY keyword is used to sort the result-set in ascending (default) or descending order.",
            syntax: "SELECT columns FROM table_name ORDER BY column1 [ASC|DESC];",
            example: "SELECT * FROM products ORDER BY price DESC;"
        }
    },
    {
        id: "110",
        section: "Beginner Master",
        title: "Master Challenge",
        emoji: "🏆",
        desc: "Put your skills to the test! Combine SELECT, WHERE, patterns, and logic to solve real-world problems.",
        tutorial: {
            concept: "This capstone combines all basic concepts: selecting from tables, filtering with multiple conditions, and ordering results.",
            syntax: "SELECT [DISTINCT] * FROM table_name WHERE [multi-conditions] ORDER BY [columns];",
            example: "-- Real-world synthesis\nSELECT * FROM orders WHERE quantity > 1 ORDER BY order_date DESC;"
        }
    },
    {
        id: "201",
        section: "Intermediate SQL",
        title: "Leveling Up",
        emoji: "😎",
        desc: "Move beyond filtering rows — learn to summarize, count, and calculate across entire datasets.",
        tutorial: {
            concept: "So far you've been picking out individual rows. Now you'll learn aggregate functions like COUNT, SUM, and AVG to answer questions about groups of data — like 'what's the average order value?'",
            syntax: "-- New techniques incoming\nSELECT AGG_FUNC(column) FROM table_name GROUP BY column;",
            example: "SELECT COUNT(*) FROM orders;"
        }
    },
    {
        id: "202",
        section: "Intermediate SQL",
        title: "SUM, AVG, COUNT",
        emoji: "⚙️",
        desc: "Utilize aggregate functions to perform calculations across multiple rows of data.",
        tutorial: {
            concept: "Aggregate functions perform a calculation on a set of values and return a single value. Common ones are SUM, AVG, and COUNT.",
            syntax: "SELECT SUM(column), AVG(column), COUNT(column) FROM table_name;",
            example: "SELECT SUM(price) FROM products;"
        }
    },
    {
        id: "203",
        section: "Intermediate SQL",
        title: "SQL GROUP BY",
        emoji: "📊",
        desc: "Analyze dataset patterns by grouping related records into summary categories.",
        tutorial: {
            concept: "The GROUP BY statement groups rows that have the same values into summary rows, like 'find the number of customers in each country'.",
            syntax: "SELECT column, AGG_FUNC(column) FROM table_name GROUP BY column;",
            example: "SELECT category, COUNT(*) FROM products GROUP BY category;"
        }
    },
    {
        id: "204",
        section: "Intermediate SQL",
        title: "SQL HAVING",
        emoji: "👈",
        desc: "Apply advanced conditional logic to filter and refine grouped data results.",
        tutorial: {
            concept: "The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.",
            syntax: "SELECT column, AGG_FUNC(column) FROM table_name GROUP BY column HAVING condition;",
            example: "SELECT category, AVG(price) FROM products GROUP BY category HAVING AVG(price) > 50;"
        }
    },
    {
        id: "205",
        section: "Intermediate SQL",
        title: "SQL DISTINCT",
        emoji: "⭐",
        desc: "Extract unique data points from your tables by effectively removing duplicates.",
        tutorial: {
            concept: "The SELECT DISTINCT statement is used to return only distinct (different) values.",
            syntax: "SELECT DISTINCT column1, column2 FROM table_name;",
            example: "SELECT DISTINCT category FROM products;"
        }
    },
    {
        id: "206",
        section: "Intermediate SQL",
        title: "SQL Arithmetic",
        emoji: "🔢",
        desc: "Perform calculations directly within queries using standard mathematical operators.",
        tutorial: {
            concept: "SQL supports standard arithmetic operators to perform calculations directly on numeric columns.",
            syntax: "SELECT col1 + col2, col1 * 1.1 FROM table_name;",
            example: "SELECT name, price * quantity AS total FROM orders;"
        }
    },
    {
        id: "207",
        section: "Intermediate SQL",
        title: "Math Functions",
        emoji: "📈",
        desc: "Apply advanced scalar functions for precise numerical transformations and rounding.",
        tutorial: {
            concept: "Scalar math functions allow you to perform more complex calculations like rounding or finding absolute values.",
            syntax: "SELECT ABS(col), CEIL(col), FLOOR(col) FROM table_name;",
            example: "SELECT name, ROUND(price, 2) FROM products;"
        }
    },
    {
        id: "208",
        section: "Intermediate SQL",
        title: "SQL Division",
        emoji: "➗",
        desc: "Master precise numeric division and decimal precision in your result sets.",
        tutorial: {
            concept: "Division in SQL often requires attention to data types (integers vs floats) to ensure you get precise decimals.",
            syntax: "SELECT col1 / col2, CAST(col1 AS FLOAT) / col2 FROM table_name;",
            example: "SELECT product_id, price / 12 AS monthly_cost FROM products;"
        }
    },
    {
        id: "209",
        section: "Intermediate SQL",
        title: "SQL NULL Handling",
        emoji: "🚫",
        desc: "Identify and manage unknown or missing data points to maintain data integrity.",
        tutorial: {
            concept: "NULL represents a missing or unknown value. You use IS NULL and IS NOT NULL to test for it.",
            syntax: "SELECT * FROM table_name WHERE column IS [NOT] NULL;",
            example: "SELECT * FROM users WHERE joined_date IS NULL;"
        }
    },
    {
        id: "210",
        section: "Intermediate SQL",
        title: "SQL CASE",
        emoji: "💼",
        desc: "Master conditional logic to categorize data and create dynamic labels like 'High Value' or 'Churn Risk' on the fly.",
        tutorial: {
            concept: "The CASE statement is like an IF-THEN-ELSE decision maker for your queries. It allows you to categorize data on the fly, creating new labels based on conditions.",
            syntax: "SELECT column, CASE WHEN cond THEN 'Label A' ELSE 'Label B' END AS new_label FROM table_name;",
            example: "SELECT name, CASE WHEN price > 100 THEN 'Expensive' ELSE 'Cheap' END AS price_category FROM products;"
        }
    },
    {
        id: "211",
        section: "Intermediate SQL",
        title: "SQL JOINS",
        emoji: "🤝",
        desc: "Combine data from multiple tables using INNER and LEFT JOINs to see the full picture of your relationships.",
        tutorial: {
            concept: "JOINS allow you to combine rows from two or more tables based on a related column between them. INNER JOIN keeps only matches; LEFT JOIN keeps everything from the left table.",
            syntax: "SELECT t1.col, t2.col FROM table1 t1 JOIN table2 t2 ON t1.id = t2.ref_id;",
            example: "SELECT users.name, orders.quantity FROM users JOIN orders ON users.user_id = orders.user_id;"
        }
    },
    {
        id: "212",
        section: "Intermediate SQL",
        title: "DATE FUNCTIONS",
        emoji: "📅",
        desc: "Manipulate dates and times to analyze trends, cohorts, and schedules with powerful temporal functions.",
        tutorial: {
            concept: "SQL provides powerful functions to manipulate dates: extracting parts (Month/Year), calculating differences, or formatting timestamps for reports.",
            syntax: "SELECT DATE(column), STRFTIME('%Y-%m', column), DATE_ADD(column, INTERVAL 1 DAY) FROM table_name;",
            example: "SELECT order_id, STRFTIME('%Y', order_date) AS year FROM orders;"
        }
    },
    {
        id: "213",
        section: "Intermediate Master",
        title: "Intermediate Master Challenge",
        emoji: "🏆",
        desc: "The ultimate challenge! Combine aggregations, grouping, math, and filtering to solve advanced business scenarios.",
        tutorial: {
            concept: "This Intermediate Capstone combines aggregations, grouping, and math to solve real-world business problems.",
            syntax: "SELECT group_col, AVG(math_col) FROM table_name WHERE cond GROUP BY group_col HAVING AVG(math_col) > val;",
            example: "SELECT category, SUM(price * quantity) FROM orders JOIN products ON orders.product_id = products.product_id GROUP BY category;"
        }
    }
];

// Difficulty ORDER: 0 (Easy), 1 (Medium), 2 (Hard)
const managerRequestsByIndustry = {
    "ecommerce": {
        "101": [
            { req: "The merchandising team is finalizing the new catalog. I'm prepping for our stakeholder meeting and need a quick overview of our user base. Can you pull everything we have in the users table for me for their review.", check: (res, sql) => sql.toLowerCase().includes("users"), hint: "Think about which table stores user information and how to see all its columns." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull all columns in our products table. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("products"), hint: "Consider the products table and the syntax for viewing all available columns." },
            { req: "Marketing needs a list for their upcoming campaign. Please find all data from the orders table for me.", check: (res, sql) => sql.toLowerCase().includes("orders"), hint: "Focus on the orders table and how to retrieve every column for each entry." },
            { req: "Customer support reported an issue. I need to verify the full content of the users table today to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("users"), hint: "The users table contains all user records. Try to pull all columns at once." },
            { req: "Customer support reported an issue. I need to verify the complete product catalog, every column please to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("products"), hint: "Look into the products table and use the 'all columns' wildcard." },
            { req: "We're auditing our stock levels. Can you dump all order records so I can verify consistency ASAP?", check: (res, sql) => sql.toLowerCase().includes("orders"), hint: "You'll need to retrieve all data points for every order in the system." },
            { req: "The merchandising team is finalizing the new catalog. Please extract all the users we have registered so far for their review.", check: (res, sql) => sql.toLowerCase().includes("users"), hint: "Try to list every field for all entries in the users table." },
            { req: "I'm analyzing our top-performing categories. Can you list the full list of products from the database?", check: (res, sql) => sql.toLowerCase().includes("products"), hint: "The products table holds our catalog. Consider how to display its entire content." },
            { req: "The merchandising team is finalizing the new catalog. Please extract all orders in the system. Show them all for their review.", check: (res, sql) => sql.toLowerCase().includes("orders"), hint: "Focus on viewing every column for all order records." },
            { req: "We found a discrepancy in the logs. Please pull everything in the users table one more time to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("users"), hint: "Ensure you are targeting the table that holds user data." },
            { req: "To prepare for the board meeting, I need an overview of all products is helpful for my inventory check. Do it.", check: (res, sql) => sql.toLowerCase().includes("products"), hint: "Think about the syntax for viewing all columns in the products table." }
        ],
        "102": [
            { req: "Our Q3 sales analysis is coming up. I need you to pull the names and emails of our users. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("email"), hint: "Identify the specific columns for name and email in the users table." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull the IDs and categories for all our products. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("product_id") && sql.toLowerCase().includes("category"), hint: "Focus on selecting only the 'product_id' and 'category' fields." },
            { req: "The merchandising team is finalizing the new catalog. Please extract a list of all our product names and their prices for their review.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("price"), hint: "Look for the name and price columns within the products catalog." },
            { req: "Customer support reported an issue. I need to verify the order_id and quantity for every order to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("order_id") && sql.toLowerCase().includes("quantity"), hint: "Try to pick out exactly the 'order_id' and 'quantity' from the orders table." },
            { req: "Customer support reported an issue. I need to verify user_id and joined_date for all employees to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("user_id") && sql.toLowerCase().includes("joined_date"), hint: "Target the specific user identification and date columns in the users table." },
            { req: "I'm analyzing our top-performing categories. Can you list the names of all our products and nothing else?", check: (res, sql) => sql.toLowerCase().includes("name") && !sql.toLowerCase().includes("category"), hint: "Ensure your request only asks for the names from the products table." },
            { req: "We found a discrepancy in the logs. Please pull the IDs of the products we carry to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("product_id"), hint: "Identify the column that represents the unique product identifier." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull the emails for every user in our system. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("email"), hint: "Extract only the column containing email addresses from the users table." },
            { req: "I'm analyzing our top-performing categories. Can you list the category and price for every single item?", check: (res, sql) => sql.toLowerCase().includes("category") && sql.toLowerCase().includes("price"), hint: "Try to isolate the category and price information for each product." },
            { req: "Customer support reported an issue. I need to verify user names and their joined dates for my report to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("joined_date"), hint: "Focus on the columns that store name and joining date information." },
            { req: "I'm analyzing our top-performing categories. Can you list the columns that show the order date and quantity?", check: (res, sql) => sql.toLowerCase().includes("order_date") && sql.toLowerCase().includes("quantity"), hint: "Look for the specific column names for dates and quantities in the orders table." }
        ],
        "103": [
            { req: "To prepare for the board meeting, I need an overview of all orders where the quantity is exactly 2.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("quantity = 2")), hint: "Try to filter the rows based on the value in the quantity column." },
            { req: "Customer support reported an issue. I need to verify users who joined after '2023-03-01' to troubleshoot.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("> '2023-03-01'")), hint: "Filter the joined_date using a comparison to the specific target date." },
            { req: "Let's check our inventory health. Show me all products that cost more than $100.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("> 100")), hint: "Apply a filter to the price column for values exceeding 100." },
            { req: "We found a discrepancy in the logs. Please pull products that are in the 'Electronics' category to help us investigate.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("electronics")), hint: "Ensure you are filtering the category column for the 'Electronics' text." },
            { req: "Marketing needs a list for their upcoming campaign. Please find users named 'Bob Jones'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("bob jones")), hint: "Look for a way to match the name column exactly to 'Bob Jones'." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull orders with quantity of 1. Make sure it's accurate.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("quantity = 1")), hint: "Focus on filtering for a specific numeric value in the quantity field." },
            { req: "We're auditing our stock levels. Can you generate a report of products that cost exactly $25.00 ASAP?", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("= 25")), hint: "Filter the products by a specific price value." },
            { req: "To prepare for the board meeting, I need an overview of items that are 'Furniture'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("furniture")), hint: "Check the category column for a specific string value." },
            { req: "We need to evaluate our pricing strategy. Get me a list of the user with ID 3.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("user_id = 3")), hint: "Match the unique identifier column against the value 3." },
            { req: "Marketing needs a list for their upcoming campaign. Please find orders made on '2023-05-01'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("2023-05-01")), hint: "Compare the order_date field to the specific date string provided." },
            { req: "We're auditing our stock levels. Can you generate a report of products with price less than $50 ASAP?", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("< 50")), hint: "Focus on a price filter that looks for values below a certain threshold." }
        ],
        "104": [
            { req: "Customer support reported an issue. I need to verify users named 'Alice Smith' who joined in '2023-01-15' to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("alice") && sql.toLowerCase().includes("2023-01-15")), hint: "Consider how to requirement two specific conditions to be true at the same time." },
            { req: "We need to evaluate our pricing strategy. Get me a list of products that are NOT 'Furniture' and cost over $20.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("> 20")), hint: "Think about excluding a specific category while also checking for a minimum price." },
            { req: "The merchandising team is finalizing the new catalog. Please extract 'Electronics' products that are priced under $50.00 for their review.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("electronics") && sql.toLowerCase().includes("< 50")), hint: "Look for products that meet both the category name and the maximum price criteria." },
            { req: "The merchandising team is finalizing the new catalog. Please extract users who joined either in Jan or Feb 2023 for their review.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && ((sql.toLowerCase().includes("2023-01") || sql.toLowerCase().includes("2023-02"))), hint: "Filter for records that match either one of the specified date patterns." },
            { req: "To prepare for the board meeting, I need an overview of orders with quantity > 1 and product_id 101.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("> 1") && sql.toLowerCase().includes("101")), hint: "Ensure that both the quantity threshold and the specific product ID are verified." },
            { req: "The merchandising team is finalizing the new catalog. Please extract products that are 'Furniture' and cost less than $200 for their review.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("furniture") && sql.toLowerCase().includes("< 200")), hint: "Combine the type of product with a maximum price limit in your filters." },
            { req: "We need to evaluate our pricing strategy. Get me a list of users are NOT 'Alice Smith' and joined in 2023.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("not") && sql.toLowerCase().includes("alice")), hint: "Look for a way to exclude a specific name while filtering for the correct year." },
            { req: "We need to evaluate our pricing strategy. Get me a list of 'Electronics' that aren't 'Laptop'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("electronics") && sql.toLowerCase().includes("not")), hint: "Think about filtering by category but specifically leaving out one product name." },
            { req: "We found a discrepancy in the logs. Please pull products that are cheaper than $50 or in category 'Furniture' to help us investigate.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("< 50") || sql.toLowerCase().includes("furniture")), hint: "Consider how to show results if either the price is low OR the category is Furniture." },
            { req: "Marketing needs a list for their upcoming campaign. Please find orders for user 1 that aren't on 2023-05-01.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("user_id = 1") && sql.toLowerCase().includes("not")), hint: "Focus on filtering by user identification while excluding a specific date." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull users who joined after March AND are named 'Diana Prince'. Make sure it's accurate.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("> '2023-03") && sql.toLowerCase().includes("diana")), hint: "Think about combined filters for both the joining date and the person's name." }
        ],
        "105": [
            { req: "Let's check our inventory health. Show me all products with prices between $20 and $200.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 20 and 200")), hint: "Look for a keyword that allows you to specify a numerical range for the price." },
            { req: "I'm analyzing our top-performing categories. Can you list all orders made between May 1st and May 3rd, 2023?", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-05-01"), hint: "Identify a way to filter dates within a specific start and end boundary." },
            { req: "The merchandising team is finalizing the new catalog. Please extract users who joined between January and March 2023 for their review.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-01"), hint: "Think about using a range filter for the joined_date column." },
            { req: "To prepare for the board meeting, I need an overview of product IDs between 101 and 103.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 101 and 103")), hint: "Consider filtering IDs that fall within a certain low and high inclusive limit." },
            { req: "The merchandising team is finalizing the new catalog. Please extract orders with quantities between 1 and 5 for their review.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 1 and 5")), hint: "Apply a range filter to the quantity field." },
            { req: "I'm analyzing our top-performing categories. Can you list products cost between $10 and $50?", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 10 and 50")), hint: "Look for price values that are within the $10 to $50 range." },
            { req: "Marketing needs a list for their upcoming campaign. Please find users with IDs between 2 and 4.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 2 and 4")), hint: "Filter for user IDs that are within a specified numerical range." },
            { req: "We found a discrepancy in the logs. Please pull orders from May 4th to May 5th, 2023 to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-05-04"), hint: "Use a date range filter to find orders placed within those two days." },
            { req: "We need to evaluate our pricing strategy. Get me a list of products with prices in the $100-$1000 range.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 100 and 1000")), hint: "Filter the price column to include values from 100 up to 1000." },
            { req: "We found a discrepancy in the logs. Please pull users with joined dates between '2023-02-01' and '2023-04-01' to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-02"), hint: "Specify a start and end date to narrow down the joined_date results." },
            { req: "Customer support reported an issue. I need to verify product categories are in the 100-105 ID range to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 100 and 105")), hint: "Filter the category IDs to only include those within the 100 to 105 range." }
        ],
        "106": [
            { req: "The merchandising team is finalizing the new catalog. Please extract users with IDs 1, 3, and 4. for their review.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("1") && sql.toLowerCase().includes("3"), hint: "Consider how to select records where a column's value matches any item from a specific list." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull orders with quantities of 1 or 2. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("1") && sql.toLowerCase().includes("2"), hint: "Think about filtering for quantities that are either 1 or 2 using a list." },
            { req: "Customer support reported an issue. I need to verify products that are either in 'Electronics' or 'Furniture'. to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("electronics") || sql.toLowerCase().includes("furniture")), hint: "Use a list of categories to find products that belong to any of them." },
            { req: "Marketing needs a list for their upcoming campaign. Please find products with IDs 101, 102, or 105.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("101") || sql.toLowerCase().includes("105")), hint: "Filter for product IDs that are present in a given set of identifiers." },
            { req: "The merchandising team is finalizing the new catalog. Please extract users named 'Alice Smith' or 'Bob Jones' for their review.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("alice") || sql.toLowerCase().includes("bob")), hint: "Identify users whose names match any of the names in a provided list." },
            { req: "Customer support reported an issue. I need to verify orders belong to users 1 or 4? to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("4")), hint: "Filter orders to include only those made by users from a specific list of IDs." },
            { req: "The merchandising team is finalizing the new catalog. Please extract products in 'Furniture' or 'Office' categories. for their review.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("furniture"), hint: "Select products whose category is found within a defined list of categories." },
            { req: "To prepare for the board meeting, I need an overview of a list of users who joined on '2023-01-15' or '2023-03-10'.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("2023-01-15"), hint: "Filter users by their joined date, matching against a list of specific dates." },
            { req: "Marketing needs a list for their upcoming campaign. Please find are there products priced at $25, $45, or $150?.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("25"), hint: "Check if the product price is one of the values in a given list." },
            { req: "Let's check our inventory health. Show me emails for users 2 and 3.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("2"), hint: "Retrieve emails for users whose IDs are present in a specific list." },
            { req: "We need to evaluate our pricing strategy. Get me a list of product names match 'Laptop', 'Mouse', or 'Monitor'?.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("laptop"), hint: "Filter products by their names, matching against a list of desired names." }
        ],
        "107": [
            { req: "We're auditing our stock levels. Can you generate a report of any users whose names start with the letter 'A' ASAP?", check: (res, sql) => sql.toLowerCase().includes("like") && (sql.includes("'A%'") || sql.includes('"A%"')), hint: "Think about a way to match strings that start with a specific character followed by any sequence." },
            { req: "We need to evaluate our pricing strategy. Get me a list of products where the name contains the word 'Chair'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("chair"), hint: "Look for a pattern matching technique that finds a specific word within a larger string." },
            { req: "We need to evaluate our pricing strategy. Get me a list of users with '@example.com' in their email.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("@example.com"), hint: "Filter the email column for a pattern that includes a specific domain." },
            { req: "Customer support reported an issue. I need to verify categories end with 'ics' to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%ics"), hint: "Think about matching a string that ends with a specific set of characters." },
            { req: "Marketing needs a list for their upcoming campaign. Please find users whose name has 'Brown' in it.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("brown"), hint: "Search for the substring 'Brown' anywhere in the name field." },
            { req: "The merchandising team is finalizing the new catalog. Please extract products with names starting with 'M' for their review.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("m%"), hint: "Consider a pattern match that targets the beginning of the product name." },
            { req: "We found a discrepancy in the logs. Please pull order dates from May ('%-05-%') to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("-05-"), hint: "Filter the date column for a specific month pattern." },
            { req: "We're auditing our stock levels. Can you generate a report of users have names ending in 'e' ASAP?", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%e"), hint: "Use pattern matching to find names that end with a specific vowel." },
            { req: "I'm analyzing our top-performing categories. Can you list products that include the word 'Board' in their name?", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("board"), hint: "Focus on finding a specific term within the full product description." },
            { req: "Customer support reported an issue. I need to verify emails that start with 'alice' to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("alice%"), hint: "Identify e-mail addresses that begin with a particular user name." },
            { req: "We're auditing our stock levels. Can you generate a report of users joined in 2023? ASAP?", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("2023%"), hint: "Search for a year pattern at the start of the date column." }
        ],
        "108": [
            { req: "Let's check our inventory health. Show me users who didn't join on '2023-01-15'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("2023-01-15")), hint: "Think about how to exclude a specific date from your results." },
            { req: "To prepare for the board meeting, I need an overview of all products that are NOT 'Electronics'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("electronics")), hint: "Filter for records where the category does not match a specific type." },
            { req: "Marketing needs a list for their upcoming campaign. Please find orders that don't have a quantity of 1.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("1")), hint: "Exclude orders with a specific numeric quantity." },
            { req: "I'm analyzing our top-performing categories. Can you list users aren't named 'Charlie Brown'?", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("charlie")), hint: "Consider how to filter out a particular user name." },
            { req: "Customer support reported an issue. I need to verify products that aren't 'Furniture' and aren't priced at $200 to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not") && sql.toLowerCase().includes("furniture")), hint: "Try to combine multiple exclusion criteria for category and price." },
            { req: "We need to evaluate our pricing strategy. Get me a list of users who didn't join in March 2023.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not") && sql.toLowerCase().includes("2023-03")), hint: "Exclude rows that match a specific month pattern." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull orders weren't made by user 1. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("user_id = 1")), hint: "Filter out orders belonging to a specific user identifier." },
            { req: "Customer support reported an issue. I need to verify products that aren't category 'Electronics' to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("electronics")), hint: "Focus on excluding items within the electronics category." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull users who aren't 'Diana Prince'. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("diana")), hint: "Exclude a specific person from your user list." },
            { req: "We need to evaluate our pricing strategy. Get me a list of products with prices NOT in the $20-$100 range.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not between")), hint: "Consider an exclusion keyword that works with numerical ranges." },
            { req: "To prepare for the board meeting, I need an overview of products have categories NOT starting with 'F'?.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not like 'f%'")), hint: "Think about pattern matching that excludes strings starting with a certain letter." }
        ],
        "109": [
            { req: "Marketing needs a list for their upcoming campaign. Please find all users, sorted by their name alphabetically.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by name")), hint: "Think about how to arrange your results based on the name column." },
            { req: "The merchandising team is finalizing the new catalog. Please extract all products, sorted by price from highest to lowest for their review.", check: (res, sql) => sql.toLowerCase().includes("order by") && sql.toLowerCase().includes("desc"), hint: "Consider sorting the prices in descending order." },
            { req: "Customer support reported an issue. I need to verify orders, sorted by the order date (newest first) to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by order_date desc")), hint: "Sort by date so that the most recent entries appear at the top." },
            { req: "We found a discrepancy in the logs. Please pull products sorted by category and then by price to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by category") && sql.toLowerCase().includes("price")), hint: "Apply multiple levels of sorting, starting with the group." },
            { req: "We need to evaluate our pricing strategy. Get me a list of users, sorted by their joined date (oldest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by joined_date") && !sql.toLowerCase().includes("desc")), hint: "Arrange the join dates from earliest to latest." },
            { req: "Customer support reported an issue. I need to verify all products alphabetically by name to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by name")), hint: "Set a sorting rule for the product names." },
            { req: "Let's check our inventory health. Show me orders for user 1, sorted by quantity (highest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("user_id = 1") && sql.toLowerCase().includes("order by quantity desc")), hint: "Combine a user filter with a descending sort on quantity." },
            { req: "To prepare for the board meeting, I need an overview of product categories sorted in reverse alphabetical order.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by category desc")), hint: "Sort the categories from Z to A." },
            { req: "Let's check our inventory health. Show me users sorted by their email address.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by email")), hint: "Organize the results based on the email column." },
            { req: "We're auditing our stock levels. Can you generate a report of the newest joined users first ASAP?", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by joined_date desc")), hint: "Sort by the newest (largest) date values." },
            { req: "Marketing needs a list for their upcoming campaign. Please find all electronics products sorted by price.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("electronics") && sql.toLowerCase().includes("order by price")), hint: "Filter for a specific category and then sort the results by price." }
        ],
        "110": [
            { req: "We're auditing our stock levels. Can you generate a report of the name and email of all users who joined between January and March and whose names start with 'A' or 'B' ASAP?", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("like") && (sql.toLowerCase().includes("name") || sql.toLowerCase().includes("email")), hint: "Think about combining date ranges with name pattern matching using multiple logical conditions." },
            { req: "Customer support reported an issue. I need to verify all 'Electronics' products that cost more than $50, sorted by price from high to low to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("electronics") && sql.toLowerCase().includes("> 50") && sql.toLowerCase().includes("order by price desc"), hint: "Focus on combining a category filter with a price threshold and then sorting the results." },
            { req: "I'm analyzing our top-performing categories. Can you list order_id and order_date for orders with quantity 1, made by users 1, 2, or 3. Sort by date newest first?", check: (res, sql) => sql.toLowerCase().includes("quantity = 1") && sql.toLowerCase().includes("in") && sql.toLowerCase().includes("order by order_date desc"), hint: "Consider multiple filters for quantity and specific user IDs, followed by a time-based sort." },
            { req: "I'm analyzing our top-performing categories. Can you list users with ID 1 or 4 whose email matches '%.com', who joined in 2023?", check: (res, sql) => (sql.toLowerCase().includes("in (1, 4)") || sql.toLowerCase().includes("user_id = 1") || sql.toLowerCase().includes("user_id = 4")) && sql.toLowerCase().includes("like '%.com'"), hint: "Think about filtering for specific IDs, an email pattern, and a joining year all at once." },
            { req: "Marketing needs a list for their upcoming campaign. Please find products NOT in 'Furniture' category with price between $20 and $200, sorted by name.", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("furniture") && sql.toLowerCase().includes("between 20 and 200") && sql.toLowerCase().includes("order by name"), hint: "Combine a category exclusion, a price range, and an alphabetical sort." },
            { req: "We found a discrepancy in the logs. Please pull all orders placed in May 2023 with quantity > 1, sorted by quantity DESC to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("2023-05") && sql.toLowerCase().includes("> 1") && sql.toLowerCase().includes("order by quantity desc"), hint: "Filter for a specific month, a minimum quantity, and then arrange by the amount ordered." },
            { req: "To prepare for the board meeting, I need an overview of users whose names start with 'C' or 'D' and who joined after '2023-02-01'. Sort by joined_date.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("> '2023-02-01'") && sql.toLowerCase().includes("order by joined_date"), hint: "Combine pattern matching for names with a date threshold and chronological sorting." },
            { req: "We found a discrepancy in the logs. Please pull product name and price for items in categories 'Electronics' or 'Furniture' with price < $100. Sort by price to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("< 100") && sql.toLowerCase().includes("order by price"), hint: "Use a set filter for categories, a price ceiling, and a numeric sort." },
            { req: "To prepare for the board meeting, I need an overview of orders for product_id 101, 102, or 104 placed between '2023-05-01' and '2023-05-04'. Sort by order_id.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("between") && sql.toLowerCase().includes("order by order_id"), hint: "Combine a list of product IDs with a date range and an ID-based sort." },
            { req: "We need to evaluate our pricing strategy. Get me a list of all users NOT named 'Alice Smith' who have an email containing 'example'. Sort by user_id DESC.", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("%example%") && sql.toLowerCase().includes("order by user_id desc"), hint: "Exclude a specific name, apply a pattern match on email, and sort by ID descending." },
            { req: "Customer support reported an issue. I need to verify all products with names starting with 'M' and price NOT between $100 and $500. Sort by product_id to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("like 'm%'") && sql.toLowerCase().includes("not between") && sql.toLowerCase().includes("order by product_id"), hint: "Combine a name pattern, a negated price range, and an ID sort." }
        ],
        "201": [
            { req: "We're auditing our stock levels. Can you generate a report of the count of users do we have in total ASAP?", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(*)")), hint: "Think about the aggregation function that returns the total number of rows in the user table." },
            { req: "I'm analyzing our top-performing categories. Can you list a count of the total number of products in our catalog?", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(")), hint: "Use a counting function to see how many individual products are registered." },
            { req: "Let's check our inventory health. Show me the count of orders have been placed so far.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("orders"), hint: "Apply the counting function to the orders table." },
            { req: "The merchandising team is finalizing the new catalog. Please extract a count of how many products are in the 'Electronics' category for their review.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("electronics"), hint: "Filter for a specific category and then count the matching records." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull the count of users joined after '2023-02-01'. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("2023-02-01"), hint: "Apply a date filter and count the results." },
            { req: "The merchandising team is finalizing the new catalog. Please extract a count of the number of orders with quantity greater than 1 for their review.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 1"), hint: "Filter for orders exceeding a quantity threshold and count them." },
            { req: "We're auditing our stock levels. Can you generate a report of the count of unique product categories do we have ASAP?", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(distinct category)")), hint: "Count only the unique values in the category column." },
            { req: "We're auditing our stock levels. Can you generate a report of a count of the total number of products priced over $100 ASAP?", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 100"), hint: "Filter products by price threshold and count the results." },
            { req: "To prepare for the board meeting, I need an overview of the count of orders were placed on '2023-05-01'.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("2023-05-01"), hint: "Filter for a specific date and count the matching orders." },
            { req: "We found a discrepancy in the logs. Please pull a count of the number of users with emails ending in '.com' to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("like"), hint: "Use pattern matching to filter emails and count the results." },
            { req: "The merchandising team is finalizing the new catalog. Please extract the count of products cost less than $50 for their review.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("< 50"), hint: "Apply a price ceiling filter and count the matching items." }
        ],
        "202": [
            { req: "To prepare for the board meeting, I need an overview of what is the total value of all products in stock?.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(price)")), hint: "Calculate the mathematical total by summing up the values in the price column." },
            { req: "To prepare for the board meeting, I need an overview of the average price of our products.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(price)")), hint: "Think about the statistical average function applied to the cost field." },
            { req: "We found a discrepancy in the logs. Please pull what's the highest price in our store? to help us investigate.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(price)")), hint: "Identify the function that finds the maximum value in a numeric set." },
            { req: "Let's check our inventory health. Show me what's the cheapest product we sell?.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(price)")), hint: "Identify the function that returns the smallest value in the price column." },
            { req: "I'm analyzing our top-performing categories. Can you list the total quantity of all orders combined?", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(quantity)")), hint: "Sum up all the quantities across every order." },
            { req: "Marketing needs a list for their upcoming campaign. Please find what is the average order quantity.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(quantity)")), hint: "Calculate the mean of the quantity column across all orders." },
            { req: "I'm analyzing our top-performing categories. Can you list the total price of all 'Electronics' products?", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(price)") && sql.toLowerCase().includes("electronics")), hint: "Filter for one category and then sum the prices of matching products." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull what's the maximum quantity in any single order. Make sure it's accurate.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(quantity)")), hint: "Find the largest value in the quantity column." },
            { req: "The merchandising team is finalizing the new catalog. Please extract a count of the number of users AND find the earliest join date for their review.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("count") && sql.toLowerCase().includes("min(joined_date)")), hint: "Use two aggregate functions in one query: one for counting and one for the earliest date." },
            { req: "I'm analyzing our top-performing categories. Can you list what is the average price of products under $200?", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(price)") && sql.toLowerCase().includes("< 200")), hint: "Filter products below a price threshold and then calculate the mean." },
            { req: "Marketing needs a list for their upcoming campaign. Please find the total and average price of all products.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(price)") && sql.toLowerCase().includes("avg(price)")), hint: "Use both SUM and AVG in a single query to see the total and mean price." }
        ],
        "203": [
            { req: "We need to evaluate our pricing strategy. Get me a list of products we have in each category.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("count")), hint: "Group the results by their classification and count how many items fall into each bucket." },
            { req: "The merchandising team is finalizing the new catalog. Please extract the average price per product category for their review.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("avg")), hint: "Group the items by classification and calculate the mean cost for each group." },
            { req: "Marketing needs a list for their upcoming campaign. Please find the total order quantity per user.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("sum(quantity)")), hint: "Group orders by customer and sum their quantities." },
            { req: "To prepare for the board meeting, I need an overview of a count of how many orders each user has placed.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("count")), hint: "Group by user identifier and count the number of orders in each group." },
            { req: "We're auditing our stock levels. Can you generate a report of the maximum price per product category ASAP?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("max(price)")), hint: "Group by classification and find the most expensive item in each group." },
            { req: "Let's check our inventory health. Show me the minimum price per product category.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("min(price)")), hint: "Group by category and find the least expensive item in each." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull a count of how many orders were placed on each date. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by order_date") && sql.toLowerCase().includes("count")), hint: "Group the orders by their date and count each day's activity." },
            { req: "Marketing needs a list for their upcoming campaign. Please find the total quantity ordered per product_id.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by product_id") && sql.toLowerCase().includes("sum(quantity)")), hint: "Group by the product identifier and sum the amounts ordered." },
            { req: "I'm analyzing our top-performing categories. Can you list the average quantity per user?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("avg(quantity)")), hint: "Group by customer and calculate the mean order size for each." },
            { req: "We're auditing our stock levels. Can you generate a report of total price (SUM) per product category ASAP?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("sum(price)")), hint: "Group products by their classification and sum all costs in each group." },
            { req: "I'm analyzing our top-performing categories. Can you list a count of the number of products at each distinct price point?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by price") && sql.toLowerCase().includes("count")), hint: "Group by the cost value and count how many items share each price." }
        ],
        "204": [
            { req: "The merchandising team is finalizing the new catalog. Please extract categories have an average price over $100 for their review.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having avg(price) > 100")), hint: "Filter your grouped categories to only show those where the mean cost exceeds a specific threshold." },
            { req: "Marketing needs a list for their upcoming campaign. Please find categories with more than 2 products.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having count(*) > 2")), hint: "Group by classification and then apply a filter to the results based on the number of items per group." },
            { req: "I'm analyzing our top-performing categories. Can you list users have placed more than 1 order?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group orders by customer and filter for those with multiple purchases." },
            { req: "We found a discrepancy in the logs. Please pull categories with a total price (SUM) over $500 to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having sum(price) > 500")), hint: "Group by classification, sum the costs, and filter for high-value groups." },
            { req: "Customer support reported an issue. I need to verify product categories have a minimum price under $50 to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having min(price) < 50")), hint: "Group by category and filter for groups containing at least one affordable item." },
            { req: "We're auditing our stock levels. Can you generate a report of users whose total order quantity exceeds 2 ASAP?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having sum(quantity) > 2")), hint: "Group by customer, sum quantities, and filter for heavy buyers." },
            { req: "We need to evaluate our pricing strategy. Get me a list of categories where the MAX price is over $150.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having max(price) > 150")), hint: "Group by classification and only show those with at least one expensive product." },
            { req: "We're auditing our stock levels. Can you generate a report of order dates had more than 1 order placed ASAP?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by order_date") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by date and filter for busy days." },
            { req: "I'm analyzing our top-performing categories. Can you list product_ids ordered more than once (total quantity > 1)?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by product_id") && sql.toLowerCase().includes("having") && sql.toLowerCase().includes("> 1")), hint: "Group by product and filter for frequently ordered items." },
            { req: "I'm analyzing our top-performing categories. Can you list categories have an average price between $25 and $200?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having avg(price)")), hint: "Group by category and filter the average to a specific range." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull users whose average order quantity is exactly 1. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having avg(quantity) = 1")), hint: "Group by customer and filter for those whose mean quantity is precise." }
        ],
        "205": [
            { req: "We found a discrepancy in the logs. Please pull all unique product categories we carry to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct category")), hint: "Use a keyword that removes duplicates to show each classification only once." },
            { req: "We need to evaluate our pricing strategy. Get me a list of the unique prices our products have.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct price")), hint: "Identify the unique numeric values present in the cost column without repetitions." },
            { req: "Let's check our inventory health. Show me all distinct user IDs who have placed orders.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct user_id")), hint: "Retrieve each customer identifier exactly once from the order records." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull the unique order dates in the system. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct order_date")), hint: "Show each date that an order occurred on, without repeats." },
            { req: "The merchandising team is finalizing the new catalog. Please extract the distinct quantities ordered for their review.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct quantity")), hint: "Retrieve each unique amount value from the orders table." },
            { req: "We need to evaluate our pricing strategy. Get me a list of all unique product names we sell.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct name")), hint: "List each product title exactly once." },
            { req: "Marketing needs a list for their upcoming campaign. Please find the distinct joined dates for our users.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct joined_date")), hint: "Show each unique registration date without duplicates." },
            { req: "Customer support reported an issue. I need to verify the distinct product IDs that have been ordered to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct product_id")), hint: "Find each unique product identifier from the orders table." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull the unique email domains in our user list. (DISTINCT email). Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct email")), hint: "Retrieve each unique email address from the user records." },
            { req: "Customer support reported an issue. I need to verify all distinct combinations of category and price to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("distinct") && sql.toLowerCase().includes("category") && sql.toLowerCase().includes("price"), hint: "Use DISTINCT on multiple columns to see unique category-price pairings." },
            { req: "We found a discrepancy in the logs. Please pull the count of distinct product_ids appear in our orders to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct product_id)")), hint: "Count the number of unique product identifiers in the orders table." }
        ],
        "206": [
            { req: "The merchandising team is finalizing the new catalog. Please extract order IDs and calculate the 'total price' (price * quantity) for their review.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price * quantity")), hint: "Multiply the unit cost by the amount ordered to find the total financial value for each row." },
            { req: "The merchandising team is finalizing the new catalog. Please extract product names and a 10% discounted price (price * 0.9) for their review.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price * 0.9")), hint: "Apply a mathematical calculation in your selection to reduce the cost by ten percent." },
            { req: "Let's check our inventory health. Show me add a $5 handling fee to each product price (price + 5).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price + 5")), hint: "Use addition to increase the cost of each item by a fixed amount." },
            { req: "The merchandising team is finalizing the new catalog. Please extract the price after a $10 discount for each product (price - 10) for their review.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price - 10")), hint: "Subtract a fixed amount from the price column." },
            { req: "I'm analyzing our top-performing categories. Can you list a 15% tax on each product price (price * 0.15)?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price * 0.15")), hint: "Multiply the price by the tax rate percentage." },
            { req: "We're auditing our stock levels. Can you generate a report of each order's total with a 20% markup (price * quantity * 1.2) ASAP?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price * quantity * 1.2") || (sql.toLowerCase().includes("price * quantity") && sql.toLowerCase().includes("* 1.2"))), hint: "Calculate the base total and then apply a percentage increase." },
            { req: "We're auditing our stock levels. Can you generate a report of double the quantity for each order to simulate a restock (quantity * 2) ASAP?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("quantity * 2")), hint: "Multiply the order amount by a factor." },
            { req: "Let's check our inventory health. Show me product names with price + 25% tax (price * 1.25).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price * 1.25")), hint: "Apply a 25% increase to the product cost using multiplication." },
            { req: "I'm analyzing our top-performing categories. Can you list user_id + product_id for each order as a 'combined key'?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("user_id + product_id")), hint: "Use addition on two numeric columns to create a derived value." },
            { req: "We're auditing our stock levels. Can you generate a report of the difference between each product's price and $100 (price - 100) ASAP?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price - 100")), hint: "Subtract a benchmark value from the cost column." },
            { req: "Marketing needs a list for their upcoming campaign. Please find each product's price squared (price * price).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("price * price")), hint: "Multiply the price column by itself." }
        ],
        "207": [
            { req: "I'm analyzing our top-performing categories. Can you list product prices rounded to the nearest dollar?", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(price")), hint: "Apply a math function that rounds decimal values to the closest whole number." },
            { req: "We found a discrepancy in the logs. Please pull the absolute difference between price and 100. to help us investigate.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(price - 100)")), hint: "Use the function that returns the non-negative magnitude of a subtraction result." },
            { req: "To prepare for the board meeting, I need an overview of round product prices to 1 decimal place.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(price, 1)")), hint: "Apply rounding with a specified number of decimal places." },
            { req: "Customer support reported an issue. I need to verify the absolute value of (quantity - 2) for all orders to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(quantity - 2)")), hint: "Calculate the magnitude of each quantity's distance from 2." },
            { req: "I'm analyzing our top-performing categories. Can you list round user_id / 3.0 to 2 decimal places?", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 3")), hint: "Divide and then round the result to a specific precision." },
            { req: "Customer support reported an issue. I need to verify aBS(price - 50) for all products to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(price - 50)")), hint: "Calculate how far each product's cost is from a $50 benchmark." },
            { req: "Marketing needs a list for their upcoming campaign. Please find round the average product price to the nearest dollar.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(price)")), hint: "Combine an aggregate function with a rounding function." },
            { req: "To prepare for the board meeting, I need an overview of aBS(product_id - 103) for each product.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(product_id - 103)")), hint: "Calculate the distance of each ID from a reference value." },
            { req: "We need to evaluate our pricing strategy. Get me a list of round (price * quantity) to the nearest 10 for all orders.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(price * quantity")), hint: "Apply rounding to a calculated total." },
            { req: "Let's check our inventory health. Show me the absolute difference between quantity and 1 for all orders.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(quantity - 1)")), hint: "Calculate how far each order amount differs from a single unit." },
            { req: "I'm analyzing our top-performing categories. Can you list round each product's price / 3 to 2 decimal places?", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(price / 3") || sql.toLowerCase().includes("round(price/3")), hint: "Divide the cost and round the result to a specific precision." }
        ],
        "208": [
            { req: "Let's check our inventory health. Show me divide product prices by 4 to see 'quarterly payments'.", check: (res, sql) => sql.toLowerCase().includes("price / 4"), hint: "Use the division operator to break down the total cost into smaller parts." },
            { req: "The merchandising team is finalizing the new catalog. Please extract quantity / 2.0 for all orders for their review.", check: (res, sql) => sql.toLowerCase().includes("quantity / 2"), hint: "Apply a division operation to the amount ordered column." },
            { req: "Customer support reported an issue. I need to verify divide each product price by 12 to see 'monthly cost' to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("price / 12"), hint: "Break the annual cost into twelve equal segments." },
            { req: "Customer support reported an issue. I need to verify price / quantity for each order to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("price / quantity"), hint: "Find the unit cost by dividing the total by the amount ordered." },
            { req: "The merchandising team is finalizing the new catalog. Please extract product_id / 10.0 for all products for their review.", check: (res, sql) => sql.toLowerCase().includes("product_id / 10"), hint: "Divide the identifier by ten to create a scaled value." },
            { req: "We need to evaluate our pricing strategy. Get me a list of divide the total order value (price * quantity) by 3.", check: (res, sql) => sql.toLowerCase().includes("price * quantity") && sql.toLowerCase().includes("/ 3"), hint: "Calculate the total first, then divide into three parts." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull each user's ID divided by 2.0. Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("user_id / 2"), hint: "Apply division to the user identifier column." },
            { req: "We found a discrepancy in the logs. Please pull price / 100.0 to see 'per-dollar units' to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("price / 100"), hint: "Divide the cost column by one hundred." },
            { req: "I'm analyzing our top-performing categories. Can you list divide quantity by 4.0 for all orders?", check: (res, sql) => sql.toLowerCase().includes("quantity / 4"), hint: "Break the order amount into four equal parts." },
            { req: "Customer support reported an issue. I need to verify order_id / 1000.0 as a fraction for each order to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("order_id / 1000"), hint: "Divide the order identifier by a thousand to see a decimal value." },
            { req: "We found a discrepancy in the logs. Please pull the ratio of price to product_id (price / product_id) to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("price / product_id"), hint: "Divide price by the product's identifier to compute a ratio." }
        ],
        "209": [
            { req: "Customer support reported an issue. I need to verify users whose email is NULL to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is null")), hint: "Think about the specialized operator used to check for missing or unknown data points." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull users that have an email address recorded. Make sure it's accurate.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null")), hint: "Search for records where a specific field is explicitly populated and not empty." },
            { req: "The merchandising team is finalizing the new catalog. Please extract orders where the order_date is NULL for their review.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("order_date") && sql.toLowerCase().includes("is null")), hint: "Check for missing date values in the order records." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull products where the category is NOT NULL. Make sure it's accurate.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("category") && sql.toLowerCase().includes("is not null")), hint: "Filter for products that have a classification recorded." },
            { req: "Customer support reported an issue. I need to verify all orders where quantity is NULL to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("quantity") && sql.toLowerCase().includes("is null")), hint: "Look for orders with missing amount information." },
            { req: "The merchandising team is finalizing the new catalog. Please extract users where the joined_date is NOT NULL for their review.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("joined_date") && sql.toLowerCase().includes("is not null")), hint: "Filter for users who have a registration date on record." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull products where the name is NULL. Make sure it's accurate.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("name") && sql.toLowerCase().includes("is null")), hint: "Check for products missing their title information." },
            { req: "We need to evaluate our pricing strategy. Get me a list of orders where product_id is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("product_id") && sql.toLowerCase().includes("is not null")), hint: "Filter for orders that have a valid product reference." },
            { req: "The merchandising team is finalizing the new catalog. Please extract a count of the number of users with NULL email addresses for their review.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("count") && sql.toLowerCase().includes("is null")), hint: "Combine a counting function with a NULL check." },
            { req: "I'm analyzing our top-performing categories. Can you list users where name is NOT NULL and email IS NULL?", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null") && sql.toLowerCase().includes("is null")), hint: "Combine both NULL checks in one query to find partially complete records." },
            { req: "Customer support reported an issue. I need to verify all products where price is NOT NULL to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("price") && sql.toLowerCase().includes("is not null")), hint: "Filter for items that have a cost value recorded." }
        ],
        "210": [
            { req: "The merchandising team is finalizing the new catalog. Please extract product names and label them 'Expensive' if over $50, else 'Affordable'. Case statement required for their review.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when price > 50"), hint: "Use CASE WHEN price > 50 THEN ... ELSE ... END." },
            { req: "We're auditing our stock levels. Can you generate a report of orders labeled 'Bulk' if quantity > 1, otherwise 'Single' ASAP?", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when quantity > 1"), hint: "Categorize the rows based on the quantity value." },
            { req: "I'm analyzing our top-performing categories. Can you list users labeled 'Founder' if id < 3, else 'Member'?", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when user_id < 3"), hint: "Use conditional logic to create a custom status based on the ID." },
            { req: "Marketing needs a list for their upcoming campaign. Please find products labeled 'Electronics' or 'Other' based on category.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when category = 'electronics'"), hint: "Group everything that isn't Electronics into an 'Other' bucket." },
            { req: "Customer support reported an issue. I need to verify label orders as 'Recent' if date > '2023-05-01', else 'Old' to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when order_date > '2023-05-01'"), hint: "Classify orders based on their date using a comparison." },
            { req: "We need to evaluate our pricing strategy. Get me a list of products labeled 'Premium' if price > 100, else 'Standard'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when price > 100"), hint: "Tag high-cost items." },
            { req: "We're auditing our stock levels. Can you generate a report of users labeled 'Active' if joined after '2023-01-01', else 'Inactive' ASAP?", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when joined_date > '2023-01-01'"), hint: "Segment users by join date." },
            { req: "I'm analyzing our top-performing categories. Can you list orders labeled 'Large' if quantity > 5, else 'Small'?", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when quantity > 5"), hint: "Classify based on order size." },
            { req: "Marketing needs a list for their upcoming campaign. Please find products labeled 'Furniture' or 'Other' based on category.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when category = 'furniture'"), hint: "Isolate Furniture items." },
            { req: "Customer support reported an issue. I need to verify users labeled 'Legacy' if id < 5, else 'New' to troubleshoot.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when user_id < 5"), hint: "Identify early adopters." },
            { req: "We need to evaluate our pricing strategy. Get me a list of users labeled 'Verified' if email IS NOT NULL, else 'Guest'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("is not null"), hint: "Check for email presence." }
        ],
        "211": [
            { req: "Our Q3 sales analysis is coming up. I need you to pull a list of all orders with the user's name attached (INNER JOIN). Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("join") && ((sql.toLowerCase().includes("join users") || sql.toLowerCase().includes("join orders")) && !sql.toLowerCase().includes("left join")), hint: "Combine users and orders tables where the user_id matches." },
            { req: "The merchandising team is finalizing the new catalog. Please extract all products and any associated orders (LEFT JOIN) for their review.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("products") && sql.toLowerCase().includes("left join orders")), hint: "Use LEFT JOIN to keep all products, even those with no orders." },
            { req: "Marketing needs a list for their upcoming campaign. Please find users and their orders. Keep all users (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("users") && sql.toLowerCase().includes("left join orders")), hint: "Ensure every user is listed, regardless of purchase history." },
            { req: "We found a discrepancy in the logs. Please pull order_id and product name (INNER JOIN) to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join products") && !sql.toLowerCase().includes("left join")), hint: "Join orders and products on product_id to connect sales to item names." },
            { req: "We're auditing our stock levels. Can you generate a report of all users and their orders, but only for matches (INNER JOIN) ASAP?", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join orders") && !sql.toLowerCase().includes("left join")), hint: "Only show users who have actually made a purchase." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull orders with User Name and Email (INNER JOIN). Make sure it's accurate.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join users") && sql.toLowerCase().includes("email")), hint: "Extend the order details with user contact info." },
            { req: "The merchandising team is finalizing the new catalog. Please extract orders and their product categories (INNER JOIN) for their review.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join products") && sql.toLowerCase().includes("category")), hint: "Link orders to product categories." },
            { req: "Marketing needs a list for their upcoming campaign. Please find all products and order dates (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("products") && sql.toLowerCase().includes("left join orders")), hint: "List every product and when it was ordered." },
            { req: "We found a discrepancy in the logs. Please pull users and product names they bought (INNER JOIN) to help us investigate.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join orders") && sql.toLowerCase().includes("join products")), hint: "Connect users to products through orders." },
            { req: "We're auditing our stock levels. Can you generate a report of orders with product prices (INNER JOIN) ASAP?", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join products") && sql.toLowerCase().includes("price")), hint: "Add price info to the order list." },
            { req: "Our Q3 sales analysis is coming up. I need you to pull all users and any products they bought (LEFT JOIN chain).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("users") && sql.toLowerCase().includes("left join orders")), hint: "Start with users and join orders, then products." }
        ],
        "212": [
            { req: "I'm analyzing our top-performing categories. Can you list the year from every order date?", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', order_date)") || sql.toLowerCase().includes("date_trunc")), hint: "Extract the year part from the date column." },
            { req: "Customer support reported an issue. I need to verify the order date plus 7 days (estimated delivery) to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date(order_date, '+7 days')") || sql.toLowerCase().includes("+7 days")), hint: "Add a time interval to the existing date." },
            { req: "We're preparing the monthly active user report. I need you to show me the month from the joined_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', joined_date)")), hint: "Format the date to show only the month." },
            { req: "We're auditing our stock levels. Can you generate a report of orders with dates formatted as YYYY-MM ASAP?", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m'")), hint: "Use a formatting function to shape the date string." },
            { req: "Let's check our inventory health. Show me the date 30 days after each user joined.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("'+30 days'")), hint: "Calculate a future date based on the registration timestamp." },
            { req: "I'm analyzing our top-performing categories. Can you list the day of the week for each order?", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w'")), hint: "Get the numeric weekday from the order date." },
            { req: "Customer support reported an issue. I need to verify the order date minus 1 month to troubleshoot.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("'-1 month'")), hint: "Go back in time by one month." },
            { req: "We're preparing the monthly active user report. I need you to show me the day of the month for all join dates.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%d'")), hint: "Extract just the day number." },
            { req: "We're auditing our stock levels. Can you generate a report of order dates formatted as MM/DD/YYYY ASAP?", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m/%d/%y'")), hint: "Change the date display format." },
            { req: "Let's check our inventory health. Show me the start of the year for each order date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-01-01'")), hint: "Normalize all dates to Jan 1st of their year." },
            { req: "I'm analyzing our top-performing categories. Can you list the date 1 year after joining for each user?", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("'+1 year'")), hint: "Calculate the first anniversary." }
        ],
        "213": [
            { req: "Marketing needs a list. Find total revenue (price * quantity) per category, but only for categories with > $5000 total revenue. Group by category.", check: (res, sql) => sql.toLowerCase().includes("sum(price * quantity)") && sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having") && sql.toLowerCase().includes("> 5000"), hint: "Combine aggregation of calculated totals with a grouping rule and a high revenue filter." },
            { req: "Let's check inventory. List product names and total quantity sold (Inner Join Orders) for 'Electronics' items. Sort by total quantity DESC.", check: (res, sql) => sql.toLowerCase().includes("join orders") && sql.toLowerCase().includes("sum(quantity)") && sql.toLowerCase().includes("electronics") && sql.toLowerCase().includes("order by"), hint: "Join tables to link sales to products, filter by category, sum the sales, and rank them." }
        ]
    },
    "saas": {
        "101": [
            { req: "We're preparing the monthly active user report. I need you to show me can you just pull the full list of subscriptions for me.", check: (res, sql) => sql.toLowerCase().includes("subscriptions"), hint: "Think about the table that stores subscription data and how to see all of its info." },
            { req: "We're planning a database migration. I need a dump of everything in the usage_logs table.", check: (res, sql) => sql.toLowerCase().includes("usage_logs"), hint: "Focus on the usage_logs table and how to retrieve every column." },
            { req: "The engineering team needs to debug a login issue. Find all the marketing leads we've collected for them.", check: (res, sql) => sql.toLowerCase().includes("marketing_leads"), hint: "Consider the table containing our lead data and the command to view all entries." },
            { req: "For our Q1 growth analysis, please get me all records from the subscriptions table please.", check: (res, sql) => sql.toLowerCase().includes("subscriptions"), hint: "Try to pull the complete dataset from the subscriptions information." },
            { req: "For our Q1 growth analysis, please get me all data in usage_logs for my daily summary.", check: (res, sql) => sql.toLowerCase().includes("usage_logs"), hint: "Look into the usage records table and retrieve all field data." },
            { req: "I'm investigating a potential data inconsistency. Show me a full dump of the marketing_leads table.", check: (res, sql) => sql.toLowerCase().includes("marketing_leads"), hint: "Retrieve every bit of information stored in the marketing leads table." },
            { req: "We're preparing the monthly active user report. I need you to show me review every single subscription entry in the DB.", check: (res, sql) => sql.toLowerCase().includes("subscriptions"), hint: "Focus on displaying the entire content of the subscriptions table." },
            { req: "I'm investigating a potential data inconsistency. Show me all features and times in the usage_logs.", check: (res, sql) => sql.toLowerCase().includes("usage_logs"), hint: "Think about viewing all columns within the usage logs to see features and durations." },
            { req: "Compliance needs a report on user data access. Please find everything we know about our marketing leads.", check: (res, sql) => sql.toLowerCase().includes("marketing_leads"), hint: "Target the lead table and ask for its complete set of rows and columns." },
            { req: "We're preparing the monthly active user report. I need you to show me up the full subscription database for me.", check: (res, sql) => sql.toLowerCase().includes("subscriptions"), hint: "Think about accessing the table that stores all subscription records and viewing every column." },
            { req: "I need to analyze our churn rate. Can you pull a list of all the data from our usage tracking system?", check: (res, sql) => sql.toLowerCase().includes("usage_logs"), hint: "Focus on the table that logs feature usage activity across all users." }
        ],
        "102": [
            { req: "I need to analyze our churn rate. Can you pull a list of the email and status for all marketing leads?", check: (res, sql) => sql.toLowerCase().includes("email") && sql.toLowerCase().includes("status"), hint: "Identify the columns for email and status within the lead table." },
            { req: "Compliance needs a report on user data access. Please find the feature name and duration for all usage logs.", check: (res, sql) => sql.toLowerCase().includes("feature") && sql.toLowerCase().includes("duration_mins"), hint: "Target the 'feature' and 'duration_mins' fields in the usage records." },
            { req: "We need to audit our subscription tiers. List the user ID and the specific plan type for every subscription for review.", check: (res, sql) => sql.toLowerCase().includes("user_id") && sql.toLowerCase().includes("plan"), hint: "Focus on choosing the 'user_id' and 'plan' columns from the subscription data." },
            { req: "Compliance needs a report on user data access. Please find all emails from our marketing leads please.", check: (res, sql) => sql.toLowerCase().includes("email"), hint: "Isolate only the column containing email addresses for our leads." },
            { req: "Compliance needs a report on user data access. Please find the feature names used in our SaaS.", check: (res, sql) => sql.toLowerCase().includes("feature"), hint: "Look for the specific field in usage_logs that describes which feature was used." },
            { req: "I'm investigating a potential data inconsistency. Show me the monthly_revenue and plan for all subs.", check: (res, sql) => sql.toLowerCase().includes("monthly_revenue") && sql.toLowerCase().includes("plan"), hint: "Retrieve the columns for revenue and subscription plan." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve the scores and sources for all marketing leads.", check: (res, sql) => sql.toLowerCase().includes("score") && sql.toLowerCase().includes("source"), hint: "Identify the 'score' and 'source' columns in the lead tracking table." },
            { req: "I need to analyze our churn rate. Can you pull a list of user_id and duration_mins from the usage logs?", check: (res, sql) => sql.toLowerCase().includes("user_id") && sql.toLowerCase().includes("duration_mins"), hint: "Pick out only the user identifier and the duration field from usage records." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve plans do our users have? Show user_id and plan.", check: (res, sql) => sql.toLowerCase().includes("user_id") && sql.toLowerCase().includes("plan"), hint: "Target the identification and plan type columns in the subscription table." },
            { req: "Compliance needs a report on user data access. Please find the status of every subscription we have.", check: (res, sql) => sql.toLowerCase().includes("status"), hint: "Focus on retrieving the column that tracks the state of each subscription." },
            { req: "We need to audit our subscription tiers. List the lead_id and email for all of our leads for review.", check: (res, sql) => sql.toLowerCase().includes("lead_id") && sql.toLowerCase().includes("email"), hint: "Select only the unique identifier and the contact address from the leads table." }
        ],
        "103": [
            { req: "I need to analyze our churn rate. Can you pull a list of usage logs are for the 'Dashboard' feature?", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("feature = 'dashboard'")), hint: "Filter the usage records based on the feature name." },
            { req: "We're preparing the monthly active user report. I need you to show me marketing leads with a score of exactly 90.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("score = 90")), hint: "Apply a filter to the lead score column to find a specific value." },
            { req: "We're preparing the monthly active user report. I need you to show me all active subscriptions.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("status = 'active'")), hint: "Filter the subscription status for a matching string." },
            { req: "We're preparing the monthly active user report. I need you to show me usage logs that lasted exactly 120 minutes.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("duration_mins = 120")), hint: "Filter by the duration field for a precise number of minutes." },
            { req: "We're planning a database migration. I need a dump of leads from the 'Google' source.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("source = 'google'")), hint: "Filter the lead list to only show those originating from a specific source." },
            { req: "I'm investigating a potential data inconsistency. Show me subscriptions on the 'Pro' plan.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("plan = 'pro'")), hint: "Isolate only the records with a certain plan type." },
            { req: "The engineering team needs to debug a login issue. Find leads are in 'Qualified' status for them.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("status = 'qualified'")), hint: "Apply a filter for the 'Qualified' status." },
            { req: "Compliance needs a report on user data access. Please find usage logs for user 501.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("user_id = 501")), hint: "Filter by user_id using a specific identifier." },
            { req: "The engineering team needs to debug a login issue. Find subscriptions with revenue greater than 100 for them.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("monthly_revenue > 100")), hint: "Filter for a revenue threshold that exceeds a hundred dollars." },
            { req: "To optimize our onboarding flow, please extract logs happened on '2023-04-02'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("2023-04-02")), hint: "Filter by the date column using a specific date string." },
            { req: "I'm investigating a potential data inconsistency. Show me 'Enterprise' subscriptions specifically.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("enterprise")), hint: "Check the plan tier column for a specific high-tier name." }
        ],
        "104": [
            { req: "We're preparing the monthly active user report. I need you to show me active subscriptions on the 'Basic' plan.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("active") && sql.toLowerCase().includes("basic")), hint: "Think about how to require two specific conditions—the state of the subscription and the plan type—to be true simultaneously." },
            { req: "I need to analyze our churn rate. Can you pull a list of usage logs that lasted more than 30 mins for the 'Dashboard' feature?", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("dashboard") && sql.toLowerCase().includes("> 30")), hint: "Filter for records that meet both the feature name and the minimum duration criteria." },
            { req: "I'm investigating a potential data inconsistency. Show me marketing leads have a score above 50 and status 'Qualified'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("> 50") && sql.toLowerCase().includes("qualified")), hint: "Combine the lead score threshold with a specific status in your filters." },
            { req: "We're planning a database migration. I need a dump of usage logs that are NOT the 'Login' feature.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("login")), hint: "Think about excluding a particular feature while viewing the usage data." },
            { req: "I need to analyze our churn rate. Can you pull a list of 'Pro' plans with monthly revenue over $50?", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("pro") && sql.toLowerCase().includes("> 50")), hint: "Look for subscriptions that match both the 'Pro' tier and the revenue minimum." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve leads from 'Google' or 'Facebook'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("google") || sql.toLowerCase().includes("facebook")), hint: "Filter for records that match either one of the specified lead sources." },
            { req: "We're planning a database migration. I need a dump of usage logs for 'Billing' or 'Dashboard'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("billing") || sql.toLowerCase().includes("dashboard")), hint: "Consider how to show results if either the Billing feature OR the Dashboard feature was used." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve subscriptions are 'Active' but NOT 'Pro' plan.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("active") && sql.toLowerCase().includes("not")), hint: "Think about filtering for the active state while specifically leaving out the Pro tier." },
            { req: "I need to analyze our churn rate. Can you pull a list of marketing leads with a score < 20 and source 'Direct'?", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("< 20") && sql.toLowerCase().includes("direct")), hint: "Combine a maximum score limit with a specific lead origin." },
            { req: "We're preparing the monthly active user report. I need you to show me usage logs between 10 and 60 minutes for feature 'Reports'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("reports") && sql.toLowerCase().includes("between 10 and 60")), hint: "Think about combined filters for the report feature and a specific duration range." },
            { req: "The engineering team needs to debug a login issue. Find 'Enterprise' subscriptions started in 2023 for them.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("enterprise") && sql.toLowerCase().includes("2023")), hint: "Filter for a specific plan type alongside a starting year pattern." }
        ],
        "105": [
            { req: "Compliance needs a report on user data access. Please find usage logs that lasted between 10 and 30 minutes.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 10 and 30")), hint: "Look for a keyword that allows you to specify a numeric range for the duration." },
            { req: "I'm investigating a potential data inconsistency. Show me subscriptions with monthly revenue between $20 and $100.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 20 and 100")), hint: "Apply a range filter to the revenue column." },
            { req: "I'm investigating a potential data inconsistency. Show me marketing leads with scores between 40 and 80.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 40 and 80")), hint: "Identify a way to filter scores within a specific low and high boundary." },
            { req: "We're preparing the monthly active user report. I need you to show me start dates between '2023-01-01' and '2023-03-31'.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-01-01"), hint: "Think about using a range filter for the subscription start dates." },
            { req: "Compliance needs a report on user data access. Please find usage log IDs between 500 and 600.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 500 and 600")), hint: "Filter IDs that fall within a certain low and high inclusive limit." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve lead scores are NOT between 0 and 50.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("not between 0 and 50")), hint: "Think about excluding a specific range of scores from your results." },
            { req: "The engineering team needs to debug a login issue. Find subscriptions with revenue between $10 and $100.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 10 and 100")), hint: "Use the BETWEEN operator to define a range for monthly revenue." },
            { req: "Compliance needs a report on user data access. Please find usage logs lasting between 15 and 45 minutes.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 15 and 45")), hint: "Apply the BETWEEN operator to the duration column." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve leads with scores between 50 and 75.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 50 and 75")), hint: "Use BETWEEN on the score column to find leads within the range." },
            { req: "Compliance needs a report on user data access. Please find subscriptions where the revenue is between $50 and $250.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 50 and 250")), hint: "Filter the monthly revenue using the BETWEEN operator." },
            { req: "To optimize our onboarding flow, please extract usage logs where the user ID is between 500 and 505.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 500 and 505")), hint: "Use BETWEEN to find user IDs falling inside that numeric boundary." }
        ],
        "106": [
            { req: "I'm investigating a potential data inconsistency. Show me scores of exactly 40, 85, or 90.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("40") || sql.toLowerCase().includes("90")), hint: "Filter scores that match any specific numeric value in your given list." },
            { req: "To optimize our onboarding flow, please extract logs didn't come from LinkedIn or Google? with NOT.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("not in") && (sql.toLowerCase().includes("linkedin") || sql.toLowerCase().includes("google"))), hint: "Exclude sources that appear in a specific restricted set." },
            { req: "Compliance needs a report on user data access. Please find subscriptions that aren't 'Active' or 'Cancelled'.", check: (res, sql) => sql.toLowerCase().includes("in") && ((sql.toLowerCase().includes("in") || sql.toLowerCase().includes("not in")) && sql.toLowerCase().includes("active")), hint: "Filter for statuses that do NOT fall into your specified category list." },
            { req: "We're planning a database migration. I need a dump of usage for user 504 and 501.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("504") || sql.toLowerCase().includes("501")), hint: "Select records for any user ID that exists within your target set." },
            { req: "I'm investigating a potential data inconsistency. Show me subscriptions for user 501, 502, or 503.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("501") || sql.toLowerCase().includes("503")), hint: "Filter user identifiers that appear in your specified set." },
            { req: "The engineering team needs to debug a login issue. Find get leads from 'LinkedIn' or 'Twitter'. for them.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("linkedin") || sql.toLowerCase().includes("twitter")), hint: "Check if the source matches any item in your target platform list." },
            { req: "We're preparing the monthly active user report. I need you to show me plans 'Free', 'Pro', or 'Enterprise'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("free") || sql.toLowerCase().includes("enterprise")), hint: "Filter the plan type column against a specific set of service level names." },
            { req: "To optimize our onboarding flow, please extract features 'Dashboard', 'API', or 'Reports'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("dashboard") || sql.toLowerCase().includes("reports")), hint: "Identify usage records where the feature name matches any of your specified tools." },
            { req: "We're preparing the monthly active user report. I need you to show me lead statuses are 'New' or 'Qualified'?.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("new") || sql.toLowerCase().includes("qualified")), hint: "Filter the lead state column to show records matching either status in your list." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve get durations of exactly 15, 45, or 120 mins.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("15") || sql.toLowerCase().includes("120")), hint: "Check if the time value matches any number in your specified set." },
            { req: "For our Q1 growth analysis, please get me statuses NOT IN 'Cancelled', 'Paused'. Use NOT IN.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("not in") && (sql.toLowerCase().includes("cancelled") || sql.toLowerCase().includes("paused"))), hint: "Exclude records whose state matches any item in your forbidden list." }
        ],
        "107": [
            { req: "We're planning a database migration. I need a dump of any marketing leads whose email ends with '.com'.", check: (res, sql) => sql.toLowerCase().includes("like") && (sql.includes("'.com'") || sql.includes("'%.com'")), hint: "Think about matching a string that ends with a specific domain suffix." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve usage logs where the feature name starts with 'D'.", check: (res, sql) => sql.toLowerCase().includes("like") && (sql.toLowerCase().includes("'d%'") || sql.toLowerCase().includes('"d%"')), hint: "Consider a way to match features that start with a particular character." },
            { req: "We need to audit our subscription tiers. List marketing leads with 'google' in their email for review.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%google%"), hint: "Look for a pattern matching technique that finds a specific brand name inside an email." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve any usage logs that have the word 'Login' in them.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%login%"), hint: "Search for the substring 'Login' anywhere within the feature column." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve leads have status starting with 'Q'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("q%"), hint: "Think about matching a status that begins with a specific letter." },
            { req: "For our Q1 growth analysis, please get me users whose plan name contains 'o'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%o%"), hint: "Consider pattern matching that looks for a single character anywhere in the plan string." },
            { req: "I'm investigating a potential data inconsistency. Show me marketing leads from 'Yahoo' sources.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%yahoo%"), hint: "Filter for a specific pattern within the lead source values." },
            { req: "We're planning a database migration. I need a dump of search for feature names ending in 's'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%s"), hint: "Think about how to target strings that end with a specific character." },
            { req: "We're planning a database migration. I need a dump of any emails containing 'pro'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%pro%"), hint: "Focus on finding a specific sequence of letters within the email addresses." },
            { req: "The engineering team needs to debug a login issue. Find lookup lead names with 'J' in them for them.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%j%"), hint: "Filter for a specific character substring across all lead records." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve usage logs with duration starting with '1'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("1%"), hint: "Identify records where the duration string representation starts with a particular digit." }
        ],
        "108": [
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
        ],
        "109": [
            { req: "For our Q1 growth analysis, please get me all subscriptions sorted alphabetically by plan.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by plan")), hint: "Think about how to arrange your results based on the plan column." },
            { req: "For our Q1 growth analysis, please get me marketing leads sorted by score from highest to lowest.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by score") && sql.toLowerCase().includes("desc")), hint: "Consider sorting the scores in descending order." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve usage logs, sorted by duration (shortest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by duration_mins") && !sql.toLowerCase().includes("desc")), hint: "Sort by minutes so that the smallest values appear at the top." },
            { req: "For our Q1 growth analysis, please get me subscriptions sorted by status and then by revenue.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by status") && sql.toLowerCase().includes("revenue")), hint: "Apply multiple levels of sorting, starting with the group." },
            { req: "I need to analyze our churn rate. Can you pull a list of marketing leads, sorted by source alphabetically?", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by source")), hint: "Arrange the sources from A to Z." },
            { req: "Compliance needs a report on user data access. Please find all features used, sorted alphabetically.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by feature")), hint: "Set a sorting rule for the feature names in usage logs." },
            { req: "For our Q1 growth analysis, please get me subscriptions for user 501, sorted by revenue (highest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("user_id = 501") && sql.toLowerCase().includes("order by monthly_revenue desc")), hint: "Combine a user filter with a descending sort on revenue." },
            { req: "For our Q1 growth analysis, please get me marketing statuses in reverse alphabetical order.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by status desc")), hint: "Sort the statuses from Z to A." },
            { req: "We're planning a database migration. I need a dump of usage logs sorted by user_id.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by user_id")), hint: "Organize the results based on the user identifier column." },
            { req: "We need to audit our subscription tiers. List the newest marketing leads (latest ID first) for review.", check: (res, sql) => sql.toLowerCase().includes("order by") && ((sql.toLowerCase().includes("order by lead_id desc") || sql.toLowerCase().includes("order by id desc"))), hint: "Sort by the identifier column in descending order." },
            { req: "To optimize our onboarding flow, please extract all 'Pro' subscriptions sorted by start date.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("pro") && sql.toLowerCase().includes("order by start_date")), hint: "Filter for a specific plan and then arrange the results chronologically." }
        ],
        "110": [
            { req: "We're preparing the monthly active user report. I need you to show me active Pro or Enterprise subscriptions with revenue over $100, newest first.", check: (res, sql) => (sql.toLowerCase().includes("active")) && (sql.toLowerCase().includes("pro") || sql.toLowerCase().includes("enterprise")) && sql.toLowerCase().includes("> 100") && sql.toLowerCase().includes("order by start_date desc"), hint: "Think about combining multiple plan filters, a revenue threshold, and a chronological sort." },
            { req: "We need to audit our subscription tiers. List google or Facebook leads with scores between 50 and 90, sorted by score for review.", check: (res, sql) => (sql.toLowerCase().includes("google") || sql.toLowerCase().includes("facebook")) && sql.toLowerCase().includes("between 50 and 90") && sql.toLowerCase().includes("order by score"), hint: "Focus on combining source filters with a numeric range and then organizing the results." },
            { req: "We're preparing the monthly active user report. I need you to show me usage logs for 'Dashboard' or 'API' that lasted over 20 mins, sorted by duration.", check: (res, sql) => (sql.toLowerCase().includes("dashboard") || sql.toLowerCase().includes("api")) && sql.toLowerCase().includes("> 20") && sql.toLowerCase().includes("order by duration_mins"), hint: "Consider multiple feature filters, a duration minimum, and a numeric sort." },
            { req: "To optimize our onboarding flow, please extract marketing leads with 'google' in their email and score > 70, latest leads first.", check: (res, sql) => sql.toLowerCase().includes("%google%") && sql.toLowerCase().includes("> 70") && (sql.toLowerCase().includes("order by lead_id desc") || sql.toLowerCase().includes("order by id desc")), hint: "Use a mix of pattern matching, numeric filters, and an identifier-based sort." },
            { req: "Compliance needs a report on user data access. Please find 'Trail' subscriptions have monthly revenue between $0 and $50? Sort by revenue.", check: (res, sql) => (sql.toLowerCase().includes("trialing") || sql.toLowerCase().includes("trial")) && sql.toLowerCase().includes("between 0 and 50") && sql.toLowerCase().includes("order by monthly_revenue"), hint: "Think about filtering for trailing status, a revenue range, and then ordering by the revenue value." },
            { req: "The engineering team needs to debug a login issue. Find all 'Cancelled' subscriptions that started before '2023-04-01', sorted by start_date DESC for them.", check: (res, sql) => sql.toLowerCase().includes("cancelled") && sql.toLowerCase().includes("< '2023-04-01'") && sql.toLowerCase().includes("order by start_date desc"), hint: "Combine a status filter, a date threshold, and a reverse-chronological sort." },
            { req: "To optimize our onboarding flow, please extract usage_logs NOT for 'Dashboard' where duration is between 10 and 100 mins. Sort by log_id.", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("dashboard") && sql.toLowerCase().includes("between 10 and 100") && sql.toLowerCase().includes("order by log_id"), hint: "Exclude one feature, apply a time range, and sort by identifier." },
            { req: "I'm investigating a potential data inconsistency. Show me leads from 'LinkedIn' with scores > 80 whose email contains '.io'. Sort by score DESC.", check: (res, sql) => sql.toLowerCase().includes("linkedin") && sql.toLowerCase().includes("> 80") && sql.toLowerCase().includes(".io") && sql.toLowerCase().includes("order by score desc"), hint: "Combine a source filter, a minimum score, an email pattern, and a descending sort." },
            { req: "We need to audit our subscription tiers. List subscriptions with user_id IN (501, 502, 504) that have status NOT 'Cancelled'. Sort by monthly_revenue DESC for review.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("order by monthly_revenue desc"), hint: "Use a list filter for users, exclude a status, and arrange by earnings descending." },
            { req: "I need to analyze our churn rate. Can you pull a list of leads with emails starting with 'j' or 'm' and score between 40 and 90. Sort by lead_id?", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("between 40 and 90") && sql.toLowerCase().includes("order by lead_id"), hint: "Combine email pattern matching, a score range, and an ID sort." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve all usage logs for user_id 501 or 502, NOT for 'Reports', sorted by date DESC.", check: (res, sql) => (sql.toLowerCase().includes("501") || sql.toLowerCase().includes("502")) && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("order by date desc"), hint: "Filter for specific users, exclude a feature, and sort newest first." }
        ],
        "201": [
            { req: "I'm investigating a potential data inconsistency. Show me the count of active subscriptions do we have.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("active"), hint: "Count the number of records that match a specific active status." },
            { req: "For our Q1 growth analysis, please get me total number of usage logs recorded.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(*)")), hint: "Use the global counting function to see the total volume of activity logs." },
            { req: "For our Q1 growth analysis, please get me a count of how many marketing leads we've collected.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("marketing_leads"), hint: "Apply the counting function to the leads table." },
            { req: "I need to analyze our churn rate. Can you pull a list of the count of subscriptions are on the 'Pro' plan?", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("pro"), hint: "Filter for a specific plan and count the matching records." },
            { req: "I need to analyze our churn rate. Can you pull a list of a count of usage logs with duration over 30 minutes?", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 30"), hint: "Filter for long sessions and count them." },
            { req: "We're planning a database migration. I need a dump of the count of leads came from 'Google'.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("google"), hint: "Filter by source and count the results." },
            { req: "We're preparing the monthly active user report. I need you to show me a count of the number of 'Cancelled' subscriptions.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("cancelled"), hint: "Filter for a specific status and count the matching entries." },
            { req: "We're planning a database migration. I need a dump of the count of usage logs are for the 'Dashboard' feature.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("dashboard"), hint: "Filter by feature name and count the records." },
            { req: "To optimize our onboarding flow, please extract a count of leads with scores above 50.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 50"), hint: "Apply a minimum score filter and count the results." },
            { req: "The engineering team needs to debug a login issue. Find the count of distinct lead sources exist for them.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(distinct source)")), hint: "Count only the unique values in the source column." },
            { req: "We need to audit our subscription tiers. List a count of usage logs that lasted less than 15 minutes for review.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("< 15"), hint: "Filter for short sessions and count them." }
        ],
        "202": [
            { req: "I need to analyze our churn rate. Can you pull a list of what is our Total Monthly Recurring Revenue (SUM of monthly_revenue)?", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(monthly_revenue)")), hint: "Calculate the grand total of the revenue column to find our MRR." },
            { req: "We're preparing the monthly active user report. I need you to show me the average duration of our feature usage sessions.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(duration_mins)")), hint: "Use the mean-calculating function on the time-spent column." },
            { req: "We need to audit our subscription tiers. List what's the highest lead score we've achieved for review.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(score)")), hint: "Identify the maximum value present in the numeric scoring field." },
            { req: "To optimize our onboarding flow, please extract what is the lowest monthly revenue from any subscription.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(monthly_revenue)")), hint: "Find the smallest revenue value across all subscriptions." },
            { req: "The engineering team needs to debug a login issue. Find the total duration minutes across all usage logs for them.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(duration_mins)")), hint: "Sum up all the time spent across every session." },
            { req: "I'm investigating a potential data inconsistency. Show me what's the average lead score in our system.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(score)")), hint: "Calculate the mean of the score column." },
            { req: "We're planning a database migration. I need a dump of the earliest subscription start date.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(start_date)")), hint: "Identify the smallest date value to find the first subscription." },
            { req: "To optimize our onboarding flow, please extract what's the maximum usage duration we've recorded.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(duration_mins)")), hint: "Find the longest session in the duration column." },
            { req: "For our Q1 growth analysis, please get me total and average revenue for all subscriptions.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(monthly_revenue)") && sql.toLowerCase().includes("avg(monthly_revenue)")), hint: "Use both SUM and AVG in a single query." },
            { req: "We're planning a database migration. I need a dump of what's the average revenue for 'Active' subscriptions only.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(monthly_revenue)") && sql.toLowerCase().includes("active")), hint: "Filter for active status and then calculate the mean revenue." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve the minimum and maximum lead scores.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(score)") && sql.toLowerCase().includes("max(score)")), hint: "Use both MIN and MAX in one query to see the score range." }
        ],
        "203": [
            { req: "We're planning a database migration. I need a dump of total items per subscription plan.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by plan") && sql.toLowerCase().includes("count")), hint: "Group the data by the service level and count the number of users in each." },
            { req: "To optimize our onboarding flow, please extract total revenue per source of marketing leads.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by source") && sql.toLowerCase().includes("sum")), hint: "Group by the origin of the lead and sum up their associated financial values." },
            { req: "I need to analyze our churn rate. Can you pull a list of a count of how many usage logs exist per feature?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by feature") && sql.toLowerCase().includes("count")), hint: "Group the activity data by feature name and count each group." },
            { req: "The engineering team needs to debug a login issue. Find total revenue per subscription status for them.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("sum(monthly_revenue)")), hint: "Group by the subscription state and sum the revenue for each." },
            { req: "To optimize our onboarding flow, please extract the average lead score per source.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by source") && sql.toLowerCase().includes("avg(score)")), hint: "Group by lead origin and calculate the mean score for each." },
            { req: "I need to analyze our churn rate. Can you pull a list of maximum usage duration per feature?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by feature") && sql.toLowerCase().includes("max(duration_mins)")), hint: "Group by feature name and find the longest session in each." },
            { req: "I need to analyze our churn rate. Can you pull a list of a count of subscriptions per status?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("count")), hint: "Group by the subscription state and count each group." },
            { req: "We're planning a database migration. I need a dump of average revenue per plan type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by plan") && sql.toLowerCase().includes("avg(monthly_revenue)")), hint: "Group by service tier and calculate the mean earnings." },
            { req: "The engineering team needs to debug a login issue. Find the total usage minutes per user_id for them.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("sum(duration_mins)")), hint: "Group by customer identifier and sum the time spent." },
            { req: "To optimize our onboarding flow, please extract a count of leads per score range (GROUP BY score).", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by score") && sql.toLowerCase().includes("count")), hint: "Group by the score value and count how many leads share each score." },
            { req: "To optimize our onboarding flow, please extract minimum revenue per subscription plan.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by plan") && sql.toLowerCase().includes("min(monthly_revenue)")), hint: "Group by plan type and find the lowest revenue in each." }
        ],
        "204": [
            { req: "For our Q1 growth analysis, please get me features have an average usage duration over 30 mins.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by feature") && sql.toLowerCase().includes("having avg(duration_mins) > 30")), hint: "Group by the tool name and filter the results to show only those where the mean time spent exceeds a limit." },
            { req: "We're preparing the monthly active user report. I need you to show me plans that generate more than $100 in total revenue.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by plan") && sql.toLowerCase().includes("having sum(monthly_revenue) > 100")), hint: "Group by the service level and only return those whose aggregate earnings meet a minimum threshold." },
            { req: "We need to audit our subscription tiers. List lead sources have more than 1 lead for review.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by source") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by origin and filter for sources that delivered multiple leads." },
            { req: "We're preparing the monthly active user report. I need you to show me plans with more than 2 subscriptions.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by plan") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 2")), hint: "Group by plan type and filter for popular tiers." },
            { req: "To optimize our onboarding flow, please extract features have total usage over 100 minutes.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by feature") && sql.toLowerCase().includes("having sum(duration_mins) > 100")), hint: "Group by feature, sum the durations, and filter for high-usage tools." },
            { req: "We're planning a database migration. I need a dump of sources with average lead score above 60.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by source") && sql.toLowerCase().includes("having avg(score) > 60")), hint: "Group by lead origin and show only those with high average scores." },
            { req: "I'm investigating a potential data inconsistency. Show me statuses have average revenue over $50.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("having avg(monthly_revenue) > 50")), hint: "Group by subscription state and filter for profitable status groups." },
            { req: "To optimize our onboarding flow, please extract users with more than 2 usage log entries.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 2")), hint: "Group by user and filter for active users with many sessions." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve plans have maximum revenue over $80.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by plan") && sql.toLowerCase().includes("having max(monthly_revenue) > 80")), hint: "Group by tier and filter for plans with at least one high-revenue subscription." },
            { req: "I need to analyze our churn rate. Can you pull a list of features with minimum usage under 10 minutes?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by feature") && sql.toLowerCase().includes("having min(duration_mins) < 10")), hint: "Group by feature and filter for those with at least one short session." },
            { req: "Compliance needs a report on user data access. Please find sources have total lead count exactly 1.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by source") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("= 1")), hint: "Group by source and filter for those with exactly one lead." }
        ],
        "205": [
            { req: "To optimize our onboarding flow, please extract all unique plan types we offer.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct plan")), hint: "Identify each service level type exactly once using a duplicate-removal keyword." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve what unique marketing sources do we track.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct source")), hint: "Retrieve each lead origin point without repetition." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve all distinct subscription statuses.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct status")), hint: "List each subscription state type exactly once." },
            { req: "We need to audit our subscription tiers. List what unique features are tracked in usage logs for review.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct feature")), hint: "Show each tracked tool name without duplicates." },
            { req: "The engineering team needs to debug a login issue. Find all distinct user IDs with subscriptions for them.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct user_id")), hint: "Retrieve each customer identifier exactly once." },
            { req: "To optimize our onboarding flow, please extract all unique lead scores in the system.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct score")), hint: "List each unique score value without repetition." },
            { req: "The engineering team needs to debug a login issue. Find the distinct monthly revenue values for them.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct monthly_revenue")), hint: "Show each unique revenue amount once." },
            { req: "I'm investigating a potential data inconsistency. Show me distinct start dates for subscriptions.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct start_date")), hint: "Show each unique subscription start date." },
            { req: "We're planning a database migration. I need a dump of the count of distinct features are tracked.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct feature)")), hint: "Count the number of unique feature names." },
            { req: "Compliance needs a report on user data access. Please find all unique email domains. (DISTINCT email).", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct email")), hint: "Retrieve each unique email address from the leads table." },
            { req: "We're planning a database migration. I need a dump of the count of distinct plan types do we offer.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct plan)")), hint: "Count the number of unique service levels." }
        ],
        "206": [
            { req: "We're monitoring user engagement for the new feature. Please retrieve annual revenue per subscription (monthly_revenue * 12).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("monthly_revenue * 12")), hint: "Multiply the monthly earnings by a full year's worth of months in your selection." },
            { req: "I need to analyze our churn rate. Can you pull a list of 'Total Mins' as duration_mins + 1 (assuming 1 min overhead)?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("duration_mins + 1")), hint: "Perform a simple addition on the time column to account for a fixed overhead value." },
            { req: "I need to analyze our churn rate. Can you pull a list of monthly_revenue with a 10% bonus (monthly_revenue * 1.10)?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("monthly_revenue * 1.1")), hint: "Multiply the revenue by a bonus factor." },
            { req: "The engineering team needs to debug a login issue. Find quarterly revenue (monthly_revenue * 3) for them.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("monthly_revenue * 3")), hint: "Multiply monthly earnings by three to estimate quarterly revenue." },
            { req: "We're planning a database migration. I need a dump of lead scores doubled (score * 2).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("score * 2")), hint: "Multiply the evaluation score by two." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve add a 5-minute buffer to each usage duration (duration_mins + 5).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("duration_mins + 5")), hint: "Add a fixed time buffer to the session duration." },
            { req: "We need to audit our subscription tiers. List revenue after a $10 discount (monthly_revenue - 10) for review.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("monthly_revenue - 10")), hint: "Subtract a fixed amount from the revenue column." },
            { req: "For our Q1 growth analysis, please get me score + user_id as a 'combined key' for leads.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("score + ") || sql.toLowerCase().includes("+ lead_id")), hint: "Use addition on two numeric columns." },
            { req: "We're planning a database migration. I need a dump of usage duration in seconds (duration_mins * 60).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("duration_mins * 60")), hint: "Convert minutes to seconds using multiplication." },
            { req: "The engineering team needs to debug a login issue. Find the difference between lead score and 50 (score - 50) for them.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("score - 50")), hint: "Subtract a benchmark from the score column." },
            { req: "Compliance needs a report on user data access. Please find monthly_revenue squared (monthly_revenue * monthly_revenue).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("monthly_revenue * monthly_revenue")), hint: "Multiply the revenue column by itself." }
        ],
        "207": [
            { req: "The engineering team needs to debug a login issue. Find round lead scores to the nearest 10 for them.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(score")), hint: "Apply a rounding function to the numeric evaluation column." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve the absolute difference between revenue and 50.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(monthly_revenue - 50)")), hint: "Use the magnitude function to see the distance from a $50 benchmark." },
            { req: "To optimize our onboarding flow, please extract round monthly_revenue to the nearest dollar.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(monthly_revenue")), hint: "Apply rounding to the revenue column." },
            { req: "We need to audit our subscription tiers. List aBS(score - 70) for all leads for review.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(score - 70)")), hint: "Calculate how far each score is from a 70-point benchmark." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve round duration_mins / 60.0 to 2 decimal places.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 60")), hint: "Convert to hours and round the result." },
            { req: "We need to audit our subscription tiers. List aBS(duration_mins - 30) for all usage logs for review.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(duration_mins - 30)")), hint: "Calculate the distance of each session from a 30-minute baseline." },
            { req: "We're preparing the monthly active user report. I need you to show me round the average lead score to the nearest integer.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(score)")), hint: "Combine an aggregate with a rounding function." },
            { req: "We're preparing the monthly active user report. I need you to show me aBS(monthly_revenue - 100) for all subscriptions.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(monthly_revenue - 100)")), hint: "Calculate revenue distance from a $100 benchmark." },
            { req: "I need to analyze our churn rate. Can you pull a list of round lead_id / 5.0 to 1 decimal place?", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 5")), hint: "Divide and round the result." },
            { req: "We need to audit our subscription tiers. List aBS(score - 50) for leads with score > 40 for review.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(score - 50)") && sql.toLowerCase().includes("> 40")), hint: "Combine a filter with an absolute value calculation." },
            { req: "We're planning a database migration. I need a dump of round monthly_revenue to 1 decimal place.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(monthly_revenue, 1)")), hint: "Apply rounding with a specified decimal precision." }
        ],
        "208": [
            { req: "Compliance needs a report on user data access. Please find divide monthly revenue by user count (mock 10) to see ARPU.", check: (res, sql) => sql.toLowerCase().includes("monthly_revenue / 10"), hint: "Use division to calculate the earnings per individual in this scenario." },
            { req: "For our Q1 growth analysis, please get me duration_mins / 60.0 to see usage in hours.", check: (res, sql) => sql.toLowerCase().includes("duration_mins / 60"), hint: "Convert the minutes column into a larger time unit using division." },
            { req: "The engineering team needs to debug a login issue. Find divide lead scores by 10 to normalize for them.", check: (res, sql) => sql.toLowerCase().includes("score / 10"), hint: "Scale down the scores by dividing by ten." },
            { req: "We're preparing the monthly active user report. I need you to show me monthly_revenue / 4 as 'weekly revenue'.", check: (res, sql) => sql.toLowerCase().includes("monthly_revenue / 4"), hint: "Divide monthly earnings by four to estimate weekly." },
            { req: "The engineering team needs to debug a login issue. Find duration_mins / 2.0 for all logs for them.", check: (res, sql) => sql.toLowerCase().includes("duration_mins / 2"), hint: "Find half the session time." },
            { req: "The engineering team needs to debug a login issue. Find divide lead_id by 100.0 for all leads for them.", check: (res, sql) => sql.toLowerCase().includes("lead_id / 100"), hint: "Scale down the identifier column." },
            { req: "Compliance needs a report on user data access. Please find score / 100.0 as a percentage for leads.", check: (res, sql) => sql.toLowerCase().includes("score / 100"), hint: "Convert the score to a decimal percentage." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve monthly_revenue / 30.0 for a 'daily rate'.", check: (res, sql) => sql.toLowerCase().includes("monthly_revenue / 30"), hint: "Estimate the daily earnings by dividing monthly by thirty." },
            { req: "The engineering team needs to debug a login issue. Find divide sub_id by 10.0 for all subscriptions for them.", check: (res, sql) => sql.toLowerCase().includes("sub_id / 10"), hint: "Scale down the subscription identifier." },
            { req: "We need to audit our subscription tiers. List duration_mins / 5.0 as '5-min blocks' for review.", check: (res, sql) => sql.toLowerCase().includes("duration_mins / 5"), hint: "Divide the session time into five-minute segments." },
            { req: "Compliance needs a report on user data access. Please find the ratio of score to lead_id (score / lead_id).", check: (res, sql) => sql.toLowerCase().includes("score / lead_id"), hint: "Divide the score by the identifier to create a ratio." }
        ],
        "209": [
            { req: "We're preparing the monthly active user report. I need you to show me leads where the status is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is null")), hint: "Think about the operator used to detect data points that haven't been filled in yet." },
            { req: "To optimize our onboarding flow, please extract usage logs where the feature is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null")), hint: "Filter for records where a specific activity label has been successfully recorded." },
            { req: "The engineering team needs to debug a login issue. Find subscriptions where start_date is NULL for them.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("start_date") && sql.toLowerCase().includes("is null")), hint: "Check for missing subscription start dates." },
            { req: "I need to analyze our churn rate. Can you pull a list of leads where email is NOT NULL?", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("email") && sql.toLowerCase().includes("is not null")), hint: "Filter for leads that have contact information recorded." },
            { req: "Compliance needs a report on user data access. Please find usage logs where duration_mins is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("duration_mins") && sql.toLowerCase().includes("is null")), hint: "Look for sessions with missing time data." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve subscriptions where monthly_revenue is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("monthly_revenue") && sql.toLowerCase().includes("is not null")), hint: "Filter for subscriptions with recorded earnings." },
            { req: "I'm investigating a potential data inconsistency. Show me leads where source is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("source") && sql.toLowerCase().includes("is null")), hint: "Check for leads with unknown origins." },
            { req: "We're preparing the monthly active user report. I need you to show me usage logs where user_id is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("user_id") && sql.toLowerCase().includes("is not null")), hint: "Filter for sessions tied to a known user." },
            { req: "We're preparing the monthly active user report. I need you to show me a count of leads where status IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("count") && sql.toLowerCase().includes("is null")), hint: "Combine counting with a NULL check." },
            { req: "I'm investigating a potential data inconsistency. Show me subscriptions where status is NOT NULL and plan IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null") && sql.toLowerCase().includes("is null")), hint: "Combine both NULL checks in one query." },
            { req: "We need to audit our subscription tiers. List leads where score is NOT NULL for review.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("score") && sql.toLowerCase().includes("is not null")), hint: "Filter for leads that have been scored." }
        ],
        "210": [
            { req: "I need to analyze our churn rate. Can you pull a list of subscriptions labeled 'Premium' if revenue > 100, else 'Standard'?", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when monthly_revenue > 100"), hint: "Use conditional logic to categorize based on the revenue amount." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve usage logs labeled 'Intense' if duration > 60, else 'Normal'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when duration_mins > 60"), hint: "Classify the sessions based on their length using CASE." },
            { req: "To optimize our onboarding flow, please extract leads labeled 'Priority' if score > 80, else 'Regular'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when score > 80"), hint: "Create a custom priority label based on the lead score." },
            { req: "We're planning a database migration. I need a dump of usage logs labeled 'Long' if > 30 mins, else 'Short'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when duration_mins > 30"), hint: "Group the time logs into two duration buckets." },
            { req: "Compliance needs a report on user data access. Please find subscriptions labeled 'Paid' if revenue > 0, else 'Free'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when monthly_revenue > 0"), hint: "Distinguish between paying and non-paying accounts." },
            { req: "Marketing wants to tag products. Label products 'Budget' if price < 20, else 'Standard'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when price < 20"), hint: "Use CASE to create a pricing tier." },
            { req: "Categorize our users based on tenure. Label 'Early' if user_id < 5, else 'Late'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when user_id < 5"), hint: "Segment users by their ID number." },
            { req: "We're auditing order sizes. Label orders 'Large' if quantity > 5, else 'Small'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when quantity > 5"), hint: "Classify orders by the number of items." },
            { req: "Identify high-value items. Label products 'Luxury' if price > 100, else 'Regular'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when price > 100"), hint: "Spot expensive items with a conditional tag." },
            { req: "Check for verified emails. Label users 'Verified' if email IS NOT NULL, else 'Unverified'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("is not null"), hint: "Combine CASE with IS NOT NULL logic." },
            { req: "We need a bulk order report. Label orders 'Bulk' if quantity > 10, else 'Single'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when quantity > 10"), hint: "Tag large quantity orders." }
        ],
        "211": [
            { req: "The engineering team needs to debug a login issue. Find subscriptions and their usage logs (INNER JOIN) for them.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join usage_logs") && !sql.toLowerCase().includes("left join")), hint: "Connect the subscription and usage tables allowing only matching records." },
            { req: "We're preparing the monthly active user report. I need you to show me all subscriptions and any linked usage (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("subscriptions") && sql.toLowerCase().includes("left join usage_logs")), hint: "Keep every subscription record, even if there is no usage data found." },
            { req: "I'm investigating a potential data inconsistency. Show me plan and feature usage (INNER JOIN) for active users.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join usage_logs") && sql.toLowerCase().includes("plan") && sql.toLowerCase().includes("feature")), hint: "Join the tables to see which features correspond to each subscription plan." },
            { req: "To optimize our onboarding flow, please extract logs for users with a 'Pro' subscription (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join subscriptions") && sql.toLowerCase().includes("pro")), hint: "Filter the joined results to show only usage for the specific tier." },
            { req: "We're monitoring user engagement for the new feature. Please retrieve all usage logs and their sub start dates (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("usage_logs") && sql.toLowerCase().includes("left join subscriptions")), hint: "List every usage event and attach subscription details where available." },
            { req: "We need to link users to their orders. Show me user names and their order amounts (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join orders") && sql.toLowerCase().includes("name") && sql.toLowerCase().includes("amount")), hint: "Connect users to their purchase history." },
            { req: "Inventory check. List product names and their order quantities (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join orders") && sql.toLowerCase().includes("product") && sql.toLowerCase().includes("quantity")), hint: "See which products have been sold." },
            { req: "Customer audit. Show me ALL users and their order dates (LEFT JOIN) even if they haven't ordered.", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join orders")), hint: "Keep the user list complete, inserting NULLs for non-buyers." },
            { req: "Product catalog review. Show me ALL products and any associated order IDs (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join orders")), hint: "List every product and see if it has sales data." },
            { req: "Sales details. Show me order dates and the name of the user who placed them (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join users") && sql.toLowerCase().includes("name")), hint: "Link the order back to the customer profile." },
            { req: "Full user history. Show me users, their join dates, and any order amounts (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join orders") && sql.toLowerCase().includes("amount")), hint: "Retrieve a comprehensive user profile with potential sales." }
        ],
        "212": [
            { req: "I need to analyze our churn rate. Can you pull a list of the year each subscription started?", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', start_date)")), hint: "Extract the year portion from the start date column." },
            { req: "We're planning a database migration. I need a dump of the month from usage log dates.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', date)")), hint: "Isolate the month value from the usage date." },
            { req: "The engineering team needs to debug a login issue. Find the date 30 days after subscription start for them.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date(start_date, '+30 days')") || sql.toLowerCase().includes("+30 days")), hint: "Calculate the renewal date by adding a month to the start time." },
            { req: "To optimize our onboarding flow, please extract usage dates formatted as YYYY-MM.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m'")), hint: "Format the date string to show year and month only." },
            { req: "Compliance needs a report on user data access. Please find the day of the week for each log entry.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w'")), hint: "Use the strftime function to get the numeric weekday." },
            { req: "Yearly review. Extract just the year from the order_date column.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', order_date)")), hint: "Pull the 4-digit year from the timestamp." },
            { req: "Monthly sales. Extract just the month from the order_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', order_date)")), hint: "Isolate the 2-digit month." },
            { req: "Estimated delivery. Calculate the date 7 days after the order_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date(order_date, '+7 days')") || sql.toLowerCase().includes("+7 days")), hint: "Add a week to the purchase date." },
            { req: "Cohort analysis. Format the user joined_date as 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', joined_date)")), hint: "Create a monthly cohort string." },
            { req: "Shipping schedule. Find the day of the week for all order_dates.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', order_date)")), hint: "Determine which weekday orders are placed on." },
            { req: "System check. Query the current date using the 'now' modifier.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date('now')")), hint: "Get today's server date." }
        ],
        "213": [
            { req: "Executive report. Calculate average time_spent (from usage_logs) per plan (from subscriptions). Group by Plan.", check: (res, sql) => sql.toLowerCase().includes("avg(duration_mins)") && sql.toLowerCase().includes("join subscriptions") && sql.toLowerCase().includes("group by plan"), hint: "Join usage logs with subscriptions to group duration by plan type." },
            { req: "Churn risk. Count usage sessions (from usage_logs) per subscription plan (from subscriptions) where duration_mins < 10. Group by plan.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("join subscriptions") && sql.toLowerCase().includes("duration_mins < 10") && sql.toLowerCase().includes("group by plan"), hint: "Join tables and count short sessions for each plan type." }
        ]
    },
    // Adding variations for HR, Healthcare, Finance - Progressively Harder
    "hr": {
        "101": [
            { req: "For the upcoming diversity and inclusion audit, please extract every employee in the system for our audit.", check: (res, sql) => sql.toLowerCase().includes("employees"), hint: "Think about the table that stores employee records and how to pull all its data." },
            { req: "We're finalizing the annual headcount report. Please list the full departments list.", check: (res, sql) => sql.toLowerCase().includes("departments"), hint: "Identify the table containing department information and retrieve every entry." },
            { req: "For the upcoming diversity and inclusion audit, please extract everything in the salaries table.", check: (res, sql) => sql.toLowerCase().includes("salaries"), hint: "Consider the table that tracks compensation and how to view all columns." },
            { req: "Legal requires a report on hiring dates. Find all employee records now immediately.", check: (res, sql) => sql.toLowerCase().includes("employees"), hint: "Focus on the primary table for staff members and pull a complete list." },
            { req: "I'm updated the employee directory. Please pull the full dump of the departments data.", check: (res, sql) => sql.toLowerCase().includes("departments"), hint: "Retrieve the entire set of data from our organizational structure table." },
            { req: "We need to track our recruitment pipeline. Can you show me all salaries recorded?", check: (res, sql) => sql.toLowerCase().includes("salaries"), hint: "Access the compensation database and show every record available." },
            { req: "The benefits team needs to verify employee eligibility. Find look at every single employee again.", check: (res, sql) => sql.toLowerCase().includes("employees"), hint: "Standard request to view the complete staff list once more." },
            { req: "We need to track our recruitment pipeline. Can you show me all departments in the Scranton office (just pull all)?", check: (res, sql) => sql.toLowerCase().includes("departments"), hint: "Retrieving every row from the table that tracks our internal divisions." },
            { req: "I'm updated the employee directory. Please pull a complete list of all employee salaries.", check: (res, sql) => sql.toLowerCase().includes("salaries"), hint: "Focus on getting the comprehensive data dump from the salaries table." },
            { req: "To prepare for the performance review cycle, I need every row from the employee table please.", check: (res, sql) => sql.toLowerCase().includes("employees"), hint: "Think about the simplest way to see the entire content of the employee records." },
            { req: "Legal requires a report on hiring dates. Find the complete salaries database one more time immediately.", check: (res, sql) => sql.toLowerCase().includes("salaries"), hint: "Access the table that stores compensation data and retrieve every row." }
        ],
        "102": [
            { req: "To prepare for the performance review cycle, I need the department name and its location for all depts.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("location"), hint: "Identify only the name and geographical columns from the departments table." },
            { req: "I'm updated the employee directory. Please pull the employee ID and amount for all salaries.", check: (res, sql) => sql.toLowerCase().includes("emp_id") && sql.toLowerCase().includes("amount"), hint: "Target the specific identifier and the numeric value columns in the compensation table." },
            { req: "We're finalizing the annual headcount report. Please list can I get the names and current roles of all employees.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("role"), hint: "Focus on picking out the identity and job title fields from the staff list." },
            { req: "The benefits team needs to verify employee eligibility. Find all employee names in the database.", check: (res, sql) => sql.toLowerCase().includes("name") && !sql.toLowerCase().includes("role"), hint: "Select just the single column that stores full names." },
            { req: "We need to track our recruitment pipeline. Can you show me the IDs of our employees?", check: (res, sql) => sql.toLowerCase().includes("emp_id"), hint: "Isolate the column that acts as the unique identifier for our staff." },
            { req: "We're conducting a compensation review. I need to see the department locations available.", check: (res, sql) => sql.toLowerCase().includes("location"), hint: "Query only the field that tracks the office site for each department." },
            { req: "We need to verify salary bands. Please get me the performance_score for all employees.", check: (res, sql) => sql.toLowerCase().includes("performance_score"), hint: "Identify the specific column used for staff evaluation ratings." },
            { req: "We need to track our recruitment pipeline. Can you show me hire_date and name for everyone?", check: (res, sql) => sql.toLowerCase().includes("hire_date") && sql.toLowerCase().includes("name"), hint: "Pick the start date and identity columns for the entire workforce." },
            { req: "We're finalizing the annual headcount report. Please list the currency and amount for all salaries.", check: (res, sql) => sql.toLowerCase().includes("currency") && sql.toLowerCase().includes("amount"), hint: "Focus on the monetary type and the numeric totals in the salary records." },
            { req: "The benefits team needs to verify employee eligibility. Find roles of our staff.", check: (res, sql) => sql.toLowerCase().includes("role"), hint: "Retrieve the column that describes job functions." },
            { req: "We need to verify salary bands. Please get me the last_raise date and amount for all salaries.", check: (res, sql) => sql.toLowerCase().includes("last_raise") && sql.toLowerCase().includes("amount"), hint: "Pick the date of the most recent pay increase and the compensation total from the salaries table." }
        ],
        "103": [
            { req: "Legal requires a report on hiring dates. Find all employees with a performance score of 10 immediately.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("performance_score = 10")), hint: "Think about how to filter staff records for a perfect evaluation rating." },
            { req: "I'm updated the employee directory. Please pull employees who work in dept_id 2.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("dept_id = 2")), hint: "Filter the staff list for entries matching a specific department identifier." },
            { req: "I'm updated the employee directory. Please pull the employee named 'Michael Scott'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("michael scott")), hint: "Apply a filter to find a person matching a specific full name." },
            { req: "Legal requires a report on hiring dates. Find salaries greater than 70000 immediately.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("amount > 70000")), hint: "Apply a minimum threshold filter to the compensation values." },
            { req: "We need to verify salary bands. Please get me departments in 'Scranton'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("scranton")), hint: "Filter the organization list for a specific office location." },
            { req: "To prepare for the performance review cycle, I need employees hired on '2005-03-01'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("2005-03-01")), hint: "Think about how to filter records for a very specific calendar date." },
            { req: "The benefits team needs to verify employee eligibility. Find who are the Managers? (role = 'Manager').", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("manager")), hint: "Isolate only the staff members who hold a specific leadership title." },
            { req: "Legal requires a report on hiring dates. Find employees with ID 4 immediately.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("emp_id = 4")), hint: "Use a filter to locate a record by its unique staff identifier." },
            { req: "We need to verify salary bands. Please get me salaries with currency 'USD'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("usd")), hint: "Filter the compensation data for a specific currency type." },
            { req: "For the upcoming diversity and inclusion audit, please extract employees with score less than 7.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("performance_score < 7")), hint: "Apply a filter for ratings that fall below a certain numeric level." },
            { req: "We need to track our recruitment pipeline. Can you show me department has ID 1?", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("dept_id = 1")), hint: "Filter the department table for a single target ID." }
        ],
        "104": [
            { req: "We're finalizing the annual headcount report. Please list managers who were hired after 2005.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("manager") && sql.toLowerCase().includes("> '2005")), hint: "Think about how to combine a specific leadership title with a chronological threshold for their start date." },
            { req: "Legal requires a report on hiring dates. Find sales employees (dept 2) with a score above 7 immediately.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("dept_id = 2") && sql.toLowerCase().includes("> 7")), hint: "Apply a filter for the Sales department ID while also checking for a minimum performance rating." },
            { req: "We're finalizing the annual headcount report. Please list all employees hired in 2005 who have a performance score of 10.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("2005") && sql.toLowerCase().includes("score = 10")), hint: "Combine a hiring year pattern with a perfect individual rating in your criteria." },
            { req: "To prepare for the performance review cycle, I need salaries in 'USD' above 60000.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("usd") && sql.toLowerCase().includes("> 60000")), hint: "Filter for a specific currency type and then narrow down the results by a minimum numeric amount." },
            { req: "To prepare for the performance review cycle, I need admin staff (role = 'Admin') in dept 1.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("admin") && sql.toLowerCase().includes("dept_id = 1")), hint: "Consider how to require both a specific administrative role and a particular unit ID." },
            { req: "For the upcoming diversity and inclusion audit, please extract who was hired on '2006-01-15' and is in Sales.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("2006-01-15") && sql.toLowerCase().includes("sales")), hint: "Think about targeting a specific calendar day alongside a particular job function." },
            { req: "I'm updated the employee directory. Please pull scranton departments (dept 2) named 'Sales'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("scranton") && sql.toLowerCase().includes("sales")), hint: "Filter the organizational list for a specific office location and a matching department name." },
            { req: "Legal requires a report on hiring dates. Find michael Scott's salary (emp_id 1) immediately.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("emp_id = 1")), hint: "Locate the compensation record that belongs to a specific staff identifier." },
            { req: "The benefits team needs to verify employee eligibility. Find employees with score 9 OR score 10.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("9") || sql.toLowerCase().includes("10")), hint: "Think about how to show results if a person meets either the high or the perfect rating threshold." },
            { req: "I'm updated the employee directory. Please pull hire dates between 2005 and 2006 for Managers.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("2005") && sql.toLowerCase().includes("manager")), hint: "Combine a role filter with a multi-year range in your chronological criteria." },
            { req: "We need to verify salary bands. Please get me anyone in dept 1 who isn't Michael Scott.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("dept_id = 1") && sql.toLowerCase().includes("not")), hint: "Think about filtering for a department while specifically excluding one named individual." }
        ],
        "105": [
            { req: "I'm updated the employee directory. Please pull employees with performance scores between 8 and 10.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 8 and 10")), hint: "Look for a way to filter ratings that fall within a specific numeric range." },
            { req: "The benefits team needs to verify employee eligibility. Find employees hired between 2005-01-01 and 2005-12-31.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2005"), hint: "Apply a chronological range filter for the entire calendar year of 2005." },
            { req: "We need to track our recruitment pipeline. Can you show me salaries are between $60,000 and $80,000?", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 60000 and 80000")), hint: "Identify a way to filter compensation amounts within a defined low and high boundary." },
            { req: "To prepare for the performance review cycle, I need amount between 50000 and 70000.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 50000 and 70000")), hint: "Think about using a range filter for the numeric values in the salaries table." },
            { req: "We need to track our recruitment pipeline. Can you show me employee IDs between 1 and 3?", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 1 and 3")), hint: "Narrow down wait identifiers to an inclusive set of small numbers." },
            { req: "Legal requires a report on hiring dates. Find raise dates in 2022 immediately.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2022"), hint: "Apply a range filter to identify dates that occurred throughout the year 2022." },
            { req: "I'm updated the employee directory. Please pull departments are between ID 2 and 5.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 2 and 5")), hint: "Filter the organizational units by an inclusive ID range." },
            { req: "Legal requires a report on hiring dates. Find hire dates between April and June 2005 immediately.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2005-04"), hint: "Think about a way to target a three-month span within your start date records." },
            { req: "We need to track our recruitment pipeline. Can you show me performance scores in 5 to 9 range?", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 5 and 9")), hint: "Use a range filter for the evaluation column's numeric values." },
            { req: "To prepare for the performance review cycle, I need salaries aren't between 0 and 50k?.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("not between 0 and 50000")), hint: "Think about how to exclude a specific compensation range from your results." },
            { req: "We're conducting a compensation review. I need to see raise dates in January 2022.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2022-01"), hint: "Identify dates that fell within the very first month of the specified year." }
        ],
        "106": [
            { req: "For the upcoming diversity and inclusion audit, please extract employees with roles 'Manager' or 'Sales'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("manager") || sql.toLowerCase().includes("sales")), hint: "Identify a way to see if a role matches any item in a specific list of job titles." },
            { req: "Legal requires a report on hiring dates. Find get salaries for employee IDs 1 and 2. immediately.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("2")), hint: "Filter for compensation records that belong to any ID in your target set." },
            { req: "Legal requires a report on hiring dates. Find employees in departments 1 or 3. immediately.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("3")), hint: "Think about selecting staff if their unit ID is present in your specified list." },
            { req: "We're conducting a compensation review. I need to see employees have scores 5, 8, or 9?.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("5") || sql.toLowerCase().includes("9")), hint: "Filter for evaluation ratings that appear in a particular numeric set." },
            { req: "We need to verify salary bands. Please get me departments in 'Scranton' or 'Stamford'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("scranton") || sql.toLowerCase().includes("stamford")), hint: "Identify office locations that match any site in your target list." },
            { req: "We need to verify salary bands. Please get me employees named 'Michael Scott' or 'Dwight Schrute'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("michael") || sql.toLowerCase().includes("dwight")), hint: "Think about checking for a list of specific full names for your staff query." },
            { req: "We need to track our recruitment pipeline. Can you show me salaries are exactly 62000 or 65000?", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("62000") || sql.toLowerCase().includes("65000")), hint: "Filter for precise compensation amounts that belong to your specified set." },
            { req: "Legal requires a report on hiring dates. Find employees with IDs 1, 3, 4 immediately.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("4")), hint: "Locate staff records that match any of the discrete numbers in your ID list." },
            { req: "To prepare for the performance review cycle, I need get roles 'Admin' and 'Manager' only.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("admin") || sql.toLowerCase().includes("manager")), hint: "Restrict your results to job functions that appear in a specific categorical set." },
            { req: "We're finalizing the annual headcount report. Please list employees not in dept 2 or 3 using NOT IN.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("not in") && (sql.toLowerCase().includes("2") || sql.toLowerCase().includes("3"))), hint: "Think about excluding any staff if their unit ID matches anything in your forbidden list." },
            { req: "We need to track our recruitment pipeline. Can you show me scranton locations?", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("scranton"), hint: "Consider using a list-based filter even for a single target location." }
        ],
        "107": [
            { req: "We need to track our recruitment pipeline. Can you show me employees whose role starts with 'Sales'?", check: (res, sql) => sql.toLowerCase().includes("like") && (sql.includes("'sales%'") || sql.includes('"sales%"')), hint: "Search for job titles that begin with a specific sequence of characters." },
            { req: "For the upcoming diversity and inclusion audit, please extract departments located in places starting with 'Scran'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("scran"), hint: "Identify locations that match a leading partial name pattern." },
            { req: "Legal requires a report on hiring dates. Find anyone with 'Schrute' in their name immediately.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("schrute"), hint: "Think about finding a specific surname anywhere within the identity column." },
            { req: "We need to verify salary bands. Please get me names end in 'ly'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%ly"), hint: "Look for identity strings that have a specific two-letter suffix." },
            { req: "We need to verify salary bands. Please get me departments with 'Count' in the name.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("count"), hint: "Search for a specific substring within the department names." },
            { req: "I'm updated the employee directory. Please pull hire dates for 2005.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("2005%"), hint: "Think about a pattern matching technique to find all start dates in a particular year." },
            { req: "We're analyzing retention rates by department. List roles that contain 'Man' for me.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("man"), hint: "Identify job titles that include a specific three-letter sequence." },
            { req: "We're analyzing retention rates by department. List locations end with 'ton' for me.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%ton"), hint: "Consider how to target office sites that match a specific ending pattern." },
            { req: "We're analyzing retention rates by department. List anyone named 'Jim Hal%' for me.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("jim hal"), hint: "Filter names that start with a very specific first name and partial last name." },
            { req: "For the upcoming diversity and inclusion audit, please extract salaries raised in 2022 ('2022-%').", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("2022-"), hint: "Think about a pattern for dates that occurred in the specified year." },
            { req: "To prepare for the performance review cycle, I need department starts with 'M'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("m%"), hint: "Look for organizational units that begin with a particular capital letter." }
        ],
        "108": [
            { req: "We're analyzing retention rates by department. List employees who are NOT Managers for me.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("manager")), hint: "Think about how to return everyone EXCEPT those with a specific leadership title." },
            { req: "We're conducting a compensation review. I need to see salaries that aren't in 'USD'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("usd")), hint: "Exclude compensation records that match a specific currency type." },
            { req: "The benefits team needs to verify employee eligibility. Find sales employees (dept 2) who DON'T have a performance score of 10.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("dept_id = 2") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!="))), hint: "Require a specific unit ID while excluding the top evaluation score." },
            { req: "We need to track our recruitment pipeline. Can you show me departments aren't in 'Stamford'?", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("stamford")), hint: "Identify office locations while leaving out one specific city." },
            { req: "To prepare for the performance review cycle, I need employees who aren't in dept 1.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("dept_id = 1")), hint: "Exclude staff members who belong to a particular root department." },
            { req: "We need to verify salary bands. Please get me salaries aren't exactly 85000.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("85000")), hint: "Skip any compensation records that match a specific round number." },
            { req: "I'm updated the employee directory. Please pull employees not named 'Jim Halpert'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("jim halpert")), hint: "Return the entire staff list EXCEPT for one named individual." },
            { req: "The benefits team needs to verify employee eligibility. Find roles aren't 'Admin'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("admin")), hint: "Exclude a specific job category from your categorical results." },
            { req: "For the upcoming diversity and inclusion audit, please extract departments that aren't category 3.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("3")), hint: "Exclude organizational units based on a particular numeric identifier." },
            { req: "We need to track our recruitment pipeline. Can you show me salaries NOT raised in 2023. ( '2023%')?", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not like '2023%'")), hint: "Think about excluding an entire year's worth of dates using a negative pattern." },
            { req: "For the upcoming diversity and inclusion audit, please extract scores aren't exactly 5 or 10? (Use NOT IN).", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not in") && (sql.toLowerCase().includes("5") || sql.toLowerCase().includes("10"))), hint: "Identify evaluation ratings that do NOT appear in your specified list of numbers." }
        ],
        "109": [
            { req: "For the upcoming diversity and inclusion audit, please extract salaries sorted from highest to lowest.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by amount desc")), hint: "Think about how to arrange compensation numbers so the biggest ones are on top." },
            { req: "We're conducting a compensation review. I need to see departments sorted alphabetically by name.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by name")), hint: "Consider an arrangement rule that follows alphabetical order for names." },
            { req: "We're finalizing the annual headcount report. Please list all employees sorted by their hire date (oldest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by hire_date")), hint: "Organize the staff chronologically based on when they joined." },
            { req: "We're finalizing the annual headcount report. Please list sort employees by performance_score (highest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by performance_score desc")), hint: "Apply a rule that prioritizes the best individual ratings at the top." },
            { req: "For the upcoming diversity and inclusion audit, please extract departments by location and name.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by location") && sql.toLowerCase().includes("name")), hint: "Arrange results using two different criteria: first by site, then by name." },
            { req: "We're analyzing retention rates by department. List sort salaries by emp_id for me.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by emp_id")), hint: "Set an organization rule based on the numeric staff identifier." },
            { req: "We need to verify salary bands. Please get me employees alphabetically by role.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by role")), hint: "Arrange results based on the text strings in the job title column." },
            { req: "The benefits team needs to verify employee eligibility. Find the newest hires first (hire_date desc).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by hire_date desc")), hint: "Apply a reverse-chronological sort to see the latest joiners first." },
            { req: "We're analyzing retention rates by department. List sort sales employees by their name for me.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("dept_id = 2") && sql.toLowerCase().includes("order by name")), hint: "Filter for a specific unit and then organize that subset alphabetically." },
            { req: "Legal requires a report on hiring dates. Find departments in reverse alphabetical order immediately.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by name desc")), hint: "Organize the names from Z to A." },
            { req: "We need to verify salary bands. Please get me sort performance scores (lowest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by performance_score") && !sql.toLowerCase().includes("desc")), hint: "Arrange evaluation ratings starting with the smallest numeric values." }
        ],
        "110": [
            { req: "For the upcoming diversity and inclusion audit, please extract all 'Sales' employees hired after '2005-01-01' with a performance score above 7. Sort by score DESC.", check: (res, sql) => (sql.toLowerCase().includes("sales") || sql.toLowerCase().includes("dept_id = 2")) && sql.toLowerCase().includes("> '2005-01-01'") && sql.toLowerCase().includes("performance_score > 7") && sql.toLowerCase().includes("order by performance_score desc"), hint: "Combine three distinct filters with a descending organizational rule." },
            { req: "Legal requires a report on hiring dates. Find employees whose names start with 'J' or 'P', who aren't in 'Management'. Sort by hire_date immediately.", check: (res, sql) => (sql.toLowerCase().includes("like 'j%'") || sql.toLowerCase().includes("like 'p%'")) && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("order by hire_date"), hint: "Think about a pattern match for two letters, an exclusion of a role, and a chronological sort." },
            { req: "We're analyzing retention rates by department. List departments in 'Scranton' or 'Stamford', sorted alphabetically for me.", check: (res, sql) => sql.toLowerCase().includes("in ('scranton', 'stamford')") && sql.toLowerCase().includes("order by name"), hint: "Filter for multiple targets in a list and then apply an alphabetical arrangement." },
            { req: "Legal requires a report on hiring dates. Find employees with ID 1, 2, or 4 who have a score between 5 and 10. List just their names immediately.", check: (res, sql) => sql.toLowerCase().includes("in (1, 2, 4)") && sql.toLowerCase().includes("between 5 and 10") && sql.toLowerCase().includes("name"), hint: "Combine a list filter for identifiers, a range filter for scores, and a specific column selection." },
            { req: "For the upcoming diversity and inclusion audit, please extract salaries over $70,000 that haven't had a raise since '2022-01-01'. Sort by amount.", check: (res, sql) => sql.toLowerCase().includes("amount > 70000") && (sql.toLowerCase().includes("<=") || sql.toLowerCase().includes("not")) && sql.toLowerCase().includes("order by amount"), hint: "Apply a minimum amount threshold and a date limit, then organize by the numeric total." },
            { req: "We're conducting a compensation review. I need to see employees NOT in dept_id 2 with performance_score between 5 and 9. Sort by name.", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("between 5 and 9") && sql.toLowerCase().includes("order by name"), hint: "Exclude a department, apply a score range, and sort alphabetically." },
            { req: "We're finalizing the annual headcount report. Please list salaries in 'USD' with amount between $60,000 and $80,000, sorted by last_raise DESC.", check: (res, sql) => sql.toLowerCase().includes("usd") && sql.toLowerCase().includes("between 60000 and 80000") && sql.toLowerCase().includes("order by last_raise desc"), hint: "Combine a currency filter, a compensation range, and a reverse-date sort." },
            { req: "The benefits team needs to verify employee eligibility. Find employees whose role contains 'Sales' or 'Admin' hired before '2006-06-01'. Sort by emp_id.", check: (res, sql) => (sql.toLowerCase().includes("sales") || sql.toLowerCase().includes("admin")) && sql.toLowerCase().includes("< '2006-06-01'") && sql.toLowerCase().includes("order by emp_id"), hint: "Filter for multiple roles, add a hire date ceiling, and sort by identifier." },
            { req: "Legal requires a report on hiring dates. Find all 'Manager' role employees with score NOT between 1 and 7. Sort by performance_score immediately.", check: (res, sql) => sql.toLowerCase().includes("manager") && sql.toLowerCase().includes("not between") && sql.toLowerCase().includes("order by performance_score"), hint: "Combine a role filter with a negated score range and a numeric sort." },
            { req: "For the upcoming diversity and inclusion audit, please extract departments in location 'Scranton' with dept_id IN (1, 2). Sort by dept_id DESC.", check: (res, sql) => sql.toLowerCase().includes("scranton") && sql.toLowerCase().includes("in") && sql.toLowerCase().includes("order by dept_id desc"), hint: "Combine a location filter, a list of IDs, and a descending sort." },
            { req: "We're conducting a compensation review. I need to see employees with names starting with 'D' or 'M' and performance_score > 4. Sort by hire_date DESC.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("> 4") && sql.toLowerCase().includes("order by hire_date desc"), hint: "Use name pattern matching, a score threshold, and a reverse-chronological sort." }
        ],
        "201": [
            { req: "To prepare for the performance review cycle, I need the count of employees does the company have in total.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(*)")), hint: "Think about the aggregation function that returns the total count of staff records." },
            { req: "We're analyzing retention rates by department. List a count of the number of departments we have recorded for me.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count")), hint: "Use a counting function to see the total number of entries in the organizational unit table." },
            { req: "We're finalizing the annual headcount report. Please list the count of employees are in department 1.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("dept_id = 1"), hint: "Filter for a specific department and count the staff." },
            { req: "To prepare for the performance review cycle, I need a count of how many salary records exist.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("salaries"), hint: "Apply the counting function to the compensation table." },
            { req: "For the upcoming diversity and inclusion audit, please extract the count of employees have a performance score above 7.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 7"), hint: "Filter for high performers and count them." },
            { req: "The benefits team needs to verify employee eligibility. Find a count of employees with the 'Manager' role.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("manager"), hint: "Filter by job title and count the results." },
            { req: "We're analyzing retention rates by department. List the count of departments are in Scranton for me.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("scranton"), hint: "Filter by location and count." },
            { req: "We're conducting a compensation review. I need to see a count of employees hired after 2005-06-01.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("2005-06-01"), hint: "Filter by hire date and count the results." },
            { req: "We're analyzing retention rates by department. List the count of salaries are in USD for me.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("usd"), hint: "Filter by currency type and count." },
            { req: "To prepare for the performance review cycle, I need a count of employees with performance score exactly 10.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("= 10"), hint: "Filter for perfect scores and count." },
            { req: "To prepare for the performance review cycle, I need the count of distinct roles exist in the company.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(distinct role)")), hint: "Count only the unique job titles." }
        ],
        "202": [
            { req: "We need to verify salary bands. Please get me what is the total salary budget for the entire company.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(amount)")), hint: "Calculate the grand total of all values in the compensation column." },
            { req: "I'm updated the employee directory. Please pull the average performance score across all staff.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(performance_score)")), hint: "Think about the mean-calculating function applied to the evaluation ratings." },
            { req: "We're analyzing retention rates by department. List what's the highest salary in the database for me.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(amount)")), hint: "Identify the function that finds the maximum numeric value in the salary table." },
            { req: "We need to verify salary bands. Please get me what is the lowest performance score recorded.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(performance_score)")), hint: "Find the minimum rating in the evaluations." },
            { req: "To prepare for the performance review cycle, I need the total salary for employees in department 2.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(amount)") && sql.toLowerCase().includes("dept_id = 2")), hint: "Filter for a specific department and sum the salaries." },
            { req: "Legal requires a report on hiring dates. Find what's the average salary amount across all staff immediately.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(amount)")), hint: "Calculate the mean compensation value." },
            { req: "To prepare for the performance review cycle, I need the earliest hire date in the company.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(hire_date)")), hint: "Identify the smallest date value to find the first hire." },
            { req: "We're analyzing retention rates by department. List what's the maximum performance score recorded for me.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(performance_score)")), hint: "Find the highest evaluation rating." },
            { req: "We're conducting a compensation review. I need to see total and average salary for all employees.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(amount)") && sql.toLowerCase().includes("avg(amount)")), hint: "Use both SUM and AVG in one query." },
            { req: "We're analyzing retention rates by department. List the minimum and maximum salary amounts for me.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(amount)") && sql.toLowerCase().includes("max(amount)")), hint: "Use both MIN and MAX to see the salary range." },
            { req: "We're analyzing retention rates by department. List what's the average salary for employees in USD for me.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(amount)") && sql.toLowerCase().includes("usd")), hint: "Filter by currency and calculate the mean." }
        ],
        "203": [
            { req: "We need to track our recruitment pipeline. Can you show me a count of employees in each department (group by dept_id)?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("count")), hint: "Group the staff by their unit identifier and count the number of individuals in each group." },
            { req: "For the upcoming diversity and inclusion audit, please extract what is the average salary per currency type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by currency") && sql.toLowerCase().includes("avg")), hint: "Group the compensation records by their monetary unit and calculate the mean for each." },
            { req: "We need to track our recruitment pipeline. Can you show me the total salary budget per department?", check: (res, sql) => sql.toLowerCase().includes("group by") && sql.toLowerCase().includes("sum(amount)"), hint: "Group by department and sum the compensation amounts." },
            { req: "To prepare for the performance review cycle, I need a count of employees per role.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by role") && sql.toLowerCase().includes("count")), hint: "Group by job title and count each group." },
            { req: "We're analyzing retention rates by department. List the average performance score per department for me.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("avg(performance_score)")), hint: "Group by department and calculate the mean evaluation score." },
            { req: "For the upcoming diversity and inclusion audit, please extract the maximum salary per currency.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by currency") && sql.toLowerCase().includes("max(amount)")), hint: "Group by currency type and find the highest salary." },
            { req: "We need to track our recruitment pipeline. Can you show me a count of departments per location?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by location") && sql.toLowerCase().includes("count")), hint: "Group by office location and count the departments." },
            { req: "We're analyzing retention rates by department. List the minimum performance score per department for me.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("min(performance_score)")), hint: "Group by department and find the lowest rating." },
            { req: "The benefits team needs to verify employee eligibility. Find average salary amount per department.", check: (res, sql) => sql.toLowerCase().includes("group by") && sql.toLowerCase().includes("avg(amount)"), hint: "Group by department and calculate the mean salary." },
            { req: "We need to track our recruitment pipeline. Can you show me a count of salaries per employee (group by emp_id)?", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by emp_id") && sql.toLowerCase().includes("count")), hint: "Group compensation records by employee identifier." },
            { req: "For the upcoming diversity and inclusion audit, please extract the total performance scores per department.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("sum(performance_score)")), hint: "Group by department and sum the evaluation scores." }
        ],
        "204": [
            { req: "We need to track our recruitment pipeline. Can you show me departments have an average performance score above 8?", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("having avg(performance_score) > 8")), hint: "Group by unit ID and filter the result-set to show only those groups with a mean rating above a limit." },
            { req: "I'm updated the employee directory. Please pull roles that have more than 1 employee.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by role") && sql.toLowerCase().includes("having count(*) > 1")), hint: "Group the staff by their job title and only return those titles held by more than one person." },
            { req: "I'm updated the employee directory. Please pull departments have a total salary budget over $100,000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by") && sql.toLowerCase().includes("having sum(amount) > 100000")), hint: "Group by department and filter for high-budget units." },
            { req: "To prepare for the performance review cycle, I need departments with more than 2 employees.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 2")), hint: "Group by department and filter for larger teams." },
            { req: "The benefits team needs to verify employee eligibility. Find locations have more than 1 department.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by location") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by office location and filter for sites with multiple departments." },
            { req: "We're conducting a compensation review. I need to see roles with average salary over $60,000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by role") && sql.toLowerCase().includes("having avg(amount) > 60000")), hint: "Group by job title and filter for well-compensated roles." },
            { req: "We're conducting a compensation review. I need to see departments have minimum performance score above 5.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("having min(performance_score) > 5")), hint: "Group by department and filter for consistently performing teams." },
            { req: "For the upcoming diversity and inclusion audit, please extract currencies with total salary over $50,000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by currency") && sql.toLowerCase().includes("having sum(amount) > 50000")), hint: "Group by currency type and filter for significant totals." },
            { req: "Legal requires a report on hiring dates. Find departments have maximum salary under $80,000 immediately.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by") && sql.toLowerCase().includes("having max(amount)") && sql.toLowerCase().includes("< 80000")), hint: "Group by department and filter for those without high earners." },
            { req: "We're conducting a compensation review. I need to see roles with exactly 1 employee.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by role") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("= 1")), hint: "Group by role and filter for unique positions." },
            { req: "For the upcoming diversity and inclusion audit, please extract departments have average salary above $55,000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by") && sql.toLowerCase().includes("having avg(amount) > 55000")), hint: "Group by department and filter for well-paid teams." }
        ],
        "205": [
            { req: "The benefits team needs to verify employee eligibility. Find all unique office locations.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct location")), hint: "Use the keyword that isolates each unique value in the location column once." },
            { req: "Legal requires a report on hiring dates. Find what represent all the unique roles we have immediately.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct role")), hint: "Identify each distinct job function title without duplicates." },
            { req: "Legal requires a report on hiring dates. Find all distinct department names immediately.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct dept_name")), hint: "List each department name exactly once." },
            { req: "I'm updated the employee directory. Please pull the distinct currency types for salaries.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct currency")), hint: "Show each monetary unit without repetition." },
            { req: "To prepare for the performance review cycle, I need all distinct department IDs.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct dept_id")), hint: "Retrieve each unique department number." },
            { req: "We're analyzing retention rates by department. List all unique performance scores for me.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct performance_score")), hint: "List each score value that exists exactly once." },
            { req: "Legal requires a report on hiring dates. Find what distinct hire dates exist immediately.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct hire_date")), hint: "Show each unique start date." },
            { req: "We're finalizing the annual headcount report. Please list the count of distinct locations do we operate in.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct location)")), hint: "Count the number of unique office locations." },
            { req: "For the upcoming diversity and inclusion audit, please extract all distinct salary amounts.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct amount")), hint: "Show each unique compensation value." },
            { req: "Legal requires a report on hiring dates. Find the count of distinct roles exist immediately.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct role)")), hint: "Count the number of unique job titles." },
            { req: "Legal requires a report on hiring dates. Find all unique employee names immediately.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct name")), hint: "List each staff member's name without duplicates." }
        ],
        "206": [
            { req: "We need to verify salary bands. Please get me names and calculate a 'Score Bonus' (performance_score * 10).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("performance_score * 10")), hint: "Perform a multiplication on the evaluation rating to derive a custom numeric result." },
            { req: "We're finalizing the annual headcount report. Please list staff and calculate total hire years assuming base 2024 (2024 - hire_year).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("2024 -")), hint: "Subtract the starting year from the current year in your selection logic." },
            { req: "We need to verify salary bands. Please get me salary with a $5,000 raise (amount + 5000).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount + 5000")), hint: "Add a fixed bonus to the salary amount." },
            { req: "Legal requires a report on hiring dates. Find double the performance score (performance_score * 2) immediately.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("performance_score * 2")), hint: "Multiply the evaluation rating by two." },
            { req: "We're analyzing retention rates by department. List salary minus $10,000 tax deduction (amount - 10000) for me.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount - 10000")), hint: "Subtract a fixed deduction from the salary." },
            { req: "We're finalizing the annual headcount report. Please list performance_score + emp_id as a 'composite key'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("performance_score +") || sql.toLowerCase().includes("+ emp_id")), hint: "Add two numeric columns together." },
            { req: "I'm updated the employee directory. Please pull salary tripled (amount * 3).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount * 3")), hint: "Multiply the compensation by three." },
            { req: "We need to track our recruitment pipeline. Can you show me performance_score - 5 as 'adjusted score'?", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("performance_score - 5")), hint: "Subtract a baseline from the evaluation score." },
            { req: "Legal requires a report on hiring dates. Find monthly salary (amount / 12) alongside annual immediately.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount / 12")), hint: "Divide the annual salary by twelve months." },
            { req: "Legal requires a report on hiring dates. Find dept_id * 100 as 'department code' immediately.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("dept_id * 100")), hint: "Scale up the department ID for a code format." },
            { req: "To prepare for the performance review cycle, I need salary with a 15% bonus (amount * 1.15).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount * 1.15")), hint: "Multiply salary by a bonus factor." }
        ],
        "207": [
            { req: "To prepare for the performance review cycle, I need round performance scores to 0 decimals.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(performance_score")), hint: "Apply a math function that removes decimals from the ratings." },
            { req: "We need to verify salary bands. Please get me the ceiling (CEIL) of performance_score divided by 2.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("ceil")), hint: "Use the function that rounds up to the nearest integer after a division." },
            { req: "For the upcoming diversity and inclusion audit, please extract round salary amounts to the nearest thousand.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(amount")), hint: "Apply rounding to the compensation column." },
            { req: "We're analyzing retention rates by department. List aBS(performance_score - 7) for all employees for me.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(performance_score - 7)")), hint: "Calculate the distance of each score from a 7-point benchmark." },
            { req: "For the upcoming diversity and inclusion audit, please extract round amount / 12.0 to 2 decimal places.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 12")), hint: "Convert to monthly and round the result." },
            { req: "We need to track our recruitment pipeline. Can you show me aBS(amount - 60000) for all salaries?", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(amount - 60000)")), hint: "Calculate how far each salary is from a $60K benchmark." },
            { req: "Legal requires a report on hiring dates. Find round the average performance score to 1 decimal immediately.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(performance_score)")), hint: "Combine an aggregate with rounding." },
            { req: "We're analyzing retention rates by department. List aBS(dept_id - 3) for all employees for me.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(dept_id - 3)")), hint: "Calculate department distance from a reference ID." },
            { req: "We're finalizing the annual headcount report. Please list round emp_id / 3.0 to 1 decimal place.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 3")), hint: "Divide and round the identifier." },
            { req: "Legal requires a report on hiring dates. Find aBS(amount - 70000) for salaries over $50,000 immediately.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(amount - 70000)") && sql.toLowerCase().includes("> 50000")), hint: "Combine a filter with an absolute value calculation." },
            { req: "I'm updated the employee directory. Please pull round average salary to nearest dollar.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(amount)")), hint: "Calculate the mean salary and round it." }
        ],
        "208": [
            { req: "Legal requires a report on hiring dates. Find divide salary amounts by 12 to see monthly earnings immediately.", check: (res, sql) => sql.toLowerCase().includes("amount / 12"), hint: "Use the division operator to calculate the monthly breakdown of the annual total." },
            { req: "We're conducting a compensation review. I need to see performance_score / 2.0 to see half-ratings.", check: (res, sql) => sql.toLowerCase().includes("performance_score / 2"), hint: "Apply a division to the rating column in your selection." },
            { req: "We're analyzing retention rates by department. List divide salary by 52 for weekly pay for me.", check: (res, sql) => sql.toLowerCase().includes("amount / 52"), hint: "Calculate the weekly breakdown of annual salary." },
            { req: "We're conducting a compensation review. I need to see emp_id / 10.0 for all employees.", check: (res, sql) => sql.toLowerCase().includes("emp_id / 10"), hint: "Scale down the employee identifier." },
            { req: "We need to verify salary bands. Please get me amount / 2080.0 for hourly rate (assuming 2080 work hours/year).", check: (res, sql) => sql.toLowerCase().includes("amount / 2080"), hint: "Divide annual salary by total work hours for hourly rate." },
            { req: "To prepare for the performance review cycle, I need divide performance_score by 10.0 for a decimal rating.", check: (res, sql) => sql.toLowerCase().includes("performance_score / 10"), hint: "Scale the evaluation score to a decimal." },
            { req: "We're finalizing the annual headcount report. Please list amount / 365.0 for daily pay rate.", check: (res, sql) => sql.toLowerCase().includes("amount / 365"), hint: "Divide annual salary by days in a year." },
            { req: "Legal requires a report on hiring dates. Find dept_id / 2.0 for all employees immediately.", check: (res, sql) => sql.toLowerCase().includes("dept_id / 2"), hint: "Divide the department identifier by two." },
            { req: "We need to verify salary bands. Please get me performance_score / 5.0 as a '5-point scale'.", check: (res, sql) => sql.toLowerCase().includes("performance_score / 5"), hint: "Scale the 10-point rating down to a 5-point scale." },
            { req: "We need to verify salary bands. Please get me divide amount by 26 for bi-weekly salary.", check: (res, sql) => sql.toLowerCase().includes("amount / 26"), hint: "Calculate the bi-weekly pay by dividing by 26 pay periods." },
            { req: "We're finalizing the annual headcount report. Please list the ratio of amount to emp_id (amount / emp_id).", check: (res, sql) => sql.toLowerCase().includes("amount / emp_id"), hint: "Divide the salary by the employee identifier to create a ratio." }
        ],
        "209": [
            { req: "The benefits team needs to verify employee eligibility. Find salaries where last_raise is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is null")), hint: "Think about the operator for finding staff who haven't received a pay increase yet." },
            { req: "Legal requires a report on hiring dates. Find employees where performance_score is NOT NULL immediately.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null")), hint: "Filter for records that have been assigned an actual evaluation rating." },
            { req: "We're conducting a compensation review. I need to see employees where hire_date is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("hire_date") && sql.toLowerCase().includes("is null")), hint: "Check for employees with missing start dates." },
            { req: "We're analyzing retention rates by department. List salaries where currency is NOT NULL for me.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("currency") && sql.toLowerCase().includes("is not null")), hint: "Filter for salary records with recorded currency." },
            { req: "We're conducting a compensation review. I need to see employees where dept_id is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("dept_id") && sql.toLowerCase().includes("is null")), hint: "Look for unassigned employees." },
            { req: "We're finalizing the annual headcount report. Please list departments where location is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("location") && sql.toLowerCase().includes("is not null")), hint: "Filter for departments with known locations." },
            { req: "We need to track our recruitment pipeline. Can you show me employees where role is NULL?", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("role") && sql.toLowerCase().includes("is null")), hint: "Check for staff without assigned roles." },
            { req: "Legal requires a report on hiring dates. Find salaries where amount is NOT NULL immediately.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("amount") && sql.toLowerCase().includes("is not null")), hint: "Filter for records with actual compensation values." },
            { req: "I'm updated the employee directory. Please pull a count of employees where performance_score IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("count") && sql.toLowerCase().includes("is null")), hint: "Combine counting with a NULL check for evaluations." },
            { req: "For the upcoming diversity and inclusion audit, please extract salaries where last_raise is NOT NULL and amount IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null") && sql.toLowerCase().includes("is null")), hint: "Combine both NULL checks in one query." },
            { req: "We're analyzing retention rates by department. List employees where name is NOT NULL for me.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("name") && sql.toLowerCase().includes("is not null")), hint: "Filter for employees with recorded names." }
        ],
        "210": [
            { req: "Performance review. Label employees 'Star' if score > 9, else 'Standard'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when performance_score > 9"), hint: "Highlight top performers." },
            { req: "Salary bands. Label 'High' if amount > 80000, else 'Normal'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when amount > 80000"), hint: "Categorize compensation levels." },
            { req: "Tenure groups. Label 'Veteran' if hire_date < '2010-01-01', else 'New'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when hire_date < '2010"), hint: "Segment staff by start date." },
            { req: "Department size. Label 'Big' if dept_id = 1, else 'Small'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when dept_id = 1"), hint: "Tag the main department." },
            { req: "Bonus eligibility. Label 'Yes' if score >= 8, else 'No'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when performance_score >= 8"), hint: "Determine bonus status based on rating." },
            { req: "Management track. Label 'Leader' if role = 'Manager', else 'Staff'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when role = 'manager'"), hint: "Identify leadership roles." },
            { req: "Flight risk. Label 'Risk' if score > 8 and amount < 50000, else 'Safe'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("and"), hint: "Combine multiple conditions." },
            { req: "Location groups. Label 'HQ' if location = 'New York', else 'Remote'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when location"), hint: "Categorize by office." },
            { req: "Raise check. Label 'Due' if last_raise < '2020-01-01', else 'Recent'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when last_raise"), hint: "Check raise timing." },
            { req: "Data audit. Label 'Complete' if email IS NOT NULL, else 'Missing'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("is not null"), hint: "Verify contact info." },
            { req: "Currency standardization. Label 'Domestic' if currency = 'USD', else 'International'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when currency = 'usd'"), hint: "Tag currency types." }
        ],
        "211": [
            { req: "Staff directory. List employees and their department names (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join departments") && sql.toLowerCase().includes("name")), hint: "Link staff to their department." },
            { req: "Payroll match. List employees and their salaries (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join salaries") && sql.toLowerCase().includes("amount")), hint: "Connect employees to compensation." },
            { req: "Org chart. Show ALL departments and any employees in them (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("departments") && sql.toLowerCase().includes("left join employees")), hint: "List all depts, even empty ones." },
            { req: "Compensation audit. Show ALL employees and their salary info (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("employees") && sql.toLowerCase().includes("left join salaries")), hint: "Identify employees missing salary records." },
            { req: "Manager list. List employees who are managers and their department location (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join departments") && sql.toLowerCase().includes("manager")), hint: "Find where managers are located." },
            { req: "Full roster. Show employees, their roles, and department names (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join departments")), hint: "Get the complete picture." },
            { req: "Budget planning. Show department names and salary amounts (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join salaries")), hint: "Link spending to departments." },
            { req: "Hiring history. Show employees and their salary raise dates (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join salaries") && sql.toLowerCase().includes("last_raise")), hint: "Track compensation history." },
            { req: "Empty desks. Show ALL departments and employee names (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join employees")), hint: "Find departments with no staff." },
            { req: "Unpaid staff. Show ALL employees and salary amounts (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join salaries")), hint: "Find staff not on payroll." },
            { req: "Location analysis. Show employee names and their office location (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join departments") && sql.toLowerCase().includes("location")), hint: "Map staff to offices." }
        ],
        "212": [
            { req: "Anniversaries. Extract the year from hire_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', hire_date)")), hint: "Get the hiring year." },
            { req: "Hiring trends. Extract the month from hire_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', hire_date)")), hint: "Analyze seasonality." },
            { req: "Probation end. Calculate the date 90 days after hire_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date(hire_date, '+90 days')") || sql.toLowerCase().includes("+90 days")), hint: "Add 3 months to start date." },
            { req: "Tenure report. Format hire_date as 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', hire_date)")), hint: "Standardize the date format." },
            { req: "Start days. Find the day of the week for hire_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', hire_date)")), hint: "See which day people start." },
            { req: "Review cycle. Extract the year from last_raise.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', last_raise)")), hint: "Check when raises happened." },
            { req: "Q1 Hires. Extract month from hire_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', hire_date)")), hint: "Filter/Select for month." },
            { req: "Vest date. Calculate date 365 days after hire_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("+365 days")), hint: "One year cliff." },
            { req: "Formatted raise. Show last_raise as 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', last_raise)")), hint: "Format the raise date." },
            { req: "Weekday check. Day of week for last_raise.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', last_raise)")), hint: "When do raises take effect?" },
            { req: "Today. Get current date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date('now')")), hint: "System date." }
        ],
        "213": [
            { req: "Budget report. Find total salary amount per Department ID. Filter for depts with total > 100,000.", check: (res, sql) => sql.toLowerCase().includes("sum(amount)") && sql.toLowerCase().includes("group by dept_id") && sql.toLowerCase().includes("having"), hint: "Group expenses by department and filter for high-budget units." },
            { req: "Tenure analysis. List Employee Name and 'Long Tenure' if hire_date < '2015-01-01' else 'Recent'. Order by hire_date.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when hire_date < '2015-01-01'") && sql.toLowerCase().includes("order by"), hint: "Categorize staff by their start date and sort chronologically." }
        ]
    },
    // Healthcare and Finance following same Easy -> Med -> Hard pattern
    "healthcare": {
        "101": [
            { req: "We're updating our patient demographic records. I need a full report of all our registered patients.", check: (res, sql) => sql.toLowerCase().includes("patients"), hint: "Think about the table that stores patient files and how to see everything in it." },
            { req: "We're analyzing admission rates for the last quarter. Extract all scheduled appointments.", check: (res, sql) => sql.toLowerCase().includes("appointments"), hint: "Focus on the appointments schedule and how to retrieve every column." },
            { req: "We're updating our patient demographic records. I need the list of doctors on staff.", check: (res, sql) => sql.toLowerCase().includes("doctors"), hint: "Consider the table that lists all healthcare providers and view its full content." },
            { req: "We're analyzing admission rates for the last quarter. Extract every patient record we have.", check: (res, sql) => sql.toLowerCase().includes("patients"), hint: "Find the primary table for patient data and request a complete list." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find all the appointments for review.", check: (res, sql) => sql.toLowerCase().includes("appointments"), hint: "Think about the table that records when patients visit and pull all its data." },
            { req: "To track treatment efficacy, please pull a list of all doctors in the system please.", check: (res, sql) => sql.toLowerCase().includes("doctors"), hint: "Target the provider records and see every bit of information available." },
            { req: "We're preparing for the joint commission audit. Please retrieve the full patient table dump.", check: (res, sql) => sql.toLowerCase().includes("patients"), hint: "Retrieve the entire set of rows and columns from our patient database." },
            { req: "We need to audit access to sensitive patient files. Show me all rows from the appointments table.", check: (res, sql) => sql.toLowerCase().includes("appointments"), hint: "Standard way to see every scheduled visit recorded in the system." },
            { req: "We're preparing for the joint commission audit. Please retrieve every single doctor record must be shown.", check: (res, sql) => sql.toLowerCase().includes("doctors"), hint: "Focus on displaying the entire content of the staff provider table." },
            { req: "Billing needs to reconcile some patient accounts. Please find the patient database in full.", check: (res, sql) => sql.toLowerCase().includes("patients"), hint: "Query the patient table for a complete overview of all entries." },
            { req: "For our medication inventory compliance check, please list all healthcare personnel (all doctors).", check: (res, sql) => sql.toLowerCase().includes("doctors"), hint: "Try looking into the table that stores physician information." }
        ],
        "102": [
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find doctor names and their specialties.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("specialty"), hint: "Think about choosing only the provider name and their medical field from the staff table." },
            { req: "We're preparing for the joint commission audit. Please retrieve the IDs and reasons for all appointments.", check: (res, sql) => sql.toLowerCase().includes("app_id") && sql.toLowerCase().includes("reason"), hint: "Target the unique visit identifier and the cause of the visit from Scheduled records." },
            { req: "We're preparing for the joint commission audit. Please retrieve the patient names and their blood types.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("blood_type"), hint: "Identify the identity and medical category columns for all patient records." },
            { req: "For our medication inventory compliance check, please list patient emails and their names.", check: (res, sql) => sql.toLowerCase().includes("email") && sql.toLowerCase().includes("name"), hint: "Isolate the contact and identity fields in the patient registry." },
            { req: "For our medication inventory compliance check, please list the specialties and years of experience for our doctors.", check: (res, sql) => sql.toLowerCase().includes("specialty") && sql.toLowerCase().includes("years_exp"), hint: "Pick out the clinical field and senior level columns for the staff list." },
            { req: "We're preparing for the joint commission audit. Please retrieve patient_id and status for all appointments.", check: (res, sql) => sql.toLowerCase().includes("patient_id") && sql.toLowerCase().includes("status"), hint: "Retrieve only the patient identifier and the visit state from the schedule." },
            { req: "For the departmental budget review, please get me the names and dob of all patients.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("dob"), hint: "Think about selecting the identity and birth date columns for all registered individuals." },
            { req: "We need to verify doctor schedules for the new wing. Show me the reason and date of every appointment.", check: (res, sql) => sql.toLowerCase().includes("reason") && sql.toLowerCase().includes("date"), hint: "Focus on retrieving the cause and the scheduled timing for each visit." },
            { req: "For our medication inventory compliance check, please list doctor IDs and their formal names.", check: (res, sql) => sql.toLowerCase().includes("doc_id") && sql.toLowerCase().includes("name"), hint: "Pick only the unique staff ID and the full name of each physician." },
            { req: "We need to verify doctor schedules for the new wing. Show me the blood types and names for patients please.", check: (res, sql) => sql.toLowerCase().includes("blood_type") && sql.toLowerCase().includes("name"), hint: "Isolate the columns for medical classification and patient identity." },
            { req: "To track treatment efficacy, please pull a list of patient emails and IDs.", check: (res, sql) => sql.toLowerCase().includes("email") && sql.toLowerCase().includes("patient_id"), hint: "Target the contact information and unique patient identifiers." }
        ],
        "103": [
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find patients who have the 'O-' blood type.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("blood_type = 'o-'")), hint: "Think about filtering the medical records for a specific universal blood group." },
            { req: "For the departmental budget review, please get me doctors with more than 15 years of experience.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("years_exp > 15")), hint: "Apply a minimum experience threshold to find our most senior staff." },
            { req: "For our medication inventory compliance check, please list appointments are currently 'Completed'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("status = 'completed'")), hint: "Filter the visit schedule for a specific finished state." },
            { req: "To track treatment efficacy, please pull a list of doctors with exactly 10 years experience.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("years_exp = 10")), hint: "Apply a filter for a precise number of years in the profession." },
            { req: "We're analyzing admission rates for the last quarter. Extract appointments scheduled for '2023-10-02'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("2023-10-02")), hint: "Think about filtering for a specific calendar day in the visit log." },
            { req: "Billing needs to reconcile some patient accounts. Please find patients named 'John Doe'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("john doe")), hint: "Apply a filter to locate an individual by their full identity string." },
            { req: "We need to verify doctor schedules for the new wing. Show me doctors are 'Surgery' specialists.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("specialty = 'surgery'")), hint: "Isolate healthcare providers who focus on a specific surgical field." },
            { req: "For the departmental budget review, please get me patients with 'A+' blood type.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("blood_type = 'a+'")), hint: "Filter for a specific medical classification within the patient data." },
            { req: "For the departmental budget review, please get me appointments for patient ID 3.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("patient_id = 3")), hint: "Locate all visit records that belong to a single patient identifier." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find who are the 'Pediatrics' doctors.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("specialty = 'pediatrics'")), hint: "Think about filtering for physicians who specialize in child care." },
            { req: "We need to verify doctor schedules for the new wing. Show me 'Cancelled' appointments.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("status = 'cancelled'")), hint: "Filter the schedule for visits that did not take place." }
        ],
        "104": [
            { req: "We're analyzing admission rates for the last quarter. Extract diagnostic doctors (ID 10) with more than 5 years exp.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("10") && sql.toLowerCase().includes("> 5")), hint: "Think about how to combine a specific provider ID with a minimum experience requirement." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find completed appointments that were for a 'Checkup'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("completed") && sql.toLowerCase().includes("checkup")), hint: "Consider how to require both a finished visit status and a specific visit reason." },
            { req: "For the departmental budget review, please get me 'Pending' appointments for Patient #2.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("pending") && sql.toLowerCase().includes("patient_id = 2")), hint: "Combine a wait-listed visit state with a specific patient identifier." },
            { req: "We're preparing for the joint commission audit. Please retrieve doctors with > 12 years exp who aren't in Diagnostics.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("> 12") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!="))), hint: "Think about filtering for seniority while specifically excluding one clinical field." },
            { req: "We're analyzing admission rates for the last quarter. Extract 'Scheduled' appointments on '2023-10-01'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("scheduled") && sql.toLowerCase().includes("2023-10-01")), hint: "Look for visits that match both the planned state and a particular calendar day." },
            { req: "For the departmental budget review, please get me patients with O- blood type named 'John Doe'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("o-") && sql.toLowerCase().includes("john doe")), hint: "Filter for individuals who match both the blood category and a specific full name." },
            { req: "We're updating our patient demographic records. I need 'Surgery' specialists with < 20 years exp.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("surgery") && sql.toLowerCase().includes("< 20")), hint: "Combine a specific medical discipline with a maximum experience limit." },
            { req: "We're updating our patient demographic records. I need patients with B+ blood type born after 1990.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("b+") && sql.toLowerCase().includes("> '1990")), hint: "Think about how to filter for a blood group alongside a minimum birth year." },
            { req: "For our medication inventory compliance check, please list 'Completed' Checkups for patient #1.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("completed") && sql.toLowerCase().includes("checkup") && sql.toLowerCase().includes("1")), hint: "Combine filters for the visit state, the reason, and the patient's identity number." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find pediatrics doctors with > 15 years exp.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("pediatrics") && sql.toLowerCase().includes("> 15")), hint: "Think about selecting staff if they match both the child-care specialty and the senior experience level." },
            { req: "For the departmental budget review, please get me 'Cancelled' fever reasons.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("cancelled") && sql.toLowerCase().includes("fever")), hint: "Filter for visits that meet both the aborted status and a specific illness reason." }
        ],
        "105": [
            { req: "For our medication inventory compliance check, please list patients born between 1980 and 1995.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("19"), hint: "Look for a keyword that lets you specify a birth year range for patient files." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find appointments scheduled between 2023-10-01 and 2023-10-03.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-10"), hint: "Consider a range filter to target a specific three-day span in the visit log." },
            { req: "We're analyzing admission rates for the last quarter. Extract doctors with between 5 and 15 years of experience.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 5 and 15")), hint: "Identify staff members whose total service falls within a specific low and high boundary." },
            { req: "For the departmental budget review, please get me patient IDs between 1 and 5.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 1 and 5")), hint: "Think about filtering for an inclusive range of patient identifier numbers." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find doctor experience between 10 and 20 years.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 10 and 20")), hint: "Apply a range filter to the professional experience column." },
            { req: "For the departmental budget review, please get me appointments with IDs between 100 and 105.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 100 and 105")), hint: "Identify visit records that fall within a defined ID range." },
            { req: "We're preparing for the joint commission audit. Please retrieve patients born between '1990-01-01' and '2000-01-01'.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("1990"), hint: "Think about a way to specify a decade-long birth date range." },
            { req: "Billing needs to reconcile some patient accounts. Please find search doctors with experience between 1 and 10 years.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 1 and 10")), hint: "Use a range filter to find physicians with specific early-career experience levels." },
            { req: "We need to audit access to sensitive patient files. Show me appts between Oct 1 and Oct 2 2023.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-10-01"), hint: "Filter the schedule for visits occurring within the target two-day window." },
            { req: "We're updating our patient demographic records. I need years of exp NOT between 10 and 50.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("not between 10 and 50")), hint: "Think about how to exclude a specific broad range of seniority from your results." },
            { req: "Billing needs to reconcile some patient accounts. Please find patient IDs 2 to 4.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 2 and 4")), hint: "Identify person identifiers that fall between two specific numbers." }
        ],
        "106": [
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find appointments for patients 1, 2, or 3.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("2")), hint: "Identify a way to select visit records if the patient ID exists in a specific target list." },
            { req: "We need to audit access to sensitive patient files. Show me doctors with IDs 10 or 12.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("10") || sql.toLowerCase().includes("12")), hint: "Think about checking provider identifiers against a small set of target numbers." },
            { req: "Billing needs to reconcile some patient accounts. Please find patients with blood types 'A+', 'B+', or 'O-'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("a+") || sql.toLowerCase().includes("o-")), hint: "Filter patient medical records if their category matches any item in your list." },
            { req: "We're preparing for the joint commission audit. Please retrieve get specialties 'Surgery' or 'Pediatrics'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("surgery") || sql.toLowerCase().includes("pediatrics")), hint: "Narrow down the results by checking if the clinical field is in your specified set." },
            { req: "We're updating our patient demographic records. I need appointments with status 'Scheduled' or 'Completed'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("scheduled") || sql.toLowerCase().includes("completed")), hint: "Filter for visit states that appear in your specific categorized list." },
            { req: "To track treatment efficacy, please pull a list of patients are IDs 1 or 4?.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("4")), hint: "Locate person records if their ID matches any entries in your target set." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find doctors with 10, 15, or 20 years exp.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("10") || sql.toLowerCase().includes("20")), hint: "Check for professional experience levels that match a specific numeric set." },
            { req: "We're updating our patient demographic records. I need get patients A- or O-.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("a-") || sql.toLowerCase().includes("o-")), hint: "Identify patients whose blood group exists within a target list of medical types." },
            { req: "Billing needs to reconcile some patient accounts. Please find statuses NOT IN 'Pending', 'Cancelled'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("not in") && (sql.toLowerCase().includes("pending") || sql.toLowerCase().includes("cancelled"))), hint: "Think about excluding any records if their state matches any item in your forbidden list." },
            { req: "To track treatment efficacy, please pull a list of doctors are 11 or 12?.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("11") || sql.toLowerCase().includes("12")), hint: "Consider a list-based check for the provider identification column." },
            { req: "We need to verify doctor schedules for the new wing. Show me appointment reasons 'Checkup' or 'Fever'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("checkup") || sql.toLowerCase().includes("fever")), hint: "Think about how to provide several valid visit cause options simultaneously." }
        ],
        "107": [
            { req: "We're updating our patient demographic records. I need patients whose name starts with 'John'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("john%"), hint: "Search for identities that begin with a specific common first name." },
            { req: "We need to verify doctor schedules for the new wing. Show me appointments where the reason contains 'Fever'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%fever%"), hint: "Think about finding an illness keyword anywhere within the visit cause column." },
            { req: "We need to audit access to sensitive patient files. Show me any doctor whose specialty includes 'Diagnostics'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%diagnostics%"), hint: "Identify clinical fields that mention a specific diagnostic term anywhere in the string." },
            { req: "We're analyzing admission rates for the last quarter. Extract patient emails end in '.com'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%.com"), hint: "Apply a pattern to catch all contact addresses with a specific suffix." },
            { req: "For the departmental budget review, please get me doctors with specialties starting with 'P'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("p%"), hint: "Look for clinical areas that start with a particular letter." },
            { req: "We need to audit access to sensitive patient files. Show me patient names containing 'oe'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%oe%"), hint: "Search for a specific character sequence anywhere within the identity records." },
            { req: "To track treatment efficacy, please pull a list of reasons starting with 'C'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("c%"), hint: "Filter for visit causes that begin with a particular capital letter." },
            { req: "To track treatment efficacy, please pull a list of blood types end in '+'?.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%+"), hint: "Consider how to target medical classifications with a specific trailing symbol." },
            { req: "We're updating our patient demographic records. I need dates starting with '2023-10'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("2023-10%"), hint: "Think about a pattern to catch all visits occurring in the specified month." },
            { req: "For the departmental budget review, please get me doctor names ending in 'son'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%son"), hint: "Look for staff identities that match a specific common suffix pattern." },
            { req: "We're analyzing admission rates for the last quarter. Extract specialties have 'Surgery' in them.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%surgery%"), hint: "Search for a specific surgical keyword within the clinical description." }
        ],
        "108": [
            { req: "Billing needs to reconcile some patient accounts. Please find appointments that aren't 'Cancelled'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("cancelled")), hint: "Think about how to return all visit records EXCEPT those in an aborted state." },
            { req: "For our medication inventory compliance check, please list patients who don't have blood type 'A+'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("a+")), hint: "Exclude a specific medical classification from the patient results." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find doctors who are NOT in 'Surgery'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("surgery")), hint: "Return everyone on staff EXCEPT the providers in one specific discipline." },
            { req: "We're analyzing admission rates for the last quarter. Extract patients are NOT Jane Smith.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("jane smith")), hint: "Skip any person whose identity matches a particular full name." },
            { req: "To track treatment efficacy, please pull a list of doctors who DON'T have 10 years experience.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("10")), hint: "Identify providers while specifically leaving out those with a precise seniority level." },
            { req: "For our medication inventory compliance check, please list appointments not on '2023-10-01'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("2023-10-01")), hint: "Think about excluding one specific calendar day from the visit schedule." },
            { req: "To track treatment efficacy, please pull a list of reasons aren't 'Checkup'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("checkup")), hint: "Exclude a specific visit cause from your query results." },
            { req: "For the departmental budget review, please get me patients NOT in blood type 'O-'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("o-")), hint: "Remove individuals with one specific medical type from the list." },
            { req: "For the departmental budget review, please get me specialties NOT starting with 'D'. (NOT LIKE 'D%').", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not like 'd%'")), hint: "Think about excluding an entire clinical category using a negative pattern match." },
            { req: "We're updating our patient demographic records. I need statuses aren't 'Completed'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("completed")), hint: "Identify all visit states EXCEPT for the finished one." },
            { req: "Billing needs to reconcile some patient accounts. Please find patients NOT IDs 1, 2, 3.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not in") && sql.toLowerCase().includes("1")), hint: "Think about how to skip several specific person identifiers at once." }
        ],
        "109": [
            { req: "We're preparing for the joint commission audit. Please retrieve doctors sorted by years of experience (most first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by years_exp desc")), hint: "Think about how to arrange provider files so our most senior staff are on top." },
            { req: "To track treatment efficacy, please pull a list of appointments sorted by date (earliest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by date")), hint: "Append an arrangement rule to see the visits in chronological order." },
            { req: "Billing needs to reconcile some patient accounts. Please find all patients sorted by their date of birth (youngest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by dob desc")), hint: "Organize individuals so the most recent birth dates appear at the start." },
            { req: "We need to verify doctor schedules for the new wing. Show me sort patients alphabetically by name.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by name")), hint: "Apply an alphabetical rule to the patient identity column." },
            { req: "To track treatment efficacy, please pull a list of sort appointments by status.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by status")), hint: "Set an organization rule based on the categorical visit states." },
            { req: "For our medication inventory compliance check, please list doctors by specialty and then experience.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by specialty") && sql.toLowerCase().includes("years_exp")), hint: "Arrange results using two distinct criteria: first by medical field, then by seniority." },
            { req: "Billing needs to reconcile some patient accounts. Please find sort patient DOB oldest first.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by dob") && !sql.toLowerCase().includes("desc")), hint: "Organize birth dates chronologically from earlier to later years." },
            { req: "We're analyzing admission rates for the last quarter. Extract appointment reasons in reverse alphabetical order.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by reason desc")), hint: "Apply a Z-to-A arrangement to the visit cause field." },
            { req: "Billing needs to reconcile some patient accounts. Please find sort Diagnostic doctors by experience (lowest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("diagnostics") && sql.toLowerCase().includes("order by years_exp")), hint: "Filter for one department and then organize that subset by total service time." },
            { req: "We're analyzing admission rates for the last quarter. Extract order patients by blood type and name.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by blood_type") && sql.toLowerCase().includes("name")), hint: "Apply multi-level sorting, starting with the medical group classification." }
        ],
        "110": [
            { req: "For the departmental budget review, please get me all male patients born before '1990-01-01' with blood type 'A+' or 'B+'. Sort by dob.", check: (res, sql) => sql.toLowerCase().includes("gender = 'm'") && sql.toLowerCase().includes("< '1990-01-01'") && (sql.toLowerCase().includes("in") || sql.toLowerCase().includes("or")) && sql.toLowerCase().includes("order by dob"), hint: "Combine gender, date, and blood type filters with a chronological sort." },
            { req: "We're analyzing admission rates for the last quarter. Extract 'Completed' appointments for doctor 10 or 11, sorted by date DESC.", check: (res, sql) => sql.toLowerCase().includes("completed") && (sql.toLowerCase().includes("in") || sql.toLowerCase().includes("or")) && sql.toLowerCase().includes("order by date desc"), hint: "Filter for a status and specific doctors, then sort newest first." },
            { req: "We need to audit access to sensitive patient files. Show me doctors with specialty containing 'ology' and experience > 5 years. Sort by years_exp DESC.", check: (res, sql) => sql.toLowerCase().includes("like '%ology%'") && sql.toLowerCase().includes("> 5") && sql.toLowerCase().includes("order by years_exp desc"), hint: "Use pattern matching for specialty, a minimum experience, and a descending sort." },
            { req: "We're preparing for the joint commission audit. Please retrieve patients NOT with blood type 'O-' whose name starts with 'J' or 'R'. Sort by patient_id.", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("like") && sql.toLowerCase().includes("order by patient_id"), hint: "Exclude a blood type, match name patterns, and sort by identifier." },
            { req: "We need to audit access to sensitive patient files. Show me appointments with reason 'Checkup' or 'Fever' for patients 1 or 2. Sort by app_id.", check: (res, sql) => (sql.toLowerCase().includes("checkup") || sql.toLowerCase().includes("fever")) && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("2")) && sql.toLowerCase().includes("order by app_id"), hint: "Filter for multiple reasons and specific patients, then sort by ID." },
            { req: "For our medication inventory compliance check, please list doctors with experience between 8 and 20 years who are NOT in 'Surgery'. Sort by name.", check: (res, sql) => sql.toLowerCase().includes("between 8 and 20") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("order by name"), hint: "Combine an experience range, a specialty exclusion, and an alphabetical sort." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find all 'Pending' or 'Cancelled' appointments for doctor_id IN (10, 11, 12). Sort by date.", check: (res, sql) => (sql.toLowerCase().includes("pending") || sql.toLowerCase().includes("cancelled")) && sql.toLowerCase().includes("in") && sql.toLowerCase().includes("order by date"), hint: "Filter for multiple statuses and a list of doctors, then sort chronologically." },
            { req: "For our medication inventory compliance check, please list female patients with names ending in 'th'. Sort by dob DESC.", check: (res, sql) => sql.toLowerCase().includes("gender = 'f'") && sql.toLowerCase().includes("like '%th'") && sql.toLowerCase().includes("order by dob desc"), hint: "Combine a gender filter, a name pattern match, and a reverse-date sort." },
            { req: "We're updating our patient demographic records. I need appointments NOT for reason 'Checkup' with date between '2023-10-01' and '2023-10-05'. Sort by app_id DESC.", check: (res, sql) => (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("between") && sql.toLowerCase().includes("order by app_id desc"), hint: "Exclude a reason, apply a date range, and sort by ID descending." },
            { req: "To track treatment efficacy, please pull a list of doctors with name starting with 'Dr. R' or 'Dr. A' and years_exp > 7. Sort by doctor_id.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("> 7") && sql.toLowerCase().includes("order by doctor_id"), hint: "Use pattern matching for names, a minimum experience filter, and an ID sort." },
            { req: "We need to audit access to sensitive patient files. Show me patients born between '1975-01-01' and '1990-12-31' NOT with blood type 'A+'. Sort by name.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("order by name"), hint: "Combine a date range, a blood type exclusion, and an alphabetical sort." }
        ],
        "201": [
            { req: "For our medication inventory compliance check, please list the count of patients are registered in total.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(*)")), hint: "Think about the aggregation function that returns the total number of patient records." },
            { req: "To track treatment efficacy, please pull a list of a count of the total number of appointments on file.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count")), hint: "Use a counting function to see the total volume of visit records." },
            { req: "To track treatment efficacy, please pull a list of the count of doctors are on staff.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("doctors"), hint: "Apply the counting function to the physician table." },
            { req: "To track treatment efficacy, please pull a list of a count of how many appointments have status 'Completed'.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("completed"), hint: "Filter for finished visits and count them." },
            { req: "We're preparing for the joint commission audit. Please retrieve the count of patients have blood type 'A+'.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("a+"), hint: "Filter by blood type and count the results." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find a count of doctors with more than 10 years experience.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 10"), hint: "Filter for senior physicians and count them." },
            { req: "We're analyzing admission rates for the last quarter. Extract the count of appointments are 'Scheduled'.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("scheduled"), hint: "Filter for upcoming visits and count them." },
            { req: "For our medication inventory compliance check, please list a count of patients with male gender.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("m"), hint: "Filter by gender and count." },
            { req: "We're updating our patient demographic records. I need the count of distinct blood types do our patients have.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(distinct blood_type)")), hint: "Count only the unique blood type values." },
            { req: "For our medication inventory compliance check, please list a count of appointments for doctor_id 10.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("doctor_id = 10"), hint: "Filter for a specific physician and count their visits." },
            { req: "We're analyzing admission rates for the last quarter. Extract the count of appointments were cancelled.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("cancelled"), hint: "Filter for aborted visits and count them." }
        ],
        "202": [
            { req: "For the departmental budget review, please get me what is the average years of experience for our doctors.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(years_exp)")), hint: "Calculate the mean value of the professional seniority column." },
            { req: "Billing needs to reconcile some patient accounts. Please find the maximum years of experience among our doctors.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(years_exp)")), hint: "Identify the highest value in the experience column." },
            { req: "To track treatment efficacy, please pull a list of the count of distinct specialties do our doctors cover.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("count(distinct specialty)")), hint: "Count only the unique values in the clinical field column." },
            { req: "We need to audit access to sensitive patient files. Show me what's the minimum years of experience among doctors.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(years_exp)")), hint: "Find the least experienced physician." },
            { req: "We need to audit access to sensitive patient files. Show me the total years of experience across all doctors.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(years_exp)")), hint: "Sum up all the experience years." },
            { req: "Billing needs to reconcile some patient accounts. Please find what's the average patient_id value.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(patient_id)")), hint: "Calculate the mean of the patient identifier column." },
            { req: "We're updating our patient demographic records. I need the earliest appointment date.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(date)")), hint: "Identify the smallest date value to find the first appointment." },
            { req: "We need to audit access to sensitive patient files. Show me what's the latest appointment date on record.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(date)")), hint: "Find the most recent visit date." },
            { req: "Billing needs to reconcile some patient accounts. Please find average and max experience for all doctors.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(years_exp)") && sql.toLowerCase().includes("max(years_exp)")), hint: "Use both AVG and MAX in a single query." },
            { req: "Billing needs to reconcile some patient accounts. Please find the min and max doctor_id.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(doctor_id)") && sql.toLowerCase().includes("max(doctor_id)")), hint: "Use both MIN and MAX to see the ID range." },
            { req: "To track treatment efficacy, please pull a list of what's the average experience for 'Surgery' specialists.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(years_exp)") && sql.toLowerCase().includes("surgery")), hint: "Filter for a specialty and calculate the mean." }
        ],
        "203": [
            { req: "We're analyzing admission rates for the last quarter. Extract a count of how many appointments each doctor has.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by doctor_id") && sql.toLowerCase().includes("count")), hint: "Group the visit data by provider and count the entries in each group." },
            { req: "We're analyzing admission rates for the last quarter. Extract the number of patients per blood type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by blood_type") && sql.toLowerCase().includes("count")), hint: "Group individuals by their medical classification and count each category." },
            { req: "We're analyzing admission rates for the last quarter. Extract a count of appointments per status.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("count")), hint: "Group visits by their state and count each group." },
            { req: "For our medication inventory compliance check, please list average experience per specialty.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("avg(years_exp)")), hint: "Group by clinical field and calculate mean experience." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find a count of patients per gender.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by gender") && sql.toLowerCase().includes("count")), hint: "Group by gender and count each group." },
            { req: "For our medication inventory compliance check, please list maximum experience per specialty.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("max(years_exp)")), hint: "Group by clinical field and find the most senior doctor." },
            { req: "Billing needs to reconcile some patient accounts. Please find a count of appointments per patient_id.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by patient_id") && sql.toLowerCase().includes("count")), hint: "Group visits by patient and count each group." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find minimum years_exp per specialty.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("min(years_exp)")), hint: "Group by clinical field and find the newest doctor." },
            { req: "We need to audit access to sensitive patient files. Show me a count of appointments per reason.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by reason") && sql.toLowerCase().includes("count")), hint: "Group visits by their cause and count each group." },
            { req: "We need to verify doctor schedules for the new wing. Show me total doctor experience per specialty.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("sum(years_exp)")), hint: "Group by clinical field and sum the experience." },
            { req: "For our medication inventory compliance check, please list a count of doctors per specialty.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("count")), hint: "Group by clinical field and count the physicians." }
        ],
        "204": [
            { req: "For our medication inventory compliance check, please list doctors have more than 1 appointment.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by doctor_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by provider and filter to show only those with multiple visits." },
            { req: "To track treatment efficacy, please pull a list of blood types that have more than 1 patient.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by blood_type") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by medical classification and only return those with multiple individuals." },
            { req: "We're analyzing admission rates for the last quarter. Extract specialties have more than 1 doctor.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by clinical field and filter for multi-doctor specialties." },
            { req: "For the departmental budget review, please get me patients with more than 1 appointment.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by patient_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by patient and filter for those with repeat visits." },
            { req: "We need to audit access to sensitive patient files. Show me statuses have more than 2 appointments.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 2")), hint: "Group by visit state and filter for common statuses." },
            { req: "For the departmental budget review, please get me specialties with average experience above 10.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("having avg(years_exp) > 10")), hint: "Group by clinical field and filter for experienced groups." },
            { req: "We're analyzing admission rates for the last quarter. Extract genders have more than 2 patients.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by gender") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 2")), hint: "Group by gender and filter for the larger groups." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find reasons with exactly 1 appointment.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by reason") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("= 1")), hint: "Group by visit cause and filter for unique reasons." },
            { req: "For our medication inventory compliance check, please list specialties have total experience over 20.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by specialty") && sql.toLowerCase().includes("having sum(years_exp) > 20")), hint: "Group by clinical field and filter for highly experienced groups." },
            { req: "We're analyzing admission rates for the last quarter. Extract blood types with exactly 1 patient.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by blood_type") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("= 1")), hint: "Group by blood type and filter for rare types." },
            { req: "For our medication inventory compliance check, please list doctors have maximum appointments? (HAVING COUNT >= 2).", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by doctor_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes(">= 2")), hint: "Group by provider and filter for busy doctors." }
        ],
        "205": [
            { req: "Billing needs to reconcile some patient accounts. Please find all unique specialties our doctors practice.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct specialty")), hint: "Use a duplicate-removal keyword to show each clinical field only once." },
            { req: "We need to verify doctor schedules for the new wing. Show me the unique appointment statuses we track.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct status")), hint: "Retrieve each visit state type exactly once." },
            { req: "We're analyzing admission rates for the last quarter. Extract all distinct blood types in our system.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct blood_type")), hint: "List each blood classification without repetition." },
            { req: "We're preparing for the joint commission audit. Please retrieve what unique genders are recorded for patients.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct gender")), hint: "Show each gender category exactly once." },
            { req: "We need to audit access to sensitive patient files. Show me all distinct appointment reasons.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct reason")), hint: "Retrieve each visit cause without duplicates." },
            { req: "We need to verify doctor schedules for the new wing. Show me all unique doctor names.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct name")), hint: "List each physician's name exactly once." },
            { req: "We're analyzing admission rates for the last quarter. Extract the distinct patient IDs with appointments.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct patient_id")), hint: "Show each patient who has visited, without duplicates." },
            { req: "We're preparing for the joint commission audit. Please retrieve the count of distinct specialties exist.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct specialty)")), hint: "Count the unique clinical fields." },
            { req: "We're preparing for the joint commission audit. Please retrieve all distinct dates of birth for patients.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct dob")), hint: "Show each unique birth date." },
            { req: "We need to audit access to sensitive patient files. Show me the count of distinct appointment statuses are there.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct status)")), hint: "Count the number of unique visit states." },
            { req: "We're analyzing admission rates for the last quarter. Extract all distinct doctor IDs.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct doctor_id")), hint: "Retrieve each physician identifier without repetition." }
        ],
        "206": [
            { req: "We need to verify doctor schedules for the new wing. Show me doctor names and their experience in months (years_exp * 12).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("years_exp * 12")), hint: "Convert years of practice to months using multiplication in your selection." },
            { req: "To track treatment efficacy, please pull a list of a 'double appointment' count (patient_id * 2) for each appointment.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("patient_id * 2")), hint: "Apply a multiplication operation to create a derived numeric value." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find doctor experience with 5 bonus years (years_exp + 5).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("years_exp + 5")), hint: "Add a fixed bonus to the experience column." },
            { req: "We're preparing for the joint commission audit. Please retrieve years_exp * 2 as 'double experience'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("years_exp * 2")), hint: "Multiply the experience by two." },
            { req: "For the departmental budget review, please get me patient_id + 1000 as 'medical record number'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("patient_id + 1000")), hint: "Add a large number to the identifier for a record format." },
            { req: "We're analyzing admission rates for the last quarter. Extract doctor_id - 10 as 'registration offset'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("doctor_id - 10")), hint: "Subtract a base number from the physician identifier." },
            { req: "To track treatment efficacy, please pull a list of experience in days (years_exp * 365).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("years_exp * 365")), hint: "Convert years to days using multiplication." },
            { req: "To track treatment efficacy, please pull a list of app_id * 10 as 'reference code'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("app_id * 10")), hint: "Scale up the appointment identifier." },
            { req: "To track treatment efficacy, please pull a list of years_exp - 3 as 'adjusted experience'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("years_exp - 3")), hint: "Subtract a fixed value from the experience." },
            { req: "Billing needs to reconcile some patient accounts. Please find patient_id * patient_id as 'patient squared'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("patient_id * patient_id")), hint: "Multiply the identifier by itself." },
            { req: "We need to verify doctor schedules for the new wing. Show me experience in weeks (years_exp * 52).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("years_exp * 52")), hint: "Convert years to weeks using multiplication." }
        ],
        "207": [
            { req: "We're preparing for the joint commission audit. Please retrieve round years of experience to the nearest 5.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(years_exp")), hint: "Apply a rounding function to the seniority column." },
            { req: "We're analyzing admission rates for the last quarter. Extract the absolute difference between doctor experience and 15 years.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(years_exp - 15)")), hint: "Use the magnitude function to see how far each doctor is from a 15-year baseline." },
            { req: "To track treatment efficacy, please pull a list of round patient_id / 3.0 to 1 decimal place.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 3")), hint: "Divide and round the patient identifier." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find aBS(years_exp - 10) for all doctors.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(years_exp - 10)")), hint: "Calculate each doctor's distance from a 10-year benchmark." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find round years_exp / 3.0 to 2 decimal places.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("years_exp")), hint: "Divide experience and round the result." },
            { req: "We're updating our patient demographic records. I need aBS(doctor_id - 11) for all doctors.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(doctor_id - 11)")), hint: "Calculate each doctor's ID distance from a reference." },
            { req: "To track treatment efficacy, please pull a list of round the average experience to 1 decimal.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(years_exp)")), hint: "Combine an aggregate with rounding." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find aBS(patient_id - 3) for all patients.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(patient_id - 3)")), hint: "Calculate patient distance from a reference ID." },
            { req: "For the departmental budget review, please get me round app_id / 10.0 to 0 decimal places.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("app_id")), hint: "Divide and round the appointment identifier." },
            { req: "We're preparing for the joint commission audit. Please retrieve aBS(years_exp - 8) for doctors with > 5 years.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(years_exp - 8)") && sql.toLowerCase().includes("> 5")), hint: "Combine a filter with an absolute value calculation." },
            { req: "We need to verify doctor schedules for the new wing. Show me round average years_exp to nearest integer.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(years_exp")), hint: "Calculate mean experience and round." }
        ],
        "208": [
            { req: "We need to verify doctor schedules for the new wing. Show me divide years of experience by 2 to see 'half career' length.", check: (res, sql) => sql.toLowerCase().includes("years_exp / 2"), hint: "Use division to find half the professional seniority." },
            { req: "For the departmental budget review, please get me patient_id / 3.0 for all patients.", check: (res, sql) => sql.toLowerCase().includes("patient_id / 3"), hint: "Apply a division operation to the unique identifier column." },
            { req: "We're analyzing admission rates for the last quarter. Extract divide doctor_id by 10.0 for all doctors.", check: (res, sql) => sql.toLowerCase().includes("doctor_id / 10"), hint: "Scale down the physician identifier." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find years_exp / 5.0 as 'experience blocks'.", check: (res, sql) => sql.toLowerCase().includes("years_exp / 5"), hint: "Divide experience into five-year segments." },
            { req: "For our medication inventory compliance check, please list app_id / 100.0 for all appointments.", check: (res, sql) => sql.toLowerCase().includes("app_id / 100"), hint: "Scale down the visit identifier." },
            { req: "The Chief Medical Officer needs a report on patient outcomes. Find divide years_exp by 12.0 to see experience in 'dozen-years'.", check: (res, sql) => sql.toLowerCase().includes("years_exp / 12"), hint: "Calculate what fraction of a dozen years each doctor has." },
            { req: "We need to audit access to sensitive patient files. Show me patient_id / 2.0 for all patients.", check: (res, sql) => sql.toLowerCase().includes("patient_id / 2"), hint: "Divide the patient identifier by two." },
            { req: "We're updating our patient demographic records. I need years_exp / 10.0 as 'decade score'.", check: (res, sql) => sql.toLowerCase().includes("years_exp / 10"), hint: "Convert experience to a decade-based scale." },
            { req: "For the departmental budget review, please get me divide doctor_id by 5.0 for all doctors.", check: (res, sql) => sql.toLowerCase().includes("doctor_id / 5"), hint: "Scale down the physician identifier by five." },
            { req: "For the departmental budget review, please get me app_id / 50.0 for all appointments.", check: (res, sql) => sql.toLowerCase().includes("app_id / 50"), hint: "Scale down the appointment identifier." },
            { req: "For the departmental budget review, please get me the ratio of years_exp to doctor_id.", check: (res, sql) => sql.toLowerCase().includes("years_exp / doctor_id"), hint: "Divide experience by the doctor identifier to create a ratio." }
        ],
        "209": [
            { req: "For our medication inventory compliance check, please list appointments where the reason is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is null")), hint: "Think about the operator used to detect missing visit causes." },
            { req: "We need to audit access to sensitive patient files. Show me patients who have a blood type recorded (NOT NULL).", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null")), hint: "Filter for individuals whose medical classification has been filled in." },
            { req: "We're updating our patient demographic records. I need doctors where specialty is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("specialty") && sql.toLowerCase().includes("is null")), hint: "Check for physicians without an assigned clinical field." },
            { req: "To track treatment efficacy, please pull a list of appointments where status is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("status") && sql.toLowerCase().includes("is not null")), hint: "Filter for visits with a recorded state." },
            { req: "To track treatment efficacy, please pull a list of patients where gender is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("gender") && sql.toLowerCase().includes("is null")), hint: "Look for patients without recorded gender." },
            { req: "We're analyzing admission rates for the last quarter. Extract doctors where name is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("name") && sql.toLowerCase().includes("is not null")), hint: "Filter for physicians with recorded names." },
            { req: "For the departmental budget review, please get me appointments where date is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("date") && sql.toLowerCase().includes("is null")), hint: "Check for visits without scheduled dates." },
            { req: "We're updating our patient demographic records. I need patients where dob is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("dob") && sql.toLowerCase().includes("is not null")), hint: "Filter for patients with recorded birth dates." },
            { req: "We're analyzing admission rates for the last quarter. Extract a count of appointments where reason IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("count") && sql.toLowerCase().includes("is null")), hint: "Combine counting with a NULL check for visit causes." },
            { req: "For the departmental budget review, please get me doctors where years_exp is NOT NULL and specialty IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null") && sql.toLowerCase().includes("is null")), hint: "Combine both NULL checks in one query." },
            { req: "For the departmental budget review, please get me patients where blood_type is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("blood_type") && sql.toLowerCase().includes("is not null")), hint: "Filter for patients with classified blood types." }
        ],
        "210": [
            { req: "Triage. Label appointments 'Urgent' if reason = 'Emergency', else 'Routine'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when reason = 'emergency'"), hint: "Prioritize emergency visits." },
            { req: "Experience check. Label doctors 'Senior' if years_exp > 10, else 'Junior'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when years_exp > 10"), hint: "Categorize by seniority." },
            { req: "Blood type. Label patients 'Universal' if blood_type = 'O-', else 'Specific'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when blood_type = 'o-'"), hint: "Flag universal donors." },
            { req: "Schedule check. Label visits 'Morning' if time < '12:00', else 'Afternoon'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when"), hint: "Group by time of day." },
            { req: "Validation. Label 'Valid' if email IS NOT NULL, else 'Invalid'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("is not null"), hint: "Check patient contact info." },
            { req: "Surgery prep. Label 'High Risk' if age > 70, else 'Standard'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when age > 70"), hint: "Flag older patients." },
            { req: "Specialty groups. Label 'Sugery' if specialty = 'Surgery', else 'Other'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when specialty = 'surgery'"), hint: "Isolate surgeons." },
            { req: "Follow-up. Label 'Review' if status = 'Pending', else 'Done'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when status = 'pending'"), hint: "Track open items." },
            { req: "Billing. Label 'Insurance' if insurance_id IS NOT NULL, else 'Self-Pay'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("is not null"), hint: "Check payment method." },
            { req: "Load balance. Label doctors 'Busy' if years_exp > 20, else 'Available'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when years_exp > 20"), hint: "Distribute workload." },
            { req: "Room assignment. Label 'Blocked' if status = 'Occupied', else 'Open'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when status = 'occupied'"), hint: "Manage capacity." }
        ],
        "211": [
            { req: "Schedule view. List appointments and doctor names (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join doctors") && sql.toLowerCase().includes("name")), hint: "See who is treating whom." },
            { req: "Patient list. List appointments and patient names (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join patients") && sql.toLowerCase().includes("name")), hint: "Identify patients with visits." },
            { req: "Doctor roster. Show ALL doctors and any appointments (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("doctors") && sql.toLowerCase().includes("left join appointments")), hint: "Find doctors with open schedules." },
            { req: "Patient history. Show ALL patients and their appointment info (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("patients") && sql.toLowerCase().includes("left join appointments")), hint: "List all patients, including those with no visits." },
            { req: "Full details. Show patient name, doctor name, and appointment time (INNER JOIN x2).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join doctors") && sql.toLowerCase().includes("join patients")), hint: "Connect all three tables." },
            { req: "Surgical schedule. List appointments for 'Surgery' specialty (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join doctors") && sql.toLowerCase().includes("surgery")), hint: "Filter joins by doctor type." },
            { req: "Room utilization. List appointments and patient details (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join patients")), hint: "Standard join." },
            { req: "Unbooked doctors. Show ALL doctors and appointment dates (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join appointments")), hint: "Check availability." },
            { req: "New patients. Show ALL patients and reason for visit (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join appointments")), hint: "See who hasn't visited yet." },
            { req: "Cardiology view. Show appointment times for Cardiologists (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join doctors") && sql.toLowerCase().includes("cardiology")), hint: "Specialty filter." },
            { req: "Contact trace. Show patient emails and doctor names (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join doctors") && sql.toLowerCase().includes("email")), hint: "Link contact info to provider." }
        ],
        "212": [
            { req: "Demographics. Extract year from birth_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', birth_date)")), hint: "Get birth year." },
            { req: "Seasonality. Extract month from appointment date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', date)")), hint: "Analyze busy months." },
            { req: "Follow-up. Calculate date 14 days after appointment.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date(date, '+14 days')") || sql.toLowerCase().includes("+14 days")), hint: "Schedule checkup." },
            { req: "Standard format. Show birth_date as 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', birth_date)")), hint: "Format DOB." },
            { req: "Staffing. Find day of week for appointments.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', date)")), hint: "Check weekly load." },
            { req: "Age check. Extract year of birth.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', birth_date)")), hint: "Duplicate concept." },
            { req: "Monthly stats. Extract month from date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', date)")), hint: "Duplicate concept." },
            { req: "Next visit. Date 30 days from now.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date('now', '+30 days')")), hint: "Future planning." },
            { req: "Report header. Get current date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date('now')")), hint: "Today." },
            { req: "Archives. Format date as 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', date)")), hint: "Formatting." },
            { req: "Weekend check. Day of week for date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', date)")), hint: "Check for Saturday/Sunday." }
        ],
        "213": [
            { req: "Doctor impact. Count appointments (from appointments) per Doctor Name (Join Doctors). Group by Name.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("join doctors") && sql.toLowerCase().includes("group by name"), hint: "Join the schedule with the doctor list to count visits per physician." },
            { req: "Patient history. List Patient Name and Appointment Reason for visits in '2023' (strftime). (Join Patients + Appointments).", check: (res, sql) => sql.toLowerCase().includes("join appointments") && sql.toLowerCase().includes("strftime('%y'") && sql.toLowerCase().includes("2023"), hint: "Join patient records with visits and filter by the appointment year." }
        ]
    },
    "finance": {
        "101": [
            { req: "We're closing the books for the fiscal year. Please list all transactions in our records.", check: (res, sql) => sql.toLowerCase().includes("transactions"), hint: "Think about the table where all financial exchanges are recorded and how to view its entire content." },
            { req: "Risk management requires an analysis of high-value transactions. Show me everything in the accounts table.", check: (res, sql) => sql.toLowerCase().includes("accounts"), hint: "Target the core table for bank accounts and request every column of data." },
            { req: "Risk management requires an analysis of high-value transactions. Show me can I see all assets we track.", check: (res, sql) => sql.toLowerCase().includes("assets"), hint: "Focus on the property records and how to pull a complete list of all assets." },
            { req: "We're reconciling the expense accounts. Please extract all records from the transactions table.", check: (res, sql) => sql.toLowerCase().includes("transactions"), hint: "Find the primary source for transaction data and view every single entry." },
            { req: "We're closing the books for the fiscal year. Please list the full list of accounts.", check: (res, sql) => sql.toLowerCase().includes("accounts"), hint: "Think about retrieving the entire set of records from our account database." },
            { req: "I need to investigate a variance in the quarterly report. Find all asset records.", check: (res, sql) => sql.toLowerCase().includes("assets"), hint: "Query the asset table to see every bit of information available for our holdings." },
            { req: "Risk management requires an analysis of high-value transactions. Show me everything related to transactions.", check: (res, sql) => sql.toLowerCase().includes("transactions"), hint: "Focus on getting a complete overview of the entire transaction log." },
            { req: "I need to investigate a variance in the quarterly report. Find every single account entry.", check: (res, sql) => sql.toLowerCase().includes("accounts"), hint: "Think about how to see all the rows currently stored in the account list." },
            { req: "We're analyzing cost centers for efficiency. List the complete asset table.", check: (res, sql) => sql.toLowerCase().includes("assets"), hint: "Retrieve all available columns from the table that tracks our physical and financial assets." },
            { req: "We're closing the books for the fiscal year. Please list every row from the transactions table please.", check: (res, sql) => sql.toLowerCase().includes("transactions"), hint: "Standard way to see all the logged activities in our financial system." },
            { req: "I need to investigate a variance in the quarterly report. Find everything we handle in Finance.", check: (res, sql) => sql.toLowerCase().includes("transactions") || sql.toLowerCase().includes("accounts"), hint: "Try looking into one of our main tables like transactions or accounts." }
        ],
        "102": [
            { req: "The external auditors are arriving next week. I need you to pull get just the amounts and categories of our transactions.", check: (res, sql) => sql.toLowerCase().includes("amount") && sql.toLowerCase().includes("category"), hint: "Think about choosing only the financial value and the classification type from our ledger." },
            { req: "We need to audit all transactions above the approval threshold. Find account names and their types.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("type"), hint: "Pick out the account title and the category of service from our account records." },
            { req: "For the investor relations deck, please get me can I see asset names and their values.", check: (res, sql) => sql.toLowerCase().includes("name") && sql.toLowerCase().includes("value"), hint: "Identify the identity and the monetary worth columns for all our tracked assets." },
            { req: "I need to verify the tax liability for this period. Show me all account names in the database.", check: (res, sql) => sql.toLowerCase().includes("name") && !sql.toLowerCase().includes("type"), hint: "Think about selecting only the identity field from our account list." },
            { req: "For the investor relations deck, please get me the IDs of our transactions.", check: (res, sql) => sql.toLowerCase().includes("transaction_id"), hint: "Isolate the unique identification number assigned to each financial exchange." },
            { req: "We're reconciling the expense accounts. Please extract the asset types we track.", check: (res, sql) => sql.toLowerCase().includes("type"), hint: "Query only the classification field from our asset table." },
            { req: "The external auditors are arriving next week. I need you to pull the opening_date for all accounts.", check: (res, sql) => sql.toLowerCase().includes("opening_date"), hint: "Think about selecting only the date when each account was first created." },
            { req: "Risk management requires an analysis of high-value transactions. Show me transaction dates and amounts.", check: (res, sql) => sql.toLowerCase().includes("date") && sql.toLowerCase().includes("amount"), hint: "Focus on retrieving the timing and the total value for each exchange." },
            { req: "We're reconciling the expense accounts. Please extract the currency and value for all assets.", check: (res, sql) => sql.toLowerCase().includes("currency") && sql.toLowerCase().includes("value"), hint: "Pick only the monetary unit and the total worth from the asset records." },
            { req: "We're reconciling the expense accounts. Please extract account balances.", check: (res, sql) => sql.toLowerCase().includes("balance"), hint: "Identify the specific column that tracks how much money is currently in an account." },
            { req: "For the investor relations deck, please get me columns show the branch IDs? Show account_id too.", check: (res, sql) => sql.toLowerCase().includes("branch") && sql.toLowerCase().includes("account_id"), hint: "Target the location identifier and the unique account number in the same query." }
        ],
        "103": [
            { req: "We're closing the books for the fiscal year. Please list transactions with an amount greater than $100.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("amount > 100")), hint: "Think about applying a minimum value threshold to filter our financial exchanges." },
            { req: "Risk management requires an analysis of high-value transactions. Show me savings accounts with a balance over $1000.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("savings") && sql.toLowerCase().includes("> 1000")), hint: "Apply two filters: one for the account category and another for a minimum funds level." },
            { req: "We're reconciling the expense accounts. Please extract all accounts that are currently 'Frozen'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("frozen")), hint: "Filter the account records for a specific inactive or locked state." },
            { req: "I need to verify the tax liability for this period. Show me transactions in the 'Food' category.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("category = 'food'")), hint: "Apply a filter to catch all exchanges belonging to a specific daily expense type." },
            { req: "Risk management requires an analysis of high-value transactions. Show me loans have an interest rate of 4.5.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("interest_rate = 4.5")), hint: "Think about how to filter the loan data for a precise percentage value." },
            { req: "We need to audit all transactions above the approval threshold. Find accounts for User 1001.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("user_id = 1001")), hint: "Identify all records that belong to a single, specific customer identifier." },
            { req: "We're closing the books for the fiscal year. Please list loans are 'Active'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("status = 'active'")), hint: "Filter the borrowing records for a specific current or open state." },
            { req: "We're analyzing cost centers for efficiency. List transactions with amount minus 20.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("-20")), hint: "Think about how to filter for a specific negative dollar value in the amounts column." },
            { req: "Risk management requires an analysis of high-value transactions. Show me accounts are 'Checking'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("type = 'checking'")), hint: "Apply a filter to isolate the primary transactional account category." },
            { req: "I need to investigate a variance in the quarterly report. Find transactions on '2023-09-01'.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("2023-09-01")), hint: "Consider how to target a single, specific calendar day in our financial ledger." },
            { req: "We're reconciling the expense accounts. Please extract accounts with exactly 0 balance.", check: (res, sql) => (sql.includes(">") || sql.includes("<") || sql.includes("=") || sql.includes("!=")) && (sql.toLowerCase().includes("balance = 0")), hint: "Think about filtering for accounts that have no remaining funds." }
        ],
        "104": [
            { req: "I need to investigate a variance in the quarterly report. Find 'Income' transactions with amounts above 1000.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("income") && sql.toLowerCase().includes("> 1000")), hint: "Think about how to require both a specific category of money coming in and a minimum value threshold." },
            { req: "We're closing the books for the fiscal year. Please list 'Savings' accounts with a balance above 10000.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("savings") && sql.toLowerCase().includes("> 10000")), hint: "Combine a filter for the long-term funds type with a baseline balance requirement." },
            { req: "The external auditors are arriving next week. I need you to pull assets named 'Stocks' or 'Bonds'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && ((sql.toLowerCase().includes("stocks") || sql.toLowerCase().includes("bonds"))), hint: "Consider a way to match if the title is either one of these core investment types." },
            { req: "I need to investigate a variance in the quarterly report. Find transactions on '2023-01-15' that were 'Withdrawals'.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("2023-01-15") && sql.toLowerCase().includes("withdrawal")), hint: "Identify records that match both a precise mid-month date and a specific money-out type." },
            { req: "We're reconciling the expense accounts. Please extract accounts in 'Main' branch with ID 1.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("main") && sql.toLowerCase().includes("account_id = 1")), hint: "Look for a record that meets both the location title and the precise identification number." },
            { req: "I need to verify the tax liability for this period. Show me who has a 'Savings' account in the 'West' branch.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("savings") && sql.toLowerCase().includes("west")), hint: "Think about filtering for individuals who match both an account category and a specific bank location." },
            { req: "I need to verify the tax liability for this period. Show me 'Real Estate' assets with value > 500000.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("real estate") && sql.toLowerCase().includes("> 500000")), hint: "Identify property that matches both the title and a high-value threshold." },
            { req: "We're reconciling the expense accounts. Please extract transactions for account_id 1 with ID > 5.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("account_id = 1") && sql.toLowerCase().includes("transaction_id > 5")), hint: "Think about how to filter for a specific account's records while requiring a minimum exchange ID." },
            { req: "For the investor relations deck, please get me accounts balance 500 OR balance 1000.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("500") || sql.toLowerCase().includes("1000")), hint: "Identify accounts if they match either one of these two precise balance amounts." },
            { req: "We're closing the books for the fiscal year. Please list transactions between 1 PM and 3 PM using OR.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("1:00 pm") || sql.toLowerCase().includes("3:00 pm")), hint: "Combine two specific time options to see exchanges that happened in either slot." },
            { req: "For the investor relations deck, please get me anyone in Savings who isn't ID 1.", check: (res, sql) => (sql.toLowerCase().includes("and") || sql.toLowerCase().includes("or") || sql.toLowerCase().includes("not")) && (sql.toLowerCase().includes("savings") && sql.toLowerCase().includes("not")), hint: "Think about filtering for a specific account type while explicitly excluding one unique person." }
        ],
        "105": [
            { req: "We're reconciling the expense accounts. Please extract transactions with amounts between 100 and 500.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 100 and 500")), hint: "Consider a way to target exchanges within an inclusive dollar range." },
            { req: "We need to audit all transactions above the approval threshold. Find accounts opened between 2023-01-01 and 2023-06-30.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-01"), hint: "Think about how to specify a six-month window for account creation dates." },
            { req: "We're reconciling the expense accounts. Please extract asset values are between 10000 and 50000.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 10000 and 50000")), hint: "Apply a range filter to the column that tracks total property value." },
            { req: "We're analyzing cost centers for efficiency. List transaction IDs between 1 and 10.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 1 and 10")), hint: "Identify exchanges whose identification numbers fall within a specific early set." },
            { req: "We're analyzing cost centers for efficiency. List account balances between 1000 and 5000.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 1000 and 5000")), hint: "Target individuals whose remaining funds fall within a defined middle-tier range." },
            { req: "For the investor relations deck, please get me assets with values between 50000 and 100000.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 50000 and 100000")), hint: "Think about identifying holdings that meet an inclusive high-value range." },
            { req: "For the investor relations deck, please get me dates in 2023 occurred in the first quarter.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("2023-01-01") && sql.toLowerCase().includes("2023-03-31"), hint: "Look for a way to filter for a range of dates spanning the first three months of the year." },
            { req: "We're closing the books for the fiscal year. Please list account IDs in the 10-20 range.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 10 and 20")), hint: "Consider a range filter for the unique identifier column." },
            { req: "I need to verify the tax liability for this period. Show me amounts in 5 to 50 range.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("between 5 and 50")), hint: "Apply an inclusive range filter to the numeric transaction totals." },
            { req: "The external auditors are arriving next week. I need you to pull balances aren't between 0 and 1000?.", check: (res, sql) => sql.toLowerCase().includes("between") && (sql.toLowerCase().includes("not between 0 and 1000")), hint: "Think about how to exclude any results that fall inside a specific dollar range." },
            { req: "We need to audit all transactions above the approval threshold. Find transaction dates late in the month.", check: (res, sql) => sql.toLowerCase().includes("between") && sql.toLowerCase().includes("-25"), hint: "Apply a range filter to identify days falling in the final week of a month." }
        ],
        "106": [
            { req: "To verify our liquidity position, I need a list of transactions for categories 'Food' or 'Salary'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("food") || sql.toLowerCase().includes("salary")), hint: "Identify a way to check if the classification matches any item in a specific target list." },
            { req: "I need to verify the tax liability for this period. Show me get info for accounts 1, 3, and 4.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1") || sql.toLowerCase().includes("3")), hint: "Filter the data by checking if the unique identifier appears in your specified set." },
            { req: "We're reconciling the expense accounts. Please extract accounts for users 1001 or 1002.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("1001") || sql.toLowerCase().includes("1002")), hint: "Think about checking customer identifiers against a small defined list." },
            { req: "The external auditors are arriving next week. I need you to pull statuses 'Active' or 'Frozen'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("active") || sql.toLowerCase().includes("frozen")), hint: "Consider a way to require that the account state exists within your provided options." },
            { req: "We're closing the books for the fiscal year. Please list get transactions for dates '2023-09-01' or '2023-09-15'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("2023-09-01") || sql.toLowerCase().includes("2023-09-15")), hint: "Check if the exchange timing matches any of your target days at once." },
            { req: "Risk management requires an analysis of high-value transactions. Show me loan terms are 12, 24, or 36?.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("12") || sql.toLowerCase().includes("36")), hint: "Identify records where the month count fits into your specific timeframe set." },
            { req: "I need to verify the tax liability for this period. Show me categories 'Utilities' or 'Rent'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("utilities") || sql.toLowerCase().includes("rent")), hint: "Think about how to return results for several specific classification groups simultaneously." },
            { req: "I need to verify the tax liability for this period. Show me amounts are exactly 20 or 40?.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("20") || sql.toLowerCase().includes("40")), hint: "Look for exchanges whose monetary values are found in your target numeric list." },
            { req: "The external auditors are arriving next week. I need you to pull account types 'Checking' or 'Savings'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("checking") || sql.toLowerCase().includes("savings")), hint: "Consider a list check to locate matching account categories." },
            { req: "We're reconciling the expense accounts. Please extract statuses NOT IN 'Closed', 'Defaulted'.", check: (res, sql) => sql.toLowerCase().includes("in") && (sql.toLowerCase().includes("not in") && (sql.toLowerCase().includes("closed") || sql.toLowerCase().includes("defaulted"))), hint: "Think about excluding any records whose state matches any item in your forbidden list." },
            { req: "I need to verify the tax liability for this period. Show me user ID 1003.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("1003"), hint: "Apply a list-based filter to target a single person identifier." }
        ],
        "107": [
            { req: "The external auditors are arriving next week. I need you to pull accounts where the type starts with 'Sav'.", check: (res, sql) => sql.toLowerCase().includes("like") && (sql.includes("'sav%'") || sql.includes('"sav%"')), hint: "Think about matching account categories that begin with a specific common prefix." },
            { req: "I need to investigate a variance in the quarterly report. Find transactions where the date is in September ('%-09-%').", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("-09-"), hint: "Filter the timing information for a specific mid-year month using a pattern match." },
            { req: "For the investor relations deck, please get me transactions with a category like 'Salary'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("salary"), hint: "Think about finding a specific keyword anywhere within the classification field." },
            { req: "We're analyzing cost centers for efficiency. List descriptions include 'Monthly'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("monthly"), hint: "Apply a pattern match to locating a recurring term within our exchange descriptions." },
            { req: "For the investor relations deck, please get me accounts with status ending in 've'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%ve"), hint: "Isolate states that share a particular two-letter suffix." },
            { req: "We're reconciling the expense accounts. Please extract categories starting with 'F'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("f%"), hint: "Look for classified groups that begin with a particular capital letter." },
            { req: "I need to investigate a variance in the quarterly report. Find dates for year 2023.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("2023%"), hint: "Consider a way to catch all records that share the same starting year digits." },
            { req: "I need to verify the tax liability for this period. Show me account IDs end in '1'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("%1"), hint: "Think about matching unique identifiers that share the same final number." },
            { req: "We need to audit all transactions above the approval threshold. Find categories containing 'ent'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("ent"), hint: "Search for a specific character string appearing anywhere in our classification names." },
            { req: "For the investor relations deck, please get me descriptions starting with 'Auto'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("auto%"), hint: "Identify records where the descriptive text begins with a certain keyword." },
            { req: "We're closing the books for the fiscal year. Please list types contain 'eck'.", check: (res, sql) => sql.toLowerCase().includes("like") && sql.toLowerCase().includes("eck"), hint: "Think about searching our category list for a specific name fragment." }
        ],
        "108": [
            { req: "For the investor relations deck, please get me transactions that are NOT in the 'Food' category.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("food")), hint: "Think about how to return all financial exchanges EXCEPT those in one specific spending group." },
            { req: "To verify our liquidity position, I need a list of accounts that are NOT currently 'Active'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("active")), hint: "Look for a way to exclude one specific current state from your list of accounts." },
            { req: "We need to audit all transactions above the approval threshold. Find ACTIVE accounts that are NOT 'Savings' accounts.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("active") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!="))), hint: "Require one specific current state while explicitly excluding a certain account type." },
            { req: "To verify our liquidity position, I need a list of transactions aren't from '2023-09-01'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("2023-09-01")), hint: "Consider a way to skip any records that fell on one specific calendar day." },
            { req: "To verify our liquidity position, I need a list of balances that aren't exactly 5000.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("5000")), hint: "Identify all funds levels EXCEPT for one precise numeric total." },
            { req: "We're closing the books for the fiscal year. Please list loan terms are NOT 36 months.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("36")), hint: "Think about how to exclude one specific month-count from the borrowing data." },
            { req: "I need to investigate a variance in the quarterly report. Find categories NOT 'Utilities'.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("utilities")), hint: "Skip only the exchanges belonging to one specific classification name." },
            { req: "To verify our liquidity position, I need a list of accounts NOT for user 1001.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("1001")), hint: "Think about getting records for everyone EXCEPT one specific person identifier." },
            { req: "We need to audit all transactions above the approval threshold. Find interest rates NOT 5.0.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("5.0")), hint: "Consider excluding one particular percentage value from the results." },
            { req: "For the investor relations deck, please get me accounts NOT frozen.", check: (res, sql) => sql.toLowerCase().includes("not ") && ((sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("frozen")), hint: "Identify all account state EXCEPT for the locked one." },
            { req: "We're reconciling the expense accounts. Please extract transactions NOT descriptions containing 'Payment'.", check: (res, sql) => sql.toLowerCase().includes("not ") && (sql.toLowerCase().includes("not like '%payment%'")), hint: "Think about how to exclude any records if their description matches a specific pattern." }
        ],
        "109": [
            { req: "We need to audit all transactions above the approval threshold. Find accounts sorted by balance (highest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by balance desc")), hint: "Consider a rule to arrange our account files so the wealthiest entries are on top." },
            { req: "We're analyzing cost centers for efficiency. List loans sorted by interest rate (lowest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by interest_rate")), hint: "Think about an organization rule to see our borrowing options from lowest percentage up." },
            { req: "The external auditors are arriving next week. I need you to pull transactions sorted by amount (smallest amount first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by amount") && !sql.toLowerCase().includes("desc")), hint: "Organize exchanges by their monetary total in ascending order." },
            { req: "For the investor relations deck, please get me sort transactions by category and date.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by category") && sql.toLowerCase().includes("date")), hint: "Apply arrangement rules for two separate criteria: first by spending group, then by timing." },
            { req: "We're closing the books for the fiscal year. Please list accounts sorted by type.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by type")), hint: "Consider an alphabetical organization rule based on the account classification." },
            { req: "To verify our liquidity position, I need a list of sort loans by term length (longest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by term_months desc")), hint: "Think about how to arrange borrowing periods so the longest ones appear at the start." },
            { req: "We're reconciling the expense accounts. Please extract user ID accounts sorted by balance (lowest first).", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by balance") && !sql.toLowerCase().includes("desc")), hint: "Organize the customer results from the smallest funds level upwards." },
            { req: "To verify our liquidity position, I need a list of sort transaction dates newest first.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by date desc")), hint: "Apply a reverse-chronological organization to the exchange timings." },
            { req: "We're closing the books for the fiscal year. Please list checking accounts sorted by balance.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("checking") && sql.toLowerCase().includes("order by balance")), hint: "Filter for one account category and then arrange that subset by total funds." },
            { req: "We need to audit all transactions above the approval threshold. Find sort categories reverse alphabetically.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by category desc")), hint: "Apply a Z-to-A arrangement rule to the Spending group identities." },
            { req: "We're analyzing cost centers for efficiency. List order interest rates descending.", check: (res, sql) => sql.toLowerCase().includes("order by") && (sql.toLowerCase().includes("order by interest_rate desc")), hint: "Apply a highest-to-lowest arrangement rule to the percentage values." }
        ],
        "110": [
            { req: "The external auditors are arriving next week. I need you to pull 'Checking' accounts with balance between $500 and $5000 that are 'Active'. Sort by balance DESC.", check: (res, sql) => sql.toLowerCase().includes("checking") && sql.toLowerCase().includes("between 500 and 5000") && sql.toLowerCase().includes("active") && sql.toLowerCase().includes("order by balance desc"), hint: "Think about combining an account category filter, an inclusive funds range, a specific current state, and a final arrangement rule." },
            { req: "We're analyzing cost centers for efficiency. List all transactions in 'Food' or 'Salary' categories with amount > 100 or < -100. Sort by date.", check: (res, sql) => (sql.toLowerCase().includes("food") || sql.toLowerCase().includes("salary")) && (sql.toLowerCase().includes(" > 100") || sql.toLowerCase().includes(" < -100") || (sql.toLowerCase().includes("amount >") && sql.toLowerCase().includes("100")) || (sql.toLowerCase().includes("amount <") && sql.toLowerCase().includes("-100"))) && sql.toLowerCase().includes("order by date"), hint: "Consider how to check for two distinct spending groups alongside dual monetary thresholds and a timing-based sort." },
            { req: "For the investor relations deck, please get me loans with user_id 1001 or 1002 that have interest_rate < 5.0, sorted by term length.", check: (res, sql) => sql.toLowerCase().includes("in (1001, 1002)") && sql.toLowerCase().includes("interest_rate < 5") && sql.toLowerCase().includes("order by term_months"), hint: "Combine a target list for customer IDs, a maximum percentage limit, and a final rule to organize by duration." },
            { req: "We need to audit all transactions above the approval threshold. Find accounts that aren't 'Frozen', sorted by acc_id.", check: (res, sql) => sql.toLowerCase().includes("not") && sql.toLowerCase().includes("frozen") && sql.toLowerCase().includes("order by acc_id"), hint: "Think about excluding one specific locked state and then arranging the results by unique identifier." },
            { req: "The external auditors are arriving next week. I need you to pull transactions from September 2023 that include 'Fee' in category, sorted by amount.", check: (res, sql) => sql.toLowerCase().includes("2023-09") && sql.toLowerCase().includes("like '%fee%'") && sql.toLowerCase().includes("order by amount"), hint: "Consider a pattern match for a mid-year month, a classification keyword search, and a final rule to organize by monetary total." },
            { req: "Risk management requires an analysis of high-value transactions. Show me 'Savings' accounts NOT for user 1001 with balance > $100. Sort by balance.", check: (res, sql) => sql.toLowerCase().includes("savings") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("> 100") && sql.toLowerCase().includes("order by balance"), hint: "Combine an account type, a user exclusion, a balance minimum, and a sort." },
            { req: "We're analyzing cost centers for efficiency. List transactions for acc_id IN (1, 2) with category starting with 'S'. Sort by tx_id DESC.", check: (res, sql) => sql.toLowerCase().includes("in") && sql.toLowerCase().includes("like 's%'") && sql.toLowerCase().includes("order by tx_id desc"), hint: "Use a list filter for accounts, a pattern match for category, and a descending ID sort." },
            { req: "To verify our liquidity position, I need a list of loans with amount between $5000 and $15000 and interest_rate NOT 7.2. Sort by amount.", check: (res, sql) => sql.toLowerCase().includes("between 5000 and 15000") && (sql.toLowerCase().includes("not") || sql.toLowerCase().includes("!=")) && sql.toLowerCase().includes("order by amount"), hint: "Combine an amount range, an interest rate exclusion, and a numeric sort." },
            { req: "I need to verify the tax liability for this period. Show me 'Active' accounts with balance NOT between $0 and $500. Sort by user_id.", check: (res, sql) => sql.toLowerCase().includes("active") && sql.toLowerCase().includes("not between") && sql.toLowerCase().includes("order by user_id"), hint: "Combine a status filter, a negated balance range, and a user sort." },
            { req: "For the investor relations deck, please get me all transactions with negative amounts (< 0) in category containing 'Fee'. Sort by date DESC.", check: (res, sql) => sql.toLowerCase().includes("< 0") && sql.toLowerCase().includes("like '%fee%'") && sql.toLowerCase().includes("order by date desc"), hint: "Filter for negative values and a category pattern, then sort newest first." },
            { req: "For the investor relations deck, please get me loans for user_id 1001 or 1002 with term_months > 12, sorted by interest_rate DESC.", check: (res, sql) => (sql.toLowerCase().includes("in") || sql.toLowerCase().includes("or")) && sql.toLowerCase().includes("> 12") && sql.toLowerCase().includes("order by interest_rate desc"), hint: "Combine a user list, a minimum term filter, and a descending rate sort." }
        ],
        "201": [
            { req: "The external auditors are arriving next week. I need you to pull the count of transactions have we recorded in total.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(*)")), hint: "Think about the aggregation function that returns the total count of financial exchange records." },
            { req: "Risk management requires an analysis of high-value transactions. Show me a count of the total number of bank accounts on file.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count")), hint: "Use a counting function to see the total number of entries in the account table." },
            { req: "We're reconciling the expense accounts. Please extract the count of loans are currently active.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("active"), hint: "Filter for active borrowing records and count them." },
            { req: "We're analyzing cost centers for efficiency. List a count of how many assets we track.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("assets"), hint: "Apply the counting function to the property table." },
            { req: "I need to investigate a variance in the quarterly report. Find the count of transactions are in the 'Food' category.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("food"), hint: "Filter by spending type and count the results." },
            { req: "We're reconciling the expense accounts. Please extract a count of accounts with balance over $1000.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("> 1000"), hint: "Filter for high-balance accounts and count them." },
            { req: "For the investor relations deck, please get me the count of 'Savings' accounts exist.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("savings"), hint: "Filter by account type and count." },
            { req: "For the investor relations deck, please get me a count of transactions with negative amounts.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("< 0"), hint: "Filter for debit transactions and count them." },
            { req: "We're closing the books for the fiscal year. Please list the count of distinct transaction categories exist.", check: (res, sql) => sql.toLowerCase().includes("count") && (sql.toLowerCase().includes("count(distinct category)")), hint: "Count only the unique spending types." },
            { req: "The external auditors are arriving next week. I need you to pull a count of loans for user_id 1001.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("user_id = 1001"), hint: "Filter for a specific customer and count their borrowings." },
            { req: "I need to verify the tax liability for this period. Show me the count of accounts are 'Frozen'.", check: (res, sql) => sql.toLowerCase().includes("count") && sql.toLowerCase().includes("frozen"), hint: "Filter for inactive accounts and count." }
        ],
        "202": [
            { req: "Risk management requires an analysis of high-value transactions. Show me what is the total balance across all accounts? (SUM).", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(balance)")), hint: "Calculate the grand total of all values in the funds column." },
            { req: "I need to investigate a variance in the quarterly report. Find the average interest rate across all our loans.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(interest_rate)")), hint: "Think about the mean-calculating function applied to the percentage column." },
            { req: "We're reconciling the expense accounts. Please extract what is the maximum loan amount we've issued.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(amount)")), hint: "Identify the function that finds the largest numeric value in the borrowing records." },
            { req: "We're analyzing cost centers for efficiency. List what's the minimum account balance.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(balance)")), hint: "Find the smallest balance across all accounts." },
            { req: "The external auditors are arriving next week. I need you to pull the total value of all assets.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(value)")), hint: "Sum up the worth of all tracked properties." },
            { req: "We're analyzing cost centers for efficiency. List what's the average transaction amount.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(amount)")), hint: "Calculate the mean financial exchange value." },
            { req: "We need to audit all transactions above the approval threshold. Find the earliest account opening date.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(opening_date)")), hint: "Identify the smallest date value for the oldest account." },
            { req: "We're closing the books for the fiscal year. Please list what's the maximum asset value we hold.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("max(value)")), hint: "Find our most valuable asset." },
            { req: "Risk management requires an analysis of high-value transactions. Show me total and average balance for all accounts.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("sum(balance)") && sql.toLowerCase().includes("avg(balance)")), hint: "Use both SUM and AVG in a single query." },
            { req: "We're closing the books for the fiscal year. Please list the minimum and maximum loan amounts.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("min(amount)") && sql.toLowerCase().includes("max(amount)")), hint: "Use both MIN and MAX to see the loan range." },
            { req: "For the investor relations deck, please get me what's the average balance for 'Active' accounts only.", check: (res, sql) => (sql.toLowerCase().includes("sum") || sql.toLowerCase().includes("avg") || sql.toLowerCase().includes("max") || sql.toLowerCase().includes("min")) && (sql.toLowerCase().includes("avg(balance)") && sql.toLowerCase().includes("active")), hint: "Filter for active accounts and calculate the mean balance." }
        ],
        "203": [
            { req: "We're closing the books for the fiscal year. Please list total balance for each account type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("sum(balance)")), hint: "Group the accounts by their category and sum up the funds for each group." },
            { req: "I need to investigate a variance in the quarterly report. Find total transaction amounts per category.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("sum(amount)")), hint: "Group the exchanges by their spending type and calculate the aggregate value for each." },
            { req: "For the investor relations deck, please get me a count of accounts per status.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("count")), hint: "Group by account state and count each group." },
            { req: "We're reconciling the expense accounts. Please extract average balance per account type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("avg(balance)")), hint: "Group by account category and calculate the mean balance." },
            { req: "We're analyzing cost centers for efficiency. List a count of transactions per user_id.", check: (res, sql) => sql.toLowerCase().includes("group by") && sql.toLowerCase().includes("count"), hint: "Group financial exchanges by customer and count each group." },
            { req: "We're reconciling the expense accounts. Please extract maximum loan amount per user_id.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("max(amount)")), hint: "Group by customer and find the largest borrowing." },
            { req: "We need to audit all transactions above the approval threshold. Find a count of assets per type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("count")), hint: "Group properties by classification and count each group." },
            { req: "For the investor relations deck, please get me average interest rate per loan status.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("avg(interest_rate)")), hint: "Group by loan state and calculate the mean rate." },
            { req: "For the investor relations deck, please get me total asset value per currency.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by currency") && sql.toLowerCase().includes("sum(value)")), hint: "Group by monetary unit and sum the asset worth." },
            { req: "Risk management requires an analysis of high-value transactions. Show me a count of loans per status.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("count")), hint: "Group borrowing records by their state and count." },
            { req: "For the investor relations deck, please get me minimum balance per account type.", check: (res, sql) => sql.toLowerCase().includes("group by") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("min(balance)")), hint: "Group by account category and find the lowest balance." }
        ],
        "204": [
            { req: "We're analyzing cost centers for efficiency. List categories have total transaction spending over $500.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having sum(amount) > 500")), hint: "Group by spending type and filter the results to show only those with an aggregate total above a limit." },
            { req: "I need to investigate a variance in the quarterly report. Find account types with an average balance over $2000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("having avg(balance) > 2000")), hint: "Group by account category and only return those whose aggregate fund level meets a minimum threshold." },
            { req: "We need to audit all transactions above the approval threshold. Find users have more than 1 account.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by customer and filter for those with multiple accounts." },
            { req: "Risk management requires an analysis of high-value transactions. Show me account statuses with more than 2 accounts.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 2")), hint: "Group by state and filter for popular statuses." },
            { req: "I need to verify the tax liability for this period. Show me categories have more than 1 transaction.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by category") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("> 1")), hint: "Group by spending type and filter for active categories." },
            { req: "We're analyzing cost centers for efficiency. List asset types with average value over $5000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("having avg(value) > 5000")), hint: "Group by asset class and filter for high-value types." },
            { req: "I need to investigate a variance in the quarterly report. Find users have total balance over $3000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having sum(balance) > 3000")), hint: "Group by customer and filter for wealthy users." },
            { req: "We're closing the books for the fiscal year. Please list loan statuses with average interest rate above 5.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by status") && sql.toLowerCase().includes("having avg(interest_rate) > 5")), hint: "Group by loan state and filter for high-rate groups." },
            { req: "We're reconciling the expense accounts. Please extract currencies have total asset value over $10,000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by currency") && sql.toLowerCase().includes("having sum(value) > 10000")), hint: "Group by monetary unit and filter for valuable currencies." },
            { req: "We need to audit all transactions above the approval threshold. Find account types with exactly 1 account.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by type") && sql.toLowerCase().includes("having count") && sql.toLowerCase().includes("= 1")), hint: "Group by type and filter for rare account categories." },
            { req: "To verify our liquidity position, I need a list of users have maximum loan amount over $10,000.", check: (res, sql) => sql.toLowerCase().includes("having") && (sql.toLowerCase().includes("group by user_id") && sql.toLowerCase().includes("having max(amount) > 10000")), hint: "Group by customer and filter for those with large loans." }
        ],
        "205": [
            { req: "We're analyzing cost centers for efficiency. List all unique asset types we track.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct type")), hint: "Identify each unique property classification exactly once in your results." },
            { req: "We're reconciling the expense accounts. Please extract what represent all the unique transaction categories.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct category")), hint: "Retrieve each unique spending group identity without duplicates." },
            { req: "The external auditors are arriving next week. I need you to pull all distinct account statuses.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct status")), hint: "List each account state exactly once." },
            { req: "We're reconciling the expense accounts. Please extract what unique account types do we offer.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct type")), hint: "Show each account category without duplication." },
            { req: "We're reconciling the expense accounts. Please extract all distinct loan statuses.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct status")), hint: "Retrieve each borrowing state type exactly once." },
            { req: "I need to verify the tax liability for this period. Show me all unique currencies for assets.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct currency")), hint: "List each monetary unit without repetition." },
            { req: "I need to verify the tax liability for this period. Show me what distinct user IDs have accounts.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct user_id")), hint: "Show each customer identifier exactly once." },
            { req: "For the investor relations deck, please get me the count of distinct transaction categories exist.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct category)")), hint: "Count the number of unique spending types." },
            { req: "I need to investigate a variance in the quarterly report. Find all distinct branch values.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct branch")), hint: "Show each unique branch location." },
            { req: "For the investor relations deck, please get me the count of distinct account types are there.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("count(distinct type)")), hint: "Count the unique account categories." },
            { req: "We're analyzing cost centers for efficiency. List all distinct interest rates for loans.", check: (res, sql) => sql.toLowerCase().includes("distinct") && (sql.toLowerCase().includes("distinct interest_rate")), hint: "List each unique lending rate." }
        ],
        "206": [
            { req: "For the investor relations deck, please get me scale all asset values by 1.1 to show 'projected growth'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("value * 1.1")), hint: "Perform a multiplication on the property worth column to derive a custom numeric result." },
            { req: "To verify our liquidity position, I need a list of amount + 50 as a 'Service Fee' for all loans.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount + 50")), hint: "Apply a simple addition to the borrowed total in your selection logic." },
            { req: "To verify our liquidity position, I need a list of annual interest (amount * interest_rate / 100).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount *") && sql.toLowerCase().includes("interest_rate")), hint: "Multiply the loan amount by the rate to estimate annual interest." },
            { req: "We're analyzing cost centers for efficiency. List balance with a $500 bonus (balance + 500).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("balance + 500")), hint: "Add a fixed amount to the account balance." },
            { req: "We're analyzing cost centers for efficiency. List asset value doubled (value * 2).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("value * 2")), hint: "Multiply the property worth by two." },
            { req: "We need to audit all transactions above the approval threshold. Find transaction amount minus $10 fee (amount - 10).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount - 10")), hint: "Subtract a transaction fee." },
            { req: "For the investor relations deck, please get me balance * 0.05 as 'interest earned'.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("balance * 0.05")), hint: "Multiply balance by an interest percentage." },
            { req: "To verify our liquidity position, I need a list of loan amount minus $1000 down payment (amount - 1000).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("amount - 1000")), hint: "Subtract a down payment from the borrowed total." },
            { req: "Risk management requires an analysis of high-value transactions. Show me asset value in thousands (value / 1000).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("value / 1000")), hint: "Divide the property worth by a thousand." },
            { req: "Risk management requires an analysis of high-value transactions. Show me balance squared (balance * balance).", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("balance * balance")), hint: "Multiply the balance by itself." },
            { req: "I need to verify the tax liability for this period. Show me term_months * 30 for 'total days' of loans.", check: (res, sql) => (sql.includes("+") || sql.includes("-") || sql.includes("*") || sql.includes("/")) && (sql.toLowerCase().includes("term_months * 30")), hint: "Convert monthly terms to days using multiplication." }
        ],
        "207": [
            { req: "We need to audit all transactions above the approval threshold. Find round loan interest rates to the nearest whole number.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(interest_rate")), hint: "Apply a math function that removes decimals from the percentage values." },
            { req: "Risk management requires an analysis of high-value transactions. Show me the absolute value of all transaction amounts.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(amount)")), hint: "Use the function that returns the non-negative magnitude of the numeric totals." },
            { req: "We need to audit all transactions above the approval threshold. Find round account balances to the nearest hundred.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(balance")), hint: "Apply rounding to the funds column." },
            { req: "The external auditors are arriving next week. I need you to pull aBS(balance - 2000) for all accounts.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(balance - 2000)")), hint: "Calculate how far each balance is from a $2000 benchmark." },
            { req: "To verify our liquidity position, I need a list of round asset values to 1 decimal place.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(value, 1)")), hint: "Apply rounding with a specified precision." },
            { req: "For the investor relations deck, please get me aBS(amount - 500) for all transactions.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(amount - 500)")), hint: "Calculate each transaction's distance from a $500 benchmark." },
            { req: "We need to audit all transactions above the approval threshold. Find round average interest rate to 2 decimals.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(interest_rate)")), hint: "Combine an aggregate with rounding." },
            { req: "We need to audit all transactions above the approval threshold. Find aBS(value - 10000) for all assets.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(value - 10000)")), hint: "Calculate asset distance from a $10K benchmark." },
            { req: "I need to investigate a variance in the quarterly report. Find round loan amount / 12.0 to 2 decimal places.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(") && sql.toLowerCase().includes("/ 12")), hint: "Calculate monthly payments and round." },
            { req: "For the investor relations deck, please get me aBS(interest_rate - 5) for loans with rate > 3.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("abs(interest_rate - 5)") && sql.toLowerCase().includes("> 3")), hint: "Combine a filter with an absolute value calculation." },
            { req: "The external auditors are arriving next week. I need you to pull round average balance to nearest dollar.", check: (res, sql) => (sql.toLowerCase().includes("round") || sql.toLowerCase().includes("abs") || sql.toLowerCase().includes("ceil")) && (sql.toLowerCase().includes("round(avg(balance)")), hint: "Calculate mean balance and round." }
        ],
        "208": [
            { req: "I need to investigate a variance in the quarterly report. Find divide account balance by 10 to see 'Reserve Requirement'.", check: (res, sql) => sql.toLowerCase().includes("balance / 10"), hint: "Use the division operator to calculate a fractional part of the total funds." },
            { req: "We're analyzing cost centers for efficiency. List amount / term_months for monthly loan payments.", check: (res, sql) => sql.toLowerCase().includes("amount / term_months"), hint: "Apply a division between the total borrowed and the duration in months." },
            { req: "I need to verify the tax liability for this period. Show me divide asset value by 100 to normalize.", check: (res, sql) => sql.toLowerCase().includes("value / 100"), hint: "Scale down the property worth." },
            { req: "To verify our liquidity position, I need a list of balance / 4.0 as quarterly balance.", check: (res, sql) => sql.toLowerCase().includes("balance / 4"), hint: "Divide the account balance into quarters." },
            { req: "We're closing the books for the fiscal year. Please list amount / 2.0 for half-loan.", check: (res, sql) => sql.toLowerCase().includes("amount / 2"), hint: "Find half the borrowed amount." },
            { req: "For the investor relations deck, please get me divide transaction_id by 100.0 for all transactions.", check: (res, sql) => sql.toLowerCase().includes("transaction_id / 100"), hint: "Scale down the exchange identifier." },
            { req: "We're closing the books for the fiscal year. Please list interest_rate / 12.0 as monthly rate.", check: (res, sql) => sql.toLowerCase().includes("interest_rate / 12"), hint: "Convert annual rate to monthly." },
            { req: "We're analyzing cost centers for efficiency. List balance / 365.0 for daily balance.", check: (res, sql) => sql.toLowerCase().includes("balance / 365"), hint: "Divide balance by days in a year." },
            { req: "For the investor relations deck, please get me divide account_id by 10.0 for all accounts.", check: (res, sql) => sql.toLowerCase().includes("account_id / 10"), hint: "Scale down the account identifier." },
            { req: "The external auditors are arriving next week. I need you to pull value / 12.0 for monthly asset value.", check: (res, sql) => sql.toLowerCase().includes("value / 12"), hint: "Divide annual asset value by twelve." },
            { req: "I need to investigate a variance in the quarterly report. Find the ratio of balance to account_id.", check: (res, sql) => sql.toLowerCase().includes("balance / account_id"), hint: "Divide the balance by the identifier to create a ratio." }
        ],
        "209": [
            { req: "We need to audit all transactions above the approval threshold. Find assets where the currency is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is null")), hint: "Think about the specialized operator used to check for missing monetary units." },
            { req: "I need to investigate a variance in the quarterly report. Find transactions where the category is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null")), hint: "Filter for records where the spending group has been explicitly recorded." },
            { req: "We're closing the books for the fiscal year. Please list accounts where opening_date is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("opening_date") && sql.toLowerCase().includes("is null")), hint: "Check for accounts without recorded creation dates." },
            { req: "For the investor relations deck, please get me loans where status is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("status") && sql.toLowerCase().includes("is not null")), hint: "Filter for loans with a recorded state." },
            { req: "We're reconciling the expense accounts. Please extract transactions where date is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("date") && sql.toLowerCase().includes("is null")), hint: "Look for exchanges without recorded dates." },
            { req: "To verify our liquidity position, I need a list of accounts where balance is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("balance") && sql.toLowerCase().includes("is not null")), hint: "Filter for accounts with recorded fund levels." },
            { req: "I need to verify the tax liability for this period. Show me assets where type is NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("type") && sql.toLowerCase().includes("is null")), hint: "Check for unclassified properties." },
            { req: "We need to audit all transactions above the approval threshold. Find loans where interest_rate is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("interest_rate") && sql.toLowerCase().includes("is not null")), hint: "Filter for loans with recorded rates." },
            { req: "We're closing the books for the fiscal year. Please list a count of transactions where category IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("count") && sql.toLowerCase().includes("is null")), hint: "Combine counting with a NULL check for spending types." },
            { req: "To verify our liquidity position, I need a list of accounts where status is NOT NULL and branch IS NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("is not null") && sql.toLowerCase().includes("is null")), hint: "Combine both NULL checks in one query." },
            { req: "We're analyzing cost centers for efficiency. List assets where value is NOT NULL.", check: (res, sql) => (sql.toLowerCase().includes("is null") || sql.toLowerCase().includes("is not null")) && (sql.toLowerCase().includes("value") && sql.toLowerCase().includes("is not null")), hint: "Filter for assets with recorded worth." }
        ],
        "210": [
            { req: "Risk check. Label transactions 'High' if amount > 5000, else 'Low'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when amount > 5000"), hint: "Flag large transfers." },
            { req: "Account status. Label 'Frozen' if status = 'Locked', else 'Active'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when status = 'locked'"), hint: "Normalize status." },
            { req: "Balance tier. Label 'VIP' if balance > 50000, else 'Standard'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when balance > 50000"), hint: "Categorize customers." },
            { req: "Transaction type. Label 'Debit' if amount < 0, else 'Credit'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when amount < 0"), hint: "Distinguish flows." },
            { req: "KYC check. Label 'Verified' if email IS NOT NULL, else 'Pending'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("is not null"), hint: "Verify contact info." },
            { req: "Branch audit. Label 'Main' if branch_id = 1, else 'Satellite'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when branch_id = 1"), hint: "Tag locations." },
            { req: "Debt check. Label 'Overdraft' if balance < 0, else 'Positive'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when balance < 0"), hint: "Flag debt." },
            { req: "Recency. Label 'New' if open_date > '2023-01-01', else 'Old'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when open_date >"), hint: "Segment by age." },
            { req: "Interest. Label 'High' if rate > 0.05, else 'Low'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when rate > 0.05"), hint: "Tag interest rates." },
            { req: "Category check. Label 'Food' if category = 'Dining', else 'Other'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when category = 'dining'"), hint: "Group spending." },
            { req: "Limit check. Label 'Near Limit' if balance < 100, else 'Safe'.", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when balance < 100"), hint: "Warn low funds." }
        ],
        "211": [
            { req: "Statement view. List transactions and account names (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("name")), hint: "Link activity to account." },
            { req: "Branch lookup. List accounts and branch location (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join branches") && sql.toLowerCase().includes("location")), hint: "Find where accounts are held." },
            { req: "Inactive accounts. Show ALL accounts and any transactions (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("accounts") && sql.toLowerCase().includes("left join transactions")), hint: "Find accounts with no activity." },
            { req: "Branch roster. Show ALL branches and any accounts held there (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("branches") && sql.toLowerCase().includes("left join accounts")), hint: "Find empty branches." },
            { req: "Full output. Show transaction date, account name, and branch city (INNER JOIN x2).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("join branches")), hint: "Connect all tables." },
            { req: "High value. Show transactions for 'Savings' accounts (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("savings")), hint: "Filter by account type." },
            { req: "City audit. List accounts in 'New York' branches (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join branches") && sql.toLowerCase().includes("new york")), hint: "Location filter." },
            { req: "No transaction history. Show ALL accounts and amounts (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join transactions")), hint: "Find dormant accounts." },
            { req: "Branch utilization. Show ALL branches and transaction IDs (LEFT JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("left join accounts")), hint: "Check branch activity." },
            { req: "Customer view. Show account names and transaction amounts (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("amount")), hint: "Link money to names." },
            { req: "Details. Show transactions and account open dates (INNER JOIN).", check: (res, sql) => sql.toLowerCase().includes("join") && (sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("open_date")), hint: "See account age." }
        ],
        "212": [
            { req: "Fiscal year. Extract year from open_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', open_date)")), hint: "Get opening year." },
            { req: "Trends. Extract month from transaction date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', date)")), hint: "Get month." },
            { req: "Maturation. Date 6 months after open_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date(open_date, '+6 months')") || sql.toLowerCase().includes("+6 months")), hint: "Calculate date." },
            { req: "Reporting. Format open_date as 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', open_date)")), hint: "Format string." },
            { req: "Traffic. Day of week for transactions.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', date)")), hint: "Weekday analysis." },
            { req: "Audit year. Extract year from date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y', date)")), hint: "Get year." },
            { req: "Opening month. Extract month from open_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%m', open_date)")), hint: "Get month." },
            { req: "Next audit. Date 365 days from now.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date('now', '+365 days')")), hint: "Future date." },
            { req: "Today. Get current date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("date('now')")), hint: "System date." },
            { req: "Archive. Format transaction date 'YYYY-MM'.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%y-%m', date)")), hint: "Format." },
            { req: "Business days. Day of week for open_date.", check: (res, sql) => (sql.toLowerCase().includes("date") || sql.toLowerCase().includes("strftime") || sql.toLowerCase().includes("time") || sql.toLowerCase().includes("now") || sql.toLowerCase().includes("month") || sql.toLowerCase().includes("year") || sql.toLowerCase().includes("day") || sql.toLowerCase().includes("hour") || sql.toLowerCase().includes("minute")) && (sql.toLowerCase().includes("strftime('%w', open_date)")), hint: "Check opening day." }
        ],
        "213": [
            { req: "Branch performance. Total Sum of Transaction Amounts (Join Transactions + Accounts) grouped by Branch ID (from Accounts). Group by branch_id.", check: (res, sql) => sql.toLowerCase().includes("sum(amount)") && sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("group by branch"), hint: "Join financial logs with account details to aggregate value by location." },
            { req: "Audit trail. Label transactions 'Flagged' if amount < -1000, else 'OK'. Show date and label for 'Checking' accounts (Join Trans + Accts).", check: (res, sql) => sql.toLowerCase().includes("case") && sql.toLowerCase().includes("when amount < -1000") && sql.toLowerCase().includes("join accounts") && sql.toLowerCase().includes("checking"), hint: "Join tables, filter for checking accounts, and flag high withdrawals." }
        ]
    }
};

let db = null;
let currentLessonId = null;
let currentIndustry = "ecommerce";
let currentRequest = null; // Stores the current active question object
let lessonProgress = {}; // Tracks answered questions per lesson: { "ecommerce_101": Set([0, 2, 5]), ... }
let SQL_ENGINE = null;

const initDB = async () => {
    if (!SQL_ENGINE) {
        SQL_ENGINE = await initSqlJs({
            locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm`
        });
    }

    db = new SQL_ENGINE.Database();
    db.run(INDUSTRY_CONFIGS[currentIndustry].setup);

    renderIndustrySwitcher();
    renderDashboard();
    renderTableSchemas();
};

const renderIndustrySwitcher = () => {
    // Create or find the wrapper container
    let wrapper = document.getElementById('industry-switcher-wrapper');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'industry-switcher-wrapper';
        wrapper.className = 'industry-switcher-wrapper';
        const header = document.querySelector('header');
        header.appendChild(wrapper);
    }

    // Create or find the label
    let label = document.getElementById('industry-label');
    if (!label) {
        label = document.createElement('p');
        label.id = 'industry-label';
        label.className = 'industry-label';
        label.innerHTML = '🏢 <strong>Choose your industry</strong> — Practice SQL with real-world data tailored to your field';
        wrapper.appendChild(label);
    }

    // Create or find the tabs
    let selector = document.getElementById('industry-selector');
    if (!selector) {
        selector = document.createElement('div');
        selector.id = 'industry-selector';
        selector.className = 'industry-tabs';
        wrapper.appendChild(selector);

        // Populate tabs initially
        selector.innerHTML = Object.keys(INDUSTRY_CONFIGS).map(id => `
            <button class="industry-tab ${id === currentIndustry ? 'active' : ''}" onclick="switchIndustry('${id}')">
                ${INDUSTRY_CONFIGS[id].name}
            </button>
        `).join('');
    } else {
        // Update active state
        const buttons = selector.querySelectorAll('.industry-tab');
        buttons.forEach(btn => {
            if (btn.getAttribute('onclick').includes(currentIndustry)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Create or find the section jump nav (lives inside the wrapper)
    let jumpNav = document.getElementById('section-jump-nav');
    if (!jumpNav) {
        jumpNav = document.createElement('nav');
        jumpNav.id = 'section-jump-nav';
        jumpNav.className = 'section-jump-nav';
        wrapper.appendChild(jumpNav);
    }
};

window.switchIndustry = (id) => {
    currentIndustry = id;
    initDB();
};

// ===== Progress Tracking System =====
const getCompletedLessons = () => {
    try {
        return new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]'));
        return new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]'));
    } catch { return new Set(); }
};

const getLessonProgressData = () => {
    try {
        const data = JSON.parse(localStorage.getItem('lessonProgressData') || '{}');
        const progress = {};
        for (const key in data) {
            progress[key] = new Set(data[key]);
        }
        return progress;
    } catch { return {}; }
};

const saveLessonProgressData = () => {
    const data = {};
    for (const key in lessonProgress) {
        data[key] = [...lessonProgress[key]];
    }
    localStorage.setItem('lessonProgressData', JSON.stringify(data));
};

// Initialize progress from storage
lessonProgress = getLessonProgressData();

const markLessonCompleted = (id) => {
    const completed = getCompletedLessons();
    completed.add(id);
    localStorage.setItem('completedLessons', JSON.stringify([...completed]));
    updateProgressBar();
};

const updateProgressBar = () => {
    const completed = getCompletedLessons();
    const total = lessons.length;
    const count = completed.size;
    const pct = Math.round((count / total) * 100);

    const fill = document.getElementById('progress-bar-fill');
    const text = document.getElementById('progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${count} / ${total} lessons completed`;
};

// ===== Section Jump Nav =====
const renderSectionJumpNav = (sections) => {
    const nav = document.getElementById('section-jump-nav');
    if (!nav) return;
    nav.innerHTML = sections.map(section => `
        <button class="section-jump-btn" onclick="document.getElementById('section-${section.replace(/\s+/g, '-').toLowerCase()}').scrollIntoView({ behavior: 'smooth', block: 'start' })">
            ${section}
        </button>
    `).join('');
};

let dashboardObserver = null;

const renderDashboard = () => {
    const grid = document.getElementById('lesson-grid');
    const sections = [...new Set(lessons.map(l => l.section))];
    const completed = getCompletedLessons();

    renderSectionJumpNav(sections);

    grid.innerHTML = sections.map(section => `
        <div class="section-group" id="section-${section.replace(/\s+/g, '-').toLowerCase()}">
            <h2 class="section-header">${section}</h2>
            <div class="card-grid">
                ${lessons.filter(l => l.section === section).map(l => {
        const isCompleted = completed.has(l.id);
        const isMaster = section.toLowerCase().includes('master');
        return `
                    <div class="lesson-card ${isMaster ? 'advanced-card' : ''}" onclick="startLesson('${l.id}')">

                        <span class="lesson-number">Lesson ${l.id}</span>
                        <h3>${l.title}</h3>
                        <p>${l.desc}</p>
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto;">
                            <div class="start-now">Start Now →</div>
                            ${LESSON_GUIDES[l.id] ? `<button class="lesson-guide-link" onclick="event.stopPropagation();openGuide('${l.id}')">📖 Read Guide</button>` : ''}
                        </div>
                    </div>
                `}).join('')}
            </div>
        </div>
    `).join('');

    // Setup scroll observer for jump nav highlighting
    if (dashboardObserver) {
        dashboardObserver.disconnect();
    }

    const navButtons = document.querySelectorAll('.section-jump-btn');
    if (navButtons.length > 0) {
        dashboardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navButtons.forEach(btn => {
                        if (btn.getAttribute('onclick').includes(id)) {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        });

        document.querySelectorAll('.section-group').forEach(group => {
            dashboardObserver.observe(group);
        });
    }

    updateProgressBar();
};

const renderTableSchemas = () => {
    const list = document.getElementById('tables-list');
    const tables = INDUSTRY_CONFIGS[currentIndustry].tables;
    list.innerHTML = tables.map((t, index) => {
        // Fetch Column Info
        const colRes = db.exec(`PRAGMA table_info(${t})`);
        const cols = colRes[0].values.map(v => v[1]);
        const isOpen = index === 0 ? 'open' : '';

        return `
            <details class="table-schema-item" ${isOpen}>
                <summary>
                    <span class="schema-table-name" onclick="insertAtCursor('${t}')" title="Click to insert table name">${t}</span>
                </summary>
                <div>
                    ${cols.map(c => `
                        <span class="schema-column" onclick="insertAtCursor('${c}')" title="Click to insert column name">
                            ↳ ${c}
                        </span>
                    `).join('')}
                </div>
            </details>
        `;
    }).join('');
};

window.startLesson = (id, questionIndex = null, skipPush = false) => {
    currentLessonId = id;
    const lesson = lessons.find(l => l.id === id);
    const pool = managerRequestsByIndustry[currentIndustry][id] || [{ req: "For the investor relations deck, please get me can you solve this query.", check: () => true }];

    // Initialize progress tracking for this lesson if needed
    const progressKey = `${currentIndustry}_${id}`;
    if (!lessonProgress[progressKey]) lessonProgress[progressKey] = new Set();

    let poolIndex;

    if (questionIndex !== null && questionIndex >= 0 && questionIndex < pool.length) {
        poolIndex = questionIndex;
    } else {
        // Reformatted: Linear progression - Start at first unanswered, or 0 if all done
        poolIndex = pool.findIndex((_, i) => !lessonProgress[progressKey].has(i));
        if (poolIndex === -1) poolIndex = 0;
    }

    currentRequest = pool[poolIndex];
    currentRequest._poolIndex = poolIndex; // Track which question this is

    // History API: Update URL if not skipping (prevent duplicate history on PopState)
    if (!skipPush) {
        const url = new URL(window.location);
        url.searchParams.set('lesson', id);
        window.history.pushState({ view: 'lesson', id: id }, '', url);
    }

    // Show emoji in lesson header but not on dashboard
    const idLabel = document.getElementById('lesson-id-label');
    if (idLabel) idLabel.innerText = `Lesson ${id} • ${lesson.title} ${lesson.emoji}`;

    const titleEl = document.getElementById('lesson-title');
    if (titleEl) titleEl.innerText = lesson.title;

    const avatar = document.getElementById('manager-avatar');
    if (avatar) avatar.innerText = lesson.id === "201" ? "💼" : "👨‍💼";

    const text = document.getElementById('manager-text');
    if (text) text.innerText = `"${currentRequest.req}"`;

    // Update question progress counter and nav
    const progressEl = document.getElementById('question-progress');
    if (progressEl) {
        const completed = lessonProgress[progressKey].size;
        progressEl.innerText = `${completed} / ${pool.length} Done`;
    }

    // Update Question Navigation UI
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const numDisplay = document.getElementById('current-question-num');

    if (prevBtn && nextBtn && numDisplay) {
        prevBtn.disabled = poolIndex <= 0;
        nextBtn.disabled = poolIndex >= pool.length - 1;

        const isDone = lessonProgress[progressKey].has(poolIndex);
        const doneMark = isDone ? " ✓ Done" : "";
        numDisplay.innerText = `Question ${poolIndex + 1} of ${pool.length}${doneMark}`;

        // Add click handlers (remove old ones first to avoid duplicates if re-rendering, though simple onclick is safer here)
        prevBtn.onclick = () => startLesson(id, poolIndex - 1);
        nextBtn.onclick = () => startLesson(id, poolIndex + 1);
    }

    // Render Tutorial Content
    const concept = document.getElementById('tutorial-concept');
    const syntax = document.getElementById('tutorial-syntax');
    const example = document.getElementById('tutorial-example');

    if (lesson.tutorial) {
        if (concept) concept.innerText = lesson.tutorial.concept;
        if (syntax) syntax.innerText = lesson.tutorial.syntax;
        if (example) example.innerText = lesson.tutorial.example;
        document.getElementById('tutorial-card').classList.remove('hidden');
    } else {
        document.getElementById('tutorial-card').classList.add('hidden');
    }

    // Show/Hide Read Guide Button
    const guideBtn = document.getElementById('read-guide-btn');
    if (guideBtn) {
        if (LESSON_GUIDES[lesson.id]) {
            guideBtn.style.display = 'inline-flex';
            guideBtn.onclick = () => openGuide(lesson.id);
        } else {
            guideBtn.style.display = 'none';
        }
    }

    document.getElementById('sql-editor').value = "";
    document.getElementById('result-table-container').innerHTML = '<div class="placeholder-text">Run a query to see results</div>';

    // Reset Feedback
    const hintPanel = document.getElementById('hint-panel');

    if (hintPanel) hintPanel.style.display = 'none';

    renderTableSchemas();
    updateInlineNav();

    // Reset inline success banner
    const inlineSuccess = document.getElementById('inline-success');
    if (inlineSuccess) inlineSuccess.classList.add('hidden');

    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('guide-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');
};

// ===== Inline Lesson Navigation =====
const updateInlineNav = () => {
    const idx = lessons.findIndex(l => l.id === currentLessonId);
    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn-inline');
    if (prevBtn) {
        prevBtn.disabled = idx <= 0;
    }
    if (nextBtn) {
        nextBtn.disabled = idx >= lessons.length - 1;
    }
};

const showDashboard = () => {
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('guide-view').classList.add('hidden');
    renderDashboard(); // Refresh to show updated completion badges

    // Update URL to root
    const url = new URL(window.location);
    url.searchParams.delete('lesson');
    window.history.pushState({ view: 'dashboard' }, '', url);
};

document.getElementById('back-btn').onclick = showDashboard;

// Handle Browser Back/Forward
window.onpopstate = (event) => {
    if (event.state && event.state.view === 'lesson') {
        // We only want to restore the view, not push state again
        // But startLesson pushes state... we need to modify startLesson or handle this carefully.
        // For simplicity: restart the lesson but we might duplicate history if we aren't careful.
        // Actually, startLesson pushes state. If we call it here, we add another entry.
        // Let's refactor startLesson to accept a 'skipPush' flag? 
        // Or better: Just manually toggle views here since startLesson does logic we need.
        // Minimal refactor:

        // Let's rely on the ID from the state. 
        // We WILL re-run startLesson logic which is good (updates UI). 
        // But we need to prevent IT from pushing state again.
        startLesson(event.state.id, null, true);
    } else {
        // Default to dashboard
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('guide-view').classList.add('hidden');
        renderDashboard();
    }
};

document.getElementById('prev-lesson-btn').onclick = () => {
    const idx = lessons.findIndex(l => l.id === currentLessonId);
    if (idx > 0) startLesson(lessons[idx - 1].id);
};

document.getElementById('next-lesson-btn-inline').onclick = () => {
    const idx = lessons.findIndex(l => l.id === currentLessonId);
    if (idx < lessons.length - 1) startLesson(lessons[idx + 1].id);
};

// Execution Function (Reused by Run and Submit)
const executeQuery = () => {
    const sql = window.editor ? window.editor.getValue() : document.getElementById('sql-editor').value;
    try {
        const res = db.exec(sql);
        if (res.length === 0) {
            document.getElementById('result-table-container').innerHTML = `
                <table class="results-table empty-table">
                    <thead><tr><th>Result</th></tr></thead>
                    <tbody><tr><td class="placeholder-text" style="text-align: center; padding: 2rem;">Query executed successfully (0 rows returned)</td></tr></tbody>
                </table>`;
            return { success: true, res: [], sql };
        }

        const columns = res[0].columns;
        const values = res[0].values;

        let tableHtml = '<table class="results-table"><thead><tr>';
        columns.forEach(col => tableHtml += `<th>${col}</th>`);
        tableHtml += '</tr></thead><tbody>';

        values.forEach(row => {
            tableHtml += '<tr>';
            row.forEach(val => tableHtml += `<td>${val}</td>`);
            tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';

        document.getElementById('result-table-container').innerHTML = tableHtml;
        return { success: true, res, sql };

    } catch (err) {
        document.getElementById('result-table-container').innerHTML = `<div class="placeholder-text" style="color: var(--error)">Error: ${err.message}</div>`;
        return { success: false, error: err };
    }
};

document.getElementById('run-btn').onclick = () => {
    executeQuery();
    // No checking, just running
};

document.getElementById('submit-btn').onclick = () => {
    const { success, res, sql } = executeQuery();
    if (!success) return; // Error already shown by executeQuery

    // Check Answer
    const hintPanel = document.getElementById('hint-panel');
    const hintText = document.getElementById('hint-text');

    if (currentRequest && currentRequest.check(res, sql)) {
        if (hintPanel) hintPanel.style.display = 'none';

        // Track question progress
        const progressKey = `${currentIndustry}_${currentLessonId}`;
        if (!lessonProgress[progressKey]) lessonProgress[progressKey] = new Set();

        if (currentRequest._poolIndex !== undefined) {
            lessonProgress[progressKey].add(currentRequest._poolIndex);
            saveLessonProgressData(); // Save to storage
        }

        const pool = managerRequestsByIndustry[currentIndustry][currentLessonId] || [];
        const progressEl = document.getElementById('question-progress');
        if (progressEl) {
            progressEl.innerText = `${lessonProgress[progressKey].size} / ${pool.length} completed`;
        }

        // Mark lesson as completed ONLY if all questions are answered
        if (lessonProgress[progressKey].size >= pool.length) {
            markLessonCompleted(currentLessonId);
        }

        // Show success modal
        document.getElementById('success-modal').classList.remove('hidden');
    } else if (currentRequest) {
        // Show technical hint
        if (hintPanel && hintText && currentRequest.hint) {
            hintText.innerText = currentRequest.hint;
            hintPanel.style.display = 'block';
        }
    }
};

document.getElementById('next-lesson-btn').onclick = () => {
    document.getElementById('success-modal').classList.add('hidden');
    const nextIdx = lessons.findIndex(l => l.id === currentLessonId) + 1;
    if (nextIdx < lessons.length) {
        startLesson(lessons[nextIdx].id); // Defaults to Level 1
    } else {
        document.getElementById('back-btn').click();
    }
};

document.getElementById('practice-more-btn').onclick = () => {
    document.getElementById('success-modal').classList.add('hidden');
    startLesson(currentLessonId); // Pick another random one
};

// ===== Keyboard Shortcuts =====
document.getElementById('sql-editor').addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('run-btn').click();
    }
});

// ===== Insert at Cursor (for click-to-insert columns) =====
window.insertAtCursor = (text) => {
    if (window.editor) {
        const doc = window.editor.getDoc();
        const cursor = doc.getCursor();
        doc.replaceRange(text, cursor);
        window.editor.focus();
    } else {
        const editor = document.getElementById('sql-editor');
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const before = editor.value.substring(0, start);
        const after = editor.value.substring(end);
        editor.value = before + text + after;
        editor.selectionStart = editor.selectionEnd = start + text.length;
        editor.focus();
    }
};

// ===== Tutorial Toggle =====
document.getElementById('tutorial-toggle').addEventListener('click', () => {
    document.getElementById('tutorial-card').classList.toggle('collapsed');
});

// ===== Try It Button =====
document.getElementById('try-it-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const example = document.getElementById('tutorial-example').textContent;
    if (example) {
        if (window.editor) {
            window.editor.setValue(example.trim());
            window.editor.focus();
        } else {
            document.getElementById('sql-editor').value = example.trim();
            document.getElementById('sql-editor').focus();
        }
    }
});

// ===== Inline Success Banner Buttons =====
document.getElementById('inline-next-btn').addEventListener('click', () => {
    document.getElementById('inline-success').classList.add('hidden');
    const nextIdx = lessons.findIndex(l => l.id === currentLessonId) + 1;
    if (nextIdx < lessons.length) {
        startLesson(lessons[nextIdx].id);
    } else {
        document.getElementById('back-btn').click();
    }
});

document.getElementById('inline-retry-btn').addEventListener('click', () => {
    document.getElementById('inline-success').classList.add('hidden');
    startLesson(currentLessonId);
});

// ===== Resizable Editor / Results =====
(() => {
    const handle = document.getElementById('resize-handle');
    const editorArea = document.querySelector('.main-editor-area');
    const resultPanel = document.getElementById('result-panel');
    const codeContainer = document.querySelector('.editor-workspace');
    if (!handle || !resultPanel || !codeContainer) return;

    let isDragging = false;
    let startY = 0;
    let startEditorH = 0;
    let startResultH = 0;

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        startEditorH = codeContainer.getBoundingClientRect().height;
        startResultH = resultPanel.getBoundingClientRect().height;
        handle.classList.add('dragging');
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dy = e.clientY - startY;
        const newEditorH = Math.max(80, startEditorH + dy);
        const newResultH = Math.max(80, startResultH - dy);
        codeContainer.style.height = newEditorH + 'px';
        codeContainer.style.flex = 'none';
        resultPanel.style.height = newResultH + 'px';
        resultPanel.style.flex = 'none';
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        handle.classList.remove('dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    });
})();

// ===== Guide Rendering =====
window.openGuide = (lessonId) => {
    const guide = LESSON_GUIDES[lessonId];
    if (!guide) return;
    renderGuide(lessonId, guide);
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('guide-view').classList.remove('hidden');
    window.scrollTo(0, 0);
};

function renderGuide(lessonId, guide) {
    const label = document.getElementById('guide-lesson-label');
    label.textContent = `Lesson ${lessonId}`;
    const container = document.getElementById('guide-content');

    let html = `<div class="guide-hero">
        <span class="guide-emoji">${guide.emoji}</span>
        <h1>${guide.title}</h1>
        <div class="guide-meta">
            <span>📖 ${guide.readTime} read</span>
            <span>Lesson ${lessonId}</span>
        </div>
    </div>`;

    guide.sections.forEach(s => {
        switch (s.type) {
            case 'intro':
                html += `<div class="guide-section guide-intro"><p>${s.content}</p></div>`;
                break;
            case 'concept':
                html += `<div class="guide-section">
                    <h2>💡 ${s.heading}</h2>
                    <p>${s.content}</p>
                    ${s.analogy ? `<div class="guide-analogy">💭 ${s.analogy}</div>` : ''}
                </div>`;
                break;
            case 'syntax':
                html += `<div class="guide-section">
                    <h2>⌨️ ${s.heading}</h2>
                    <div class="guide-code-block">${escapeHtml(s.code)}</div>
                    ${s.annotations ? `<div class="guide-annotations">${s.annotations.map(a => `<span>${a}</span>`).join('')}</div>` : ''}
                </div>`;
                break;
            case 'examples':
                html += `<div class="guide-section">
                    <h2>🧪 ${s.heading}</h2>
                    ${s.items.map(ex => `<div class="guide-example-item">
                        <pre>${escapeHtml(ex.sql)}</pre>
                        <div class="guide-explain">${ex.explain}</div>
                    </div>`).join('')}
                </div>`;
                break;
            case 'mistakes':
                html += `<div class="guide-section guide-mistakes">
                    <h2>⚠️ ${s.heading}</h2>
                    <ul>${s.items.map(m => `<li>${m}</li>`).join('')}</ul>
                </div>`;
                break;
            case 'realworld':
                html += `<div class="guide-section">
                    <h2>🌍 ${s.heading}</h2>
                    <p>${s.content}</p>
                </div>`;
                break;
            case 'cheatsheet':
                html += `<div class="guide-section">
                    <h2>📋 ${s.heading}</h2>
                    <div class="guide-cheatsheet-grid">
                        ${s.items.map(c => `<div class="guide-cheatsheet-item">
                            <span class="term">${escapeHtml(c.term)}</span>
                            <span class="def">${c.def}</span>
                        </div>`).join('')}
                    </div>
                </div>`;
                break;
        }
    });

    html += `<div class="guide-cta">
        <p>Ready to put this into practice?</p>
        <button class="primary-btn" onclick="startLesson('${lessonId}')">Start Practice →</button>
    </div>`;

    container.innerHTML = html;
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Guide back button
document.getElementById('guide-back-btn').addEventListener('click', () => {
    document.getElementById('guide-view').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    window.scrollTo(0, 0);
});

initDB().then(() => {
    // History API: Handle Initial Deep Link
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('lesson');
    if (lessonId) {
        const lesson = lessons.find(l => l.id === lessonId);
        if (lesson) {
            startLesson(lessonId, null, true); // true = skipPush (URL is already set)
        }
    }
});

// History API: Handle Initial Deep Link
(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('lesson');
    if (lessonId) {
        // Wait for DB to be ready? initDB is async-ish (wasm). 
        // SQL.js load might take a moment.
        // But initDB() is synchronous in app.js (it does .then on SQL). 
        // Actually initDB is async.
        // We should move this INSIDE initDB or wait.
        // Let's check initDB implementation.
    }
})();

// We need to check initDB first.
// Let's scroll up to find initDB definition.

// ===== IDE UI Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('sql-editor');
    if (textarea) {
        window.editor = CodeMirror.fromTextArea(textarea, {
            mode: 'text/x-sql',
            theme: 'dracula',
            lineNumbers: true,
            lineWrapping: true,
            indentWithTabs: true,
            gutters: ["CodeMirror-linenumbers"],
            extraKeys: {
                "Cmd-Enter": () => {
                    const runBtn = document.getElementById('run-btn');
                    if (runBtn) runBtn.click();
                },
                "Ctrl-Enter": () => {
                    const runBtn = document.getElementById('run-btn');
                    if (runBtn) runBtn.click();
                }
            }
        });

        // Ensure text is pushed away from gutters via JS
        window.editor.getWrapperElement().style.paddingLeft = "5px";
        window.editor.setSize("100%", "100%");
    }
});