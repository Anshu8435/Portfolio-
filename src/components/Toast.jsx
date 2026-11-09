import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div
      className={`toast ${visible ? 'visible' : ''}`}
      id="toast"
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
