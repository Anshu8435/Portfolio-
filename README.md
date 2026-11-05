# Anshu Gupta — Software Developer Portfolio

Modern, high-performance personal developer portfolio built with React and Vite.

Live Demo Reference: [https://devfolio-wyxwdw8t.manus.space/](https://devfolio-wyxwdw8t.manus.space/)

## Features

- **3D Fibonacci Orbit Visualization:** Interactive 220-particle golden-angle sphere on HTML5 Canvas with pointer tracking.
- **Projects Showcase:** Live showcases for GoChat (WebSocket messaging), Cravings (food delivery platform), and CardioShield (explainable AI health tech).
- **Infinite Marquee Ticker:** Fluid looping animation covering Java DSA and Full-Stack topics.
- **Journey & Timeline:** Education from IES University (B.Tech in CSE), specialization from RICR Institute of Technology (Java DSA & Full-Stack), and independent project work.
- **Direct Contact System:** Interactive message form with direct email delivery to `anshugupta15029@gmail.com` via Web3Forms and mailto client fallback.
- **100% Responsive:** Tested across mobile (320px+), tablet, and desktop viewports.

## Project Structure

```
AnshuPortfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── gochat-landing.png
│       ├── cravings-landing.png
│       └── cardiosheild-landing.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── OrbitCanvas.jsx
│   │   ├── Ticker.jsx
│   │   ├── WorkSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── JourneySection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Toast.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── AdminMessagesModal.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   └── useReveal.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be running at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

The compiled assets will be in the `dist/` directory.

## License

MIT © Anshu Gupta

