import React, { useState, useEffect } from 'react';

export default function AdminMessagesModal({ isOpen, onClose, showToast }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isOpen) {
      loadMessages();
    }
  }, [isOpen]);

  const loadMessages = () => {
    try {
      const stored = JSON.parse(
        localStorage.getItem('anshu_portfolio_messages') || '[]'
      );
      setMessages(stored);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (id) => {
    try {
      const updated = messages.filter((m) => m.id !== id);
      setMessages(updated);
      localStorage.setItem('anshu_portfolio_messages', JSON.stringify(updated));
      showToast('Message removed');
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all stored messages?')) {
      localStorage.removeItem('anshu_portfolio_messages');
      setMessages([]);
      showToast('All messages cleared');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex items-center justify-between pb-3 border-b border-[#363831]">
          <div>
            <h3 className="text-base font-semibold">Contact Inquiries</h3>
            <span className="font-mono text-[10px] text-lime">
              LOCAL INBOX ({messages.length})
            </span>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <button
                className="modal-close-btn border border-[#ff7b72] text-[#ff7b72] text-[10px] px-2 py-1 rounded"
                onClick={handleClearAll}
              >
                Clear all
              </button>
            )}
            <button
              className="modal-close-btn text-xs px-2.5 py-1 rounded border border-[#404239]"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="modal-body py-3 max-h-[60vh] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="no-messages py-10 text-center text-[#9b9c91] text-xs">
              No saved messages yet. Inquiries sent via the contact form will
              appear here.
            </div>
          ) : (
            <div className="messages-list flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="message-card p-3 rounded bg-white/[0.02] border border-[#2a2d24]"
                >
                  <div className="message-header flex items-center justify-between mb-2">
                    <div>
                      <span className="message-sender font-semibold text-xs text-[#efefe5]">
                        {msg.name}
                      </span>
                      <span className="message-email text-[11px] text-[#9b9c91] ml-2">
                        ({msg.email})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="message-time font-mono text-[9px] text-[#6f7168]">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                      <button
                        className="msg-del-btn text-[10px] text-[#ff7b72] hover:underline"
                        onClick={() => handleDelete(msg.id)}
                        title="Delete message"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {msg.subject && (
                    <div className="message-subject text-xs font-medium text-lime mb-1">
                      {msg.subject}
                    </div>
                  )}
                  <p className="message-body text-xs text-[#c4c6b8] leading-relaxed whitespace-pre-wrap">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
