// CareerCompass - 4 Core Careers Data
window.CAREER_COMPASS_CAREERS = [
  {
    id: "ai-ml",
    title: "AI/ML Engineer",
    badge: "Fastest Growing",
    color: "#6366f1",
    lightColor: "#e0e7ff",
    tagline: "Build neural architectures, predictive systems, and intelligent applications.",
    description: "AI/ML Engineers bridge research and scalable engineering. They design, train, fine-tune, and deploy machine learning and deep learning models into production systems.",
    avgSalary: "$110,000 / ₹14-20 LPA",
    growthRate: "+38% YoY",
    difficulty: "Advanced",
    primaryInterests: ["Artificial Intelligence & ML", "Data Analysis & BI", "Algorithms & Problem Solving"],
    dayInLife: "Data preprocessing, experimenting with model architectures in PyTorch, tuning hyperparameters, building FastAPI inference endpoints, and monitoring model drift.",
    requiredSkills: [
      { name: "Python", category: "Language", priority: "Critical", description: "Primary language for ML frameworks, scripting, and model inference pipelines." },
      { name: "Pandas & NumPy", category: "Data Processing", priority: "Critical", description: "Vectorized array manipulation, exploratory data analysis, and tensor preparation." },
      { name: "Machine Learning", category: "Algorithms", priority: "Critical", description: "Supervised/unsupervised algorithms, evaluation metrics (ROC-AUC, F1), and feature engineering." },
      { name: "Deep Learning (PyTorch/TensorFlow)", category: "Deep Tech", priority: "High", description: "Neural network layers, backpropagation, transformers, and transfer learning." },
      { name: "SQL", category: "Databases", priority: "High", description: "Extracting structured training datasets and aggregations from data warehouses." },
      { name: "Statistics", category: "Mathematics", priority: "High", description: "Probability distributions, hypothesis testing, and statistical significance." },
      { name: "Git & GitHub", category: "Tooling", priority: "Medium", description: "Collaborative code versioning and model experiment tracking." },
      { name: "Docker", category: "Deployment", priority: "Medium", description: "Containerizing model serving services for cloud reproducibility." }
    ],
    starterTips: [
      "Focus on linear algebra and multivariable calculus alongside Python.",
      "Reproduce 2-3 research papers or Kaggle competition winners on GitHub.",
      "Learn to deploy your model as a clean API using FastAPI or Flask."
    ]
  },
  {
    id: "software-dev",
    title: "Software Developer",
    badge: "Most In-Demand",
    color: "#0ea5e9",
    lightColor: "#e0f2fe",
    tagline: "Architect scalable backend services, robust APIs, and enterprise systems.",
    description: "Software Developers design, implement, test, and maintain resilient software platforms, microservices, and desktop or cloud applications.",
    avgSalary: "$95,000 / ₹10-18 LPA",
    growthRate: "+24% YoY",
    difficulty: "Intermediate",
    primaryInterests: ["Software Systems & Architecture", "Algorithms & Problem Solving", "Cloud & DevOps"],
    dayInLife: "Implementing features in microservices, writing unit/integration tests, designing database schemas, debugging concurrency issues, and reviewing pull requests.",
    requiredSkills: [
      { name: "Java", category: "Language", priority: "Critical", altName: "C++", description: "Object-oriented programming, concurrency, memory management, and enterprise frameworks." },
      { name: "Algorithms & Problem Solving", category: "Core", priority: "Critical", description: "Data structures (trees, graphs, DP), asymptotic complexity (Big-O), and coding interviews." },
      { name: "SQL", category: "Databases", priority: "Critical", description: "Relational database modeling, indexing, joins, ACID transactions, and query optimization." },
      { name: "REST APIs", category: "Backend", priority: "High", description: "HTTP semantics, REST architectural constraints, authentication (JWT), and API contracts." },
      { name: "Git & GitHub", category: "Tooling", priority: "High", description: "Branching strategies, resolving merge conflicts, and continuous integration." },
      { name: "Node.js", category: "Runtime", priority: "Medium", altName: "Python", description: "Server-side asynchronous runtime, event loops, and microservice backends." },
      { name: "Docker", category: "DevOps", priority: "Medium", description: "Container lifecycle, dockerfiles, and local orchestration." }
    ],
    starterTips: [
      "Master LeetCode Mediums across arrays, hash maps, trees, and dynamic programming.",
      "Build a complete full-stack CRUD application with relational schema migrations.",
      "Understand SOLID principles and design patterns like Factory and Observer."
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    badge: "High Business Impact",
    color: "#10b981",
    lightColor: "#d1fae5",
    tagline: "Turn raw datasets into executive insights, dashboards, and growth metrics.",
    description: "Data Analysts examine data sets to identify trends, create visual dashboards, and produce strategic reports that guide business decisions across organizations.",
    avgSalary: "$82,000 / ₹8-14 LPA",
    growthRate: "+28% YoY",
    difficulty: "Beginner-Friendly",
    primaryInterests: ["Data Analysis & BI", "UI/UX & Frontend Design", "Database Engineering"],
    dayInLife: "Writing complex SQL queries, building executive dashboards in Tableau/Power BI, cleaning messy CSV exports in Python/Excel, and presenting findings to stakeholders.",
    requiredSkills: [
      { name: "SQL", category: "Databases", priority: "Critical", description: "Window functions, Common Table Expressions (CTEs), GROUP BY, and data warehousing queries." },
      { name: "Excel (Advanced)", category: "Business Tools", priority: "Critical", description: "Pivot tables, XLOOKUP, power queries, and rapid financial/operational modeling." },
      { name: "Tableau / Power BI", category: "BI Tools", priority: "Critical", description: "Interactive executive dashboards, calculated fields, and storytelling with metrics." },
      { name: "Python", category: "Language", priority: "High", description: "Data manipulation scripts, automated reporting, and statistical testing." },
      { name: "Pandas & NumPy", category: "Data Processing", priority: "High", description: "Cleaning missing values, date-time parsing, and cohort analysis." },
      { name: "Data Visualization", category: "Analytics", priority: "High", description: "Chart selection principles, Seaborn, Matplotlib, and UX for data consumers." },
      { name: "Statistics", category: "Mathematics", priority: "Medium", description: "A/B testing, variance, correlation vs causation, and standard deviations." }
    ],
    starterTips: [
      "Focus heavily on SQL window functions and complex aggregations.",
      "Publish 2 interactive dashboards on Tableau Public or Power BI Service.",
      "Practice summarizing data insights in 3 bullet points for non-technical stakeholders."
    ]
  },
  {
    id: "web-dev",
    title: "Web Developer",
    badge: "Fastest to Employment",
    color: "#f59e0b",
    lightColor: "#fef3c7",
    tagline: "Craft modern, interactive, responsive web applications and user interfaces.",
    description: "Web Developers build responsive frontend interfaces and seamless backend integrations. They ensure high performance, accessibility, and delightful user experiences across all devices.",
    avgSalary: "$88,000 / ₹8-16 LPA",
    growthRate: "+22% YoY",
    difficulty: "Beginner to Intermediate",
    primaryInterests: ["Web Development", "UI/UX & Frontend Design", "Software Systems & Architecture"],
    dayInLife: "Developing reusable UI components in React, integrating GraphQL or REST endpoints, optimizing Core Web Vitals, styling responsive layouts, and cross-browser testing.",
    requiredSkills: [
      { name: "HTML5 & CSS3", category: "Frontend Core", priority: "Critical", description: "Semantic markup, CSS Grid, Flexbox, responsive typography, and accessibility." },
      { name: "JavaScript", category: "Language", priority: "Critical", description: "Async/await, DOM manipulation, ES6+ features, closures, and event handling." },
      { name: "React", category: "Framework", priority: "Critical", description: "Components, custom hooks, state management, virtual DOM, and component lifecycles." },
      { name: "Tailwind CSS", category: "Styling", priority: "High", description: "Utility-first CSS styling, mobile-first layouts, and design system tokens." },
      { name: "Git & GitHub", category: "Tooling", priority: "High", description: "Version control, feature branching, and publishing sites via GitHub Pages / Vercel." },
      { name: "Node.js", category: "Backend", priority: "Medium", description: "Basic backend APIs, npm ecosystem, and server environment setups." },
      { name: "REST APIs", category: "Integration", priority: "High", description: "Consuming JSON APIs, error handling, loading states, and client-side caching." }
    ],
    starterTips: [
      "Master vanilla JavaScript fundamentals before jumping into frameworks.",
      "Build 3 polished, mobile-responsive web apps with public live demos.",
      "Deploy your projects to Vercel/Netlify with custom domains and GitHub links."
    ]
  }
];
