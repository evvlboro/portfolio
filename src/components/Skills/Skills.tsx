import { skillGroups } from "@/data/resume";
import { Section } from "@/components/Section/Section";
import { skillsStyles as s } from "./Skills.styles";

export function Skills() {
  return (
    <Section id="skills" title="Навыки" subtitle="Технологии и инструменты, с которыми работаю">
      <div className={s.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={s.group}>
            <h3 className={s.groupTitle}>{group.title}</h3>
            <div className={s.tags}>
              {group.skills.map((skill) => (
                <span key={skill} className={s.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
