import { Section } from "@/components/Section/Section";
import { PortfolioCarousel } from "@/components/PortfolioCarousel/PortfolioCarousel";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Проекты"
      subtitle="Примеры продуктов и сайтов, в разработке которых участвовал"
    >
      <PortfolioCarousel />
    </Section>
  );
}
