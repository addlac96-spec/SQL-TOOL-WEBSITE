# SQL Teacher: Master the Query

A massive, interactive SQL learning platform designed to teach database query logic through real-world, industry-specific challenges.

![Project Preview](.gemini/antigravity/brain/4c503cc5-1972-47e9-ac77-08212d4e9933/verify_full_content_1771460246214.webp)

## 🚀 Key Features
- **450+ Unique Challenges**: Extensive practice across 5 distinct industries (E-Commerce, SaaS, HR, Healthcare, Finance).
- **Interactive SQL Engine**: Run real SQLite queries directly in the browser.
- **Random Drill Mode**: Fresh challenges every time you enter a lesson; no more learning by memorization.
- **Run vs. Submit**: Separate controls for free exploration ("Run Query") and answer validation ("Submit Answer").
- **Integrated Resource Hub**: Access comprehensive study guides directly from any lesson via the "Read Guide" button.
- **Helpful Hints System**: Conceptual, non-revealing guidance that teachers the "why" behind the code.
- **Live Data Previews**: Expandable table views with zebra-striping and professional styling.
- **Beginner to Advanced**: Structured progression from basic `SELECT` to complex multi-layered queries, including a full Intermediate SQL track.
- **Progress Tracking**: Lesson completion is persisted in `localStorage` with visual badges and a header progress bar.
- **Keyboard Shortcuts**: `⌘ + Enter` (Mac) / `Ctrl + Enter` (Windows) to run queries instantly.
- **Inline Lesson Nav**: Prev / Next buttons in the lesson toolbar for seamless progression.
- **Section Jump Nav**: Sticky toolbar to jump directly to any curriculum section.
- **Responsive Layout**: Optimized for desktop, tablet, and mobile viewports.

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+).
- **Core Engine**: [SQL.js](https://sql.js.org/) (SQLite compiled to WebAssembly).
- **Backend (Generator)**: Python 3 scripts for large-scale question and database seeding.

## 🏃 Getting Started
1. Clone the repository.
2. Start a local server (to allow WebAssembly/Worker files to load correctly):
   ```bash
   python3 -m http.server 8321
   ```
3. Open `http://localhost:8321` in your browser.

## 📖 Documentation
- [Architecture & Design](docs/ARCHITECTURE.md) — How the system works
- [Content Guide](docs/CONTENT_GUIDE.md) — Adding lessons and questions
- [Changelog](CHANGELOG.md) — Version history

## 📂 Project Structure
- `index.html`: Main application entry point.
- `app.js`: Application logic, UI rendering, and the massive question database.
- `guides.js`: Comprehensive study guide content for every lesson.
- `style.css`: Professional, dark-mode focused design system.
- `docs/`: Architecture and content authoring guides.
- `db_engine.py`: Python utility for managing the database engine logic.
- `question_gen.py`: Utility for generating industry-specific question variants.

---

## 🗺️ Roadmap
- [ ] **Achievements System**: Unlock badges for clearing industry tracks.
- [ ] **Custom Mode**: Allow users to upload their own CSVs to practice on.
- [x] **Progress Persistence**: Lesson completion tracked in localStorage with visual badges.
- [x] **Mobile Optimization**: Responsive CSS breakpoints for tablets and phones.
