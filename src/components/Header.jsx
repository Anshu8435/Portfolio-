import React, { useState, useEffect } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && navOpen) {
        setNavOpen(false);
      }
    };

    const handlePointerDown = (e) => {
      if (navOpen && !e.target.closest('.topbar')) {
        setNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <a className="skip-link sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>
      <header className="topbar flex items-center justify-between" id="top">
        <a
          className="brand flex items-center gap-2"
          href="#top"
          aria-label="Anshu Gupta home"
        >
          <span className="brand-mark" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="font-semibold tracking-tight">
            anshu<span className="brand-dot text-lime">.</span>
          </span>
        </a>

        <nav
          className={`main-nav ${navOpen ? 'open' : ''}`}
          id="main-nav"
          aria-label="Main navigation"
        >
          <a
            href="#work"
            onClick={closeNav}
            className="hover:text-lime transition"
          >
            Work <span>01</span>
          </a>
          <a
            href="#about"
            onClick={closeNav}
            className="hover:text-lime transition"
          >
            About <span>02</span>
          </a>
          <a
            href="#journey"
            onClick={closeNav}
            className="hover:text-lime transition"
          >
            Journey <span>03</span>
          </a>
          <a
            href="#resume"
            onClick={closeNav}
            className="hover:text-lime transition"
          >
            Resume <span>04</span>
          </a>
        </nav>

        <a
          className="nav-contact inline-flex items-center gap-2"
          href="#contact"
          onClick={closeNav}
        >
          <span className="status-dot w-1.5 h-1.5 rounded-full bg-lime inline-block"></span>{' '}
          Let’s talk <span className="arrow">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navOpen}
          aria-controls="main-nav"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
