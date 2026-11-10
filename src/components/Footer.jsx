import React from 'react';

export default function Footer({ onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section-shell flex items-center justify-between py-8">
      <a
        className="brand footer-brand flex items-center gap-2"
        href="#top"
        aria-label="Back to top"
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

      <span className="footer-note font-mono text-[9px] tracking-wider text-[#6f7168]">
        FULL-STACK SOFTWARE ENGINEER <i>✳</i>
      </span>

      <div className="footer-right flex items-center gap-4 font-mono text-[10px]">
        <button
          type="button"
          className="admin-trigger px-2.5 py-1"
          onClick={onOpenAdmin}
          title="View received contact inquiries"
        >
          INBOX
        </button>
        <span className="text-[#8c8f82]">
          © <span id="year">{currentYear}</span> ANSHU GUPTA
        </span>
        <a href="#top" className="text-lime hover:underline">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
