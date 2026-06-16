import React from "react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
        <p className="text-neutral-400 mb-12">
          Software engineer passionate about building great products.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-800 pl-4">
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-neutral-400 text-sm">Company Name &bull; 2023 &ndash; Present</p>
              <p className="text-neutral-500 mt-1">
                Built and maintained full-stack applications. Collaborated with cross-functional teams
                to deliver features on time.
              </p>
            </div>
            <div className="border-l-2 border-neutral-800 pl-4">
              <h3 className="text-lg font-semibold">Junior Developer</h3>
              <p className="text-neutral-400 text-sm">Company Name &bull; 2021 &ndash; 2023</p>
              <p className="text-neutral-500 mt-1">
                Developed internal tools and contributed to the core product codebase.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Education</h2>
          <div className="border-l-2 border-neutral-800 pl-4">
            <h3 className="text-lg font-semibold">B.S. Computer Science</h3>
            <p className="text-neutral-400 text-sm">University Name &bull; 2017 &ndash; 2021</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Skills</h2>
          <div className="flex gap-2 flex-wrap">
            {[
              "TypeScript", "Python", "React", "Next.js", "FastAPI",
              "MongoDB", "PostgreSQL", "Docker", "Git", "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
