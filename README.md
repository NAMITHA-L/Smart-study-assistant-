// AnimatedHero.tsx
import React from "react";
export default function AnimatedHero() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">
          Smart Study Assistant <span className="text-indigo-600">✨</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Upload notes, slides or textbooks and get instant summaries, MCQs & study plans.
        </p>
        <div className="inline-flex gap-3">
          <button className="px-5 py-3 rounded-lg bg-indigo-600 text-white shadow-md">
            Upload Document
          </button>
          <button className="px-5 py-3 rounded-lg border border-indigo-300 text-indigo-600">
            Try Demo
          </button>
        </div>
      </div>
    </section>
  );
}

// BarPieCharts.tsx
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);
export default function BarPieCharts({ mcqStats = { topics: [], counts: [] } }) {
  const barData = {
    labels: mcqStats.topics.length ? mcqStats.topics : ["Arrays","Trees","Graphs","DP"],
    datasets: [{ label: "Questions per Topic", data: mcqStats.counts.length ? mcqStats.counts : [5,3,4,2], backgroundColor: "rgba(79,70,229,0.8)" }]
  };
  const pieData = {
    labels: ["Easy","Medium","Hard"],
    datasets: [{ data: [50,35,15], backgroundColor: ["#60A5FA","#7C3AED","#F97316"] }]
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">Questions by Topic</h3>
        <Bar data={barData} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">Difficulty Distribution</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

// Timetable.tsx
import React from "react";
const defaultSlots = [
  { day: "Mon", time: "6-7pm", topic: "Arrays" },
  { day: "Tue", time: "6-7pm", topic: "Graphs" },
  { day: "Wed", time: "6-7pm", topic: "DP" },
  { day: "Thu", time: "6-7pm", topic: "Trees" }
];
export default function Timetable({ slots = defaultSlots }) {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Study Timetable</h3>
      <div className="grid grid-cols-4 gap-3">
        {slots.map((s, i) => (
          <div key={i} className="p-3 border rounded-lg">
            <div className="font-medium">{s.day}</div>
            <div className="text-sm text-gray-500">{s.time}</div>
            <div className="mt-2 text-indigo-600 font-semibold">{s.topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// SampleStyles.css
@keyframes float { 0% { transform: translateY(0px) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0px) } }
.hero-float { animation: float 3s ease-in-out infinite; }
.card-hover { transition: transform .18s ease, box-shadow .18s ease; }
.card-hover:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 8px 24px rgba(12,12,12,0.1); }

// App.tsx
import React from "react";
import AnimatedHero from "./components/AnimatedHero";
import BarPieCharts from "./components/BarPieCharts";
import Timetable from "./components/Timetable";
import "./SampleStyles.css";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedHero />
      <main className="max-w-6xl mx-auto py-8">
        <BarPieCharts />
        <div className="my-6" />
        <Timetable />
      </main>
    </div>
  );
}
