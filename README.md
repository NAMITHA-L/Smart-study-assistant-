<div align="center">

  <a href="">[![License][license-shield]][license-url]</a>
  <a href="">[![Issues][issues-shield]][issues-url]</a>
  <a href="">[![Repo Size][size-shield]][size-url]</a>
  <a href="">[![Contributors][contributors-shield]][contributors-url]</a>
  
</div>

<br />
<div align="center">
  <a href="https://github.com/your_username/smart-study-assistant">
    <img src="https://via.placeholder.com/1200x400/4F46E5/FFFFFF?text=Smart+Study+Assistant+|+Agentic+AI" alt="Logo" width="100%" height="auto">
  </a>

  <h1 align="center">🧠 Smart Study Assistant</h1>

  <p align="center">
    <b>Turn Chaos into Clarity.</b> <br />
    The Agentic AI Pipeline that transforms raw textbooks into interactive study plans, MCQs, and summaries.
    <br />
    <br />
    <a href="https://your-demo-link.com"><strong>Explore the Demo »</strong></a>
    <br />
    <br />
    <a href="#-demo">View Demo</a>
    ·
    <a href="#-bug-report">Report Bug</a>
    ·
    <a href="#-feature-request">Request Feature</a>
  </p>
</div>

---

<details>
  <summary><b>📖 Table of Contents</b> (Click to Expand)</summary>
  <ol>
    <li><a href="#-about-the-project">About The Project</a></li>
    <li><a href="#-tech-stack">Tech Stack</a></li>
    <li><a href="#-architecture">Architecture Pipeline</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-usage">Usage</a></li>
    <li><a href="#-roadmap">Roadmap</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## 🚀 About The Project

> **Problem:** Students are drowning in PDFs, slide decks, and disorganized notes.  
> **Solution:** A highly intelligent **Agentic AI** that reads, understands, and structures your learning for you.

The **Smart Study Assistant** isn't just a summarizer. It uses **Gemini 2.0 Flash** to perform deep semantic analysis on your documents. It chunks information, identifies key formulas, generates testable questions, and builds a visual timetable to help you pass your exams.

### Why this stands out:
* **Agentic Workflow:** It doesn't just "read"; it "thinks" about what parts of the chapter are most likely to appear on an exam.
* **Visual Learning:** Automatically generates Bar & Pie charts to track your topic mastery.
* **Zero Hallucinations:** Grounded in your uploaded documents via RAG (Retrieval-Augmented Generation).

---

## 🛠 Tech Stack

We use the best modern tools for speed and scalability.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Dynamic UI with Framer Motion |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | Utility-first clean design |
| **AI Model** | ![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) | Gemini 2.0 Flash (Agentic) |
| **Charts** | ![ChartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white) | Visual analytics for study stats |
| **Build** | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) | Blazing fast HMR |

---

## 🧠 Architecture Pipeline

How the magic happens under the hood:

```mermaid
graph LR
    A[📂 Upload PDF/PPT] -->|OCR Processing| B(📄 Raw Text Extraction)
    B -->|Recursive Chunking| C{🤖 AI Agent}
    C -->|Analyze| D[📝 Summaries]
    C -->|Generate| E[❓ MCQs & Q/A]
    C -->|Plan| F[📅 Study Schedule]
    D & E & F --> G[✨ Interactive Dashboard] ```

✨ ## Key Features##
<table> <tr> <td align="center"> <img src="https://www.google.com/search?q=https://cdn-icons-png.flaticon.com/512/3063/3063822.png" width="50" />


<b>Smart OCR & Parsing</b>


<small>Extracts text from scanned PDFs, PPTs, and even handwritten notes.</small> </td> <td align="center"> <img src="https://www.google.com/search?q=https://cdn-icons-png.flaticon.com/512/9630/9630985.png" width="50" />


<b>Auto-Generated Quizzes</b>


<small>Creates MCQs with difficulty ratings (Easy/Med/Hard) instantly.</small> </td> <td align="center"> <img src="https://www.google.com/search?q=https://cdn-icons-png.flaticon.com/512/3209/3209265.png" width="50" />


<b>Visual Analytics</b>


<small>Bar & Pie charts showing your strength in different topics.</small> </td> </tr> <tr> <td align="center"> <img src="https://www.google.com/search?q=https://cdn-icons-png.flaticon.com/512/2693/2693507.png" width="50" />


<b>Study Timetables</b>


<small>AI allocates time slots based on topic density and exam date.</small> </td> <td align="center"> <img src="https://www.google.com/search?q=https://cdn-icons-png.flaticon.com/512/2881/2881142.png" width="50" />


<b>Export Ready</b>


<small>Download your study pack as structured PDF, Markdown, or JSON.</small> </td> <td align="center"> <img src="https://www.google.com/search?q=https://cdn-icons-png.flaticon.com/512/2103/2103633.png" width="50" />


<b>Interactive UI</b>


<small>Smooth animations, drag-and-drop uploads, and glassmorphism.</small> </td> </tr> </table>

⚡ Getting Started
Get the app running locally in less than 5 minutes.

Prerequisites
Node.js (v18+)

npm

A Google Cloud Project with Gemini API enabled

Installation
Clone the Repo



git clone [https://github.com/your_username/smart-study-assistant.git](https://github.com/your_username/smart-study-assistant.git)
cd smart-study-assistant
Install Dependencies



npm install
Configure Environment Create a .env.local file in the root directory:


VITE_GEMINI_API_KEY=your_actual_api_key_here
Run Development Server



npm run dev
Launch Visit http://localhost:5173 to see the magic.

📸 Usage & Components
The project includes pre-built, polished components ready for use.

1. The Dashboard (Charts)
Visualization of user progress using react-chartjs-2.



<BarPieCharts mcqStats={data} />
2. The Timetable
Dynamic scheduling grid based on AI output.



<Timetable slots={aiGeneratedSchedule} />
🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
