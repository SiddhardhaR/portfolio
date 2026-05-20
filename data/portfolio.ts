import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LineChart,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wand2
} from "lucide-react";

export const profile = {
  name: "Siddhardha Ravi",
  role: "AI/ML Data Engineer & Full Stack Analytics Developer",
  shortRole: "Full Stack Data Developer",
  location: "Jersey City, NJ",
  email: "Siddhardha.2611@gmail.com",
  phone: "+1 (512) 850-1761",
  linkedin: "https://www.linkedin.com/in/siddhardha-r-aa7a7b250",
  github: "https://github.com/",
  tagline: "Building intelligent data journeys across the Grand Line of technology.",
  summary:
    "I design production-grade data systems, ML workflows, AI-augmented analytics, immersive research platforms, and interactive tools that turn complex signals into decisions. My work spans scalable data pipelines, MLOps, cloud analytics, LLM evaluation, BI automation, XR prototyping, and human-AI collaboration research.",
  mission:
    "My mission is to make data infrastructure feel dependable, explainable, and useful: pipelines that move cleanly, dashboards that tell the truth quickly, and AI systems that improve human judgment instead of hiding it.",
  resumeFile: "Siddhardha_Ravi_Resume_Final.docx"
};

export const highlights = [
  { value: "542.9%", label: "static code quality lift in AI-first refinement research" },
  { value: "60%", label: "manual reporting time reduced with AI-generated KPI narratives" },
  { value: "45%", label: "query latency reduction through Redshift warehouse optimization" },
  { value: "97.3%", label: "face-recognition accuracy across a 500-student pilot dataset" }
];

export const strengths = [
  "AI-augmented analytics and LLM-as-a-Judge evaluation",
  "Batch and streaming data pipelines across AWS, Airflow, Kafka, dbt, and PySpark",
  "Interactive dashboards in Power BI, Tableau, QuickSight, Looker, and Recharts",
  "Research-grade experimentation with rigorous metrics, reproducibility, and cost control",
  "Immersive learning prototypes with Unity, C#, VR interaction design, and research support"
];

export const experiences = [
  {
    company: "TechSemble Inc",
    island: "MLOps Current",
    role: "Data Engineer",
    period: "Aug 2025 - Present",
    location: "Hoboken, NJ",
    impact: "current AI/ML data engineering role",
    color: "from-sky-300 to-indigo-500",
    bullets: [
      "Building scalable data pipelines, ML workflows, and AI-powered solutions that translate complex datasets into business impact.",
      "Working across cloud data engineering, MLOps, real-time processing, and Generative AI automation patterns.",
      "Applying Python, SQL, AWS, Snowflake, and machine learning practices to support reliable analytics and operational data products.",
      "Bringing a research-backed human-AI collaboration lens into production data workflows and model evaluation."
    ]
  },
  {
    company: "Montclair State University",
    island: "Human-AI Collaboration Lab",
    role: "Graduate Research Assistant",
    period: "Aug 2024 - May 2025",
    location: "Montclair, NJ",
    impact: "542.9% quality improvement",
    color: "from-cyan-400 to-blue-500",
    bullets: [
      "Designed a 4-week empirical study comparing AI-First Refinement, Human-Guided Generation, and Iterative Co-Creation across 100 BigCodeBench programming tasks.",
      "Built an automated experiment pipeline integrating GPT-4, Claude-3, Qwen3-32B, and LLaMA 3.3 70B through APIs.",
      "Created a dual-layer evaluation engine combining Radon, pycodestyle, and LLM-as-a-Judge scoring for complexity, maintainability, readability, and robustness.",
      "Delivered a React and FastAPI collaboration workspace with live code editing, AI interaction panels, metric dashboards, and CLI batch tooling."
    ]
  },
  {
    company: "Self-Directed / Academic Applied Project",
    island: "AI Analytics Harbor",
    role: "Data Analyst - AI Integration",
    period: "Jan 2024 - Aug 2024",
    location: "Montclair, NJ",
    impact: "60% faster reporting",
    color: "from-amber-300 to-orange-500",
    bullets: [
      "Designed an AI-augmented analytics pipeline using Python, Pandas, and GPT-4 API to automate narrative generation for weekly KPI reports.",
      "Built Power BI and Tableau dashboards on Snowflake and AWS Redshift, tracking 15+ metrics with automated anomaly flagging.",
      "Developed prompt-engineering patterns to extract structured JSON insights from customer feedback and support-ticket datasets.",
      "Integrated LLM evaluation into A/B testing workflows, reducing analyst review cycles by 40%."
    ]
  },
  {
    company: "Montclair State University - Research Lab",
    island: "Metric Cartography Station",
    role: "Data Analyst Intern",
    period: "Aug 2023 - Dec 2023",
    location: "Montclair, NJ",
    impact: "300+ samples analyzed",
    color: "from-emerald-300 to-cyan-500",
    bullets: [
      "Performed EDA on BigCodeBench and AI-generated code datasets to surface trends in complexity, line growth, and style violations.",
      "Built data collection scripts to harvest static analysis metrics and load results into MySQL for longitudinal tracking.",
      "Maintained Tableau dashboards comparing collaboration pipelines across model types and LLM families.",
      "Validated improvement claims through p-values and t-tests using SciPy."
    ]
  },
  {
    company: "Montclair State University - Hu-Au XR Lab",
    island: "Immersive Learning Outpost",
    role: "XR/VR Lab Volunteer",
    period: "2025",
    location: "Montclair, NJ",
    impact: "Unity and C# VR research support",
    color: "from-violet-300 to-cyan-500",
    bullets: [
      "Volunteered with the Hu-Au XR Lab, which studies human-computer interaction and immersive learning through VR, AR, and MR experiences.",
      "Worked on Unity and C# development tasks for VR learning prototypes under the guidance of Dr. Elliot Hu-Au.",
      "Supported interactive scene logic, prototype iteration, and research-driven exploration of immersive STEM learning experiences.",
      "Connected software engineering practice with HCI, game development, and education-focused XR research."
    ]
  }
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "LWC", "HTML/CSS", "Recharts"]
  },
  {
    title: "Backend",
    icon: ServerCog,
    items: ["Python", "FastAPI", "Apex", "REST APIs", "AWS Lambda", "C++"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: ["AWS", "S3", "Redshift", "Glue", "EMR", "Azure", "GCP", "Databricks"]
  },
  {
    title: "AI",
    icon: BrainCircuit,
    items: ["GPT-4", "Claude", "Qwen", "LLaMA", "Prompt Engineering", "MLOps", "TensorFlow"]
  },
  {
    title: "Data",
    icon: Database,
    items: ["MySQL", "SQL Server", "Snowflake", "BigQuery", "Presto", "PostgreSQL", "Hadoop", "Spark"]
  },
  {
    title: "DevOps",
    icon: GitBranch,
    items: ["Docker", "Kubernetes", "GitHub", "Airflow", "dbt", "Kafka", "Great Expectations"]
  },
  {
    title: "Analytics",
    icon: LineChart,
    items: ["Power BI", "Tableau", "QuickSight", "Looker", "Pandas", "NumPy", "SciPy", "Seaborn"]
  },
  {
    title: "Governance",
    icon: ShieldCheck,
    items: ["Data Modeling", "Warehousing", "Lineage", "Quality Tests", "Agile", "Jira", "Salesforce Admin"]
  }
];

export const projects = [
  {
    title: "Real-Time Data Pipeline",
    subtitle: "Logistics Analytics Platform",
    icon: BarChart3,
    image: "linear-gradient(135deg, rgba(14,165,233,.9), rgba(245,158,11,.68))",
    metric: "45% lower query latency",
    problem:
      "Logistics reporting depended on slow warehouse queries and manually assembled KPI narratives.",
    solution:
      "Built a streaming data route from Kafka to AWS S3, Glue PySpark, Redshift, dbt, Airflow, and BI dashboards.",
    impact:
      "Reduced query latency by 45% and made weekly performance reporting faster and more repeatable.",
    description:
      "An end-to-end streaming pipeline ingesting logistics events from Kafka into AWS S3, transforming with Glue PySpark, and loading Redshift for BI-ready analysis.",
    stack: ["Python", "Kafka", "AWS Glue", "Redshift", "Airflow", "dbt", "Power BI"],
    details: [
      "Designed a star schema with optimized distribution and sort keys.",
      "Added dbt quality tests and Airflow orchestration with alerting.",
      "Generated GPT-4 weekly performance narratives from Redshift aggregates."
    ]
  },
  {
    title: "Human-AI Code Quality Platform",
    subtitle: "Master's Thesis Research System",
    icon: Wand2,
    image: "linear-gradient(135deg, rgba(34,211,238,.9), rgba(239,68,68,.65))",
    metric: "542.9% quality improvement",
    problem:
      "Human-AI coding workflows needed a rigorous way to compare collaboration strategies across models.",
    solution:
      "Created a React/FastAPI research platform for task orchestration, static analysis, cost tracking, and evaluator dashboards.",
    impact:
      "Supported a 4-week study across 100 tasks and measured a 542.9% lift in static code quality.",
    description:
      "A research platform for multi-LLM task ingestion, orchestration, static analysis, cost tracking, before-after code comparison, and quality dashboards.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Radon", "OpenAI API", "Groq API"],
    details: [
      "Orchestrated GPT-4, Claude, Qwen, and LLaMA experiments.",
      "Tracked token usage under a $200 research budget.",
      "Supported 3 collaborators during a 4-week empirical study."
    ]
  },
  {
    title: "Pricing Prediction System",
    subtitle: "ML Logistics Forecasting",
    icon: Sparkles,
    image: "linear-gradient(135deg, rgba(16,185,129,.9), rgba(14,165,233,.65))",
    metric: "18% accuracy gain",
    problem:
      "Logistics pricing decisions lacked a reliable prediction workflow with auditable feature history.",
    solution:
      "Engineered demand, distance, fuel, and seasonal features, then served model predictions through a full-stack app.",
    impact:
      "Improved pricing accuracy by 18% while keeping predictions traceable in MySQL.",
    description:
      "A full-stack ML system that predicts logistics pricing from engineered distance, demand, fuel, and seasonal features.",
    stack: ["Python", "Scikit-learn", "ReactJS", "MySQL", "Pandas", "Matplotlib"],
    details: [
      "Analyzed 50K+ rows and evaluated 6 regression families.",
      "Served production inference through FastAPI.",
      "Stored predictions in MySQL for auditability."
    ]
  },
  {
    title: "Face Detection Attendance",
    subtitle: "Computer Vision Attendance System",
    icon: BrainCircuit,
    image: "linear-gradient(135deg, rgba(245,158,11,.9), rgba(239,68,68,.65))",
    metric: "97.3% identification accuracy",
    problem:
      "Classroom attendance workflows were manual, slow, and difficult to verify at scale.",
    solution:
      "Built a computer-vision pipeline with embeddings, liveness checks, CSV reporting, and email delivery.",
    impact:
      "Reached 97.3% identification accuracy across a 500-student pilot dataset.",
    description:
      "A real-time recognition workflow using OpenCV, CNN embeddings, liveness checks, automated CSV reporting, and email delivery.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "face_recognition", "Pandas"],
    details: [
      "Validated against a 500-student pilot dataset.",
      "Added anti-spoofing with LSTM-based liveness checks.",
      "Automated daily reporting for a 10-class pilot."
    ]
  }
];

export const education = [
  {
    degree: "Master of Science, Computer Science & Information Technology",
    school: "Montclair State University",
    period: "Aug 2023 - May 2025",
    detail: "GPA 3.5/4.0. Thesis: Human-AI Collaboration for Code Quality Improvement."
  },
  {
    degree: "Bachelor of Engineering, Computer Science",
    school: "Vel Tech University",
    period: "Jun 2018 - May 2022",
    detail: "GPA 3.8/4.0."
  }
];

export const certifications = [
  "Salesforce Certified Developer",
  "HackerRank Certified: Python Gold Badge, SQL, CSS",
  "Python Data Structures",
  "Foundation of User Experience Design",
  "Introduction to Cyber Security Tools & Cyber Attacks",
  "VMware NSX: Networking & Security Architecture",
  "Pratibha Award for Academic Excellence"
];
