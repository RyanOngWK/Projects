import React from "react";

const projects = [
  {
    title: "Personal Blog & Portfolio",
    date: "2026",
    description: "Full-stack blog and portfolio site with a custom split-flap header, blog management via admin API, and a scrolling timeline UI.",
    tags: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "Tailwind CSS", "Motion"],
    bullets: [
      "Built a full-stack blog platform with a Next.js frontend and FastAPI backend, deployed on Vercel and Render.",
      "Implemented admin-authenticated CRUD API for blog post management with MongoDB as the data store.",
      "Designed an animated timeline component with scroll-driven progress effects and split-flap text animation on the landing page.",
    ],
  },
  {
    title: "Credit Card Fraud Detection System",
    date: "Apr 2026",
    description: "Real-time fraud detection system with automated data pipelines and interactive dashboards.",
    tags: ["MySQL", "Python", "Scikit-learn", "SQLAlchemy", "Plotly", "hvPlot", "Tableau", "Docker"],
    bullets: [
      "Designed a robust MySQL schema and automated database creation/CSV ingestion via SQLAlchemy.",
      "Deployed the solution using a Dockerized MySQL instance to ensure consistent development and production environments.",
      "Implemented cyclical time encoding and weighted logic to identify high-value anomalies in real-time.",
    ],
  },
  {
    title: "Multimodal Video Understanding & Engagement Prediction",
    date: "Nov 2025 – Dec 2025",
    description: "End-to-end multimodal ML pipeline combining visual, audio, and textual signals.",
    tags: ["Multimodal ML", "Computer Vision", "NLP", "Audio Processing", "ETL", "Deep Learning"],
    bullets: [
      "Automated large-scale data collection using the YouTube Data API, implementing robust filtering, pagination, and failure recovery.",
      "Built an end-to-end multimodal ML pipeline to fuse visual, audio, and textual signals for downstream prediction tasks.",
    ],
  },
  {
    title: "NTU Undergraduate Research Experience on Campus (URECA)",
    date: "Sep 2024 – Jun 2025",
    description: "Deep learning research project focused on model optimization for species recognition and medical decision-making.",
    tags: ["Machine Learning", "PyTorch", "Data Augmentation"],
    bullets: [
      "Adapted SOTA models like MobileNet V4 through parameter optimization to improve species recognition accuracy.",
      "Constructed a Deep Learning Neural Network on PyTorch to facilitate high-stakes medical decision-making in rural regions.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-neutral-400 mb-12 max-w-xl">
          A collection of projects I&apos;ve worked on.
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-neutral-800 rounded-xl p-6"
            >
              <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-1">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <span className="text-neutral-500 text-sm whitespace-nowrap">{project.date}</span>
              </div>
              <p className="text-neutral-400 mb-3">{project.description}</p>
              <ul className="text-neutral-400 mb-4 space-y-1 list-disc list-inside text-sm">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
