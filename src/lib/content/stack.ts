import type { StackCategory, StackDetail } from "./types";

export const STACK_CATS: StackCategory[] = [
  { name: "Frontend", color: "var(--primary-400)", leaves: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { name: "Backend", color: "var(--success)", leaves: ["Go", "Node.js", "GraphQL", "gRPC"] },
  { name: "DevOps", color: "var(--warning)", leaves: ["Kubernetes", "Terraform", "ArgoCD", "Docker"] },
  { name: "Observabilidad", color: "var(--primary-600)", leaves: ["Prometheus", "Grafana", "OpenTelemetry", "Loki"] },
];

export const STACK_DETAIL: Record<string, StackDetail> = {
  React: { level: 0.92, years: "7 años", projects: ["Dashboard Analytics", "Plataforma IDP", "SaaS Startup"], note: "Framework principal para cualquier interfaz compleja. Fuerte en patterns de estado y rendimiento." },
  "Next.js": { level: 0.88, years: "5 años", projects: ["Dashboard Analytics", "Plataforma IDP", "Landing pages"], note: "Stack por defecto para aplicaciones web con SSR/SSG. App Router en producción desde 2023." },
  TypeScript: { level: 0.95, years: "7 años", projects: ["Todos los proyectos JS/TS"], note: "Escribo TypeScript por defecto. Los tipos como documentación ejecutable son una ventaja real en equipos." },
  Tailwind: { level: 0.85, years: "4 años", projects: ["Dashboard Analytics", "Plataforma IDP"], note: "Utility-first en proyectos donde la velocidad de UI importa. Combinado con design tokens propios." },
  Go: { level: 0.90, years: "5 años", projects: ["API Gateway", "Plataforma IDP", "K8s Operator", "Observabilidad"], note: "Lenguaje principal para servicios de backend y tooling de plataforma. Concurrencia y rendimiento sin overhead." },
  "Node.js": { level: 0.88, years: "8 años", projects: ["SaaS Startup", "APIs REST", "Microservicios"], note: "Ecosistema sólido para APIs y workers de evento. Migro a Go cuando el throughput lo requiere." },
  GraphQL: { level: 0.80, years: "5 años", projects: ["SaaS Startup", "Dashboard Analytics"], note: "Para APIs con clientes variados y necesidades de query flexible. Prefiero REST para servicios internos." },
  gRPC: { level: 0.82, years: "4 años", projects: ["API Gateway", "Microservicios internos"], note: "Protocolo de elección para comunicación entre servicios. Contratos fuertes con protobuf." },
  Kubernetes: { level: 0.93, years: "5 años", projects: ["Migración Multi-tenant", "Plataforma IDP", "K8s Operator"], note: "Operador certificado (CKA). Desde clusters bare-metal a EKS en producción con cientos de workloads." },
  Terraform: { level: 0.90, years: "5 años", projects: ["Plataforma IDP", "Migración K8s", "Infra AWS"], note: "IaC estándar para toda la infraestructura cloud. Módulos reutilizables y remote state en S3/Terraform Cloud." },
  ArgoCD: { level: 0.88, years: "4 años", projects: ["Plataforma IDP", "Migración K8s"], note: "GitOps de facto. App-of-apps pattern para gestión de múltiples entornos desde un único repositorio." },
  Docker: { level: 0.92, years: "7 años", projects: ["Todos los proyectos cloud-native"], note: "Base de todo el stack de contenedores. Multi-stage builds optimizados para imágenes de producción mínimas." },
  Prometheus: { level: 0.87, years: "4 años", projects: ["Observabilidad", "Plataforma IDP", "Migración K8s"], note: "Métricas y alerting de referencia en el stack cloud-native. Recording rules y SLO-based alerting." },
  Grafana: { level: 0.85, years: "4 años", projects: ["Observabilidad", "Plataforma IDP"], note: "Dashboards de operaciones y producto. Correlación de métricas, logs y trazas en un único panel de control." },
  OpenTelemetry: { level: 0.83, years: "3 años", projects: ["Observabilidad", "API Gateway"], note: "Standard abierto de instrumentación. Vendor-neutral: exporta a Tempo, Jaeger o cualquier backend OTLP." },
  Loki: { level: 0.80, years: "3 años", projects: ["Observabilidad", "Plataforma IDP"], note: "Agregación de logs cloud-native. Integrado con Grafana para correlacionar logs con métricas y trazas." },
  Frontend: { level: 0.90, years: "9 años", projects: ["Dashboard Analytics", "Plataforma IDP", "SaaS Startup"], note: "Capa de cliente: interfaces de producto y portales internos con React/Next.js y TypeScript." },
  Backend: { level: 0.90, years: "9 años", projects: ["API Gateway", "Microservicios", "K8s Operator"], note: "Servicios y APIs principalmente en Go para infraestructura y Node.js para BFFs y REST." },
  DevOps: { level: 0.91, years: "5 años", projects: ["Plataforma IDP", "Migración K8s", "API Gateway"], note: "Kubernetes, GitOps y Terraform como columna vertebral. Docker para empaquetado consistente en todos los entornos." },
  Observabilidad: { level: 0.84, years: "4 años", projects: ["Observabilidad Unificada", "Plataforma IDP", "API Gateway"], note: "Stack Grafana completo: Prometheus para métricas, Loki para logs, Tempo para trazas y OTel como capa de instrumentación." },
};
