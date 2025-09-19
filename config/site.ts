export const siteConfig = {
  name: "abhishekg.com.np",
  url: "https://abhishekg.com.np",
  ogImage: "https://abhishekg.com.np/og.jpg",
  description: "Portfolio of Abhishek Ghimire",
  links: {
    shadcn: "https://ui.shadcn.com/",
    telegram: "https://t.me/cypherab01",
    twitter: "https://x.com/cypherab01",
    github: "https://github.com/cypherab01/abhishekg.com.np",
    githubProfile: "https://github.com/admiral-simo",
    resume: "https://www.overleaf.com/read/pwbbqtpthxxr#946f81",
    email: "mailto:aghimire074@gmail.com",
    githubUsername: "admiral-simo",
  },
  bitinfonepal: "https://bitinfonepal.com",

  experiences: [
    {
      role: "Mobile and Web Developer",
      company: "Mantra IT",
      period: "Mar. 2025 - Present",
      description:
        "Currently building responsive web and mobile applications, including an air ticketing platform and E-Grow farming app, using React, Next.js, and React Native at Mantra IT.",
      isLatest: true,
    },
    {
      role: "Next.js Developer Internship",
      company: "Treeleaf Technologies",
      period: "Feb. 2025 - Mar. 2025",
      description:
        "Interned as a Next.js Developer at Treeleaf Technologies, developing and maintaining front-end components for web applications using React and Next.js while mastering modern web development practices.",
      isLatest: false,
    },
    {
      role: "CloudWorker (Part-time)",
      company: "CloudWorker",
      period: "Dec. 2023 - Present",
      description:
        "Working as a part-time CloudWorker at CloudFactory, where I annotate diverse datasets to support AI and machine learning projects while honing my attention to detail and time management skills.",
      isLatest: false,
    },
  ],
  education: [
    {
      title:
        "Bachelor's in Cyber Security · ESTBM · University Sultan Moulay Slimane",
      period: "October. 2025 - June. 2026 [EXPECTED]",
      description:
        "I am pursuing a Bachelor's in IT at Patan Multiple Campus, specializing in programming, web development, and software engineering.",
      isLatest: true,
    },
    {
      title:
        "Diplôme Universitaire de Technologie (DUT) · ESTBM · University Sultan Moulay Slimane",
      period: "October. 2023 - June. 2025",
      description:
        "I completed my higher secondary education in Physical Science from Deep Boarding High School, Butwal.",
      isLatest: false,
    },
    {
      title: "High School · LYCEE HASSAN II BENI MELLAL",
      period: "June. 2023",
      description:
        "I completed my high school education in from LYCEE HASSAN II BENI MELLAL with a focus on Physical Science.",
      isLatest: false,
    },
  ],
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
