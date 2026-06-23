import type { portfolioCases } from "@/data/resume";
import { portfolioCardStyles as s } from "./PortfolioCard.styles";

type PortfolioCase = (typeof portfolioCases)[number];

type PortfolioCardProps = {
  item: PortfolioCase;
  priority?: boolean;
};

export function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  return (
    <article className={s.card}>
      <div className={s.imageWrap}>
        <img
          src={item.image}
          alt={item.title}
          className={s.image}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>

      <div className={s.content}>
        <span className={s.badge}>
          {item.badge} · {item.company}
        </span>
        <h3 className={s.title}>{item.title}</h3>

        <div className={s.links}>
          <p className={s.companySiteRow}>
            <span className={s.companySiteLabel}>Сайт компании: </span>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={s.link}>
              {item.url.replace(/^https?:\/\//, "")}
            </a>
          </p>
          {"exampleUrl" in item && item.exampleUrl && item.exampleLabel && (
            <a
              href={item.exampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.exampleBtn}
            >
              {item.exampleLabel} →
            </a>
          )}
        </div>

        {"note" in item && item.note && <p className={s.note}>{item.note}</p>}

        <p className={s.description}>{item.description}</p>

        <div className={s.stack}>
          {item.stack.map((tech) => (
            <span key={tech} className={s.stackTag}>
              {tech}
            </span>
          ))}
        </div>

        <ul className={s.highlights}>
          {item.highlights.map((highlight) => (
            <li key={highlight} className={s.highlightItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
