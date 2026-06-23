import { experience } from "@/data/resume";
import { Section } from "@/components/Section/Section";
import { experienceStyles as s } from "./Experience.styles";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Опыт работы"
      subtitle="Коммерческая разработка в разных отраслях и форматах команд"
      variant="alt"
    >
      <div className={s.list}>
        {experience.map((item) => {
          const [periodStart, periodEnd] = item.period.split(" — ");

          return (
            <article key={`${item.company}-${item.period}`} className={s.card}>
              <div className={s.period}>
                <span>{periodStart}</span>
                {periodEnd && <span>— {periodEnd}</span>}
              </div>
              <div>
                <div className={s.header}>
                  <div className={s.companyRow}>
                    <h3 className={s.company}>{item.company}</h3>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.siteBtn}
                      >
                        Сайт компании
                      </a>
                    )}
                  </div>
                  <p className={s.role}>{item.role}</p>
                  {item.location && <p className={s.location}>{item.location}</p>}
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
        })}
      </div>
    </Section>
  );
}
