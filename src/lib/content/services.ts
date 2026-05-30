import type { Addon, ComparisonRow, FaqItem, HomeService, Tiers } from "./types";

export const HOME_SERVICES: HomeService[] = [
  {
    name: "Platform Engineering",
    sub: "IDPs, GitOps, self-service de infraestructura para equipos de desarrollo.",
    price: "desde €8.000",
  },
  {
    name: "Cloud & Kubernetes",
    sub: "Migraciones AWS/GCP, clusters K8s, Terraform, optimización de costes.",
    price: "desde €6.000",
  },
  {
    name: "Backend & API",
    sub: "Microservicios en Go/Node, diseño de APIs, bases de datos a escala.",
    price: "desde €5.000",
  },
  {
    name: "Consultoría DevOps",
    sub: "Auditorías CI/CD, observabilidad, revisión de arquitectura, formación.",
    price: "€180/hora",
  },
];

export const TIERS: Tiers = {
  proyecto: [
    {
      name: "Starter",
      price: "€3.500",
      unit: "/proyecto",
      feats: [
        ["Landing o MVP a medida", true],
        ["Hasta 5 vistas/rutas", true],
        ["Responsive + SEO base", true],
        ["CMS headless", false],
        ["Soporte 30 días", false],
      ],
    },
    {
      name: "Pro",
      price: "€9.500",
      unit: "/proyecto",
      pro: true,
      feats: [
        ["App fullstack completa", true],
        ["Auth, pagos y dashboard", true],
        ["CI/CD + tests automatizados", true],
        ["Soporte 60 días", true],
        ["Documentación técnica", true],
      ],
    },
    {
      name: "Scale",
      price: "€18.000+",
      unit: "/proyecto",
      feats: [
        ["Arquitectura a escala", true],
        ["Equipo aumentado", true],
        ["SLA y on-call", true],
        ["Auditoría de performance", true],
        ["Roadmap conjunto", true],
      ],
    },
  ],
  retainer: [
    {
      name: "Starter",
      price: "€1.200",
      unit: "/mes",
      feats: [
        ["20 h/mes", true],
        ["Mantenimiento y monitoring", true],
        ["Corrección de bugs", true],
        ["Features nuevas", false],
        ["On-call", false],
      ],
    },
    {
      name: "Pro",
      price: "€2.800",
      unit: "/mes",
      pro: true,
      feats: [
        ["50 h/mes", true],
        ["Features nuevas", true],
        ["Code reviews", true],
        ["Canal directo (Slack/Teams)", true],
        ["Reporte semanal", true],
      ],
    },
    {
      name: "Scale",
      price: "€5.500",
      unit: "/mes",
      feats: [
        ["Dedicación parcial (80%+)", true],
        ["Roadmap conjunto", true],
        ["Arquitectura y ADRs", true],
        ["On-call 24/7", true],
        ["SLA garantizado", true],
      ],
    },
  ],
};

export const COMPARISON: ComparisonRow[] = [
  ["Diseño a medida", [true, true, true]],
  ["Backend & API", [false, true, true]],
  ["Tests automatizados", [false, true, true]],
  ["CI/CD", [false, true, true]],
  ["Soporte post-entrega", [false, true, true]],
  ["SLA & on-call", [false, false, true]],
];

export const ADDONS: Addon[] = [
  {
    name: "Auditoría técnica",
    desc: "Revisión de arquitectura, infraestructura y CI/CD. Informe priorizado con plan de acción.",
    price: "€1.500",
  },
  {
    name: "Sesión de mentoría",
    desc: "Acompañamiento a equipo de ingeniería en decisiones de stack, GitOps o cloud-native.",
    price: "€180/hora",
  },
  {
    name: "Sprint de performance",
    desc: "1-2 semanas de análisis y optimización: TTFB, Core Web Vitals, costes de infra.",
    price: "€3.200",
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "¿Cómo es tu proceso de trabajo?",
    a: "Empiezo con una llamada de descubrimiento (30 min) para entender el problema real. Entrego una propuesta con alcance, hitos y precio fijo antes de empezar. Trabajo en iteraciones de 1-2 semanas con demos y feedback continuo.",
  },
  {
    q: "¿Qué pasa si el alcance cambia?",
    a: "Los cambios pequeños van incluidos. Para cambios de alcance significativos, paro, evaluamos juntos el impacto y acordamos el ajuste antes de continuar. Sin sorpresas en la factura final.",
  },
  {
    q: "¿Ofreces soporte después de la entrega?",
    a: "Todos los proyectos incluyen soporte post-entrega (30 o 60 días según el plan). Para necesidades continuas, recomiendo el retainer Pro: 50h/mes con canal directo y reporte semanal.",
  },
  {
    q: "¿Cómo te integras con equipos existentes?",
    a: "Trabajo en el repositorio del cliente, con su metodología (Jira, Linear, Notion). Me integro en el squad como un senior más: code reviews, pair programming, documentación en Confluence/Notion.",
  },
];
