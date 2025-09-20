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
      role: "Backend Spring Boot Developer Intern",
      company: "GM-Soft (Half German Half Moroccan Company)",
      period: "3 months (June. 2025 - Aug. 2025)",
      description:
        "Helped with production ready application development using Spring Boot and Microservices architecture, focusing on building scalable backend services and APIs while gaining hands-on experience in enterprise-level software development, cloud deployment, and collaborative team workflows.",
      isLatest: true,
    },
    {
      role: "Backend golang Developer Intern",
      company: "GM-Soft (Half German Half Moroccan Company)",
      period: "2 months (April. 2024 - May. 2024)",
      description:
        "Worked as a Backend Developer Intern at GM-Soft, where I contributed to building efficient backend services using Go (Golang). Gained practical experience in API development, database management, and collaborating within an agile team environment. managing the servers and databases for the applications.",
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
  certificates: [
    {
      title: "IBM Java Developer Professional Certificate",
      issuer: "IBM (International Business Machines Corporation)",
      certificateImage:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LR8A37MI24TD/CERTIFICATE_LANDING_PAGE~LR8A37MI24TD.jpeg",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/specialization/LR8A37MI24TD",
    },
    {
      title: "Meta React Specialization Certificate",
      issuer: "Meta (Facebook)",
      certificateImage:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~H9KM0XQCLYEB/CERTIFICATE_LANDING_PAGE~H9KM0XQCLYEB.jpeg",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/specialization/H9KM0XQCLYEB",
    },
  ],
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
