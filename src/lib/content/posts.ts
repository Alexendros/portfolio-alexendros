import type { Post } from "./types";

export const POSTS: Post[] = [
  {
    id: "post-idp",
    title: "Platform Engineering: construyendo una IDP que los devs quieran usar",
    tag: "DevOps",
    date: "20 May 2026",
    read: "22 min",
    featured: true,
    desc: "Cómo pasamos de un equipo de infra sobrecargado a una plataforma de self-service que 40 equipos usan a diario. Lo que funcionó, lo que no, y qué hubiéramos hecho diferente.",
  },
  {
    id: "post-argocd",
    title: "GitOps con ArgoCD: sincronización continua sin sorpresas en producción",
    tag: "DevOps",
    date: "08 May 2026",
    read: "9 min",
  },
  {
    id: "post-otel",
    title: "Observabilidad real con OpenTelemetry en microservicios Go",
    tag: "Backend",
    date: "29 Abr 2026",
    read: "14 min",
  },
  {
    id: "post-flagger",
    title: "Zero-downtime deploys en Kubernetes con Flagger y canary releases",
    tag: "DevOps",
    date: "17 Abr 2026",
    read: "11 min",
  },
  {
    id: "post-finops",
    title: "FinOps en AWS: de factura de €18k a €8k sin tocar el producto",
    tag: "DevOps",
    date: "03 Abr 2026",
    read: "8 min",
  },
  {
    id: "post-go",
    title: "Go para ingenieros Node.js: lo que me sorprendió en producción",
    tag: "Backend",
    date: "21 Mar 2026",
    read: "12 min",
  },
  {
    id: "post-apis",
    title: "Diseño de APIs para plataformas internas: lecciones de 3 IDPs",
    tag: "Backend",
    date: "05 Mar 2026",
    read: "10 min",
  },
];

export const BLOG_TAGS = ["Todos", "DevOps", "Backend", "Platform", "FinOps", "Kubernetes"];

export function getPost(id: string): Post | undefined {
  return POSTS.find((p) => p.id === id);
}
