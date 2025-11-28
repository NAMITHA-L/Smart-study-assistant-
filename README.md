🌟 Smart Study Assistant — AI-Powered Exam Prep (Agentic AI)
<div align="center"> <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" /> </div>

Transform textbooks, slides, and notes into summaries, MCQs, Q&A, and study schedules using an Agentic AI Pipeline powered by Gemini 2.0 Flash.

<p align="center"> <img src="https://img.shields.io/badge/AI-Agentic%20Pipeline-purple?style=flat&logo=sparkles" /> <img src="https://img.shields.io/badge/Built%20With-React%20%2B%20Vite-blue?style=flat&logo=react" /> <img src="https://img.shields.io/badge/Charts-Bar%20%2F%20Pie-green?style=flat&logo=chartdotjs" /> <img src="https://img.shields.io/badge/License-MIT-green" /> </p>
📖 Table of Contents

Overview

Features

Demo

Tech Stack

Run Locally

Components (Charts, Timetable, Hero Section)

Contributing

License

✨ Overview

The Smart Study Assistant automatically converts study materials (PDF, PPTX, DOCX, images, text) into structured outputs.

It performs:
✔ OCR & text extraction
✔ Cleaning & normalization
✔ Chunking & embeddings
✔ Agentic processing via Gemini 2.0 Flash
✔ Output of structured JSON (summary, MCQs, short answers, formulas)

The frontend includes modern animations, chart visualizations, and an interactive study timetable.

🎯 Features

Upload PDFs, DOCX, PPTX, images

OCR and text cleaning

Agentic chunk processing

AI-generated summaries, MCQs, short answers

Chart analytics (bar + pie)

Beautiful animated UI

Timetable generator

Export to PDF/CSV

Optional backend for secure API calls

🎛️ Demo

View your app in AI Studio:
https://ai.studio/apps/drive/1_MXio3Rng0yzlbmzEYftP9j1JQzmqwH2

(You can optionally add GIFs or screenshots here)

⚙️ Tech Stack

React + TypeScript + Vite

Tailwind CSS

React-ChartJS-2 + Chart.js

Google Gemini 2.0 Flash (API)

🧑‍💻 Run Locally
1. Clone Repository
git clone https://github.com/YOUR-USERNAME/smart-study-assistant.git
cd smart-study-assistant

2. Install Dependencies
npm install

3. Create .env.local
VITE_GEMINI_API_KEY=your_gemini_api_key_here

4. Start Development Server
npm run dev


Your app runs at:
http://localhost:5173

🧩 Components Included (Add these inside src/components/)

✨ Animated Hero Section
✨ Bar Chart + Pie Chart
✨ Study Timetable
✨ Custom CSS animations

You can import all components directly into:

src/App.tsx


These components make your UI look premium and professional.

📦 Charts & Timetable Dependencies

Install chart libraries:

npm install chart.js react-chartjs-2


Install Tailwind (optional):

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

🔒 API Security Notes

Never commit .env.local

Always hide your API key

For production, use backend routes to securely call Gemini API

🤝 Contributing

Fork this repo

Create a branch: feature/my-feature

Commit & push

Open a Pull Request

Follow the existing coding style when adding new features.
