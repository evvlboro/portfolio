export const portfolioCardStyles = {
  card: "grid grid-cols-1 gap-6 rounded-2xl border border-border bg-card p-5 shadow-[0_8px_24px_rgba(234,88,12,0.08)] md:grid-cols-2 md:items-start md:gap-8 md:p-6",
  imageWrap:
    "w-full overflow-hidden rounded-xl border border-border shadow-[0_12px_32px_rgba(234,88,12,0.12)] md:self-center",
  image: "block h-auto w-full",
  content: "flex flex-col gap-3.5",
  badge:
    "inline-block w-fit rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary",
  title: "text-2xl font-bold text-foreground",
  companySiteRow: "text-[0.9375rem] text-foreground",
  companySiteLabel: "text-muted",
  links: "flex flex-col gap-1.5",
  link: "text-[0.9375rem] font-medium text-primary transition-opacity hover:opacity-80",
  exampleBtn:
    "inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-gradient-to-br from-primary-light to-accent-light px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:-translate-y-px hover:border-primary hover:from-primary hover:to-accent hover:text-white",
  note: "text-[0.8125rem] text-muted italic",
  description: "text-[0.9375rem] leading-relaxed text-foreground",
  stack: "flex flex-wrap gap-2",
  stackTag:
    "rounded-md bg-accent-light px-2.5 py-1 text-xs font-semibold text-primary",
  highlights: "m-0 flex list-none flex-col gap-1.5 p-0",
  highlightItem:
    "relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:text-accent before:content-['→']",
};
