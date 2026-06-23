import { sharedStyles } from "@/lib/shared.styles";

export const contactFormStyles = {
  overlay:
    "fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-stone-800/50 p-4 backdrop-blur-sm",
  modal:
    "relative w-full max-w-md animate-slide-up rounded-2xl border border-border bg-card p-8 shadow-2xl",
  closeBtn:
    "absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-md text-xl text-muted transition-colors hover:bg-primary-light hover:text-foreground",
  title: "mb-1.5 text-[1.375rem] font-bold",
  subtitle: "mb-6 text-sm text-muted",
  form: "flex flex-col gap-4",
  field: "flex flex-col gap-1.5",
  label: "text-[0.8125rem] font-semibold text-foreground",
  input:
    "rounded-lg border border-border bg-background px-3.5 py-3 text-[0.9375rem] text-foreground transition-shadow outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)]",
  textarea:
    "min-h-28 resize-y rounded-lg border border-border bg-background px-3.5 py-3 text-[0.9375rem] text-foreground transition-shadow outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)]",
  submitBtn: `${sharedStyles.primaryBtn} mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60`,
  success: "py-8 text-center",
  successIcon:
    "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-2xl text-primary",
  successTitle: "mb-2 text-xl font-bold",
  successText: "text-[0.9375rem] text-muted",
  error: "rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-[0.8125rem] text-red-700",
  recaptcha: "flex justify-center",
  honeypot: "pointer-events-none absolute -left-[9999px] opacity-0",
};
