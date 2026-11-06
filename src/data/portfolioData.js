export const portfolioData = {
  profile: {
    name: 'Anshu Gupta',
    role: 'Full Stack Software Engineer',
    subRole: 'Fresher / Entry-Level · Bhopal, MP, India',
    headline: 'I build for the web with precision & enterprise standards.',
    intro:
      'B.Tech CSE graduate (IES University, 2026) building scalable full-stack applications, robust APIs, and immersive web experiences with enterprise-grade coding standards. Focused on system design, real-time architectures, and modern MERN development.',
    coreTagline:
      'Building scalable, production-grade applications with enterprise standards—from zero-CLS 3D WebGL interfaces to low-latency WebSocket messaging and secure backend REST APIs.',
    engineeringPhilosophy:
      'Focus on clean architecture, resilient systems, surgical code modifications, and automated test coverage.',
    location: 'Bhopal, Madhya Pradesh, India',
    email: 'anshugupta15029@gmail.com',
    phone: '+918435404198',
    whatsapp: '918435404198',
    displayPhone: '+91 84354 04198',
    education: 'B.TECH CSE · IES UNIVERSITY (2026)',
    status: 'FRESHER · PRODUCTION-READY SKILLS',
    socialLinks: {
      gochat: 'https://go-chat-jade.vercel.app/',
      cravings: 'https://cravings08.vercel.app/',
      cardioshield: 'https://nav-kalpana-ricr-nk-0001.vercel.app/',
      github: 'https://github.com/Anshu8435',
      linkedin: 'https://linkedin.com/in/anshu-gupta-3800aa353',
      whatsapp: 'https://wa.me/918435404198',
      call: 'tel:+918435404198',
    },
  },

  certifications: [
    {
      title: 'Programming in Java with OOPs',
      issuer: 'NPTEL Certification · IIT Kharagpur',
      badge: 'Core Programming',
      description:
        'Certified in core Java, object-oriented paradigms, inheritance, polymorphism, abstraction, encapsulation, and exception architectures.',
    },
    {
      title: 'Java & Data Structures & Algorithms (DSA)',
      issuer: 'RICR (Raj Institute of Coding and Robotics)',
      badge: 'Problem Solving',
      description:
        'Rigorous training in time-space complexity optimization, graphs, trees, dynamic programming, and data structures.',
    },
    {
      title: 'Full Stack Web Development (MERN Stack)',
      issuer: 'RICR (Raj Institute of Coding and Robotics)',
      badge: 'Full-Stack Engineering',
      description:
        'Production application engineering with React, Node.js, Express, MongoDB, WebSocket communications, and cloud deployments.',
    },
  ],

  projects: [
    {
      id: 'cravings',
      slug: 'cravings',
      title: 'Cravings',
      topline: {
        category: '01 / FULL-STACK MERN · 3D WEBGL',
        badge: 'LIVE PROJECT',
      },
      subtitle: 'UI/UX Innovation, 3D Integration & Cross-Platform Deployment',
      description:
        'A full-stack food ordering platform designed around appetite discovery. Features a zero-CLS 3D Biryani Handi hero experience, categorized dish filtering, and role-based backend API endpoints with structured documentation.',
      problemImpact:
        'Overcomes traditional flat catalogue fatigue by creating an interactive, appetite-first discovery UI, while integrating Neighborhood Pooling (Group Drops) to reduce delivery overhead.',
      architecture:
        'Decoupled Client-Server architecture. React.js client communicates with Express REST APIs, MongoDB data layer, and an optimized Three.js / WebGL canvas for 3D model rendering.',
      techStackDetails: [
        'Frontend: React.js, Three.js, @react-three/fiber, @react-three/drei, Tailwind CSS',
        'Backend: Node.js, Express.js REST APIs with JWT & Role-Based Access Control',
        'Database & Storage: MongoDB, Mongoose, Cloudinary for menu image optimization',
        'Deployment: Continuous deployment pipeline across Vercel and Render',
      ],
      engineeringChallenges:
        'Achieving zero Cumulative Layout Shift (CLS) during 3D asset initialization and orchestrating multi-role authentication (Admin, Customer, Rider) with OTP verification.',
      engineeringHighlights: [
        'Implemented a 3D Biryani Handi hero animation (.glb models) with zero Cumulative Layout Shift (CLS)',
        'Designed role-based API endpoints with comprehensive API documentation and REST schema validation',
        'Cross-platform continuous deployment pipeline orchestrated across Vercel & Render',
      ],
      tags: [
        'React',
        'Three.js',
        '@react-three/fiber',
        '@react-three/drei',
        'Node.js',
        'Express',
        'MongoDB',
        'Vercel',
        'Render',
      ],
      image: '/images/cravings-landing.png',
      caption: 'Actual landing page · Cravings',
      liveUrl: 'https://cravings08.vercel.app/',
      order: 1,
      featured: true,
    },
    {
      id: 'gochat',
      slug: 'gochat',
      title: 'GoChat',
      topline: {
        category: '02 / REAL-TIME DATA SYNC · WEBSOCKETS',
        badge: 'LIVE PROJECT',
      },
      subtitle: 'Real-Time Data Sync, WebSockets, & Low-Latency Communication',
      description:
        'A real-time messaging application with bi-directional WebSocket communication, dynamic theme customization, and sub-100ms message delivery. Optimized MongoDB query execution to ensure minimal chat latency across channels.',
      problemImpact:
        'Eliminates polling overhead and latency spikes in group collaboration by providing instant sub-100ms message dispatch, typing presence, and dynamic hardware-accelerated theming.',
      architecture:
        'Event-driven bi-directional WebSockets architecture. Persistent Socket.IO server manages active room channels, heartbeat pings, and delivery state, backed by an indexed MongoDB store.',
      techStackDetails: [
        'Client: React.js, Tailwind CSS, custom hardware-accelerated theme engine',
        'Real-Time Protocols: Socket.IO & WebSockets for bi-directional event dispatching',
        'Backend: Node.js & Express.js with JWT authentication and room routing',
        'Database: MongoDB with compound indexing on roomId and timestamp fields',
      ],
      engineeringChallenges:
        'Preventing duplicate event propagation during socket reconnections and optimizing MongoDB collection indexes for low-latency message retrieval.',
      engineeringHighlights: [
        'Architected a bi-directional, real-time communication system using WebSockets & Socket.IO',
        'Engineered dynamic UI/UX animations and hardware-accelerated theme switching',
        'Optimized MongoDB queries with compound indexing for minimal chat latency',
      ],
      tags: [
        'MERN Stack',
        'Socket.IO',
        'WebSockets',
        'Tailwind CSS',
        'React.js',
        'Node.js',
        'MongoDB',
      ],
      image: '/images/gochat-landing.png',
      caption: 'Actual landing page · GoChat',
      liveUrl: 'https://go-chat-jade.vercel.app/',
      order: 2,
      featured: true,
    },
    {
      id: 'cardioshield',
      slug: 'cardioshield',
      title: 'CardioShield',
      topline: {
        category: '03 / PREDICTIVE AI · HEALTH TECH',
        badge: 'LIVE PROJECT',
      },
      subtitle: 'Secure Data Handling, Analytics & System Reliability',
      description:
        'An explainable cardiovascular risk-stratification system developed as Team Leader for NavKalpana National Hackathon 2025. Implements a calibrated XGBoost pipeline with TreeSHAP explanations, ensuring predictions are delivered with clinical context rather than opaque scores.',
      problemImpact:
        'Solves the clinical "black box" dilemma in medical AI by augmenting prediction scores with transparent, feature-level TreeSHAP attribution for clinicians.',
      architecture:
        'Secure biomedical inference pipeline. React client sends validated clinical telemetry to an Express gateway, which sanitizes payloads, runs inference, and returns interpretable biomarker risk factors.',
      techStackDetails: [
        'Frontend: React.js, Tailwind CSS, structured clinical telemetry forms',
        'Inference Engine: Calibrated XGBoost classification with TreeSHAP interpretability',
        'Backend: Node.js & Express.js with payload sanitization and strict error boundaries',
        'Database: MongoDB for historical patient telemetry logs',
      ],
      engineeringChallenges:
        'Enforcing strict sanitization on biomedical inputs to prevent injection attacks and coordinating the team as Team Leader from ideation to judge presentation.',
      engineeringHighlights: [
        'Led project as Team Leader at NavKalpana National Hackathon 2025 from idea to judge presentation',
        'Developed a secure architecture for sensitive data processing and biomarker telemetry',
        'Implemented strict backend payload validation and REST API best practices to ensure data integrity',
      ],
      tags: [
        'MERN Stack',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'XGBoost',
        'TreeSHAP',
        'REST APIs',
      ],
      image: '/images/cardioshield-landing.png',
      caption: 'Actual landing page · CardioShield',
      liveUrl: 'https://nav-kalpana-ricr-nk-0001.vercel.app/',
      medicalDisclaimer:
        'Portfolio engineering demonstration only. Not a substitute for clinician judgment.',
      order: 3,
      featured: true,
    },
  ],

  skills: [
    {
      category: 'FRONTEND',
      label: 'LAYER 01 · FRONTEND & UI ARCHITECTURE',
      chips: [
        'JavaScript (ES6+)',
        'React.js',
        'Next.js',
        'Three.js (WebGL)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap 5',
      ],
    },
    {
      category: 'BACKEND',
      label: 'LAYER 02 · BACKEND & API LAYER',
      chips: [
        'Node.js',
        'Express.js',
        'RESTful API Design',
        'WebSockets (Socket.IO)',
        'Role-Based Access',
        'Rate Limiting & CORS',
      ],
    },
    {
      category: 'DATABASE',
      label: 'LAYER 03 · DATABASE & DATA MODELING',
      chips: [
        'MongoDB (Compass)',
        'Mongoose Schema Design',
        'PostgreSQL',
        'Aggregation Pipelines',
        'Index Optimization',
        'Payload Sanitization',
      ],
    },
    {
      category: 'CORE_CS',
      label: 'LAYER 04 · CORE PROGRAMMING',
      chips: [
        'Java',
        'Object-Oriented Programming (OOPs)',
        'Data Structures & Algorithms (DSA)',
        'Algorithmic Problem Solving',
        'Time & Space Complexity',
      ],
    },
    {
      category: 'DEVOPS_QA',
      label: 'LAYER 05 · DEVOPS, QA & TOOLS',
      chips: [
        'Git',
        'GitHub Workflows',
        'VS Code',
        'Postman',
        'npm',
        'Vercel',
        'Render',
        'Playwright (E2E Testing)',
        'Sentry (Error Tracking)',
      ],
    },
  ],

  timeline: [
    {
      category: 'ACADEMIC FOUNDATION',
      title: 'Bachelor of Technology in Computer Science & Engineering',
      organization: 'IES University, Bhopal',
      duration: 'Class of 2026',
      badgeSymbol: '🎓',
      description:
        'Undergraduate in Computer Science & Engineering mastering data structures, algorithms, object-oriented design, relational databases, operating systems, and distributed system fundamentals.',
      enterpriseProof:
        'Solid CS foundation in algorithms, OOP principles, data modeling, and software lifecycle.',
      tags: ['B.Tech CSE', 'IES University', 'Class of 2026', 'Core CS'],
      order: 1,
    },
    {
      category: 'SPECIALIZED CREDENTIALS',
      title: 'NPTEL & Industry Certifications',
      organization: 'NPTEL · IIT Kharagpur / RICR Academy',
      duration: 'Verified',
      badgeSymbol: '📜',
      description:
        '• NPTEL Certification: Programming in Java with Object-Oriented Programming (OOPs)\n• RICR: Java & Data Structures and Algorithms (DSA)\n• RICR: Full Stack Web Development (MERN Stack)',
      enterpriseProof:
        'Rigorous external assessment in Java OOPs, algorithm complexity optimization, and modern MERN architecture.',
      tags: [
        'NPTEL Java OOPs',
        'RICR Java DSA',
        'RICR MERN Full-Stack',
        'Verified Credentials',
      ],
      order: 2,
    },
    {
      category: 'HANDS-ON ENGINEERING',
      title: 'Full-Stack Systems & Real-Time Applications',
      organization: 'Live Production Projects',
      duration: 'Active Deployments',
      badgeSymbol: '🚀',
      description:
        'Architected, built, and deployed three live production systems: Cravings (zero-CLS 3D WebGL food discovery), GoChat (bi-directional WebSocket messaging with sub-100ms latency), and CardioShield (explainable healthcare analytics with strict payload validation).',
      enterpriseProof:
        'Production deployments with responsive architectures, secure REST validation, and automated E2E testing suites.',
      tags: [
        'Cravings 3D',
        'GoChat WebSockets',
        'CardioShield AI',
        'Production Deployments',
      ],
      order: 3,
    },
  ],

  resume: {
    summary:
      'Motivated B.Tech Computer Science graduate with a strong foundation in Core Java, Data Structures & Algorithms, and Object-Oriented Programming, along with hands-on experience building full-stack web applications using the MERN stack. Eager to apply my technical skills and problem-solving abilities in an entry-level Software Developer role, and to grow through real-world projects in a collaborative team.',
    education: {
      degree: 'Computer Science Engineering',
      institution: 'IES University, Bhopal',
      period: 'Graduation: 2026',
    },
    training: [
      {
        title: 'Java DSA Course',
        organization: 'RICR Institute Bhopal',
        period: '2025 - 2026',
        details:
          'Completed Java Data Structures & Algorithms course with certificate.',
      },
      {
        title: 'Web Development Course',
        organization: 'RICR Institute Bhopal',
        period: '2026',
        details:
          'Completed web development course covering frontend and full-stack fundamentals.',
      },
    ],
    technicalSkills: {
      languages: ['Java', 'JavaScript', 'SQL'],
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
      backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'Socket.IO',
      ],
      tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Playwright'],
      coreCS: [
        'Data Structures & Algorithms (DSA)',
        'Object-Oriented Programming (OOP)',
        'Problem Solving',
      ],
    },
    achievements: [
      {
        title: 'NavKalpana National Hackathon (2025)',
        role: 'Team Leader',
        badge: '🏆 National Hackathon',
        description:
          'Participated as Team Leader, coordinating the team and contributing to building and presenting a heart health AI solution in a national-level competition.',
      },
      {
        title: 'NPTEL Certification: OOP in Java (2025)',
        role: 'Certified',
        badge: '📜 NPTEL Certified',
        description:
          'Completed the NPTEL course and earned the certificate, strengthening skills in classes, inheritance, polymorphism, abstraction, encapsulation, and exception handling.',
      },
    ],
    projects: [
      {
        name: 'Cardio Shield AI',
        context: 'NavKalpana National Hackathon 2025',
        role: 'Team Leader',
        points: [
          'Led the team as Team Leader and took the project from idea to a working solution for a national-level hackathon.',
          'Built an AI-based solution focused on heart health and presented it to the judges.',
        ],
      },
      {
        name: 'Cravings',
        context: 'Smart Food Delivery Platform · MERN Stack',
        points: [
          'Developed a full-stack food delivery platform with secure JWT authentication, role-based access control, and responsive Admin, Customer, and Rider dashboards.',
          'Implemented Neighborhood Pooling (Group Drops), Macros & Fitness Integration, and Travelability Score for delivery optimization.',
          'Integrated RESTful APIs, MongoDB, Cloudinary, and OTP-based email verification.',
        ],
      },
      {
        name: 'GoChat',
        context: 'Real-Time Messaging · Socket.IO & MERN',
        points: [
          'Developed a real-time chat application using MongoDB, Express.js, React.js, Node.js, and Socket.IO.',
          'Implemented secure JWT authentication, one-to-one messaging, group chats, typing indicators, online/offline status, and file sharing.',
        ],
      },
      {
        name: 'EMI Calculator',
        context: 'Financial Tool · HTML, CSS, JavaScript',
        points: [
          'Built an EMI calculator computing monthly installments from loan amount, interest rate, and tenure.',
          'Implemented the standard EMI formula with instant calculation and clean UI.',
        ],
      },
    ],
  },
};
