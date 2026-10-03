# 🧭 CareerCompass

> **Hackathon MVP**: Empowering university students to identify suitable career paths, diagnose skill gaps, and follow structured 12-week roadmaps.

---

## 🎯 Problem Statement
University engineering and science students frequently struggle with:
1. **Unclear Direction:** Difficulty navigating which modern tech path matches their interests and strengths.
2. **Curriculum Disconnect:** Academic coursework often differs from current industry requirements.
3. **Skill Blindspots:** Not knowing specifically which skills they lack for entry-level roles or internships.
4. **Tutorial Hell:** Lacking structured, week-by-week project deliverables to build tangible portfolios.

---

## 💡 Solution Overview
**CareerCompass** is a responsive, student-friendly web application designed to solve this in under 5 minutes without requiring user accounts or external APIs:
- **Zero-Friction Assessment:** Student profile form capturing name, branch, academic year, interests, and current technical skills.
- **Career Discovery Engine:** Compares student profiles against 4 high-demand career tracks (**AI/ML Engineer**, **Software Developer**, **Data Analyst**, and **Web Developer**) with dynamic fit percentage calculations.
- **Visual Skill Gap Diagnostics:** Side-by-side comparison of "Skills You Have" vs "Skills to Acquire" with priority tags and an interactive "Mark as Learned" feature.
- **12-Week Structured Roadmap:** Divided into 4 progressive stages with tangible weekly project deliverables and interactive completion tracking.
- **Progress Dashboard:** Comprehensive readiness score combining skill match and roadmap progress, next actionable recommendation, and printable summary export.

---

## 🛠️ Tech Stack & Constraints
- **Frontend Architecture:** React 18 with reactive state hooks (`useState`, `useEffect`, `useMemo`).
- **Styling:** Modern responsive CSS with custom design tokens, accessible color contrasts, fluid typography, and mobile-friendly layouts.
- **Data & Logic:** 100% local static datasets and frontend matching algorithms.
- **Zero External Dependencies:** No external API keys, no AI models, no external database, and fully functional offline.
- **State Persistence:** Local storage synchronizer ensures student progress is retained across browser refreshes.

---

## 🧭 Core User Flow

```
[1. Landing Page]
       │
       ▼
[2. Student Profile] ─── (Branch, Year, Interests, Current Skills, Career Goal)
       │
       ▼
[3. Career Discovery] ─── (AI/ML Engineer, Software Developer, Data Analyst, Web Developer)
       │
       ▼
[4. Skill Gap Page] ──── (Matched Skills vs Missing Skills + Readiness % + Interactive Learning)
       │
       ▼
[5. Career Roadmap] ──── (12-Week Guided Curriculum across 4 Stages with Deliverables)
       │
       ▼
[6. Dashboard] ───────── (Overall Readiness Score + Acquired Skills + Next Recommended Step)
```

---

## 🚀 Quick Start Guide

### Option 1: One-Click Python Launcher (Recommended)
From the project directory:
```bash
python run.py
```
*This starts a local zero-dependency HTTP server on port 3000 and automatically opens your default web browser.*

### Option 2: Standard Python HTTP Server
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in any web browser.

### Option 3: Automated QA Verification Test
To verify all pages, assets, and data structures:
```bash
python verify_app.py
```

---

## 🧪 Evaluation Quick Test (2-Minute Walkthrough)

For rapid hackathon judging:
1. **Landing Page:** Click **"Load Demo (Alex Chen, 3rd Yr)"** to instantly pre-populate a realistic Computer Science student profile.
2. **Career Discovery:** Observe dynamic match scores across the 4 careers. Click **"Select & View Skill Gap"** on **AI/ML Engineer** (or any career).
3. **Skill Gap Page:** Notice the **Readiness Progress (e.g. 57%)**. Click **"Mark as Learned"** on any missing skill (e.g. *Deep Learning*) and watch your readiness score climb immediately!
4. **12-Week Roadmap:** Click **"View 12-Week Roadmap"**. Check off Week 1 or Week 2 checkboxes to track completed milestones.
5. **Progress Dashboard:** Review the **Overall Readiness Score**, the **Recommended Next Action** banner, and click **"Export Summary"** to view a printable diagnostic report!

---

## 📁 Project Directory Structure
```
careercompass/
├── index.html                 # Main HTML5 entry point
├── package.json               # Project metadata & npm script definitions
├── run.py                     # One-click local HTTP server & browser launcher
├── verify_app.py              # Automated test suite verifying assets & data integrity
├── README.md                  # Documentation and evaluation walkthrough
├── css/
│   └── styles.css             # Polished student-friendly stylesheet & design system
├── js/
│   ├── app.js                 # React root component, subviews, and state logic
│   └── data/
│       ├── careers.js         # Detailed data for 4 career tracks with skill requirements
│       ├── skills.js          # Skill catalog, branches, academic years, sample student
│       └── roadmaps.js        # 12-week milestones divided into 4 stages per career
└── vendor/
    ├── react.production.min.js     # React 18 production build (offline)
    ├── react-dom.production.min.js # ReactDOM 18 production build (offline)
    └── babel.min.js                # Standalone JSX compiler (offline)
```

---
*Built with ❤️ for student career empowerment.*
