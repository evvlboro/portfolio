import { education } from "@/data/resume";
import { Section } from "@/components/Section/Section";
import { educationStyles as s } from "./Education.styles";

export function Education() {
  return (
    <Section
      id="education"
      title="Образование"
      subtitle="Образование и профильные курсы"
      variant="alt"
    >
      <div className={s.list}>
        {education.map((item) => (
          <article key={`${item.institution}-${item.period}`} className={s.card}>
            <div className={s.period}>{item.period}</div>
            <div>
              <h3 className={s.institution}>{item.institution}</h3>
              <p className={s.specialty}>{item.specialty}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
