import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with Next.js and FastAPI.",
      tags: ["Next.js", "FastAPI", "MongoDB"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "A data visualization dashboard using D3.js and React.",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "A CLI tool for automating deployment workflows.",
      tags: ["Python", "Docker", "CI/CD"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-neutral-400 mb-12 max-w-xl">
          A collection of projects I&apos;ve worked on. Click through to learn more about each one.
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 hover:bg-neutral-900/50 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-neutral-400 mb-4">{project.description}</p>
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
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
