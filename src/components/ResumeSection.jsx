import React, { useState, useRef } from 'react';

export default function ResumeSection({ resumeData, profile, showToast }) {
  const [activeTab, setActiveTab] = useState('sheet');
  const [tiltStyle, setTiltStyle] = useState({
    transform:
      'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s ease-out',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.08s ease-out',
    });
    setGlarePos({ x: glareX, y: glareY, opacity: 0.16 });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform:
        'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(resumeData.summary);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = resumeData.summary;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast('Resume summary copied to clipboard');
    } catch {
      showToast('Could not copy to clipboard');
    }
  };

  return (
    <section
      className="resume-section section-shell"
      id="resume"
      aria-labelledby="resume-title"
    >
      <div className="section-heading reveal">
        <div>
          <div className="eyebrow flex items-center gap-2">
            <span className="eyebrow-line"></span> CURRICULUM VITAE
            <span className="eyebrow-sep">/</span> VERIFIED CREDENTIALS
          </div>
          <h2 id="resume-title">
            Architected for <span className="serif-word">impact.</span>
          </h2>
        </div>
        <p>
          B.Tech Computer Science graduate equipped with full-stack MERN
          architecture, core Java OOPs, national hackathon leadership, and
          production-tested systems.
        </p>
      </div>

      <div className="resume-layout grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="resume-controls lg:col-span-4 flex flex-col gap-5 reveal">
          <div className="resume-badge-card p-5 rounded border border-[#2a2d24] bg-white/[0.015]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] text-lime uppercase tracking-widest">
                TARGET: ENTRY-LEVEL / FRESHER
              </span>
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-[#efefe5]">
              {profile.name}
            </h3>
            <p className="font-mono text-xs text-[#9b9c91] mt-1 mb-4">
              B.Tech CSE · IES University (2026 Batch)
            </p>
            <div className="resume-quick-stats grid grid-cols-2 gap-2 pt-3 border-t border-[#2a2d24]">
              <div className="stat-box p-2 bg-black/40 border border-[#23261f] rounded">
                <span className="block font-mono text-[8px] text-[#787a70] uppercase">
                  Hackathon
                </span>
                <span className="font-mono text-xs text-lime font-semibold">
                  Team Leader
                </span>
              </div>
              <div className="stat-box p-2 bg-black/40 border border-[#23261f] rounded">
                <span className="block font-mono text-[8px] text-[#787a70] uppercase">
                  Java NPTEL
                </span>
                <span className="font-mono text-xs text-lime font-semibold">
                  IIT Certified
                </span>
              </div>
            </div>
          </div>

          <div className="resume-action-buttons flex flex-col gap-2.5">
            <a
              href="/Anshu_Gupta_Resume.pdf"
              download="Anshu_Gupta_Resume.pdf"
              onClick={() => showToast('Downloading Anshu_Gupta_Resume.pdf...')}
              className="unique-resume-download-btn group relative overflow-hidden flex items-center justify-between p-3.5 rounded border border-lime/40 bg-gradient-to-r from-lime/[0.12] via-lime/[0.05] to-transparent hover:border-lime transition-all duration-300 shadow-[0_0_20px_rgba(200,241,105,0.1)] hover:shadow-[0_0_30px_rgba(200,241,105,0.25)]"
            >
              <div className="shimmer-sweep absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-lime/25 to-transparent transition-transform pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-lime/20 border border-lime/40 flex items-center justify-center font-mono text-lime group-hover:scale-110 group-hover:bg-lime group-hover:text-black transition-all duration-300">
                  <span className="text-base">↓</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[9px] text-lime font-bold tracking-widest uppercase flex items-center gap-1.5">
                    OFFICIAL CV{' '}
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping"></span>
                  </span>
                  <span className="text-xs font-semibold text-[#efefe5] group-hover:text-white transition">
                    Download Original PDF
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#8c8f82] group-hover:text-lime transition bg-black/60 px-2 py-1 rounded border border-[#363831] group-hover:border-lime/30">
                <span>PDF</span>
                <span>·</span>
                <span>80 KB</span>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="/Anshu_Gupta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono border border-[#2a2d24] hover:border-lime hover:text-lime transition rounded bg-white/[0.01]"
              >
                <span>↗</span> Open PDF in Tab
              </a>
              <button
                type="button"
                onClick={handlePrint}
                className="channel-link flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono border border-[#2a2d24] hover:border-lime hover:text-lime transition rounded bg-white/[0.01]"
              >
                <span>🖨️</span> Print Sheet
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopySummary}
              className="copy-email flex items-center justify-center gap-2 w-full py-2.5 text-xs text-[#cfd1c4] border border-[#363831] hover:border-lime transition rounded font-mono"
            >
              <span>📋</span> Copy Professional Summary
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link flex items-center justify-center gap-1.5 py-2 text-[11px] font-mono border border-[#2a2d24] hover:border-lime hover:text-lime transition rounded"
              >
                <span>💼</span> LinkedIn ↗
              </a>
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link flex items-center justify-center gap-1.5 py-2 text-[11px] font-mono border border-[#2a2d24] hover:border-lime hover:text-lime transition rounded"
              >
                <span>🐙</span> GitHub ↗
              </a>
            </div>
          </div>

          <div className="view-mode-tabs flex items-center gap-1.5 p-1 bg-black/50 border border-[#2a2d24] rounded">
            <button
              type="button"
              onClick={() => setActiveTab('sheet')}
              className={`flex-1 py-1.5 font-mono text-[10px] uppercase rounded transition ${
                activeTab === 'sheet'
                  ? 'bg-lime text-black font-semibold'
                  : 'text-[#8c8f82] hover:text-[#efefe5]'
              }`}
            >
              Resume Sheet
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('achievements')}
              className={`flex-1 py-1.5 font-mono text-[10px] uppercase rounded transition ${
                activeTab === 'achievements'
                  ? 'bg-lime text-black font-semibold'
                  : 'text-[#8c8f82] hover:text-[#efefe5]'
              }`}
            >
              Key Achievements
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('arsenal')}
              className={`flex-1 py-1.5 font-mono text-[10px] uppercase rounded transition ${
                activeTab === 'arsenal'
                  ? 'bg-lime text-black font-semibold'
                  : 'text-[#8c8f82] hover:text-[#efefe5]'
              }`}
            >
              Tech Arsenal
            </button>
          </div>
        </div>

        <div className="resume-viewport lg:col-span-8 reveal">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="resume-3d-card relative rounded-lg border border-[#363831] bg-[#121310] p-6 sm:p-8 shadow-2xl overflow-hidden transition-all duration-200"
          >
            <div
              className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(200, 241, 105, 0.22), transparent 70%)`,
                opacity: glarePos.opacity,
              }}
            />

            <div className="absolute top-0 right-0 w-36 h-36 bg-lime/[0.03] rounded-bl-full pointer-events-none border-b border-l border-lime/10"></div>
            <div className="absolute bottom-3 right-4 font-mono text-[8px] text-[#42443a] tracking-widest pointer-events-none uppercase">
              DOC · AG-2026-CV
            </div>

            {activeTab === 'sheet' && (
              <div className="printable-resume-sheet flex flex-col gap-6 text-[#efefe5]">
                <div className="resume-sheet-header border-b border-[#2d3027] pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h2 className="text-2xl font-bold tracking-tight text-[#efefe5]">
                      {profile.name}
                    </h2>
                    <span className="font-mono text-xs text-lime">
                      Bhopal, Madhya Pradesh
                    </span>
                  </div>
                  <div className="resume-contacts-row flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] text-[#9b9c91] mt-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-lime"
                    >
                      ✉ {profile.email}
                    </a>
                    <span>•</span>
                    <a
                      href={`tel:${profile.phone}`}
                      className="hover:text-lime"
                    >
                      📞 {profile.displayPhone}
                    </a>
                    <span>•</span>
                    <a
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime"
                    >
                      linkedin.com/in/anshu-gupta
                    </a>
                    <span>•</span>
                    <a
                      href={profile.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime"
                    >
                      github.com/Anshu8435
                    </a>
                  </div>
                </div>

                <div className="resume-section-block">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-lime border-b border-[#2d3027] pb-1 mb-2">
                    PROFESSIONAL SUMMARY
                  </h4>
                  <p className="text-xs text-[#b8bab0] leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>

                <div className="resume-section-block">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-lime border-b border-[#2d3027] pb-1 mb-2">
                    EDUCATION
                  </h4>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="font-semibold text-[#efefe5]">
                      {resumeData.education.degree}
                    </span>
                    <span className="font-mono text-[10px] text-lime">
                      {resumeData.education.period}
                    </span>
                  </div>
                  <div className="text-xs text-[#9b9c91]">
                    {resumeData.education.institution}
                  </div>
                </div>

                <div className="resume-section-block">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-lime border-b border-[#2d3027] pb-1 mb-2">
                    TRAINING & COURSES
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {resumeData.training.map((t, idx) => (
                      <div key={idx} className="text-xs">
                        <div className="flex justify-between items-baseline">
                          <span className="font-semibold text-[#efefe5]">
                            {t.title}, {t.organization}
                          </span>
                          <span className="font-mono text-[10px] text-[#8c8f82]">
                            [{t.period}]
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9b9c91] mt-0.5">
                          • {t.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-section-block">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-lime border-b border-[#2d3027] pb-1 mb-2">
                    TECHNICAL SKILLS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-semibold text-[#efefe5]">
                        Languages:{' '}
                      </span>
                      <span className="text-[#9b9c91] font-mono text-[11px]">
                        {resumeData.technicalSkills.languages.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#efefe5]">
                        Frontend:{' '}
                      </span>
                      <span className="text-[#9b9c91] font-mono text-[11px]">
                        {resumeData.technicalSkills.frontend.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#efefe5]">
                        Backend & DB:{' '}
                      </span>
                      <span className="text-[#9b9c91] font-mono text-[11px]">
                        {resumeData.technicalSkills.backend.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#efefe5]">
                        Tools & CS:{' '}
                      </span>
                      <span className="text-[#9b9c91] font-mono text-[11px]">
                        {resumeData.technicalSkills.tools.join(', ')} · OOP, DSA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="resume-section-block">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-lime border-b border-[#2d3027] pb-1 mb-2">
                    KEY PROJECTS
                  </h4>
                  <div className="flex flex-col gap-3">
                    {resumeData.projects.map((p, pIdx) => (
                      <div key={pIdx} className="text-xs">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-semibold text-[#efefe5]">
                            {p.name}{' '}
                            {p.role && (
                              <span className="text-lime font-mono text-[10px]">
                                ({p.role})
                              </span>
                            )}
                          </span>
                          <span className="font-mono text-[9px] text-[#8c8f82]">
                            {p.context}
                          </span>
                        </div>
                        <ul className="list-none p-0 m-0 flex flex-col gap-1 text-[11px] text-[#a4a69a]">
                          {p.points.map((pt, ptIdx) => (
                            <li
                              key={ptIdx}
                              className="flex items-start gap-1.5 leading-relaxed"
                            >
                              <span className="text-lime font-mono">↳</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-section-block">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-lime border-b border-[#2d3027] pb-1 mb-2">
                    CERTIFICATIONS & ACTIVITIES
                  </h4>
                  <div className="flex flex-col gap-1.5 text-xs text-[#a4a69a]">
                    <div className="flex items-center justify-between">
                      <span>• NPTEL – Object-Oriented Programming in Java</span>
                      <span className="font-mono text-[10px] text-lime">
                        2025
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>• Hackathon (NavKalpana), Team Leader</span>
                      <span className="font-mono text-[10px] text-lime">
                        2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="flex flex-col gap-5">
                <div className="achievements-intro pb-3 border-b border-[#2a2d24]">
                  <h3 className="text-lg font-bold text-[#efefe5]">
                    National Competitions & Certifications
                  </h3>
                  <p className="text-xs text-[#9b9c91] mt-1">
                    Verified achievements earned during academic and technical
                    specialization.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {resumeData.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="achievement-card p-5 rounded border border-[#2a2d24] bg-white/[0.02] hover:border-lime/40 transition duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-lime uppercase tracking-wider px-2 py-0.5 bg-lime/10 border border-lime/20 rounded">
                          {ach.badge}
                        </span>
                        <span className="font-mono text-[9px] text-[#8c8f82]">
                          ROLE: {ach.role}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-[#efefe5] mb-2">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-[#a4a69a] leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'arsenal' && (
              <div className="flex flex-col gap-5">
                <div className="arsenal-intro pb-3 border-b border-[#2a2d24]">
                  <h3 className="text-lg font-bold text-[#efefe5]">
                    Technical Stack Breakdown
                  </h3>
                  <p className="text-xs text-[#9b9c91] mt-1">
                    Core tools, frameworks, and programming fundamentals listed
                    on official CV.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="arsenal-card p-4 rounded border border-[#2a2d24] bg-white/[0.02]">
                    <span className="font-mono text-[9px] text-lime uppercase tracking-wider block mb-2">
                      PROGRAMMING LANGUAGES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.technicalSkills.languages.map((l, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2 py-1 bg-black/40 border border-[#363831] rounded text-[#efefe5]"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="arsenal-card p-4 rounded border border-[#2a2d24] bg-white/[0.02]">
                    <span className="font-mono text-[9px] text-lime uppercase tracking-wider block mb-2">
                      FRONTEND DEVELOPMENT
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.technicalSkills.frontend.map((f, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2 py-1 bg-black/40 border border-[#363831] rounded text-[#efefe5]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="arsenal-card p-4 rounded border border-[#2a2d24] bg-white/[0.02]">
                    <span className="font-mono text-[9px] text-lime uppercase tracking-wider block mb-2">
                      BACKEND & DATABASE
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.technicalSkills.backend.map((b, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2 py-1 bg-black/40 border border-[#363831] rounded text-[#efefe5]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="arsenal-card p-4 rounded border border-[#2a2d24] bg-white/[0.02]">
                    <span className="font-mono text-[9px] text-lime uppercase tracking-wider block mb-2">
                      CORE CS CONCEPTS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.technicalSkills.coreCS.map((c, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2 py-1 bg-black/40 border border-[#363831] rounded text-[#efefe5]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
