import sqlite3
import pandas as pd
from typing import Tuple, Any, List

class DBEngine:
    def __init__(self, db_path: str = ":memory:"):
        self.db_path = db_path
        self.conn = sqlite3.connect(self.db_path, check_same_thread=False)
        self.cursor = self.conn.cursor()

    def setup_sample_data(self):
        """Initializes the database with sample e-commerce data."""
        # Tables: users, products, orders
        self.cursor.executescript("""
            CREATE TABLE IF NOT EXISTS users (
                user_id INTEGER PRIMARY KEY,
                name TEXT,
                email TEXT,
                joined_date DATE
            );

            CREATE TABLE IF NOT EXISTS products (
                product_id INTEGER PRIMARY KEY,
                name TEXT,
                category TEXT,
                price REAL
            );

            CREATE TABLE IF NOT EXISTS orders (
                order_id INTEGER PRIMARY KEY,
                user_id INTEGER,
                product_id INTEGER,
                order_date DATE,
                quantity INTEGER,
                FOREIGN KEY(user_id) REFERENCES users(user_id),
                FOREIGN KEY(product_id) REFERENCES products(product_id)
            );
        """)

        # Add sample data
        users = [
            (1, 'Alice Smith', 'alice@example.com', '2023-01-15'),
            (2, 'Bob Jones', 'bob@example.com', '2023-02-20'),
            (3, 'Charlie Brown', 'charlie@example.com', '2023-03-10'),
            (4, 'Diana Prince', 'diana@example.com', '2023-04-05')
        ]
        products = [
            (101, 'Laptop', 'Electronics', 1200.00),
            (102, 'Mouse', 'Electronics', 25.00),
            (103, 'Desk Chair', 'Furniture', 150.00),
            (104, 'Keyboard', 'Electronics', 45.00),
            (105, 'Monitor', 'Electronics', 200.00)
        ]
        orders = [
            (1001, 1, 101, '2023-05-01', 1),
            (1002, 2, 102, '2023-05-02', 2),
            (1003, 1, 103, '2023-05-03', 1),
            (1004, 3, 101, '2023-05-04', 1),
            (1005, 4, 104, '2023-05-05', 2),
            (1006, 2, 105, '2023-05-06', 1)
        ]

        self.cursor.executemany("INSERT OR IGNORE INTO users VALUES (?,?,?,?)", users)
        self.cursor.executemany("INSERT OR IGNORE INTO products VALUES (?,?,?,?)", products)
        self.cursor.executemany("INSERT OR IGNORE INTO orders VALUES (?,?,?,?,?,?)", orders)
        self.conn.commit()

    def execute_query(self, query: str) -> Tuple[List[str], List[Any], str]:
        """Executes a SQL query and returns (columns, rows, error_message)."""
        try:
            df = pd.read_sql_query(query, self.conn)
            return list(df.columns), df.values.tolist(), ""
        except Exception as e:
            return [], [], str(e)

    def get_table_schema(self, table_name: str) -> List[Tuple]:
        self.cursor.execute(f"PRAGMA table_info({table_name})")
        return self.cursor.fetchall()

    def get_all_tables(self) -> List[str]:
        self.cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
        return [row[0] for row in self.cursor.fetchall()]

if __name__ == "__main__":
    engine = DBEngine()
    engine.setup_sample_data()
    cols, rows, err = engine.execute_query("SELECT * FROM users")
    print("Columns:", cols)
    print("Rows:", rows)
