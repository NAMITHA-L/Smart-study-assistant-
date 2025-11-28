<div align="center">
  <br />
    <a href="https://github.com/your-username/smart-study-assistant">
    <img src="https://img.shields.io/badge/Gemini%202.0-Flash-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white" alt="Gemini">
    <img src="https://img.shields.io/badge/React-v18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  </a>
  <br />
  <br />

  <h1 align="center" style="font-size: 3rem; font-weight: 900;">⚡ Smart Study Assistant</h1>
  
  <p align="center" style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
    <b>The "Second Brain" for Students.</b><br>
    An Agentic AI pipeline that transforms chaos into structure. <br>
    Upload raw notes. Get a perfect study plan.
  </p>

  <br />
</div>

## 🍱 What's Inside?

<table>
  <tr>
    <td width="60%" valign="top">
      <h3>🤖 Agentic Reasoning</h3>
      <p>Unlike basic wrappers, this uses a <b>multi-step agentic pipeline</b>. It reads your PDF, understands the semantic structure, and decides which topics need deep summaries vs. quick bullet points.</p>
      <br>
      <img src="https://img.shields.io/badge/Powered_By-Gemini_Flash-purple" />
    </td>
    <td width="40%" valign="top">
      <h3>📊 Visual Analytics</h3>
      <p>Stop guessing your progress.</p>
      <ul>
        <li><b>Bar Charts:</b> Topic frequency analysis.</li>
        <li><b>Pie Charts:</b> Difficulty distribution (Easy/Med/Hard).</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="40%" valign="top">
      <h3>📅 Dynamic Timetables</h3>
      <p>The AI calculates your exam date proximity and generates a <b>slot-based JSON schedule</b> rendered into a beautiful React grid.</p>
    </td>
    <td width="60%" valign="top">
      <h3>⚡ The Tech Stack</h3>
      <br>
      <code>React</code> <code>TypeScript</code> <code>Vite</code> <br>
      <code>Tailwind CSS</code> <code>Framer Motion</code> <br>
      <code>Chart.js</code> <code>Gemini API</code>
    </td>
  </tr>
</table>

<br>

## 📂 System Architecture

We keep it clean. Here is how the project is structured for maximum scalability.

```text
src/
├── 📂 components/
│   ├── 🔮 AnimatedHero.tsx   # The landing experience
│   ├── 📊 BarPieCharts.tsx   # Visual data layer
│   └── 🗓️ Timetable.tsx      # Logic-driven scheduling
├── 📂 hooks/
│   └── 🪝 useGeminiAgent.ts  # The AI pipeline logic
├── 📂 utils/
│   └── 📄 pdfParser.ts       # OCR & Text extraction
└── 📄 App.tsx                # Main entry
```
🚀 Ignition
Get the engine running in 3 steps.

<div align="left">

1. Clone

Bash

git clone [https://github.com/your-username/smart-study-assistant.git](https://github.com/your-username/smart-study-assistant.git)
2. Fuel Up (Env) Create a .env file. Paste your Gemini Key.

Bash

VITE_GEMINI_API_KEY=AIzaSy...
3. Launch

Bash

npm install && npm run dev
</div>

<hr /> <p align="center"> <p align="center"> <sub>Built with 🖤 and ☕ by [Your Name]</sub> </p>
