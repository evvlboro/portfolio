export const portfolioCarouselStyles = {
  root: "relative",
  viewport: "overflow-hidden",
  track: "flex transition-transform duration-500 ease-out",
  slide: "w-full shrink-0 px-0.5",
  controls: "mt-6 flex items-center justify-center gap-4",
  arrowBtn:
    "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-lg font-semibold text-primary shadow-[0_4px_12px_rgba(234,88,12,0.08)] transition-all hover:-translate-y-px hover:border-primary hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-40",
  dots: "flex items-center gap-2",
  dot: "h-2.5 w-2.5 rounded-full bg-border transition-all hover:bg-primary-light",
  dotActive: "w-8 bg-gradient-to-r from-primary to-accent",
  counter: "min-w-12 text-center text-sm font-medium text-muted",
};
