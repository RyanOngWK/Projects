import React from "react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Ryan Ong Wee Kiat</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-400 mb-12">
          <span>+65 87152426</span>
          <span>&bull;</span>
          <span>ongw0119@e.ntu.edu.sg</span>
          <span>&bull;</span>
          <a href="https://ryanong.dev" className="hover:text-white transition underline underline-offset-2">ryanong.dev</a>
          <span>&bull;</span>
          <a href="https://github.com/RyanOngWK" className="hover:text-white transition underline underline-offset-2">github.com/RyanOngWK</a>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Education</h2>
          <div className="border-l-2 border-neutral-800 pl-4">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <h3 className="text-lg font-semibold">Nanyang Technological University (NTU)</h3>
              <span className="text-neutral-400 text-sm">Aug 2023 &ndash; Present</span>
            </div>
            <p className="text-neutral-400 text-sm font-medium">Singapore</p>
            <p className="text-neutral-400 mt-1">Bachelor of Engineering in Computer Engineering</p>
            <p className="text-neutral-500 text-sm mt-1">Honours (Highest Distinction), Cumulative GPA: 4.67/5; Dean&rsquo;s List AY24/25</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Technical Skills</h2>
          <div className="space-y-3">
            <div>
              <span className="text-neutral-400 text-sm font-medium">Languages: </span>
              <span className="text-neutral-300">C, Machine Learning (PyTorch), MySQL, Python</span>
            </div>
            <div>
              <span className="text-neutral-400 text-sm font-medium">Backend &amp; Tools: </span>
              <span className="text-neutral-300">MySQL, SQLAlchemy, Docker, Ansible Automation Platform, GitLab CI, GitHub Actions</span>
            </div>
            <div>
              <span className="text-neutral-400 text-sm font-medium">Libraries: </span>
              <span className="text-neutral-300">Pandas, NumPy, Matplotlib, PyTorch, TensorFlow</span>
            </div>
            <div>
              <span className="text-neutral-400 text-sm font-medium">Developer Tools: </span>
              <span className="text-neutral-300">VS Code, IntelliJ, PyCharm, Visual Studio</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-800 pl-4">
              <div className="flex justify-between items-baseline flex-wrap gap-x-4">
                <h3 className="text-lg font-semibold">Synapxe Private Limited</h3>
                <span className="text-neutral-400 text-sm whitespace-nowrap">Jan 2026 &ndash; Jun 2026</span>
              </div>
              <p className="text-neutral-400 text-sm font-medium">Software Engineering Intern (AI/CV) &bull; Singapore</p>
              <ul className="text-neutral-400 mt-2 space-y-1.5 list-disc list-inside">
                <li>Built reusable ML infrastructure components for experiment tracking, dataset versioning, and model evaluation to support reproducible training and rapid iteration across multiple research pipelines.</li>
                <li>Engineered scalable end-to-end computer vision pipelines for heterogeneous clinical imaging datasets, optimizing data ingestion, preprocessing, model training, and evaluation workflows for production-oriented experimentation.</li>
                <li>Optimized GPU training workflows and data-loading pipelines for large-scale image processing tasks, reducing training bottlenecks and improving computational efficiency for deep learning workloads.</li>
              </ul>
            </div>

            <div className="border-l-2 border-neutral-800 pl-4">
              <div className="flex justify-between items-baseline flex-wrap gap-x-4">
                <h3 className="text-lg font-semibold">Singapore Telecommunications Limited (Singtel)</h3>
                <span className="text-neutral-400 text-sm whitespace-nowrap">May 2025 &ndash; Aug 2025</span>
              </div>
              <p className="text-neutral-400 text-sm font-medium">Cloud Dev-Ops Engineer Intern &bull; Singapore</p>
              <ul className="text-neutral-400 mt-2 space-y-1.5 list-disc list-inside">
                <li>Automated end-to-end infrastructure health checks and deployment workflows using Ansible Automation Platform and GitLab CI, improving system reliability, operational monitoring, and incident response efficiency.</li>
                <li>Built interactive operational dashboards in Microsoft Power BI integrated with automated data ingestion workflows via Power Automate, reducing manual analysis effort by 10%.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-neutral-200">Projects</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-800 pl-4">
              <div className="flex justify-between items-baseline flex-wrap gap-x-4">
                <h3 className="text-lg font-semibold">Credit Card Fraud Detection System</h3>
                <span className="text-neutral-400 text-sm whitespace-nowrap">Apr 2026</span>
              </div>
              <p className="text-neutral-500 text-sm mt-1">MySQL &middot; Python &middot; Scikit-learn &middot; SQLAlchemy &middot; Plotly &middot; hvPlot &middot; Tableau &middot; Docker</p>
              <ul className="text-neutral-400 mt-2 space-y-1 list-disc list-inside">
                <li><span className="font-medium text-neutral-300">Database Engineering:</span> Designed a robust MySQL schema and automated database creation/CSV ingestion via SQLAlchemy.</li>
                <li><span className="font-medium text-neutral-300">System Reliability:</span> Deployed the solution using a Dockerized MySQL instance to ensure consistent development and production environments.</li>
                <li><span className="font-medium text-neutral-300">Feature Engineering:</span> Implemented cyclical time encoding and weighted logic to identify high-value anomalies in real-time.</li>
              </ul>
            </div>

            <div className="border-l-2 border-neutral-800 pl-4">
              <div className="flex justify-between items-baseline flex-wrap gap-x-4">
                <h3 className="text-lg font-semibold">Multimodal Video Understanding &amp; Engagement Prediction</h3>
                <span className="text-neutral-400 text-sm whitespace-nowrap">Nov 2025 &ndash; Dec 2025</span>
              </div>
              <p className="text-neutral-500 text-sm mt-1">Multimodal ML &middot; Computer Vision &middot; NLP &middot; Audio Processing &middot; ETL &middot; Deep Learning</p>
              <ul className="text-neutral-400 mt-2 space-y-1 list-disc list-inside">
                <li><span className="font-medium text-neutral-300">Data Collection:</span> Automated large-scale data collection using the YouTube Data API, implementing robust filtering, pagination, and failure recovery.</li>
                <li><span className="font-medium text-neutral-300">Pipeline Architecture:</span> Built an end-to-end multimodal ML pipeline to fuse visual, audio, and textual signals for downstream prediction tasks.</li>
              </ul>
            </div>

            <div className="border-l-2 border-neutral-800 pl-4">
              <div className="flex justify-between items-baseline flex-wrap gap-x-4">
                <h3 className="text-lg font-semibold">NTU Undergraduate Research Experience on Campus (URECA)</h3>
                <span className="text-neutral-400 text-sm whitespace-nowrap">Sep 2024 &ndash; Jun 2025</span>
              </div>
              <p className="text-neutral-500 text-sm mt-1">Machine Learning &middot; PyTorch &middot; Data Augmentation</p>
              <ul className="text-neutral-400 mt-2 space-y-1 list-disc list-inside">
                <li><span className="font-medium text-neutral-300">Algorithm Optimization:</span> Adapted SOTA models like MobileNet V4 through parameter optimization to improve species recognition accuracy.</li>
                <li><span className="font-medium text-neutral-300">System Implementation:</span> Constructed a Deep Learning Neural Network on PyTorch to facilitate high-stakes medical decision-making in rural regions.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
