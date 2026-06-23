"use client";

import { useCallback, useState } from "react";
import { portfolioCases } from "@/data/resume";
import { cn } from "@/lib/cn";
import { PortfolioCard } from "@/components/PortfolioCard/PortfolioCard";
import { portfolioCarouselStyles as s } from "./PortfolioCarousel.styles";

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = portfolioCases.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <div className={s.root}>
      <div className={s.viewport}>
        <div
          className={s.track}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {portfolioCases.map((item, index) => (
            <div key={item.id} className={s.slide}>
              <PortfolioCard item={item} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>

      <div className={s.controls}>
        <button
          type="button"
          className={s.arrowBtn}
          onClick={goPrev}
          aria-label="Предыдущий проект"
        >
          ‹
        </button>

        <div className={s.dots}>
          {portfolioCases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={cn(s.dot, index === activeIndex && s.dotActive)}
              onClick={() => goTo(index)}
              aria-label={`Проект ${index + 1}: ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <span className={s.counter}>
          {activeIndex + 1} / {total}
        </span>

        <button
          type="button"
          className={s.arrowBtn}
          onClick={goNext}
          aria-label="Следующий проект"
        >
          ›
        </button>
      </div>
    </div>
  );
}
