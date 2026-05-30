import type { ReactNode } from "react";

export function Eyebrow({ children, comment = true }: { children: ReactNode; comment?: boolean }) {
  return (
    <span className="ak-eyebrow">
      {comment && <span className="ak-eyebrow-c">{"// "}</span>}
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`ak-section-head ${center ? "ak-center" : ""}`.trim()}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="ak-h2">{title}</h2>
      {sub && <p className="ak-section-sub">{sub}</p>}
      {children}
    </div>
  );
}
