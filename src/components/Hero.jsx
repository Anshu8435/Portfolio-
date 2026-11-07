import React from 'react';
import OrbitCanvas from './OrbitCanvas';

export default function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <div className="eyebrow flex items-center gap-2">
          <span className="eyebrow-line"></span> FULL STACK SOFTWARE ENGINEER
          <span className="eyebrow-sep">/</span> SYSTEM DESIGN & APIS
        </div>
        <h1 id="hero-title">
          I build for
          <br />
          <span className="outline-word">the web</span>
          <br />
          with <span className="serif-word">precision.</span>
        </h1>
        <p className="hero-intro">
          B.Tech CSE graduate (IES University, 2026) building scalable
          full-stack applications, robust APIs, and immersive web experiences
          with enterprise-grade coding standards. Focused on system design,
          real-time architectures, and modern MERN development.
        </p>
        <div className="hero-actions flex items-center gap-4 flex-wrap">
          <a
            className="button button-lime inline-flex items-center gap-3"
            href="#work"
          >
            Explore my work <span>↘</span>
          </a>
          <a
            className="text-link inline-flex items-center gap-2"
            href="#resume"
          >
            View Resume <span>📄</span>
          </a>
        </div>
        <div className="hero-meta flex items-center font-mono text-[9px] uppercase tracking-wider">
          <span>B.TECH CSE · IES UNIVERSITY (2026)</span>
          <span className="meta-divider mx-3"></span>
          <span className="flex items-center gap-1.5">
            BHOPAL, MP, INDIA{' '}
            <i className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-lime"></i>
          </span>
        </div>
      </div>

      <div className="hero-art reveal" aria-label="Orbit visualization">
        <div className="art-label art-label-top">
          <span className="live-pulse"></span> SYSTEMS IN MOTION
          <span className="art-label-code">01—03</span>
        </div>
        <div className="scene" id="scene">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>
          <div className="planet-halo"></div>
          <div className="planet">
            <div className="planet-shine"></div>
            <div className="planet-grid"></div>
            <span className="planet-core"></span>
          </div>
          <OrbitCanvas />
          <div className="satellite satellite-a">
            <span className="satellite-icon">&lt;/&gt;</span>
          </div>
          <div className="satellite satellite-b">
            <span className="satellite-icon">✳</span>
          </div>
          <div className="satellite satellite-c">
            <span className="satellite-icon">⌘</span>
          </div>
          <div className="floating-note note-a">
            <span className="note-spark">✳</span>
            <span>
              Code with
              <br />a point of view
            </span>
          </div>
          <div className="floating-note note-b">
            <span className="note-index">[ 42° 21′ ]</span>
            <span>Always exploring</span>
          </div>
          <div className="scene-crosshair crosshair-one"></div>
          <div className="scene-crosshair crosshair-two"></div>
        </div>
        <div className="art-label art-label-bottom">
          <span>FIG. 001</span>
          <span>BUILD · REFINE · REPEAT</span>
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#work"
        aria-label="Scroll to selected work"
      >
        <span className="scroll-cue-line"></span> SCROLL TO DISCOVER
      </a>
    </section>
  );
}
