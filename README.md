# 🎓 VU StudyHub - Virtual University Study Portal

A modern, fast, and neat web application built with **Next.js (App Router)**, **JavaScript (.js / .jsx)**, and **Tailwind CSS v4** specifically for **Virtual University of Pakistan (VU)** students across all degree programs (BSCS, BSSE, BSIT, BBA, ADP, Mathematics, etc.).

---

## ⚡ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (ES Modules / React 19 JSX - No TypeScript)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with custom dark/light theme tokens
- **Icons**: Lucide React

---

## ✨ Features Included

### 1. 📚 Complete Course Catalog & Resources
- **Official Handouts (PDFs)**: Original complete syllabus handouts & highlighted notes for quick revision.
- **Midterm Solved Past Papers**: Moaaz Siddique & Waqar Sidhu solved subjective & objective files (Lessons 1 - 22).
- **Finalterm Solved Past Papers**: Comprehensive final papers covering lessons 23 - 45.
- **Grand Quiz Files & Dumps**: Verified MCQs files for full scores in online quizzes.
- **Coursework & Short Notes**: Golden formulas, diagrams, assembly tools (MASM 611/DosBox), code repos for CS201/CS506.

### 2. 🔍 Instant Search & Multi-Level Filtering
- **Live Search**: Search by course code (e.g. `CS101`, `MTH101`, `ENG201`) or title in real-time.
- **Program Filter**: Filter by BSCS, BSSE, BSIT, BBA, ADP, and more.
- **Faculty Selector**: Computer Science, Management Sciences, Mathematics & Statistics, Arts & Humanities.

### 3. 🧮 VU CGPA & GPA Calculator (Official 4.0 Scale)
- Customized for Virtual University's specific grading policy (A=4.0, A-=3.67, B+=3.33, etc.).
- Calculates both current **Semester GPA** and **Cumulative CGPA**.
- Displays VU Academic Standing (Rector's Honour Roll, Dean's Honour Roll, Good Standing, Warning/Probation).

### 4. 📅 Academic Calendar & Date Sheet Guide
- Datesheet portal direct integration (`datesheet.vu.edu.pk`).
- Key dates for Add/Drop, Midterms, Finalterms, and Result announcements.

### 5. 💡 VU Student Exam & Survival Guide
- 60/20/20 grading weightage explanation.
- Campus VUBrowser lockdown exam environment advice.
- Plagiarism prevention rules (MOSS check) for assignment submissions.

### 6. 🌙 Dark Mode & Light Mode
- Responsive glassmorphism interface with Tailwind CSS and CSS variables.
- Persistent theme preference saved in browser `localStorage`.

---

## 🚀 Running the Project

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.jsx         # App layout with SEO metadata & Google Fonts
│   │   ├── page.jsx           # Main application view with interactive tabs & state
│   │   └── globals.css        # Tailwind CSS v4 entry & theme tokens
│   ├── components/
│   │   ├── Navbar.jsx         # Header with theme toggle & tabs
│   │   ├── HeroSection.jsx    # Search bar, program filter, quick code chips & metrics
│   │   ├── ResourceCard.jsx   # Course cards with download triggers & file badges
│   │   ├── ResourceModal.jsx  # Detailed files modal with category tabs & download action
│   │   ├── GpaCalculator.jsx  # VU 4.0 GPA & Cumulative CGPA calculator
│   │   ├── AcademicCalendar.jsx # Semester timeline & official datesheet links
│   │   ├── VuGuide.jsx        # Exam strategy & VUBrowser guide
│   │   ├── RequestFileModal.jsx # Community file request & upload form
│   │   └── Footer.jsx         # Links, faculties list & disclaimer
│   └── data/
│       └── coursesData.js     # Authentic VU course catalog, handouts, and files
├── postcss.config.mjs         # PostCSS config for Tailwind CSS v4
├── next.config.mjs            # Next.js JavaScript config
└── package.json               # Dependencies (pure JS, Tailwind CSS v4)
```
