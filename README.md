
<div align="center">
  <a href="#ignition">
    <img src="https://img.shields.io/badge/Status-Actively%20Developed-blue?style=for-the-badge&logo=github" alt="Development Status"/>
  </a>
  <a href="https://github.com/your-username/smart-study-assistant">
    <img src="https://img.shields.io/badge/AI%20Core-Gemini%20Flash-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white" alt="Gemini Core">
    <img src="https://img.shields.io/badge/Built%20With-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  </a>
</div>

<br>

<h1 align="center" style="font-size: 3rem; font-weight: 900;">⚡ The Smart Study Assistant</h1>

<div align="center">
  <blockquote style="border-left: 5px solid #4F46E5; padding: 10px 20px; margin: 15px auto; max-width: 700px; text-align: left; background-color: #F8F8FF;">
    <b>🧠 Second Brain Project:</b> Transform chaotic notes (PDFs, PPTs, Images) into perfectly structured study plans, personalized MCQs, and visual analytics using a robust <b>Agentic AI</b> architecture. Stop memorizing, start understanding.
  </blockquote>
</div>

---

## 👁️ Visual Dashboard & Live Preview

<div align="center">
  <a href="https://your-demo-link.com">
  </a>
  
  <br>

  <p>
    The interface is built with React and Tailwind to ensure a seamless, ultra-responsive study experience across all devices.
  </p>
  
</div>

---

## 🍱 Core Feature Breakdown

<table>
  <tr>
    <td width="60%" valign="top">
      <h3>🤖 Agentic Reasoning Pipeline</h3>
      <p>The core intelligence. It utilizes a **multi-step chaining approach** (Chunking → RAG → Reasoning) to ensure contextual accuracy and generate high-quality, testable output based *only* on your provided documents.</p>
      <br>
      <img src="https://img.shields.io/badge/Output-Structured%20JSON-3091B2" />
      <img src="https://img.shields.io/badge/Process-RAG%20Enabled-000000" />
    </td>
    <td width="40%" valign="top">
      <h3>📊 Data Visualization (Charts)</h3>
      <p>Instant feedback loops for mastery tracking:</p>
      <ul>
        <li>**Bar Charts:** Tracks question density per topic.</li>
        <li>**Pie Charts:** Visualizes generated question difficulty distribution (Easy/Medium/Hard).</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="40%" valign="top">
      <h3>📅 Dynamic Scheduler UI</h3>
      <p>Generates a **slot-based study JSON schedule** (Topic, Time, Day) based on your input material and deadlines, which is then rendered beautifully via a custom React grid component.</p>
    </td>
    <td width="60%" valign="top">
      <h3>🎨 Modern Stack Details</h3>
      <p>Built for performance and developer experience:</p>
      <code>React (v18)</code> <code>TypeScript</code> <code>Vite</code> <br>
      <code>Tailwind CSS (Utility-First)</code> <code>Framer Motion (for smooth transitions)</code> <br>
      <code>Chart.js</code> <code>Google Gemini API</code>
    </td>
  </tr>
</table>

<br>

---

## 📂 Project Structure Map

We keep it clean. Here is how the project is structured for maximum scalability.

```text
src/
├── 📂 components/
│   ├── 🔮 AnimatedHero.tsx    # The landing experience (Framer Motion)
│   ├── 📊 BarPieCharts.tsx    # Visual data layer (Chart.js)
│   └── 🗓️ Timetable.tsx       # Logic-driven scheduling grid
├── 📂 hooks/
│   └── 🪝 useGeminiAgent.ts   # The AI orchestration and pipeline logic
├── 📂 utils/
│   └── 📄 pdfParser.ts        # OCR & Text extraction helper
└── 📄 App.tsx                 # Main application entry point
```
🚀 Ignition (Quick Start)
Get the engine running in 3 steps.

## 1.Clone the Repository

git clone [https://github.com/your-username/smart-study-assistant.git](https://github.com/your-username/smart-study-assistant.git)
cd smart-study-assistant




## 2.Fuel Up (Environment) Create a .env.local file in the root directory and paste your Gemini Key:

VITE_GEMINI_API_KEY=AIzaSy...




## 3.Launch the Dev Server

npm install
npm run dev
Your app runs at: http://localhost:3000




## 🤝 Contributing

We welcome contributions! If you have ideas for new features, improvements, or bug fixes, please follow these steps:

1.  **Fork** the repository.
2.  **Create** a new branch (`git checkout -b feature/your-feature-name`).
3.  **Commit** your changes (`git commit -m 'feat: Add amazing feature'`).
4.  **Push** to the branch (`git push origin feature/your-feature-name`).
5.  **Open a Pull Request**.

---
<p align="center"><sub>Built with 🖤 and ☕ by # NAMITHA.L </sub> </p>
