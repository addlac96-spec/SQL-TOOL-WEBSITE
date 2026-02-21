import re

app_file = 'app.js'
with open(app_file, 'r', encoding='utf-8') as f:
    text = f.read()

# ECOMMERCE
# users(user_id, name, email, joined_date)
# products(product_id, name, category, price)
# orders(order_id, user_id, product_id, order_date, quantity)

# SAAS
# users(user_id, name, email, plan, sign_up_date)
# servers(server_id, region, status, monthly_cost)
# logs(log_id, server_id, event, date)

# HR
# employees(emp_id, name, department, title, salary, hire_date)
# departments(dept_id, name, location, budget)
# reviews(review_id, emp_id, date, rating, comment)

# HEALTHCARE
# patients(patient_id, name, dob, gender, blood_type)
# visits(visit_id, patient_id, doctor_id, date, reason, cost)
# doctors(doctor_id, name, specialty, years_experience)

# FINANCE
# accounts(acc_id, user_id, type, balance, status)
# transactions(tx_id, acc_id, amount, category, date)
# loans(loan_id, user_id, amount, interest_rate, term_months)

extra_data = {
    "ecommerce": """
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
    """,
    "saas": """
            INSERT INTO users VALUES (4, 'Eve Adams', 'eve@saas.com', 'Enterprise', '2023-01-20');
            INSERT INTO users VALUES (5, 'Frank White', 'frank@example.com', 'Pro', '2023-04-10');
            INSERT INTO users VALUES (6, 'Grace Kelly', 'grace@example.com', 'Basic', '2023-07-05');
            INSERT INTO users VALUES (7, 'Hank Moody', 'hank@example.com', 'Pro', '2023-11-20');
            INSERT INTO users VALUES (8, 'Ivy Green', 'ivy@example.com', 'Enterprise', '2024-01-15');
            
            INSERT INTO servers VALUES (4, 'us-west', 'Offline', 45.00);
            INSERT INTO servers VALUES (5, 'eu-west', 'Active', 120.00);
            INSERT INTO servers VALUES (6, 'ap-south', 'Maintenance', 80.00);
            INSERT INTO servers VALUES (7, 'us-east', 'Active', 250.00);
            INSERT INTO servers VALUES (8, 'us-west', 'Active', 90.00);
            
            INSERT INTO logs VALUES (104, 4, 'Crash', '2023-05-10');
            INSERT INTO logs VALUES (105, 5, 'Update', '2023-06-12');
            INSERT INTO logs VALUES (106, 6, 'Restart', '2023-08-01');
            INSERT INTO logs VALUES (107, 7, 'Deploy', '2023-09-20');
            INSERT INTO logs VALUES (108, 8, 'Error', '2023-10-15');
            INSERT INTO logs VALUES (109, 1, 'Patch', '2023-11-01');
    """,
    "hr": """
            INSERT INTO employees VALUES (4, 'Eve Adams', 'Sales', 'Manager', 95000, '2021-06-15');
            INSERT INTO employees VALUES (5, 'Frank White', 'HR', 'Recruiter', 65000, '2022-03-10');
            INSERT INTO employees VALUES (6, 'Grace Kelly', 'Engineering', 'Developer', 85000, '2023-01-20');
            INSERT INTO employees VALUES (7, 'Hank Moody', 'Marketing', 'Designer', 75000, '2023-07-05');
            INSERT INTO employees VALUES (8, 'Ivy Green', 'Sales', 'Director', 140000, '2019-05-12');
            
            INSERT INTO departments VALUES (4, 'Support', 'Chicago', 500000);
            INSERT INTO departments VALUES (5, 'Legal', 'Austin', 800000);
            
            INSERT INTO reviews VALUES (4, 4, '2023-06-15', 4.8, 'Exceeds expectations');
            INSERT INTO reviews VALUES (5, 5, '2023-03-10', 3.5, 'Meets expectations');
            INSERT INTO reviews VALUES (6, 6, '2024-01-20', 4.2, 'Strong performer');
            INSERT INTO reviews VALUES (7, 7, '2024-07-05', 3.8, 'Good addition');
            INSERT INTO reviews VALUES (8, 8, '2023-11-01', 4.9, 'Top talent');
    """,
    "healthcare": """
            INSERT INTO patients VALUES (4, 'Eve Adams', '1964-03-15', 'F', 'O-');
            INSERT INTO patients VALUES (5, 'Frank White', '1979-03-25', 'M', 'A+');
            INSERT INTO patients VALUES (6, 'Grace Kelly', '1978-10-01', 'F', 'B-');
            INSERT INTO patients VALUES (7, 'Hank Moody', '1970-01-20', 'M', 'AB+');
            INSERT INTO patients VALUES (8, 'Ivy Green', '1971-06-25', 'F', 'O+');
            
            INSERT INTO doctors VALUES (13, 'Dr. Smith', 'Pediatrics', 15);
            INSERT INTO doctors VALUES (14, 'Dr. Nick', 'Surgery', 5);
            INSERT INTO doctors VALUES (15, 'Dr. House', 'Diagnostics', 20);
            
            INSERT INTO visits VALUES (104, 4, 13, '2023-06-10', 'Checkup', 150.00);
            INSERT INTO visits VALUES (105, 5, 14, '2023-08-15', 'Vaccination', 50.00);
            INSERT INTO visits VALUES (106, 6, 15, '2023-11-20', 'Sprain', 350.00);
            INSERT INTO visits VALUES (107, 7, 10, '2024-01-05', 'Surgery Prep', 1200.00);
            INSERT INTO visits VALUES (108, 8, 11, '2024-02-14', 'Allergy', 80.00);
            INSERT INTO visits VALUES (109, 1, 12, '2024-03-01', 'Consultation', 500.00);
    """,
    "finance": """
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
    """
}

start_idx = text.find('const INDUSTRY_CONFIGS = {')
end_idx = text.find('};\n\n// --- LESSON DATA ---')

config_block = text[start_idx:end_idx]

for ind, extra in extra_data.items():
    pattern = rf'("{ind}"\s*:\s*{{.*?setup\s*:\s*`.*?)(`)'
    
    def replacer(match):
        prefix = match.group(1)
        suffix = match.group(2)
        return prefix + extra + suffix

    config_block = re.sub(pattern, replacer, config_block, flags=re.DOTALL)

new_text = text[:start_idx] + config_block + text[end_idx:]

with open(app_file, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Corrected expanded data injected successfully!")
