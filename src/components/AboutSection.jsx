import React from 'react';

export default function AboutSection({ skills = [], certifications = [] }) {
  const defaultSkills = [
    {
      label: 'LAYER 01 · FRONTEND & UI ARCHITECTURE',
      chips: [
        'JavaScript (ES6+)',
        'React.js',
        'Next.js',
        'Three.js (WebGL)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap 5',
      ],
    },
    {
      label: 'LAYER 02 · BACKEND & API LAYER',
      chips: [
        'Node.js',
        'Express.js',
        'RESTful API Design',
        'WebSockets (Socket.IO)',
        'Role-Based Access',
        'Rate Limiting & CORS',
      ],
    },
    {
      label: 'LAYER 03 · DATABASE & DATA MODELING',
      chips: [
        'MongoDB (Compass)',
        'MongoDB Aggregations',
        'Mongoose Schema Design',
        'Payload Sanitization',
      ],
    },
    {
      label: 'LAYER 04 · CORE PROGRAMMING',
      chips: [
        'Java',
        'Object-Oriented Programming (OOPs)',
        'Data Structures & Algorithms (DSA)',
        'Algorithmic Problem Solving',
      ],
    },
    {
      label: 'LAYER 05 · DEVOPS, QA & TOOLS',
      chips: [
        'Git',
        'GitHub Workflows',
        'VS Code',
        'Postman',
        'npm',
        'Vercel',
        'Render',
        'Playwright (E2E Testing)',
        'Sentry (Error Tracking)',
      ],
    },
  ];

  const skillColumns = skills.length > 0 ? skills : defaultSkills;

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-layout section-shell">
        <div className="about-copy reveal">
          <div className="eyebrow flex items-center gap-2">
            <span className="eyebrow-line"></span> ABOUT ME
          </div>
          <h2 id="about-title">
            Full Stack Engineer.
            <br />
            <span className="serif-word">Production</span> mindset.
          </h2>
          <p className="about-lead">
            I’m Anshu Gupta, an entry-level Full Stack Software Engineer and
            B.Tech CSE student at IES University, Bhopal (Class of 2026). I
            combine solid computer science fundamentals with hands-on full-stack
            development.
          </p>
          <p className="about-body">
            My engineering focus centers on building scalable, production-grade
            applications with enterprise standards—from zero-CLS 3D WebGL
            interfaces to low-latency WebSocket messaging and secure backend
            REST APIs. Certified in Java OOPs, Data Structures & Algorithms, and
            modern MERN architecture, I build clean, resilient systems with
            curiosity and precision.
          </p>
          <div className="about-metrics-row flex flex-wrap gap-3 my-5">
            <div className="about-metric-pill flex flex-col p-2.5 min-w-[110px]">
              <span className="metric-val text-lime font-mono font-bold">
                2026
              </span>
              <span className="metric-lbl text-xs text-[#8c8f82] font-mono">
                B.Tech CSE · IES Univ
              </span>
            </div>
            <div className="about-metric-pill flex flex-col p-2.5 min-w-[110px]">
              <span className="metric-val text-lime font-mono font-bold">
                3+
              </span>
              <span className="metric-lbl text-xs text-[#8c8f82] font-mono">
                Full-Stack Live Systems
              </span>
            </div>
            <div className="about-metric-pill flex flex-col p-2.5 min-w-[110px]">
              <span className="metric-val text-lime font-mono font-bold">
                3
              </span>
              <span className="metric-lbl text-xs text-[#8c8f82] font-mono">
                Verified Certifications
              </span>
            </div>
          </div>

          <div className="engineering-philosophy-banner p-3.5 my-4 bg-lime/[0.03] border-l-2 border-lime rounded-r text-xs leading-relaxed">
            <span className="font-mono text-[9px] text-lime font-bold uppercase tracking-wider block mb-1">
              ENGINEERING PHILOSOPHY
            </span>
            <p className="text-[#cfd1c4] m-0">
              Focus on clean architecture, resilient systems, surgical code
              modifications, and writing automated tests.
            </p>
          </div>
          <a
            className="text-link about-link inline-flex items-center gap-1.5"
            href="#work"
          >
            Explore architecture & case studies <span>↘</span>
          </a>
        </div>

        <div className="about-side reveal">
          <div className="about-portrait" aria-label="Portrait graphic">
            <div className="portrait-ring ring-outer"></div>
            <div className="portrait-ring ring-inner"></div>
            <div className="portrait-sun"></div>
            <div className="portrait-cutout">
              <span>AG</span>
            </div>
            <span className="portrait-star">✳</span>
            <span className="portrait-caption">ANSHU GUPTA</span>
            <span className="portrait-coordinate font-mono">
              IES UNIV · BHOPAL
              <br />
              B.TECH CSE (2026)
            </span>
          </div>
          <div className="about-aside-note flex items-start gap-2">
            <span className="aside-note-mark text-lime">↳</span>
            <span className="text-xs text-[#9b9c91]">
              Core Focus:
              <br />
              <b className="text-[#efefe5]">
                Scalable APIs, UI Precision & Clean Code.
              </b>
            </span>
          </div>
        </div>
      </div>

      {certifications.length > 0 && (
        <div className="certifications-band section-shell reveal">
          <div className="cert-heading">
            <span className="eyebrow flex items-center gap-2">
              <span className="eyebrow-line"></span> VERIFIED CREDENTIALS
            </span>
            <h3>Industry Certifications</h3>
          </div>
          <div className="cert-cards-grid grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div className="cert-card p-4 transition duration-200" key={idx}>
                <div className="cert-card-header flex items-center justify-between mb-2.5">
                  <span className="cert-badge text-lime font-mono text-[9px] uppercase tracking-wider">
                    {cert.badge}
                  </span>
                  <span className="cert-status-dot w-1.5 h-1.5 rounded-full bg-lime"></span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                <div className="cert-issuer font-mono text-[9px] text-[#9da092] mb-2">
                  {cert.issuer}
                </div>
                <p className="text-xs text-[#a6a99b] leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="skills-band section-shell reveal">
        <div className="skills-intro">
          <span className="eyebrow flex items-center gap-2">
            <span className="eyebrow-line"></span> SKILLS MATRIX
          </span>
          <p>
            Full-Stack Proficiency.
            <br />
            <span>5 layers of engineering capabilities.</span>
          </p>
        </div>
        <div className="skills-columns skills-5-cols">
          {skillColumns.map((col, idx) => (
            <div className="skill-column" key={idx}>
              <span className="skill-label font-mono text-[9px]">
                {col.label}
              </span>
              <div className="skill-chips flex flex-wrap gap-1.5 mt-2">
                {col.chips?.map((chip, chipIdx) => (
                  <span key={chipIdx} className="text-[10px]">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
