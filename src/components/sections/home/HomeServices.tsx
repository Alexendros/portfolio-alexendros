import Link from "next/link";
import { HOME_SERVICES } from "@/lib/content";
import { SectionHead } from "@/components/ui/SectionHead";
import { Icon } from "@/components/ui/Icon";

export function HomeServices() {
  return (
    <section className="ak-section ak-section-sunken">
      <div className="ak-container-inner">
        <SectionHead eyebrow="servicios" title="En qué puedo ayudarte" />
        <div className="ak-srv-list">
          {HOME_SERVICES.map((s, i) => (
            <Link key={s.name} className="ak-srv-row" href="/servicios" data-reveal>
              <span className="ak-srv-idx">{String(i + 1).padStart(2, "0")}</span>
              <div className="ak-srv-main">
                <div className="ak-srv-name">{s.name}</div>
                <div className="ak-srv-sub">{s.sub}</div>
              </div>
              <span className="ak-srv-price">{s.price}</span>
              <span className="ak-srv-arrow">
                <Icon name="arrow-right" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
