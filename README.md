SMART STUDY ASSISTANT – README + COMPONENT CODES

========================================
README.md (Copy-Paste Ready)
========================================

<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# ✨ Smart Study Assistant — AI-Powered Exam Prep (Agentic AI)

Transform textbooks, slides & notes into summaries, MCQs, Q&A, and study schedules using an Agentic AI Pipeline powered by Gemini 2.0 Flash.

---

# CODE FILES INCLUDED
- AnimatedHero.tsx
- BarPieCharts.tsx
- Timetable.tsx
- SampleStyles.css
- App.tsx

========================================
AnimatedHero.tsx
========================================
import React from "react";

export default function AnimatedHero() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-indigo-50 to-white hero-float">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Smart Study Assistant <span className="text-indigo-600">✨</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Upload notes, slides or textbooks and get instant summaries, MCQs & study plans.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:-translate-y-1 transition">
            Upload Document
          </button>
          <button className="px-6 py-3 rounded-xl border border-indigo-300 text-indigo-600 font-medium">
            Try Demo
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Agentic Processing • Chunking • Gemini 2.0 Flash
        </p>
      </div>
    </section>
  );
}

========================================
BarPieCharts.tsx
========================================
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function BarPieCharts({ mcqStats }: any) {
  const barData = {
    labels: mcqStats?.topics ?? ["Arrays", "Trees", "Graphs", "DP"],
    datasets: [
      {
        label: "Questions per Topic",
        data: mcqStats?.counts ?? [5, 3, 4, 2],
        backgroundColor: "rgba(79,70,229,0.8)",
      },
    ],
  };

  const pieData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [50, 35, 15],
        backgroundColor: ["#60A5FA", "#7C3AED", "#F97316"],
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-6">
      <div className="bg-white p-6 rounded-xl shadow card-hover">
        <h3 className="font-semibold mb-4 text-lg">Questions by Topic</h3>
        <Bar data={barData} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow card-hover">
        <h3 className="font-semibold mb-4 text-lg">Difficulty Distribution</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

========================================
Timetable.tsx
========================================
import React from "react";

type Slot = { day: string; time: string; topic: string };

const defaultSlots: Slot[] = [
  { day: "Mon", time: "6–7 PM", topic: "Arrays" },
  { day: "Tue", time: "6–7 PM", topic: "Graphs" },
  { day: "Wed", time: "6–7 PM", topic: "DP" },
  { day: "Thu", time: "6–7 PM", topic: "Trees" },
];

export default function Timetable({ slots = defaultSlots }: { slots?: Slot[] }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow card-hover">
      <h3 className="text-lg font-semibold mb-4">Study Timetable</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slots.map((s, i) => (
          <div key={i} className="p-4 border rounded-lg text-center hover:shadow-md transition">
            <div className="font-semibold">{s.day}</div>
            <div className="text-sm text-gray-500">{s.time}</div>
            <div className="mt-2 text-indigo-600 font-semibold">{s.topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

========================================
SampleStyles.css
========================================
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
}

.hero-float {
  animation: float 3s ease-in-out infinite;
}

.card-hover {
  transition: transform .18s ease, box-shadow .18s ease;
}

.card-hover:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(12,12,12,0.1);
}

========================================
App.tsx
========================================
import React from "react";
import AnimatedHero from "./components/AnimatedHero";
import BarPieCharts from "./components/BarPieCharts";
import Timetable from "./components/Timetable";
import "./SampleStyles.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedHero />
      <main className="max-w-6xl mx-auto py-12">
        <BarPieCharts />
        <div className="my-10" />
        <Timetable />
      </main>
    </div>
  );
}

