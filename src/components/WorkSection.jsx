import React, { useState } from 'react';

export default function WorkSection({ projects = [] }) {
  const [projectTabs, setProjectTabs] = useState({});

  const setTab = (projectId, tab) => {
    setProjectTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section
      className="work-section section-shell"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading reveal">
        <div>
          <div className="eyebrow flex items-center gap-2">
            <span className="eyebrow-line"></span> SELECTED WORK
            <span className="eyebrow-sep">/</span> CASE STUDIES
          </div>
          <h2 id="work-title">
            Built to <span className="serif-word">scale.</span>
          </h2>
        </div>
        <p>
          Architecture, low-latency protocols, and engineering breakdowns for
          live production applications.
        </p>
      </div>

      <div className="projects-list anshu-projects flex flex-col">
        {projects.map((project, index) => {
          const currentTab = projectTabs[project.id] || 'highlights';
          const projectClass = `project anshu-project project-${project.slug || project.title.toLowerCase()} reveal`;

          return (
            <article
              key={project._id || project.slug || index}
              className={projectClass}
              id={`project-${project.slug || project.title.toLowerCase()}`}
            >
              <div className="project-topline flex items-center justify-between font-mono text-[9px] uppercase tracking-wider mb-3">
                <span>
                  {project.topline?.category || `0${index + 1} / PROJECT`}
                </span>
                <span>{project.topline?.badge || 'LIVE PROJECT'}</span>
              </div>
              <div className="project-showcase project-image-showcase">
                <img
                  className="project-screenshot w-full h-auto object-cover"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="showcase-caption font-mono text-[8px] tracking-wider text-right">
                  {project.caption || `Landing page · ${project.title}`}
                </div>
              </div>
              <div className="project-info anshu-project-info flex flex-col md:flex-row justify-between pt-5 gap-6">
                <div className="project-body flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <div className="project-subtitle text-lime font-mono text-[11px] uppercase tracking-wider mt-1 mb-3">
                      {project.subtitle}
                    </div>
                  )}
                  <p className="text-xs text-[#a4a69a] leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {/* Deep-Dive Engineering Breakdown Navigation */}
                  <div className="project-deepdive-box my-4 p-4 bg-white/[0.02] border border-white/[0.07] rounded">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/[0.07] mb-3">
                      <span className="font-mono text-[9px] text-[#a4a69a] tracking-wider uppercase flex items-center gap-1.5">
                        ENGINEERING VIEW & ARCHITECTURE
                      </span>
                      <div className="deepdive-tabs flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setTab(project.id, 'highlights')}
                          className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase transition ${
                            currentTab === 'highlights'
                              ? 'bg-lime text-black font-semibold'
                              : 'text-[#8c8f82] hover:text-[#efefe5] border border-transparent'
                          }`}
                        >
                          Highlights
                        </button>
                        {project.architecture && (
                          <button
                            type="button"
                            onClick={() => setTab(project.id, 'architecture')}
                            className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase transition ${
                              currentTab === 'architecture'
                                ? 'bg-lime text-black font-semibold'
                                : 'text-[#8c8f82] hover:text-[#efefe5] border border-transparent'
                            }`}
                          >
                            Architecture
                          </button>
                        )}
                        {project.problemImpact && (
                          <button
                            type="button"
                            onClick={() => setTab(project.id, 'problem')}
                            className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase transition ${
                              currentTab === 'problem'
                                ? 'bg-lime text-black font-semibold'
                                : 'text-[#8c8f82] hover:text-[#efefe5] border border-transparent'
                            }`}
                          >
                            Problem & Impact
                          </button>
                        )}
                        {project.engineeringChallenges && (
                          <button
                            type="button"
                            onClick={() => setTab(project.id, 'challenges')}
                            className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase transition ${
                              currentTab === 'challenges'
                                ? 'bg-lime text-black font-semibold'
                                : 'text-[#8c8f82] hover:text-[#efefe5] border border-transparent'
                            }`}
                          >
                            Challenges
                          </button>
                        )}
                      </div>
                    </div>

                    {currentTab === 'highlights' &&
                      project.engineeringHighlights && (
                        <ul className="highlights-list flex flex-col gap-1.5 p-0 m-0 list-none">
                          {project.engineeringHighlights.map((hl, hlIdx) => (
                            <li
                              key={hlIdx}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[#cfd1c4]"
                            >
                              <span className="bullet text-lime font-mono">
                                ↳
                              </span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    {currentTab === 'architecture' && project.architecture && (
                      <div className="flex flex-col gap-2 text-xs leading-relaxed text-[#cfd1c4]">
                        <p>{project.architecture}</p>
                        {project.techStackDetails && (
                          <div className="mt-1 pt-2 border-t border-white/[0.05] flex flex-col gap-1 text-[11px] text-[#9b9c91]">
                            {project.techStackDetails.map((tsd, tsdIdx) => (
                              <div
                                key={tsdIdx}
                                className="flex items-start gap-1.5"
                              >
                                <span className="text-lime font-mono">•</span>
                                <span>{tsd}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {currentTab === 'problem' && project.problemImpact && (
                      <p className="text-xs leading-relaxed text-[#cfd1c4]">
                        {project.problemImpact}
                      </p>
                    )}

                    {currentTab === 'challenges' &&
                      project.engineeringChallenges && (
                        <p className="text-xs leading-relaxed text-[#cfd1c4]">
                          {project.engineeringChallenges}
                        </p>
                      )}
                  </div>

                  <div className="tag-list flex flex-wrap gap-2 mt-3">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-mono text-[9px] px-2 py-1 border border-[#45473e] rounded-sm text-[#b5b6ab]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.medicalDisclaimer && (
                    <p className="medical-note text-[11px] text-[#8c8f82] italic mt-3">
                      {project.medicalDisclaimer}
                    </p>
                  )}
                </div>
                <div className="project-links self-start md:self-auto">
                  <a
                    className="button button-lime demo-button inline-flex items-center gap-4 px-4 py-3 font-mono text-xs font-semibold rounded"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="projects-endnote reveal flex items-center justify-center gap-4 my-12 text-[#6f7168] font-mono text-[9px] tracking-widest uppercase">
        <span className="endnote-line flex-1 h-[1px] bg-white/10"></span>
        <span>PRODUCTION CODE · SYSTEM DESIGN · HIGH RELIABILITY</span>
        <span className="endnote-line flex-1 h-[1px] bg-white/10"></span>
      </div>
    </section>
  );
}
