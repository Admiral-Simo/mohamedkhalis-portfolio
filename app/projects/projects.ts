export const projects = [
  {
    title: "Crypto Visualizer",
    slug: "crypto-visualizer",
    tagline:
      "An interactive dashboard for tracking and visualizing real-time cryptocurrency data.",
    overview:
      "Crypto Visualizer is a web application that provides users with up-to-the-minute cryptocurrency information through an intuitive and dynamic interface. It leverages public crypto APIs to fetch and display data in easily digestible formats, such as interactive charts and sortable tables. The goal is to help both new and experienced crypto enthusiasts monitor market trends, track their favorite coins, and analyze historical performance.",
    features: [
      "Real-time price tracking for hundreds of cryptocurrencies.",
      "Interactive and customizable charts to visualize price history.",
      "Search and filter functionality to easily find specific coins.",
      "Responsive design for a seamless experience on both desktop and mobile devices.",
      "Detailed view for each coin, including market cap, volume, and historical data.",
    ],
    techStack: [
      "React.js",
      "CoinGecko API",
      "Tailwind CSS",
      "Chart.js",
      "Axios",
    ],
    challenges: [
      "Managing and displaying real-time data streams without impacting performance.",
      "Designing responsive and interactive charts that are both informative and user-friendly.",
      "Handling API rate limits and managing asynchronous data fetching efficiently.",
      "Ensuring data accuracy and providing reliable information to users.",
    ],
    learnings: [
      "Gained significant experience with third-party APIs, including handling asynchronous requests and error management.",
      "Mastered data visualization techniques using charting libraries like Chart.js.",
      "Improved skills in state management within a React application to handle dynamic data.",
      "Developed a deeper understanding of frontend performance optimization for data-heavy applications.",
    ],
    feedback: false,
    links: {
      live: "https://crypto-app-tau-one.vercel.app/",
      github: "https://github.com/admiral-simo/crypto-app",
    },
  },
];
