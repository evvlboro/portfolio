import { about } from "@/data/resume";
import { Section } from "@/components/Section/Section";
import { aboutStyles as s } from "./About.styles";

export function About() {
  return (
    <Section id="about" title="Обо мне" subtitle="Кратко о себе">
      <div className={s.text}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className={s.paragraph}>
            {paragraph}
          </p>
        ))}
        <details className={s.spoiler}>
          <summary className={s.spoilerSummary}>
            В свободное от работы время...
            <span className={s.spoilerIcon} aria-hidden="true">
              ▸
            </span>
          </summary>
          <p className={s.hobby}>{about.hobby}</p>
        </details>
      </div>
    </Section>
  );
}
