import { sharedStyles } from "@/lib/shared.styles";

export const headerStyles = {
  header:
    "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md",
  inner: "mx-auto max-w-6xl px-6",
  top: "flex min-h-16 items-center justify-between gap-4",
  logo: "text-lg font-bold whitespace-nowrap text-foreground transition-colors hover:text-primary",
  logoAccent: "text-primary",
  nav: "hidden items-center gap-1 lg:flex",
  navLink:
    "rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-light hover:text-primary",
  actions: "flex items-center gap-3",
  contactBtn: `${sharedStyles.primaryBtn} px-4 py-2 text-sm whitespace-nowrap`,
  menuBtn: "flex h-9 w-9 flex-col justify-center gap-1.5 p-1.5 lg:hidden",
  menuBar: "block h-0.5 rounded-sm bg-foreground",
  mobileNav: "flex flex-col gap-1 border-t border-border py-3 pb-4 lg:hidden",
};
