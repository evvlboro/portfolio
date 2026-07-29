"use client";

import { useCallback, useMemo, useState } from "react";
import { portfolioCases } from "@/data/resume";
import { cn } from "@/lib/cn";
import { PortfolioCard } from "@/components/PortfolioCard/PortfolioCard";
import { portfolioCarouselStyles as s } from "./PortfolioCarousel.styles";

const portfolioTabs = [
  { id: "all", label: "Все" },
  { id: "freelance", label: "Фриланс и pet-проекты" },
] as const;

type PortfolioTabId = (typeof portfolioTabs)[number]["id"];

export function PortfolioCarousel() {
  const [activeTab, setActiveTab] = useState<PortfolioTabId>("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCases = useMemo(
    () =>
      activeTab === "freelance"
        ? portfolioCases.filter(
            (item) => item.badge === "Фриланс" || item.badge === "Pet project",
          )
        : portfolioCases,
    [activeTab],
  );

  const total = visibleCases.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const handleTabChange = (tabId: PortfolioTabId) => {
    setActiveTab(tabId);
    setActiveIndex(0);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <div className={s.root}>
      <div className={s.tabs} role="tablist" aria-label="Категории проектов">
        {portfolioTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={cn(s.tab, activeTab === tab.id && s.tabActive)}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={s.viewport}>
        <div
          className={s.track}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {visibleCases.map((item, index) => (
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
          disabled={total <= 1}
        >
          ‹
        </button>

        <div className={s.dots}>
          {visibleCases.map((item, index) => (
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
          disabled={total <= 1}
        >
          ›
        </button>
      </div>
    </div>
  );
}
