from typing import Dict, List, Optional
import random

class QuestionGenerator:
    def __init__(self):
        self.lessons = {
            "101": {
                "title": "TUTORIAL INTRO 👋",
                "manager_requests": [
                    "Welcome to the team! Just to get you started, can you show me everything we have in our users table?",
                    "Hey, I'm new here too. Could you just list all the products we sell so I can see what's in stock?"
                ],
                "expected_queries": ["SELECT * FROM users", "SELECT * FROM products"]
            },
            "102": {
                "title": "SQL SELECT 🔦",
                "manager_requests": [
                    "I just need a quick list of all our product names and their prices. Can you do that?",
                    "Can you get me the names and emails of all our users? I need to send a newsletter."
                ],
                "expected_queries": ["SELECT name, price FROM products", "SELECT name, email FROM users"]
            },
            "103": {
                "title": "SQL WHERE 📍",
                "manager_requests": [
                    "I need to see all the products that cost more than $100. We're doing a premium promotion.",
                    "Quick check: are there any users who joined before 2023-03-01?"
                ],
                "expected_queries": [
                    "SELECT * FROM products WHERE price > 100",
                    "SELECT * FROM users WHERE joined_date < '2023-03-01'"
                ]
            },
            "104": {
                "title": "AND, OR, NOT ❌",
                "manager_requests": [
                    "Can you find all 'Electronics' that are under $50? We need some cheap items for a bundle.",
                    "I need a list of users who joined in February OR March 2023."
                ],
                "expected_queries": [
                    "SELECT * FROM products WHERE category = 'Electronics' AND price < 50",
                    "SELECT * FROM users WHERE joined_date LIKE '2023-02%' OR joined_date LIKE '2023-03%'"
                ]
            },
            "105": {
                "title": "SQL BETWEEN 🖖",
                "manager_requests": [
                    "Someone asked for products in the $20 to $100 range. What do we have?",
                    "Show me all orders made between May 1st and May 3rd, 2023."
                ],
                "expected_queries": [
                    "SELECT * FROM products WHERE price BETWEEN 20 AND 100",
                    "SELECT * FROM orders WHERE order_date BETWEEN '2023-05-01' AND '2023-05-03'"
                ]
            },
            "106": {
                "title": "SQL IN 🔍",
                "manager_requests": [
                    "I only care about 'Electronics' and 'Furniture' right now. Can you list everything in those categories?",
                    "Can you find orders for products 101, 102, and 105?"
                ],
                "expected_queries": [
                    "SELECT * FROM products WHERE category IN ('Electronics', 'Furniture')",
                    "SELECT * FROM orders WHERE product_id IN (101, 102, 105)"
                ]
            },
            "107": {
                "title": "SQL LIKE ❤️",
                "manager_requests": [
                    "I can't remember the full name, but someone's name starts with 'Al'. Can you find them?",
                    "List all products that have 'Chair' anywhere in their name."
                ],
                "expected_queries": [
                    "SELECT * FROM users WHERE name LIKE 'Al%'",
                    "SELECT * FROM products WHERE name LIKE '%Chair%'"
                ]
            },
            "108": {
                "title": "FILTERING REVIEW 🔄",
                "manager_requests": [
                    "Let's do a quick audit: Find all products not in Electronics that cost more than $100.",
                    "I need all orders from user #2 made after May 2nd."
                ],
                "expected_queries": [
                    "SELECT * FROM products WHERE category != 'Electronics' AND price > 100",
                    "SELECT * FROM orders WHERE user_id = 2 AND order_date > '2023-05-02'"
                ]
            },
            "109": {
                "title": "SQL ORDER BY ↕️",
                "manager_requests": [
                    "Can you show me all products, but sorted by price from highest to lowest?",
                    "List all users alphabetically by their name."
                ],
                "expected_queries": [
                    "SELECT * FROM products ORDER BY price DESC",
                    "SELECT * FROM users ORDER BY name ASC"
                ]
            }
        }

    def get_lesson_data(self, lesson_id: str) -> Optional[Dict]:
        lesson = self.lessons.get(lesson_id)
        if not lesson:
            return None
        
        idx = random.randint(0, len(lesson["manager_requests"]) - 1)
        return {
            "lesson_id": lesson_id,
            "title": lesson["title"],
            "manager_request": lesson["manager_requests"][idx],
            "expected_query": lesson["expected_queries"][idx]
        }

if __name__ == "__main__":
    gen = QuestionGenerator()
    print(gen.get_lesson_data("103"))
