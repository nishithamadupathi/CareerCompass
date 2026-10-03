// CareerCompass - 12-Week Structured Roadmaps by Career
window.CAREER_COMPASS_ROADMAPS = {
  "ai-ml": {
    stages: [
      {
        id: 1,
        name: "Stage 1: Mathematical Foundations & Python for Data",
        weeks: "Weeks 1 - 3",
        badge: "Foundations",
        description: "Establish rigorous Python scripting and vector mathematical fundamentals."
      },
      {
        id: 2,
        name: "Stage 2: Classical Machine Learning & Feature Engineering",
        weeks: "Weeks 4 - 6",
        badge: "Core ML",
        description: "Train, tune, and evaluate classical ML algorithms with scikit-learn."
      },
      {
        id: 3,
        name: "Stage 3: Deep Learning, Neural Nets & Model Serving",
        weeks: "Weeks 7 - 9",
        badge: "Deep Tech",
        description: "Implement neural architectures in PyTorch and package inference APIs."
      },
      {
        id: 4,
        name: "Stage 4: Portfolio Capstone & Technical Interviews",
        weeks: "Weeks 10 - 12",
        badge: "Career Launch",
        description: "Deploy production capstone, optimize GitHub profile, and practice ML engineering questions."
      }
    ],
    weeks: [
      {
        week: 1,
        stage: 1,
        title: "Python Data Environment & NumPy Mastery",
        focus: "Vectorization, broadcasting, array slicing, and memory layouts.",
        tasks: [
          "Set up Anaconda / UV virtual environment with JupyterLab",
          "Master NumPy matrix multiplication, linear algebra solvers, and boolean masking",
          "Implement basic vector operations from scratch without loops"
        ],
        deliverable: "Custom linear regression implementation using only NumPy matrix algebra"
      },
      {
        week: 2,
        stage: 1,
        title: "Pandas Data Wrangling & SQL Extraction",
        focus: "Handling messy datasets, window aggregations, and merge strategies.",
        tasks: [
          "Learn Pandas groupby, pivot tables, multi-indexing, and missing value imputation",
          "Write SQL CTEs, window functions, and extract clean datasets for ML pipelines",
          "Perform Exploratory Data Analysis (EDA) on a 100k-row public Kaggle dataset"
        ],
        deliverable: "Automated data cleaning and EDA reporting pipeline notebook"
      },
      {
        week: 3,
        stage: 1,
        title: "Probability, Statistics & Hypothesis Testing",
        focus: "Distributions, Central Limit Theorem, p-values, and correlation metrics.",
        tasks: [
          "Study normal, binomial, and Poisson distributions with SciPy",
          "Understand p-values, confidence intervals, and parametric vs non-parametric tests",
          "Calculate Pearson/Spearman correlation matrices and detect multicollinearity"
        ],
        deliverable: "Statistical hypothesis testing report analyzing customer churn patterns"
      },
      {
        week: 4,
        stage: 2,
        title: "Supervised Learning Algorithms (Scikit-Learn)",
        focus: "Linear models, logistic regression, decision trees, and validation strategies.",
        tasks: [
          "Implement logistic regression, SVMs, and decision tree classifiers",
          "Learn cross-validation, train-test splits, and k-fold evaluation",
          "Master precision, recall, F1-score, and ROC-AUC curves"
        ],
        deliverable: "Predictive model for loan default risk with ROC-AUC >= 0.85"
      },
      {
        week: 5,
        stage: 2,
        title: "Ensemble Methods & Hyperparameter Tuning",
        focus: "Random Forests, XGBoost, LightGBM, and Bayesian optimization.",
        tasks: [
          "Deep dive into bagging vs boosting principles",
          "Train and compare Random Forests, XGBoost, and CatBoost models",
          "Tune hyperparameters using Optuna and GridSearchCV pipelines"
        ],
        deliverable: "Kaggle competition notebook submission ranking in the top 25%"
      },
      {
        week: 6,
        stage: 2,
        title: "Unsupervised Learning & Feature Engineering Pipelines",
        focus: "Clustering, PCA dimensionality reduction, and automated sklearn pipelines.",
        tasks: [
          "Implement K-Means clustering and DBSCAN for customer segmentation",
          "Apply PCA to high-dimensional datasets while preserving 95% variance",
          "Build robust ColumnTransformer and Pipeline objects to eliminate data leakage"
        ],
        deliverable: "End-to-end scikit-learn pipeline transforming raw data to predictions"
      },
      {
        week: 7,
        stage: 3,
        title: "PyTorch Fundamentals & Custom Tensors",
        focus: "Autograd, tensor operations, custom datasets, and training loops.",
        tasks: [
          "Understand autograd computation graphs and backward propagation",
          "Build custom PyTorch Dataset and DataLoader classes with batching",
          "Write modular training loops with validation loss checks and early stopping"
        ],
        deliverable: "Multilayer Perceptron (MLP) trained on Fashion-MNIST with 88%+ accuracy"
      },
      {
        week: 8,
        stage: 3,
        title: "Deep Learning Architectures (CNNs & Transfer Learning)",
        focus: "Convolutions, pooling, residual networks, and fine-tuning pretrained weights.",
        tasks: [
          "Implement 2D convolutional layers, batch normalization, and dropout",
          "Fine-tune ResNet-50 / EfficientNet using torchvision models",
          "Inspect feature maps and class activation heatmaps (Grad-CAM)"
        ],
        deliverable: "Image classifier web demo detecting plant diseases via transfer learning"
      },
      {
        week: 9,
        stage: 3,
        title: "Model Deployment: FastAPI & Docker Containers",
        focus: "Serving low-latency inference endpoints and containerizing workloads.",
        tasks: [
          "Build an async FastAPI server accepting JSON payloads and returning predictions",
          "Implement request validation via Pydantic and batch prediction endpoints",
          "Write multi-stage Dockerfile and run containerized model locally"
        ],
        deliverable: "Dockerized REST API serving predictions under 50ms latency"
      },
      {
        week: 10,
        stage: 4,
        title: "Capstone Production Project & GitHub Polish",
        focus: "Full end-to-end ML project with documentation, monitoring, and live link.",
        tasks: [
          "Finalize production capstone project with clean architecture and tests",
          "Write comprehensive README with architecture diagram, benchmarks, and quickstart",
          "Host demo on Hugging Face Spaces or Render with automated GitHub Actions"
        ],
        deliverable: "Public GitHub repository with 100% test coverage and live demo link"
      },
      {
        week: 11,
        stage: 4,
        title: "ML System Design & Technical Interview Prep",
        focus: "Feature stores, streaming vs batch inference, and model drift.",
        tasks: [
          "Practice ML system design questions: Recommendation Systems, Search Ranking",
          "Study data drift detection, Prometheus metrics, and model rollback strategies",
          "Review 50 top ML conceptual interview questions (bias-variance, loss functions)"
        ],
        deliverable: "Architecture whitepaper for a real-time personalized recommendation engine"
      },
      {
        week: 12,
        stage: 4,
        title: "Resume Refinement, Mock Interviews & Job Applications",
        focus: "Crafting ATS-friendly resume, LinkedIn presence, and interview execution.",
        tasks: [
          "Tailor resume bullet points using Google XYZ format (Accomplished X, measured by Y, by doing Z)",
          "Complete 2 mock technical interviews with peers or mentors",
          "Apply to 15 targeted ML internships / junior engineer openings"
        ],
        deliverable: "Polished ATS-ready resume and tracked application spreadsheet"
      }
    ]
  },
  "software-dev": {
    stages: [
      {
        id: 1,
        name: "Stage 1: Core CS Foundations & Algorithms",
        weeks: "Weeks 1 - 3",
        badge: "Foundations",
        description: "Master essential data structures, complexity analysis, and Git workflows."
      },
      {
        id: 2,
        name: "Stage 2: OOP, Relational Databases & REST Architecture",
        weeks: "Weeks 4 - 6",
        badge: "Backend Core",
        description: "Build robust object-oriented backend services and relational schemas."
      },
      {
        id: 3,
        name: "Stage 3: Microservices, Caching & Scalability",
        weeks: "Weeks 7 - 9",
        badge: "System Design",
        description: "Implement distributed patterns, Redis caching, and asynchronous workers."
      },
      {
        id: 4,
        name: "Stage 4: System Design Interviews & Portfolio Polish",
        weeks: "Weeks 10 - 12",
        badge: "Career Launch",
        description: "Master LeetCode patterns, system design fundamentals, and mock interviews."
      }
    ],
    weeks: [
      {
        week: 1,
        stage: 1,
        title: "Advanced Data Structures & Big-O Notation",
        focus: "Arrays, Linked Lists, Hash Maps, and Asymptotic Complexity.",
        tasks: [
          "Solve 15 essential LeetCode Easy/Medium problems in Java/C++/Python",
          "Understand memory locality, time vs space trade-offs, and worst-case bounds",
          "Implement dynamic arrays and custom hash tables from scratch"
        ],
        deliverable: "Clean repository of 20 tested data structure implementations"
      },
      {
        week: 2,
        stage: 1,
        title: "Trees, Graphs & Search Algorithms",
        focus: "Binary Search Trees, BFS, DFS, and topological sorting.",
        tasks: [
          "Master tree traversals (inorder, preorder, postorder, level-order)",
          "Implement graph representations (adjacency lists) and cycle detection",
          "Solve 10 graph & tree interview challenges"
        ],
        deliverable: "Shortest path finding simulation using Dijkstra and BFS"
      },
      {
        week: 3,
        stage: 1,
        title: "Git Collaboration, CI/CD & Unit Testing",
        focus: "Feature branch workflows, pull request reviews, and JUnit / PyTest.",
        tasks: [
          "Master interactive rebasing, cherry-picking, and conflict resolution",
          "Write automated unit and integration tests with 85%+ code coverage",
          "Configure GitHub Actions workflow for linting and test execution"
        ],
        deliverable: "Automated CI pipeline testing a robust mathematical library"
      },
      {
        week: 4,
        stage: 2,
        title: "SOLID Principles & Enterprise Object-Oriented Design",
        focus: "Design patterns: Factory, Singleton, Strategy, Observer, and Dependency Injection.",
        tasks: [
          "Refactor monolithic code using Single Responsibility and Open-Closed principles",
          "Implement the Strategy pattern for pluggable payment processing",
          "Use dependency injection containers for loose coupling"
        ],
        deliverable: "Extensible CLI order processing system adhering strictly to SOLID"
      },
      {
        week: 5,
        stage: 2,
        title: "Relational Database Modeling & ACID Transactions",
        focus: "PostgreSQL, indexing strategies, query execution plans, and normalization.",
        tasks: [
          "Design 3NF relational schemas for an e-commerce platform",
          "Analyze queries using EXPLAIN ANALYZE and add composite B-Tree indexes",
          "Implement transactional transfers with proper isolation levels (Serializable/Read Committed)"
        ],
        deliverable: "High-performance PostgreSQL schema with optimized queries under 5ms"
      },
      {
        week: 6,
        stage: 2,
        title: "RESTful API Architecture & Authentication",
        focus: "HTTP status codes, idempotency, JWT auth, and middleware.",
        tasks: [
          "Design standard REST endpoints following OpenAPI / Swagger specifications",
          "Implement JWT authentication with refresh token rotation and bcrypt password hashing",
          "Add rate limiting and input validation middleware"
        ],
        deliverable: "Secure authentication & user management REST API"
      },
      {
        week: 7,
        stage: 3,
        title: "Caching Strategies & Performance Optimization",
        focus: "Redis in-memory caching, Cache-Aside pattern, and cache invalidation.",
        tasks: [
          "Implement Redis cache-aside pattern for heavy database read queries",
          "Set up Redis TTL and LRU eviction policies",
          "Benchmark latency reduction using Apache Bench or k6"
        ],
        deliverable: "Benchmarked API demonstrating 10x throughput improvement with Redis"
      },
      {
        week: 8,
        stage: 3,
        title: "Asynchronous Task Queues & Message Brokers",
        focus: "Decoupling services with RabbitMQ / Redis Queues / Celery.",
        tasks: [
          "Build an asynchronous email / report generation worker queue",
          "Handle dead-letter queues, message retries, and idempotency keys",
          "Monitor queue consumer health and queue depth"
        ],
        deliverable: "Distributed background worker processing pdf invoice generation"
      },
      {
        week: 9,
        stage: 3,
        title: "Docker Containerization & Multi-Service Compose",
        focus: "Containerizing backend services, database, and cache for reproducible local dev.",
        tasks: [
          "Create multi-stage Docker builds to reduce image size < 100MB",
          "Write docker-compose.yml orchestrating API, PostgreSQL, and Redis",
          "Configure health checks and volume persistence"
        ],
        deliverable: "One-command reproducible full-stack docker-compose environment"
      },
      {
        week: 10,
        stage: 4,
        title: "System Design Fundamentals for Mid-Level Roles",
        focus: "Horizontal scaling, load balancers, database sharding, and CAP theorem.",
        tasks: [
          "Study architectural blueprints: TinyURL, Rate Limiter, and Notification System",
          "Understand sticky sessions, round-robin load balancing, and read replicas",
          "Draft end-to-end architecture diagrams using Mermaid / Draw.io"
        ],
        deliverable: "Comprehensive System Design document for a URL shortening service"
      },
      {
        week: 11,
        stage: 4,
        title: "Coding Interview Patterns (Blind 75 & Grind 75)",
        focus: "Sliding window, two pointers, binary search, and dynamic programming.",
        tasks: [
          "Solve 25 classic algorithmic interview questions under 30-minute timers",
          "Practice vocalizing thought process and edge-case validation",
          "Review time and space complexity explanations"
        ],
        deliverable: "Personalized cheat sheet of 14 key algorithmic patterns"
      },
      {
        week: 12,
        stage: 4,
        title: "Resume Review, Open Source Contributions & Placement Drive",
        focus: "Resume refinement, mock interview feedback, and targeted outreach.",
        tasks: [
          "Contribute a bug fix or documentation improvement to an open-source repo",
          "Conduct 2 behavioral mock interviews focusing on STAR method",
          "Apply to 20 engineering roles and reach out to university alumni"
        ],
        deliverable: "Published GitHub portfolio, verified PR merge, and finalized resume"
      }
    ]
  },
  "data-analyst": {
    stages: [
      {
        id: 1,
        name: "Stage 1: Spreadsheet Mastery & Business SQL",
        weeks: "Weeks 1 - 3",
        badge: "Foundations",
        description: "Transform raw transactional tables into clean business summaries."
      },
      {
        id: 2,
        name: "Stage 2: Python for Data Analysis & Exploratory Visualization",
        weeks: "Weeks 4 - 6",
        badge: "Data Processing",
        description: "Automate cleaning pipelines and extract statistical insights."
      },
      {
        id: 3,
        name: "Stage 3: BI Dashboards & Executive Storytelling",
        weeks: "Weeks 7 - 9",
        badge: "Visual Analytics",
        description: "Build interactive Tableau / Power BI dashboards for leadership."
      },
      {
        id: 4,
        name: "Stage 4: Business Case Studies & Portfolio Presentation",
        weeks: "Weeks 10 - 12",
        badge: "Career Launch",
        description: "Publish 3 end-to-end case studies and prepare business analyst interviews."
      }
    ],
    weeks: [
      {
        week: 1,
        stage: 1,
        title: "Advanced Excel / Google Sheets for Analytics",
        focus: "XLOOKUP, INDEX/MATCH, dynamic pivot tables, and conditional logic.",
        tasks: [
          "Master multi-criteria lookups with XLOOKUP and SUMIFS",
          "Build interactive pivot tables with calculated fields and timeline slicers",
          "Clean unstructured string records with text manipulation formulas"
        ],
        deliverable: "Dynamic financial & sales KPI dashboard in Excel"
      },
      {
        week: 2,
        stage: 1,
        title: "SQL Fundamentals & Relational Querying",
        focus: "SELECT statements, INNER/LEFT joins, aggregation, and filtering.",
        tasks: [
          "Write multi-table relational joins to combine customers, orders, and products",
          "Use GROUP BY and HAVING to isolate top-performing revenue drivers",
          "Handle NULL values and timestamp timezone transformations"
        ],
        deliverable: "Customer transaction SQL audit script identifying revenue leakage"
      },
      {
        week: 3,
        stage: 1,
        title: "Advanced SQL: Window Functions & Subqueries",
        focus: "ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG, and running totals.",
        tasks: [
          "Calculate month-over-month (MoM) revenue growth using LAG window functions",
          "Compute 7-day rolling moving averages and cumulative customer lifetime value",
          "Structure multi-stage queries using readable Common Table Expressions (CTEs)"
        ],
        deliverable: "SaaS cohort retention SQL analysis script"
      },
      {
        week: 4,
        stage: 2,
        title: "Python & Pandas for Data Cleaning",
        focus: "Handling missing data, duplicate records, and datetime operations.",
        tasks: [
          "Load heterogeneous datasets (CSV, JSON, SQL dumps) into Pandas DataFrames",
          "Detect and impute missing values using domain-appropriate strategies",
          "Perform vectorized string operations and categorical binning"
        ],
        deliverable: "Automated Python cleaning script processing messy real-world survey data"
      },
      {
        week: 5,
        stage: 2,
        title: "Exploratory Data Analysis (EDA) & Seaborn Visualizations",
        focus: "Distributions, box plots, correlation heatmaps, and outlier detection.",
        tasks: [
          "Generate statistical summaries and IQR-based outlier boundaries",
          "Create publication-quality distribution charts and categorical plots with Seaborn",
          "Interpret skewness, kurtosis, and bimodal patterns"
        ],
        deliverable: "Comprehensive EDA Jupyter notebook analyzing retail customer habits"
      },
      {
        week: 6,
        stage: 2,
        title: "Applied Business Statistics & A/B Testing",
        focus: "Statistical significance, sample sizing, p-values, and conversion metrics.",
        tasks: [
          "Calculate minimum required sample sizes for marketing A/B tests",
          "Run two-sample t-tests and Chi-square independence tests in SciPy",
          "Formulate actionable recommendations based on confidence intervals"
        ],
        deliverable: "A/B test evaluation report for an e-commerce checkout redesign"
      },
      {
        week: 7,
        stage: 3,
        title: "Tableau / Power BI Fundamentals & Data Modeling",
        focus: "Star schema relationships, calculated measures, and data connectors.",
        tasks: [
          "Connect BI tools to PostgreSQL / Excel data sources and build data models",
          "Write DAX measures (Total Sales, YTD Growth, Margin %) or Tableau LOD expressions",
          "Design consistent color palettes and visual hierarchy for clarity"
        ],
        deliverable: "Operational KPI dashboard with interactive drill-down filters"
      },
      {
        week: 8,
        stage: 3,
        title: "Executive Dashboards & Storytelling with Data",
        focus: "Crafting intuitive narratives for C-suite and product managers.",
        tasks: [
          "Structure dashboards answering the 'So What?' question in the first 5 seconds",
          "Implement bookmark navigation, parameter controls, and responsive layouts",
          "Draft concise executive summaries accompanying data visuals"
        ],
        deliverable: "Published Tableau Public / Power BI interactive portfolio dashboard"
      },
      {
        week: 9,
        stage: 3,
        title: "Automating Data Workflows & Scheduled Reports",
        focus: "Python cron jobs, email automation, and database ingestion.",
        tasks: [
          "Write a Python script that pulls new weekly metrics and updates Google Sheets / DB",
          "Generate automated PDF reports using Matplotlib and Jinja templates",
          "Schedule local automated pipeline with error notification logging"
        ],
        deliverable: "Weekly automated metric dispatcher running on a scheduled trigger"
      },
      {
        week: 10,
        stage: 4,
        title: "End-to-End Business Case Study Portfolio",
        focus: "Solving a complete business problem from raw data to recommendation.",
        tasks: [
          "Select a high-impact domain: Customer Churn, Inventory Optimization, or Marketing ROI",
          "Synthesize SQL extraction, Python cleaning, and Tableau visuals into one cohesive deck",
          "Record a 3-minute video walkthrough explaining findings clearly"
        ],
        deliverable: "Complete end-to-end case study hosted on GitHub / Notion portfolio"
      },
      {
        week: 11,
        stage: 4,
        title: "SQL & Analytics Interview Challenge Sprints",
        focus: "Live SQL whiteboard problems and business case scenarios.",
        tasks: [
          "Solve 30 advanced SQL interview problems on StrataScratch / LeetCode",
          "Practice product sense questions: 'Metric X dropped 10% yesterday, how do you diagnose?'",
          "Conduct mock analytics interview with focus on metric decomposition"
        ],
        deliverable: "Documented framework for diagnosing unexpected metric drops"
      },
      {
        week: 12,
        stage: 4,
        title: "Portfolio Website, Resume Finalization & Applications",
        focus: "Targeted applications for Data Analyst & Business Intelligence Associate roles.",
        tasks: [
          "Build clean portfolio landing page linking Tableau Public and GitHub",
          "Quantify resume bullets with percentage improvements and dollar values",
          "Submit 20 customized applications and engage on LinkedIn analytics groups"
        ],
        deliverable: "Live portfolio site, polished resume, and active application pipeline"
      }
    ]
  },
  "web-dev": {
    stages: [
      {
        id: 1,
        name: "Stage 1: Modern HTML5, Responsive CSS3 & JavaScript Core",
        weeks: "Weeks 1 - 3",
        badge: "Foundations",
        description: "Master modern layout, semantic markup, and asynchronous JavaScript."
      },
      {
        id: 2,
        name: "Stage 2: Modern React, State Management & Tailwind CSS",
        weeks: "Weeks 4 - 6",
        badge: "Frontend Frameworks",
        description: "Build reactive, accessible component systems with custom hooks."
      },
      {
        id: 3,
        name: "Stage 3: Full-Stack APIs, Databases & Authentication",
        weeks: "Weeks 7 - 9",
        badge: "Full Stack",
        description: "Integrate Node.js backend services, databases, and authentication."
      },
      {
        id: 4,
        name: "Stage 4: Performance, Portfolio Polish & Frontend Interviews",
        weeks: "Weeks 10 - 12",
        badge: "Career Launch",
        description: "Optimize web vitals, build responsive showcase apps, and practice technical rounds."
      }
    ],
    weeks: [
      {
        week: 1,
        stage: 1,
        title: "Semantic HTML5, CSS Grid & Modern Flexbox",
        focus: "Responsive layouts, mobile-first design, and accessibility (a11y).",
        tasks: [
          "Build accessible page layouts using semantic HTML5 elements (<main>, <nav>, <section>)",
          "Master CSS Grid for 2D layouts and Flexbox for component alignment",
          "Implement modern responsive typography with clamp() and CSS custom properties"
        ],
        deliverable: "Pixel-perfect, fully responsive multi-page marketing landing page"
      },
      {
        week: 2,
        stage: 1,
        title: "JavaScript ES6+ Deep Dive & DOM APIs",
        focus: "Arrow functions, destructuring, promises, async/await, and event delegation.",
        tasks: [
          "Understand closures, execution contexts, and the JavaScript event loop",
          "Build interactive DOM controls with event delegation and keyboard navigation",
          "Fetch third-party JSON data asynchronously with error handling and loading skeletons"
        ],
        deliverable: "Interactive GitHub user search & repository explorer app"
      },
      {
        week: 3,
        stage: 1,
        title: "Git, NPM Tooling & Modern Styling with Tailwind CSS",
        focus: "Version control, Vite development servers, and utility-first CSS styling.",
        tasks: [
          "Master Git branches, pull requests, and semantic commit messages",
          "Set up modern build tooling using Vite and PostCSS",
          "Build responsive UI widgets using Tailwind utility classes and dark mode tokens"
        ],
        deliverable: "Responsive dashboard UI with dark/light mode toggle built with Tailwind"
      },
      {
        week: 4,
        stage: 2,
        title: "React Fundamentals: JSX, Props, State & Events",
        focus: "Declarative UI rendering, component hierarchy, and unidirectional data flow.",
        tasks: [
          "Decompose mockups into reusable, atomic React components",
          "Manage local state with useState and handle form inputs seamlessly",
          "Render dynamic lists with unique keys and conditional rendering operators"
        ],
        deliverable: "Kanban task board app with task filtering and local state persistence"
      },
      {
        week: 5,
        stage: 2,
        title: "Advanced React: useEffect, Custom Hooks & Context API",
        focus: "Side effects, custom hook reusability, and global state management.",
        tasks: [
          "Master useEffect lifecycle, cleanup functions, and dependency arrays",
          "Author custom hooks: useDebounce, useLocalStorage, and useMediaQuery",
          "Implement theme and user preferences using React Context API"
        ],
        deliverable: "E-commerce product catalog with live search, filters, and shopping cart"
      },
      {
        week: 6,
        stage: 2,
        title: "Client-Side Routing, Forms & Form Validation",
        focus: "Single Page App navigation, URL parameters, and clean validation.",
        tasks: [
          "Implement client-side routing with nested routes and 404 handlers",
          "Build accessible multi-step forms with immediate validation feedback",
          "Persist application state across route transitions"
        ],
        deliverable: "Multi-step student onboarding portal with progress preservation"
      },
      {
        week: 7,
        stage: 3,
        title: "Backend Foundations: Node.js & Express REST APIs",
        focus: "Server routes, middleware, request validation, and CORS handling.",
        tasks: [
          "Build modular Express routing for CRUD resources (Users, Notes, Tasks)",
          "Implement central error handling middleware and structured JSON responses",
          "Configure CORS and environment variable management with dotenv"
        ],
        deliverable: "RESTful API backend supporting complete CRUD operations"
      },
      {
        week: 8,
        stage: 3,
        title: "Database Integration: MongoDB / PostgreSQL with ORM",
        focus: "Data persistence, schema design, and asynchronous database queries.",
        tasks: [
          "Model relational or document schemas with Prisma or Mongoose",
          "Perform database migrations and populate seed data",
          "Connect frontend React app to backend database endpoints"
        ],
        deliverable: "Full-stack application with persistent database storage"
      },
      {
        week: 9,
        stage: 3,
        title: "User Authentication & Protected Routes",
        focus: "JWT tokens, secure HTTP-only cookies, password hashing, and route guards.",
        tasks: [
          "Hash passwords with bcrypt and issue signed JWT access tokens",
          "Protect private backend API routes with authentication middleware",
          "Implement React route guards that redirect unauthenticated users"
        ],
        deliverable: "Secure full-stack portal with login, register, and protected user profiles"
      },
      {
        week: 10,
        stage: 4,
        title: "Performance Optimization & Core Web Vitals",
        focus: "Lighthouse audits, code splitting, lazy loading, and asset compression.",
        tasks: [
          "Implement React.lazy and Suspense for route-based code splitting",
          "Optimize images (WebP format, responsive sizes, lazy loading)",
          "Score 95+ on Google Lighthouse across Performance, Accessibility, and Best Practices"
        ],
        deliverable: "Production performance audit report and optimized web application"
      },
      {
        week: 11,
        stage: 4,
        title: "Frontend Technical Interview & System Design Sprint",
        focus: "JS coding challenges, React rendering optimization, and CSS layout questions.",
        tasks: [
          "Implement common interview questions: debounce, throttle, deep clone, EventEmitter",
          "Explain Virtual DOM diffing, useMemo/useCallback, and React Fiber architecture",
          "Practice building an autocomplete search bar under a 45-minute live coding format"
        ],
        deliverable: "Collection of 15 solved frontend interview challenge implementations"
      },
      {
        week: 12,
        stage: 4,
        title: "Production Deployment, Showcase Portfolio & Job Hunting",
        focus: "Deploying to Vercel/Netlify, custom domain setup, and outreach.",
        tasks: [
          "Deploy full-stack projects with automated CI/CD on Vercel or Render",
          "Craft a modern portfolio showcasing live demos, GitHub links, and tech stacks",
          "Tailor resume for junior frontend / full-stack engineering applications"
        ],
        deliverable: "Live portfolio with 3 deployed production projects and resume link"
      }
    ]
  }
};
