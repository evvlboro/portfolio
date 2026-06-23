import { sharedStyles } from "@/lib/shared.styles";

export const heroStyles = {
  hero: "bg-gradient-to-br from-primary-light via-accent-light to-background px-6 pt-16 pb-20",
  inner:
    "mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12",
  content: "order-2 md:order-1",
  badge:
    "mb-4 inline-block rounded-full border border-border bg-card px-3.5 py-1.5 text-[0.8125rem] font-semibold text-primary",
  title: "mb-3 text-[clamp(2.25rem,6vw,3.5rem)] leading-tight font-extrabold",
  highlight: sharedStyles.gradientText,
  role: "mb-3 text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold text-muted",
  summary: "mb-8 max-w-lg text-[1.0625rem] leading-relaxed text-muted",
  actions: "flex flex-wrap gap-3.5",
  primaryBtn: sharedStyles.primaryBtn,
  secondaryBtn: sharedStyles.secondaryBtn,
  imageWrap: "order-1 flex justify-center md:order-2 md:justify-end",
  image: "block h-auto w-full max-w-xs object-contain",
};
