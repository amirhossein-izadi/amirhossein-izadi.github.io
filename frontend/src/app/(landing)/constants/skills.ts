import type { SkillGroup } from "../types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C / C++", "Java", "MATLAB"],
  },
  {
    label: "AI / ML",
    items: [
      "Foundation ML & DL",
      "Deep Learning & Modern Architectures",
      "Computer Vision & Image Processing",
      "Reinforcement Learning",
      "Data Science & Analytics",
      "NLP, LLMs & Agentic Tooling",
    ],
  },
  {
    label: "Web & APIs",
    items: ["Django", "FastAPI (REST, Async IO)"],
  },
  {
    label: "Data Systems",
    items: ["SQL", "NoSQL", "Vector DBs", "Kafka", "Spark", "Metabase"],
  },
  {
    label: "MLOps & Deployment",
    items: [
      "Docker",
      "MLflow",
      "Airflow",
      "Model Serving",
      "Experiment Tracking",
      "Inference Optimization",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    label: "Collaboration & Docs",
    items: ["Git", "LaTeX"],
  },
];
