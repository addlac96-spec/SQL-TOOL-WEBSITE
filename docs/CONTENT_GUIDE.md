# Content & Scaling Guide

How to maintain and expand the massive question library in the SQL Teacher Tool.

## 📚 Question Structure
All questions live within the `managerRequestsByIndustry` object in `app.js`. Each entry follows this schema:

```javascript
{
  req: "The prompt shown to the user.",
  check: (res, sql) => {
    // Custom validation logic
    // res: The result set from the query
    // sql: The actual SQL string typed by the user
    return sql.toLowerCase().includes("keyword");
  },
  hint: "A conceptual, non-revealing hint."
}
```

## ✍️ Writing Great Hints (The Principles)
We use a **Conceptual-First** approach to hints.
- ❌ **Bad Hint**: "Use SELECT * FROM users;" (Gives it away).
- ✅ **Good Hint**: "Think about which table stores our customer identities and how to view all columns." (Teaches the concept).

## 🏗️ Adding a New Industry
1. **Define Schema**: Add a new key to `INDUSTRY_CONFIGS` with a `setup` script.
2. **Create Table Previews**: Update the `tables` array in the config so the UI can render previews.
3. **Seed Variants**: Create a new object under `managerRequestsByIndustry` with keys `101` through `201`.
4. **Verify**: Use the SQL tool to run a "smoke test" on the new industry.

## 🤖 Using the Generators
- **`question_gen.py`**: Use this script to procedurally generate large volumes of question variants if manually typing them becomes too slow.
- **`db_engine.py`**: Use this to test schema changes before applying them to the JavaScript configs.
