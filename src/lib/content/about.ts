import type { Principle, Stat, TimelineEntry } from "./types";

export const HERO_STATS: Stat[] = [
  ["9+", "años"],
  ["60+", "proyectos"],
  ["18", "clientes"],
  ["3", "OSS"],
];

export const ABOUT_STATS: Stat[] = [
  ["9+", "años"],
  ["60+", "proyectos"],
  ["18", "clientes"],
  ["3", "open source"],
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2023 — Hoy",
    role: "Platform Engineer",
    org: "Fintech Scale-up · remoto",
    now: true,
    bullets: [
      "Construí la IDP interna usada por 40+ equipos: pipelines self-service, registro de servicios y gestión de secretos.",
      "Lideré adopción de GitOps con ArgoCD, reduciendo el tiempo de deployment en un 70%.",
    ],
    tags: ["Go", "Kubernetes", "Terraform", "ArgoCD", "AWS"],
  },
  {
    year: "2020 — 2023",
    role: "Senior Fullstack Engineer",
    org: "SaaS Startup · remoto",
    bullets: [
      "Lideré un equipo de 6 ingenieros para escalar el producto de 0 a 2M usuarios activos.",
      "Diseñé la arquitectura de microservicios y las pipelines CI/CD que soportaron el crecimiento.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    year: "2017 — 2020",
    role: "Software Engineer",
    org: "Agencia Digital",
    bullets: [
      "Entregué 20+ proyectos de cliente, de MVPs a aplicaciones de producción.",
      "Introduje Docker y AWS en los proyectos del equipo, mejorando la reproducibilidad y los despliegues.",
    ],
    tags: ["TypeScript", "React", "Node.js", "AWS", "Docker"],
  },
  {
    year: "2015 — 2017",
    role: "Junior Developer",
    org: "Consultoría IT",
    bullets: [
      "Desarrollo fullstack en aplicaciones empresariales con integración de sistemas legacy.",
      "Primeros pasos en automatización de tests y entrega continua.",
    ],
    tags: ["JavaScript", "Java", "SQL Server"],
  },
];

export const PRINCIPLES: Principle[] = [
  {
    icon: "git-branch",
    title: "Infraestructura como código",
    body: "Todo en Git: infraestructura, configuración, pipelines. Si no está en un repositorio, no existe. La reproducibilidad no es opcional.",
  },
  {
    icon: "activity",
    title: "Observabilidad antes de optimizar",
    body: "No se puede mejorar lo que no se mide. Instrumentar antes de hacer prod, SLOs antes que alertas, dashboards que cuentan una historia.",
  },
  {
    icon: "users",
    title: "Developer Experience ante todo",
    body: "La mejor plataforma es la que los equipos usan sin pensar. Si hay fricción, la solución es el producto, no la documentación.",
  },
];

export const DAILY_STACK = [
  "Go", "TypeScript", "React", "Next.js", "Kubernetes", "Terraform", "ArgoCD",
  "Docker", "PostgreSQL", "Redis", "AWS", "OpenTelemetry", "Grafana",
  "Prometheus", "Kafka", "Loki",
];
