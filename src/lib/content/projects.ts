import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "plataforma-idp",
    title: "Plataforma de Developers Interna",
    category: "Platform Engineering",
    kind: "Web App",
    year: "2026",
    h: 230,
    featured: true,
    tags: ["Go", "Kubernetes", "Terraform", "Next.js", "ArgoCD"],
    desc: "Plataforma IDP (Internal Developer Platform) con self-service de infraestructura y pipelines para 40+ equipos de ingeniería. Redujo el tiempo de onboarding de nuevos servicios de 3 días a 4 horas.",
    metrics: [
      { v: "−60%", l: "tiempo onboarding", acc: true },
      { v: "40+", l: "equipos" },
      { v: "€2.4M", l: "ahorro/año" },
    ],
  },
  {
    id: "observabilidad",
    title: "Sistema de Observabilidad Unificado",
    category: "Infra",
    kind: "Infra",
    year: "2025",
    h: 185,
    tags: ["OpenTelemetry", "Grafana", "Prometheus", "Loki", "Go"],
    desc: "Plataforma centralizada de observabilidad con trazado distribuido, métricas y logs para 12 microservicios críticos. Estableció SLOs por servicio con alerting accionable.",
    metrics: [
      { v: "99.98%", l: "SLO cumplido", acc: true },
      { v: "8k", l: "spans/s" },
      { v: "12", l: "servicios" },
    ],
  },
  {
    id: "kubernetes-multitenant",
    title: "Migración Multi-tenant Kubernetes",
    category: "DevOps",
    kind: "Infra",
    year: "2025",
    h: 205,
    featured: true,
    tags: ["Kubernetes", "Istio", "ArgoCD", "AWS EKS", "Terraform"],
    desc: "Lideré la migración de 60+ microservicios a un cluster Kubernetes multi-tenant en AWS EKS. Implementé GitOps con ArgoCD y service mesh con Istio para routing y mTLS.",
    metrics: [
      { v: "−45%", l: "costes infra", acc: true },
      { v: "0", l: "incidentes" },
      { v: "60", l: "servicios migrados" },
    ],
  },
  {
    id: "api-gateway",
    title: "API Gateway de Alta Disponibilidad",
    category: "Backend",
    kind: "API",
    year: "2024",
    h: 250,
    tags: ["Go", "Redis", "PostgreSQL", "AWS", "gRPC"],
    desc: "API Gateway de HA con rate limiting, circuit breaker, autenticación OAuth2 y routing inteligente. Soporta 25k RPS con p99 de 8ms.",
    metrics: [
      { v: "25k", l: "RPS", acc: true },
      { v: "8ms", l: "p99" },
      { v: "99.995%", l: "disponibilidad" },
    ],
  },
  {
    id: "analytics-realtime",
    title: "Dashboard Analytics Tiempo Real",
    category: "Producto",
    kind: "Web App",
    year: "2024",
    h: 185,
    tags: ["React", "Next.js", "TypeScript", "ClickHouse", "Kafka"],
    desc: "Dashboard de analytics en tiempo real con ingesta de eventos vía Kafka y consultas sobre ClickHouse. Visualizaciones actualizadas en menos de 100ms con 50M eventos/día.",
    metrics: [
      { v: "<100ms", l: "actualización", acc: true },
      { v: "50M", l: "eventos/día" },
      { v: "12", l: "clientes activos" },
    ],
  },
  {
    id: "k8s-operator",
    title: "Operador Kubernetes para Bases de Datos",
    category: "Open Source",
    kind: "Open Source",
    year: "2023",
    h: 215,
    tags: ["Go", "Operator SDK", "Kubernetes", "PostgreSQL", "Helm"],
    desc: "Operador K8s open source para aprovisionamiento y gestión automatizada de bases de datos PostgreSQL. Gestiona backups, failover y escalado horizontal sin downtime.",
    metrics: [
      { v: "1.2k", l: "GitHub stars", acc: true },
      { v: "80+", l: "contribuidores" },
      { v: "6", l: "empresas en prod" },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
