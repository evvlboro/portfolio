import { sharedStyles } from "@/lib/shared.styles";

export const contactsStyles = {
  wrapper: "text-center",
  card: "mx-auto max-w-xl rounded-2xl border border-border bg-card p-10 shadow-[0_12px_32px_rgba(234,88,12,0.08)]",
  text: "mb-8 text-[1.0625rem] leading-relaxed text-muted",
  contacts: "mb-8 flex flex-col gap-3",
  contactLink: "text-base font-medium text-foreground transition-colors hover:text-primary",
  ctaBtn: `${sharedStyles.primaryBtn} mb-8 px-8 py-3.5 text-base`,
  socialBlock: "border-t border-border pt-6",
  socialLabel: "mb-4 text-sm font-semibold text-muted",
  socialWrap: "flex justify-center",
};
