import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { sectionStyles as s } from "./Section.styles";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "alt";
  children: ReactNode;
};

export function Section({ id, title, subtitle, variant = "default", children }: SectionProps) {
  return (
    <section id={id} className={cn(s.section, variant === "alt" && s.sectionAlt)}>
      <div className={s.inner}>
        <span className={s.titleAccent} aria-hidden="true" />
        <h2 className={s.title}>{title}</h2>
        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
