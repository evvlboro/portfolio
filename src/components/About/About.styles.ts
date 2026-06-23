export const aboutStyles = {
  text: "flex flex-col gap-4",
  paragraph: "text-[1.0625rem] leading-7 text-foreground",
  hobby:
    "border-t border-border px-5 pb-4 pt-3 text-[0.9375rem] leading-relaxed text-muted",
  spoiler:
    "group rounded-xl border border-border border-l-4 border-l-accent bg-card overflow-hidden",
  spoilerSummary:
    "flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[0.9375rem] font-medium text-muted transition-colors hover:text-primary [&::-webkit-details-marker]:hidden",
  spoilerIcon: "text-primary transition-transform group-open:rotate-90",
  imageWrap: "flex justify-center",
  image: "block h-auto w-full max-w-xs object-contain",
};
