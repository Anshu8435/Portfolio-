import React from 'react';

export default function JourneySection({ timeline = [] }) {
  const defaultTimeline = [
    {
      category: 'ACADEMIC FOUNDATION',
      title: 'Bachelor of Technology in Computer Science & Engineering',
      organization: 'IES University, Bhopal',
      duration: 'Graduation: 2026',
      badgeSymbol: '🎓',
      description:
        'Undergraduate in Computer Science & Engineering mastering data structures, algorithms, object-oriented design, relational databases, operating systems, and distributed system fundamentals.',
      enterpriseProof:
        'Solid CS foundation in algorithms, OOP principles, data modeling, and end-to-end software engineering.',
      tags: [
        'B.Tech CSE',
        'IES University',
        'Class of 2026',
        'Core CS Fundamentals',
      ],
      order: 1,
    },
    {
      category: 'SPECIALIZED CREDENTIALS',
      title: 'NPTEL & Industry Certifications',
      organization: 'NPTEL · IIT Kharagpur / RICR Academy',
      duration: 'Verified',
      badgeSymbol: '📜',
      description:
        '• NPTEL Certification: Programming in Java with Object-Oriented Programming (OOPs)\n• RICR: Java & Data Structures and Algorithms (DSA)\n• RICR: Full Stack Web Development (MERN Stack)',
      enterpriseProof:
        'Rigorous external assessment in Java OOPs, algorithm complexity optimization, and modern MERN architecture.',
      tags: [
        'NPTEL Java OOPs',
        'RICR Java DSA',
        'RICR MERN Full-Stack',
        'Verified Credentials',
      ],
      order: 2,
    },
    {
      category: 'HANDS-ON ENGINEERING',
      title: 'Full-Stack Systems & Real-Time Applications',
      organization: 'Live Production Projects',
      duration: 'Active Deployments',
      badgeSymbol: '🚀',
      description:
        'Architected, built, and deployed three live production systems: Cravings (zero-CLS 3D WebGL food discovery), GoChat (bi-directional WebSocket messaging with sub-100ms latency), and CardioShield (explainable healthcare analytics with strict payload validation).',
      enterpriseProof:
        'Production deployments with responsive architectures, secure REST validation, and automated E2E testing suites.',
      tags: [
        'Cravings 3D',
        'GoChat WebSockets',
        'CardioShield AI',
        'Production Deployments',
      ],
      order: 3,
    },
  ];

  const items = timeline.length > 0 ? timeline : defaultTimeline;

  return (
    <section
      className="journey-section section-shell"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="section-heading journey-heading reveal">
        <div>
          <div className="eyebrow flex items-center gap-2">
            <span className="eyebrow-line"></span> ACADEMIC FOUNDATIONS & PATH
          </div>
          <h2 id="journey-title">
            Foundation & <span className="serif-word">growth.</span>
          </h2>
        </div>
        <p>
          A computer science foundation from IES University, verified
          credentials in Java DSA & MERN, and production-ready full-stack
          projects.
        </p>
      </div>

      <div className="journey-layout">
        <div className="timeline-label reveal">
          <span>
            ACADEMIA
            <br />& CREDENTIALS
          </span>
          <span className="timeline-arrow text-lime">↘</span>
          <span>PRODUCTION READY</span>
        </div>
        <div className="timeline">
          {items.map((item, idx) => (
            <article className="timeline-item reveal" key={idx}>
              <div className="timeline-marker">
                <i></i>
              </div>
              <div className="timeline-year">
                <span className="timeline-cat-name font-mono text-[9px] uppercase tracking-wider text-[#95978b] block">
                  {item.category}
                </span>
                {item.duration && (
                  <span className="timeline-duration-badge font-mono text-[8px] text-lime border border-[#4a4d3f] px-1.5 py-0.5 rounded-sm inline-block mt-1">
                    {item.duration}
                  </span>
                )}
              </div>
              <div className="timeline-content">
                <div className="timeline-top flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[9px] text-lime whitespace-nowrap">
                    {item.organization}{' '}
                    <i className="not-italic ml-1">{item.badgeSymbol || '✳'}</i>
                  </span>
                </div>
                <p className="text-xs text-[#989a8f] leading-relaxed my-2 max-w-xl whitespace-pre-line">
                  {item.description}
                </p>
                {item.enterpriseProof && (
                  <div className="enterprise-proof-box my-2.5 p-2.5 bg-lime/[0.03] border-l-2 border-lime text-xs leading-relaxed">
                    <span className="proof-label font-mono text-[8px] text-lime font-semibold tracking-wider mr-1">
                      KEY HIGHLIGHT:
                    </span>
                    <span className="proof-text text-[#b9bcb0]">
                      {item.enterpriseProof}
                    </span>
                  </div>
                )}
                <div className="timeline-tags flex flex-wrap gap-1.5 mt-2">
                  {item.tags?.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-mono text-[8px] px-1.5 py-0.5 border border-[#45473e] text-[#b5b6ab] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
