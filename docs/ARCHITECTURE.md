# Project Architecture: SQL Teacher Tool

This document outlines the technical design and data flow of the SQL Teacher application.

## 🏗️ System Overview
The application is a client-side heavy Single Page Application (SPA) that utilizes an in-memory SQLite database powered by SQL.js (WebAssembly).

### Core Components
1. **The Database Engine (`sql.js`)**
   - Loads in the browser and maintains a temporary, session-based database.
   - Initialized with industry-specific schemas defined in `INDUSTRY_CONFIGS`.

2. **The State Manager (`app.js`)**
   - Tracks the `currentIndustry`, `currentLesson`, and `currentQuestion`.
   - Handles the random selection of questions from the variant pools.

3. **Validation Logic**
   - Uses a combination of result-set checking and SQL string analysis to verify correctness.
   - Each question variant in `managerRequestsByIndustry` carries its own `check` function.

## 🔄 Data Lifecycle
1. **Industry Selection**: User selects an industry -> `app.js` runs the `setup` SQL script from `INDUSTRY_CONFIGS`.
2. **Lesson Entry**: User enters a lesson -> `getRandomQuestion()` pulls a random object from the lesson's target pool.
3. **Query Execution**: User hits "Run Query" -> Query is executed for exploration -> Results are rendered without grading.
4. **Correction Logic**: User hits "Submit Answer" -> Query is re-executed and validated -> Correct answer triggers the "Success" modal.

## 🎯 UX Layer
- **Progress Tracking**: `localStorage`-backed completion map. `getCompletedLessons()` returns a `Set` of completed IDs. Dashboard cards receive a `.completed` class and a badge on re-render.
- **Progress Bar**: Centralized `updateProgressBar()` computes `completed.size / lessons.length` and animates a `<div>` fill.
- **Inline Navigation**: Prev / Next buttons call `startLesson()` with adjacent index; disabled at list boundaries via `updateInlineNav()`.
- **Keyboard Shortcuts**: `⌘/Ctrl + Enter` on the `#sql-editor` textarea triggers `#run-btn.click()`.
- **Section Jump Nav**: Sticky `<nav>` with buttons that `scrollIntoView({ behavior: 'smooth' })` to each `<div id="section-...">` group.
- **Responsive CSS**: Media queries at 1024px (stacked lesson layout) and 768px (single-column cards, wrapped industry tabs, stacked lesson nav).

## 🎨 Design System
- **CSS Variable based**: All colors, spacing, and shadows are managed via CSS variables in `style.css` for easy "skinnability."
- **Professional Aesthetics**: Uses a deep slate/charcoal palette with muted accent blues to mimic high-end technical tools like DataLemur or Snowflake.
- **Master Challenge Cards**: Full-width (`grid-column: 1 / -1`) horizontal layout with gradient background to visually distinguish capstone lessons.

## 🛠️ Extensibility
To add a new feature:
- **UI Element**: Add to `index.html`, style in `style.css`, and hook in `app.js`.
- **New Lesson**: Add a new key (e.g., `"210"`) to the industry objects in `app.js`, then add the lesson definition to the `lessons` array.
- **New Pattern**: Add any new SQL helper to `db_engine.py` or `question_gen.py`.
- **New Section**: Add a new `section` value to lesson objects in `app.js` — the dashboard, section jump nav, and progress bar will auto-adapt.
