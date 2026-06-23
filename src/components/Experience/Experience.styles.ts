export const experienceStyles = {
  list: "flex flex-col gap-6",
  card: "grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_4px_16px_rgba(234,88,12,0.08)] transition-all hover:-translate-y-0.5 hover:border-primary md:grid-cols-[11rem_1fr] md:items-start",
  period: "flex flex-col gap-0.5 text-sm font-semibold text-primary",
  header: "mb-0 flex flex-col gap-1",
  companyRow: "flex flex-wrap items-center justify-between gap-3",
  company: "text-xl font-bold text-foreground",
  siteBtn:
    "inline-flex shrink-0 items-center rounded-lg border border-border bg-gradient-to-br from-primary-light to-accent-light px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:-translate-y-px hover:border-primary hover:from-primary hover:to-accent hover:text-white",
  role: "text-[0.9375rem] font-semibold text-muted",
  location: "text-[0.8125rem] text-muted",
  highlights: "mt-0 flex list-none flex-col gap-2 p-0",
  highlightItem:
    "relative pl-5 text-[0.9375rem] leading-relaxed text-foreground before:absolute before:top-[0.55rem] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br before:from-primary before:to-accent before:content-['']",
};
