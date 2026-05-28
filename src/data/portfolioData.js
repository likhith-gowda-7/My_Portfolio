// ============================================================
// PORTFOLIO DATA — Easy to edit all content from here
// ============================================================

export const PERSONAL = {
  name: "Likhith D M",
  firstName: "Likhith",
  title: "Software Engineer",
  roles: [
    "Software Engineer",
    "DSA Enthusiast",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  tagline:
    "I build scalable systems, solve complex problems, and continuously push my limits through competitive programming.",
  email: "likhithdm20@gmail.com",
  phone: "+91-6360765347",
  location: "Bengaluru, India",
  photo:
    "https://media.base44.com/images/public/user_69e620b432b1b031fe38c197/1ffd6a727_Photo.jpg",
  social: {
    github: "https://github.com/likhith-gowda-7",
    linkedin: "https://www.linkedin.com/in/d-m-likhith/",
    leetcode: "https://leetcode.com/u/D_M_Likhith/",
    codeforces: "https://codeforces.com/profile/D_M_Likhith_7",
    hackerrank: "https://www.hackerrank.com/profile/likhi_7",
    gfg: "https://www.geeksforgeeks.org/profile/likhith7",
  },
};

export const ABOUT = {
  paragraphs: [
    "I'm Likhith — a System Engineer with a singular focus: building production-grade software and solving complex problems at scale.",
    "Currently at ECPL (Flatworld Solutions), I work on high-volume data workflows — writing SQL across SSMS, orchestrating pipelines with Apache Airflow, validating APIs, and automating processes with Python. Every day sharpens my engineering instincts on real production systems.",
    "With 700+ LeetCode problems solved, a strong MERN-stack foundation, and hands-on production experience, I'm actively pursuing SDE and Backend Engineering roles where I can architect, build, and ship software that matters.",
  ],
  highlights: [
    { label: "Current Role", value: "System Engineer" },
    { label: "Goal", value: "SDE / Backend / Full-Stack" },
    { label: "Education", value: "B.E. CSE — CGPA 9.15" },
    { label: "Core Stack", value: "JavaScript, Python, Java" },
  ],
};

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  institution: "Srinivas Institute of Technology, Mangalore",
  duration: "2022 – 2026",
  cgpa: "9.15",
  highlights: [
    "Specialized in Data Structures, Algorithms & System Design",
    "Institute Rank #7 on GeeksForGeeks",
    "Active participant in coding competitions and hackathons",
    "Led JavaScript workshop sessions for peers",
  ],
};

export const SKILLS = [
  {
    category: "Languages",
    icon: "Code",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "Java", level: 72 },
      { name: "SQL", level: 85 },
      { name: "HTML & CSS", level: 88 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      { name: "React.js", level: 75 },
      { name: "Bootstrap 5", level: 80 },
      { name: "Tailwind CSS", level: 68 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 74 },
      { name: "Express.js", level: 72 },
      { name: "REST APIs", level: 82 },
      { name: "GraphQL", level: 60 },
      { name: "Apache Airflow", level: 65 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "Database",
    items: [
      { name: "MySQL / PostgreSQL", level: 85 },
      { name: "MongoDB", level: 72 },
      { name: "Firebase", level: 68 },
      { name: "AWS", level: 62 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", level: 82 },
      { name: "Postman", level: 78 },
      { name: "Azure DevOps", level: 65 },
      { name: "Linux / Unix", level: 68 },
    ],
  },
];

export const EXPERIENCE = [
  {
    id: "ecpl",
    type: "JOB",
    title: "System Engineer – L1 Production Support",
    company: "ECPL (Expert Callers Pvt Ltd) — Client: Flatworld Solutions",
    duration: "Jan 2026 – Present",
    location: "Bengaluru, India",
    description:
      "Working on high-volume data workflows related to loan processing and validation, ensuring data accuracy and system reliability in production environments.",
    achievements: [
      {
        tag: "FIX",
        text: "Wrote SQL queries (SSMS) to validate data, debug issues, and identify inconsistencies in production systems",
      },
      {
        tag: "OPTIMIZE",
        text: "Automated reporting and validation tasks using Python, reducing manual effort and improving efficiency",
      },
      {
        tag: "FIX",
        text: "Troubleshot production issues by analyzing logs, workflows, and API responses, improving incident resolution time",
      },
      {
        tag: "FEAT",
        text: "Worked with Apache Airflow to monitor and manage workflow orchestration pipelines",
      },
      {
        tag: "FEAT",
        text: "Collaborated with cross-functional teams using Azure DevOps and Freshdesk to resolve incidents within SLA",
      },
    ],
    tech: [
      "SQL",
      "SSMS",
      "Python",
      "Apache Airflow",
      "REST APIs",
      "Azure DevOps",
      "Linux",
    ],
  },
  {
    id: "samagra",
    type: "INTERNSHIP",
    title: "Web Development Intern",
    company: "Samagra Technologies, Mangalore",
    duration: "March 2025 – September 2025",
    location: "Mangalore, India",
    description:
      "Wrote clean, modular code across 10+ scalable web modules and collaborated with senior engineers in design reviews, debugging, and code optimizations.",
    achievements: [
      {
        tag: "FEAT",
        text: "Wrote clean, modular code across 10+ scalable web modules using JavaScript and REST APIs",
      },
      {
        tag: "OPTIMIZE",
        text: "Integrated REST APIs and optimized front-end performance, improving loading speed by 25%",
      },
      {
        tag: "FEAT",
        text: "Deployed production builds on AWS/Firebase, ensuring scalability and secure delivery",
      },
      {
        tag: "FIX",
        text: "Used SQL queries to fetch, validate, and analyze production data during issue troubleshooting",
      },
      {
        tag: "OPTIMIZE",
        text: "Improved UI/UX consistency across modules, enhancing overall user engagement",
      },
    ],
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
      "SQL",
      "AWS",
      "Firebase",
    ],
  },
  {
    id: "instructor",
    type: "FREELANCE",
    title: "JavaScript Workshop Instructor",
    company: "Independent",
    duration: "Jan 2025 – Feb 2025",
    location: "Mangalore, India",
    description:
      "Taught JavaScript fundamentals and ES6 concepts through hands-on sessions, mentoring learners to build interactive mini-projects.",
    achievements: [
      {
        tag: "FEAT",
        text: "Taught JavaScript fundamentals, ES6 concepts, DOM and event-driven logic through hands-on sessions",
      },
      {
        tag: "FEAT",
        text: "Mentored learners to write clean, maintainable code and build interactive mini-projects",
      },
      {
        tag: "FEAT",
        text: "Created structured content that improved conceptual and practical understanding",
      },
    ],
    tech: ["JavaScript", "ES6", "DOM", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    id: "delta",
    title: "DELTA",
    subtitle: "Real-Time Chat Application",
    description:
      "A full-stack, production-grade real-time chat application with authentication, room-based messaging, and live presence indicators. Built during internship using the complete MERN stack.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "JWT",
      "Postman",
    ],
    github: "https://github.com/likhith-gowda-7",
    live: "#",
    status: "Live",
    highlight: true,
    codeSnippet: `const io = require('socket.io')(server);\nio.on('connection', (socket) => {\n  socket.on('join_room', (room) => {\n    socket.join(room);\n  });\n  socket.on('send_message', (data) => {\n    io.to(data.room).emit('receive_message', data);\n  });\n});`,
  },
  {
    id: "future1",
    title: "Coming Soon",
    subtitle: "Next Big Project",
    description:
      "Currently in ideation phase. Building something exciting in the backend/systems space.",
    tech: ["TBD"],
    github: "#",
    live: "#",
    status: "In Progress",
    highlight: false,
    codeSnippet: `// 🚀 Building something great...\n// Stay tuned for updates`,
  },
  {
    id: "future2",
    title: "Open Source Contrib",
    subtitle: "Community Work",
    description:
      "Active contributions to open source projects and community tools.",
    tech: ["Various"],
    github: "https://github.com/likhith-gowda-7",
    live: "#",
    status: "Ongoing",
    highlight: false,
    codeSnippet: `// Contributing to the community\n// Open source work in progress`,
  },
];

export const DSA_STATS = {
  leetcode: {
    total: 700,
    easy: 291,
    medium: 348,
    hard: 59,
    rank: "86,518",
    activeDays: 345,
    maxStreak: 112,
    badges: 8,
    profileUrl: "https://leetcode.com/u/D_M_Likhith/",
  },
  platforms: [
    {
      name: "LeetCode",
      handle: "D_M_Likhith",
      stat: "700+ Problems Solved",
      subStat: "Rank #86,518",
      detail: "345 active days · Max streak 112",
      color: "#F97316",
      url: "https://leetcode.com/u/D_M_Likhith/",
      icon: "LC",
    },
    {
      name: "Codeforces",
      handle: "D_M_Likhith_7",
      stat: "19 Problems Solved",
      subStat: "Unrated",
      detail: "11 days max streak · Active",
      color: "#3B82F6",
      url: "https://codeforces.com/profile/D_M_Likhith_7",
      icon: "CF",
    },
    {
      name: "HackerRank",
      handle: "likhi_7",
      stat: "5⭐ Coder",
      subStat: "Certified",
      detail: "Python (Basic) · Problem Solving (Basic)",
      color: "#10B981",
      url: "https://www.hackerrank.com/profile/likhi_7",
      icon: "HR",
    },
    {
      name: "GeeksForGeeks",
      handle: "likhith7",
      stat: "37 Problems Solved",
      subStat: "Score: 164",
      detail: "Institute Rank #7 · 2 Medium + 5 Hard",
      color: "#059669",
      url: "https://www.geeksforgeeks.org/profile/likhith7",
      icon: "GFG",
    },
  ],
  topicsCompleted: [
    // Fundamentals
    "Arrays",
    "Strings",
    "Sorting",
    "Searching",
    // Data Structures
    "Linked List",
    "Stacks",
    "Queues",
    "Hash Table",
    "Trees",
    "Binary Trees",
    "BST",
    "Heaps",
    "Trie",
    // Algorithms
    "Binary Search",
    "Two Pointers",
    "Sliding Window",
    "Recursion",
    "Backtracking",
    "Divide & Conquer",
    // Graph
    "Graphs",
    "BFS",
    "DFS",
    "Topological Sort",
    "Dijkstra's Algorithm",
    "Minimum Spanning Tree",
    // DP
    "Dynamic Programming",
    "0/1 Knapsack",
    // Advanced
    "Greedy",
    "Bit Manipulation",
  ],
  radarData: [
    { subject: "DSA", score: 92 },
    { subject: "SQL", score: 85 },
    { subject: "Backend", score: 74 },
    { subject: "Frontend", score: 70 },
    { subject: "Python", score: 90 },
    { subject: "Java", score: 72 },
  ],
};

export const STATS = [
  { label: "LeetCode Problems", value: 700, suffix: "+" },
  { label: "DSA Topics Mastered", value: 28, suffix: "" },
  { label: "Years of DSA", value: 1, suffix: ".5+" },
  { label: "Active Coding Days", value: 345, suffix: "" },
];

export const NAV_ITEMS = [
  { label: "Home", href: "#hero", path: "root/hero" },
  { label: "About", href: "#about", path: "root/about" },
  { label: "DSA", href: "#dsa", path: "root/dsa_hub" },
  { label: "Experience", href: "#experience", path: "root/experience" },
  { label: "Projects", href: "#projects", path: "root/projects" },
  { label: "Skills", href: "#skills", path: "root/skills" },
  { label: "Contact", href: "#contact", path: "root/contact" },
];
