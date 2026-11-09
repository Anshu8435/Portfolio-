import React, { useState } from 'react';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const targetEmail = 'anshugupta15029@gmail.com';
  const whatsappNumber = '918435404198';
  const phoneNumber = '+918435404198';

  const sanitizeInput = (text) => {
    if (!text) return '';
    return text.replace(/[<>]/g, '').trim();
  };

  const checkRateLimit = () => {
    try {
      const lastTime = localStorage.getItem('anshu_last_msg_timestamp');
      const now = Date.now();
      if (lastTime && now - parseInt(lastTime, 10) < 15000) {
        const waitSec = Math.ceil(
          (15000 - (now - parseInt(lastTime, 10))) / 1000
        );
        return `Please wait ${waitSec}s before sending another message.`;
      }
      localStorage.setItem('anshu_last_msg_timestamp', now.toString());
      return null;
    } catch {
      return null;
    }
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(targetEmail);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = targetEmail;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast('Email copied to clipboard');
    } catch {
      window.location.href = `mailto:${targetEmail}`;
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveInquiryLocally = (inquiry) => {
    try {
      const existing = JSON.parse(
        localStorage.getItem('anshu_portfolio_messages') || '[]'
      );
      localStorage.setItem(
        'anshu_portfolio_messages',
        JSON.stringify([inquiry, ...existing.slice(0, 49)])
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSendViaEmail = (e) => {
    e.preventDefault();
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      setStatus({ type: 'error', message: rateLimitError });
      showToast(rateLimitError);
      return;
    }

    const cleanName = sanitizeInput(formData.name);
    const cleanEmail = sanitizeInput(formData.email);
    const cleanSubject = sanitizeInput(formData.subject);
    const cleanMessage = sanitizeInput(formData.message);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setStatus({
        type: 'error',
        message: 'Please fill in Name, Email, and Message.',
      });
      return;
    }

    const newInquiry = {
      id: Date.now().toString(),
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject || 'Portfolio Inquiry',
      message: cleanMessage,
      createdAt: new Date().toISOString(),
    };

    saveInquiryLocally(newInquiry);

    const subject = cleanSubject || `Portfolio Message from ${cleanName}`;
    const body = `Hi Anshu,\n\n${cleanMessage}\n\n---\nSender: ${cleanName}\nEmail: ${cleanEmail}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      window.open(gmailUrl, '_blank');
    }

    setStatus({
      type: 'success',
      message: `Mail composer opened for ${targetEmail}!`,
    });
    showToast('Opening Gmail...');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      setStatus({ type: 'error', message: rateLimitError });
      showToast(rateLimitError);
      return;
    }

    const cleanName = sanitizeInput(formData.name);
    const cleanEmail = sanitizeInput(formData.email);
    const cleanSubject = sanitizeInput(formData.subject);
    const cleanMessage = sanitizeInput(formData.message);

    if (!cleanName || !cleanMessage) {
      setStatus({
        type: 'error',
        message: 'Please enter at least your Name and Message for WhatsApp.',
      });
      return;
    }

    const newInquiry = {
      id: Date.now().toString(),
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject || 'Portfolio Contact',
      message: cleanMessage,
      createdAt: new Date().toISOString(),
    };

    saveInquiryLocally(newInquiry);

    const text = `Hi Anshu,\n\nName: ${cleanName}\nEmail: ${cleanEmail || 'Not provided'}\nSubject: ${cleanSubject || 'Portfolio Contact'}\n\nMessage:\n${cleanMessage}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(waUrl, '_blank');

    setStatus({
      type: 'success',
      message: 'Opening WhatsApp to send your message directly to Anshu...',
    });
    showToast('Opening WhatsApp...');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const generalWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi Anshu, I checked your portfolio and would like to connect with you!'
  )}`;

  const generalGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(
    'Connecting from Portfolio'
  )}&body=${encodeURIComponent(
    'Hi Anshu,\n\nI visited your portfolio and would like to connect.'
  )}`;

  return (
    <section
      className="contact-section section-shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-orbit contact-orbit-one"></div>
      <div className="contact-orbit contact-orbit-two"></div>

      <div className="contact-layout reveal max-w-3xl">
        <div className="eyebrow flex items-center gap-2">
          <span className="eyebrow-line"></span> GET IN TOUCH
          <span className="eyebrow-sep">/</span> CONNECT DIRECTLY
        </div>
        <h2 id="contact-title">
          Let’s build
          <br />
          something <span className="serif-word">impactful.</span>
        </h2>
        <p className="text-xs text-[#a4a69a] leading-relaxed max-w-xl my-4">
          I’m Anshu Gupta, a Full Stack Software Engineer (B.Tech CSE, IES
          University). Available for entry-level engineering roles, full-stack
          projects, and technical collaborations.
        </p>

        <div className="contact-actions flex flex-wrap items-center gap-3 my-5">
          <a
            className="button button-lime inline-flex items-center gap-2.5 px-4 py-2.5"
            href="#work"
          >
            Explore my projects <span>↘</span>
          </a>

          <button
            type="button"
            className="copy-email font-mono text-xs px-3.5 py-2.5 border border-[#363831] hover:border-lime transition rounded flex items-center gap-2"
            onClick={handleCopyEmail}
            data-email={targetEmail}
            aria-label="Copy email address to clipboard"
          >
            {targetEmail} <span className="copy-icon">⎘</span>
          </button>
        </div>

        <div className="contact-form-container p-6 rounded-lg border border-[#2a2d24] bg-white/[0.015] my-6">
          <div className="contact-form-header flex items-center justify-between pb-3 border-b border-[#2a2d24] mb-4">
            <span className="contact-form-title font-semibold text-sm text-[#efefe5] flex items-center gap-2">
              <i className="w-2 h-2 rounded-full bg-lime inline-block"></i>{' '}
              Direct Dispatch
            </span>
            <span className="font-mono text-[9px] text-[#6f7168] tracking-widest uppercase">
              INSTANT DELIVERY
            </span>
          </div>

          <form onSubmit={handleSendViaEmail}>
            <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-group flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] text-[#9b9c91] uppercase tracking-wider"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Recruiter / Engineering Manager"
                  className="form-input bg-black/40 border border-[#363831] focus:border-lime rounded px-3 py-2 text-xs text-[#efefe5] outline-none transition"
                  required
                />
              </div>
              <div className="form-group flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] text-[#9b9c91] uppercase tracking-wider"
                >
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="form-input bg-black/40 border border-[#363831] focus:border-lime rounded px-3 py-2 text-xs text-[#efefe5] outline-none transition"
                  required
                />
              </div>
              <div className="form-group form-group-full sm:col-span-2 flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="font-mono text-[10px] text-[#9b9c91] uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Developer Role / Project Discussion"
                  className="form-input bg-black/40 border border-[#363831] focus:border-lime rounded px-3 py-2 text-xs text-[#efefe5] outline-none transition"
                />
              </div>
              <div className="form-group form-group-full sm:col-span-2 flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] text-[#9b9c91] uppercase tracking-wider"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here... Send directly via Gmail or WhatsApp below."
                  className="form-textarea bg-black/40 border border-[#363831] focus:border-lime rounded px-3 py-2 text-xs text-[#efefe5] outline-none transition"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-submit-row flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-[#2a2d24]">
              <div className="form-send-options flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="button button-lime button-submit inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs rounded"
                >
                  Send via Gmail <span>✉️</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="button button-whatsapp button-submit inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs rounded"
                >
                  Send via WhatsApp <span>💬</span>
                </button>
              </div>

              {status && (
                <div
                  className={`form-status ${status.type} text-xs font-mono px-3 py-1.5 rounded`}
                >
                  {status.message}
                </div>
              )}
            </div>

            <div className="contact-channels-strip flex flex-wrap items-center justify-between gap-3 mt-5 pt-3 border-t border-[#2a2d24]">
              <span className="contact-channels-label font-mono text-[9px] text-[#6f7168] uppercase tracking-wider">
                Instant Channels:
              </span>
              <div className="contact-channels-links flex flex-wrap items-center gap-2">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link wa font-mono text-[10px] px-2.5 py-1 border border-[#2a2d24] hover:border-[#25d366] transition rounded"
                >
                  <span>💬</span> WhatsApp Direct
                </a>
                <a
                  href={generalGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link font-mono text-[10px] px-2.5 py-1 border border-[#2a2d24] hover:border-lime transition rounded"
                >
                  <span>✉️</span> Gmail
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="channel-link call font-mono text-[10px] px-2.5 py-1 border border-[#2a2d24] hover:border-lime transition rounded"
                >
                  <span>📞</span> Call: {phoneNumber}
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="contact-socials flex flex-wrap items-center gap-4 pt-4 border-t border-[#2a2d24] font-mono text-[10px]">
          <a
            href="https://linkedin.com/in/anshu-gupta-3800aa353"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition"
          >
            LINKEDIN <span>↗</span>
          </a>
          <a
            href="https://github.com/Anshu8435"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition"
          >
            GITHUB <span>↗</span>
          </a>
          <a
            href="https://cravings08.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition"
          >
            CRAVINGS <span>↗</span>
          </a>
          <a
            href="https://go-chat-jade.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition"
          >
            GOCHAT <span>↗</span>
          </a>
          <a
            href="https://nav-kalpana-ricr-nk-0001.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition"
          >
            CARDIOSHIELD <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
