import type { ExperienceEntry } from "../types";

const SCHOLAR = {
  ria: "https://scholar.google.com/citations?user=t0Ct8QoAAAAJ&hl=en",
  aghaei: "https://scholar.google.com/citations?hl=en&user=2FQ2LvUAAAAJ",
  safaei: "https://scholar.google.com/citations?hl=en&user=RyYg7HcAAAAJ",
  jahanian: "https://scholar.google.com/citations?hl=en&user=gTht4nwAAAAJ",
  abdoos: "https://scholar.google.com/citations?hl=en&user=SxxCUagAAAAJ",
  abin: "https://scholar.google.com/citations?hl=en&user=BrxRchIAAAAJ",
  alidoostnia: "https://scholar.google.com/citations?hl=en&user=Gx87T8wAAAAJ",
  vahidi: "https://scholar.google.com/citations?hl=en&user=Ex_tgAgAAAAJ",
  nabavi: "https://scholar.google.com/citations?hl=en&user=D_mPA6sAAAAJ",
  malek: "https://scholar.google.com/citations?hl=en&user=_IIio8oAAAAJ",
  aznaveh: "https://scholar.google.com/citations?hl=en&user=HlT_NN4AAAAJ",
  sharifi: "https://scholar.google.com/citations?user=GbJMZLIAAAAJ&hl=en",
  soleymani: "https://scholar.google.com/citations?user=S1U0KlgAAAAJ&hl=en",
  rohban: "https://scholar.google.com/citations?hl=en&user=pRyJ6FkAAAAJ",
  ahmadabadi: "https://scholar.google.com/citations?hl=en&user=QlwWxmoAAAAJ",
  abedi: "https://scholar.google.com/citations?user=33adiB4AAAAJ&hl=en",
} as const;

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "digikala",
    org: "Digikala",
    orgUrl: "https://www.digikala.com/",
    logo: "/logos/digikala.png",
    type: "industry",
    role: "AI & Automation Engineer",
    period: "Aug 2026 - Present",
    summary:
      "AI and automation initiatives for customer support operations, with Product, Data, and Operations teams.",
    description:
      "Senior-level role in the Customer Excellence department spanning technical development and product-oriented responsibilities. Designing AI-powered workflows in collaboration with senior engineers, engineering managers, and cross-functional teams, reporting to the Customer Service Director.",
    references: [
      { label: "About Digikala", href: "https://about.digikala.com/en/" },
    ],
  },
  {
    id: "talayiha",
    org: "Talayiha Olympiad Club",
    orgUrl: "https://talayiha.org/",
    logo: "/logos/talayiha.svg",
    type: "academic",
    role: "AI Olympiad Tutor",
    period: "Oct 2026 - Present",
    summary:
      "Teaching machine learning and deep learning to AI Olympiad students through theory and hands-on problem solving.",
    description:
      "Tutoring at Talayiha, an Olympiad preparation institute with a track record of medal-winning students. Sessions pair mathematical foundations with hands-on problem-solving for AI Olympiad training.",
  },
  {
    id: "riml",
    org: "RIML Lab · Sharif University of Technology",
    orgUrl:
      "https://www.linkedin.com/company/robust-and-interpretable-machine-learning-lab",
    logo: "/logos/riml.svg",
    logoDarkSrc: "/logos/riml-dark.svg",
    type: "research",
    role: "Research Assistant",
    period: "Apr 2026 - Present",
    summary:
      "Developing architectural improvements for large vision-language models to close reasoning gaps.",
    description:
      "Research at the Robust and Interpretable Machine Learning (RIML) Lab, focused on closing reasoning gaps in large vision-language models through architectural improvements.",
  },
  {
    id: "sharif-ta",
    org: "Sharif University of Technology",
    orgUrl: "https://en.sharif.ir/",
    logo: "/logos/sharif.svg",
    logoDarkSrc: "/logos/sharif-dark.svg",
    type: "academic",
    role: "Teaching Assistant",
    period: "Fall 2024 - Present",
    summary:
      "Designing slides and assignments; technical team for the machine learning contest.",
    courses: [
      {
        name: "Machine Learning",
        terms: "Fall 2024",
        instructors: [{ label: "Dr. Sharifi Zarchi", href: SCHOLAR.sharifi }],
      },
      {
        name: "Deep Learning (Graduate Course)",
        terms: "Spring 2025, Spring 2026, Fall 2026",
        instructors: [{ label: "Dr. Soleymani Baghshah", href: SCHOLAR.soleymani }],
      },
      {
        name: "Modern Information Retrieval",
        terms: "Spring 2026",
        instructors: [{ label: "Dr. Soleymani Baghshah", href: SCHOLAR.soleymani }],
      },
      {
        name: "Intelligent Analysis of Biomedical Images (Graduate Course)",
        terms: "Fall 2026",
        instructors: [{ label: "Dr. Rohban", href: SCHOLAR.rohban }],
      },
    ],
  },
  {
    id: "ariandata",
    org: "Arian Data",
    orgUrl: "https://www.ariandata.ai",
    logo: "/logos/ariandata.webp",
    logoDarkSrc: "/logos/ariandata-white.webp",
    type: "industry",
    role: "AI Specialist",
    period: "Jan 2025 - Aug 2026",
    summary:
      "Production AI systems across industrial automation, healthcare, and business workflows.",
    description:
      "Developed ML and LLM systems spanning data processing, model development, deployment, and production integration.",
    mentors: [
      { label: "Dr. Mohammad Ostadmohammadi", href: "https://dml.ir/users/profile/1/" },
      { label: "Dr. Nilli Ahmadabadi", href: SCHOLAR.ahmadabadi },
    ],
    achievements: [
      "Two-stage YOLO license-plate recognition pipeline for real-time factory gate automation",
      "Meetra - AI meeting assistant with per-meeting RAG chatbots and cross-meeting semantic search",
      "Healithic - agentic health-tech platform with LLM workflows and a secure AI gateway",
      "Document intelligence for degraded waybills using image enhancement, OCR preprocessing, and structured extraction",
    ],
  },
  {
    id: "quera",
    org: "Quera",
    orgUrl: "https://quera.org/",
    logo: "/logos/quera.svg",
    type: "academic",
    role: "Mentor, MLOps Bootcamp (×2)",
    period: "Spring - Summer 2026",
    summary:
      "Mentoring a 6-week MLOps bootcamp on reproducible pipelines, deployment, and monitoring.",
    achievements: [
      "Guided final projects from data handling to deployment",
      "Designed hands-on exercises: Git, Docker, DVC, MLflow, FastAPI, CI/CD, monitoring, drift, and retraining",
    ],
  },
  {
    id: "intelligent-hub",
    org: "Intelligent Hub (Canada)",
    orgUrl: "https://www.intelligenthub.ai",
    logo: "/logos/intelligent-hub.svg",
    type: "industry",
    role: "AI Software Engineer",
    period: "Mar 2026 - May 2026",
    summary:
      "Enterprise procurement automation with LangGraph pipelines for email intake and quote generation.",
    description:
      "Built a system that ingests emails and PDF/OCR attachments, extracts structured requirements, and generates quote-ready outputs. LangGraph pipelines automate intake, classification, routing, extraction, and multi-turn resolution of missing fields.",
    mentors: [
      { label: "Ali Abedi", href: SCHOLAR.abedi },
      {
        label: "Mariam Afshin",
        href: "https://www.linkedin.com/in/mariam-afshin-9866451a7/",
      },
    ],
    documents: [
      {
        label: "Signed contract (PDF)",
        href: "/files/intelligent-hub-contract.pdf",
      },
    ],
  },
  {
    id: "tehran-tech-house",
    org: "Tehran Technology House",
    orgUrl: "https://fanavari.co",
    logo: "/logos/tehran-tech-house.svg",
    type: "academic",
    role: "Instructor, AI Agent & Automation Bootcamp",
    period: "Aug 2026 - Oct 2026",
    summary:
      "30-hour project-based bootcamp on AI agents and business automation for professionals.",
    achievements: [
      "Covered n8n, LLMs, APIs, RAG, MCP, and end-to-end workflow design",
    ],
  },
  {
    id: "rahnema",
    org: "Rahnema College",
    orgUrl: "https://rahnemacollege.com/",
    logo: "/logos/rahnema.svg",
    type: "academic",
    role: "Mentor, Machine Learning Bootcamp",
    period: "Summer - Winter 2025",
    summary:
      "11-week project-based ML program covering deep learning, NLP, and MLOps.",
    achievements: [
      "Delivered workshops on modern Python and NLP",
      "Mentored capstone projects with Torob - a VLM-based product tagging system",
    ],
  },
  {
    id: "sbuaiclub",
    org: "SBU AI Club",
    orgUrl: "https://www.linkedin.com/company/sbu-ai-club/",
    logo: "/logos/aic.svg",
    logoDarkSrc: "/logos/aic-dark.svg",
    type: "academic",
    role: "Instructor & Bootcamp Owner",
    period: "Summer 2024",
    summary:
      "Led and instructed a machine learning bootcamp as the primary instructor.",
  },
  {
    id: "mci",
    org: "Hamrah Aval (MCI)",
    orgUrl: "https://mci.ir/",
    logo: "/logos/mci.svg",
    logoDarkSrc: "/logos/mci-dark.svg",
    type: "industry",
    role: "AI Developer (Internship)",
    period: "Oct 2024",
    summary:
      "AI-powered resume reader and reviewer rating CVs with LLMs against HR KPIs.",
  },
  {
    id: "sbu-ta",
    org: "Shahid Beheshti University",
    orgUrl: "https://en.sbu.ac.ir/",
    logo: "/logos/sbu.svg",
    logoDarkSrc: "/logos/sbu-dark.svg",
    type: "academic",
    role: "Head of TA Team & Teaching Assistant",
    period: "2022 - 2025",
    summary:
      "Leading the TA team and teaching across programming, AI, and systems courses.",
    positions: [
      {
        title: "Head of Teaching Assistant Team",
        period: "2023 - 2025",
        courses: [
          {
            name: "Python Programming",
            terms: "Spring 2024",
            instructors: [{ label: "Dr. Riahi-Madvar", href: SCHOLAR.ria }],
          },
          {
            name: "Introduction to AI",
            terms: "Fall 2023",
            instructors: [{ label: "Dr. Aghaei", href: SCHOLAR.aghaei }],
          },
          {
            name: "Probability & Statistics",
            terms: "Fall 2023",
            instructors: [{ label: "Dr. Safaei", href: SCHOLAR.safaei }],
          },
          {
            name: "Machine Learning (Graduate Course)",
            terms: "Fall 2024",
            instructors: [{ label: "Dr. Riahi-Madvar", href: SCHOLAR.ria }],
          },
          {
            name: "Digital System Design",
            terms: "Fall 2024",
            instructors: [{ label: "Dr. Jahanian", href: SCHOLAR.jahanian }],
          },
          {
            name: "Operating Systems",
            terms: "Spring 2025",
            instructors: [{ label: "Dr. Riahi-Madvar", href: SCHOLAR.ria }],
          },
        ],
      },
      {
        title: "Teaching Assistant",
        period: "2022 - 2025",
        courses: [
          {
            name: "Discrete Mathematics",
            terms: "Spring 2022, Fall 2022, Spring 2023",
            instructors: [{ label: "Dr. Abdoos", href: SCHOLAR.abdoos }],
          },
          {
            name: "Data Structures",
            terms: "Spring 2023, Spring 2024",
            instructors: [
              { label: "Dr. Abin", href: SCHOLAR.abin },
              { label: "Dr. Alidoostnia", href: SCHOLAR.alidoostnia },
            ],
          },
          {
            name: "Advanced Programming",
            terms: "Spring 2023",
            instructors: [{ label: "Dr. Vahidi Asl", href: SCHOLAR.vahidi }],
          },
          {
            name: "Introduction to AI",
            terms: "Fall 2023",
            instructors: [
              { label: "Dr. Aghaei", href: SCHOLAR.aghaei },
              { label: "Dr. Nabavi", href: SCHOLAR.nabavi },
            ],
          },
          {
            name: "Linear Algebra",
            terms: "Spring 2024",
            instructors: [{ label: "Dr. Malek", href: SCHOLAR.malek }],
          },
          {
            name: "Computer Vision",
            terms: "Spring 2024",
            instructors: [{ label: "Dr. Mahmoudi Aznaveh", href: SCHOLAR.aznaveh }],
          },
          {
            name: "Software Engineering",
            terms: "Fall 2024",
            instructors: [{ label: "Dr. Alidoostnia", href: SCHOLAR.alidoostnia }],
          },
          {
            name: "Machine Learning",
            terms: "Fall 2024",
            instructors: [{ label: "Dr. Malek", href: SCHOLAR.malek }],
          },
          {
            name: "Deep Learning (Graduate Course)",
            terms: "Spring 2025",
            instructors: [{ label: "Dr. Malek", href: SCHOLAR.malek }],
          },
        ],
      },
    ],
  },
];
