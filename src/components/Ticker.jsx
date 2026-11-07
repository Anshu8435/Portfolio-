import React from 'react';

export default function Ticker() {
  const items = [
    'JAVA',
    'DATA STRUCTURES & ALGORITHMS',
    'ARRAYS · STRINGS · LINKED LISTS',
    'STACKS · QUEUES · TREES · GRAPHS',
    'HTML · CSS · JAVASCRIPT',
    'FRONTEND · BACKEND · APIs · DATABASES',
  ];

  return (
    <section
      className="ticker"
      aria-label="Java DSA and full-stack learning topics"
    >
      <div className="ticker-track">
        {items.map((item, index) => (
          <React.Fragment key={`ticker-1-${index}`}>
            <span>{item}</span>
            <i>✳</i>
          </React.Fragment>
        ))}
        {items.map((item, index) => (
          <React.Fragment key={`ticker-2-${index}`}>
            <span>{item}</span>
            <i>✳</i>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
