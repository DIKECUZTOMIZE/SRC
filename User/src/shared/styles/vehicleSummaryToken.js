export const vehicleSummaryToken = {
  /* ==========================
   * Form Field / Selection Card Shell
   * ========================== */
  wrapper:
    "group relative rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] hover:bg-[var(--color-bg-secondary)] p-2.5 sm:p-4 transition-all duration-200 cursor-pointer shadow-xs hover:border-[var(--color-primary)] active:scale-[0.98]",

  /* Selected State Indicator (Radio Style) */
  radioIndicator:
    "h-4 w-4 rounded-full border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] flex items-center justify-center shrink-0 transition-colors",

  radioDot:
    "h-2 w-2 rounded-full bg-[var(--color-primary)] transition-opacity",

  /* ==========================
   * Mobile Layout (Compact Touch Form Card)
   * ========================== */
  mobileContainer: "flex sm:hidden flex-col gap-2",

  mobileHeader: "flex items-start justify-between gap-2.5",

  mobileImageWrapper: "relative w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)]",

  mobileSpecs: "flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar",

  mobileSpecBadge: "flex items-center gap-1 shrink-0 rounded-md bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-[10px] text-[var(--color-text-secondary)] border border-[var(--color-border)]/60 font-medium",

  /* ==========================
   * Desktop Layout (Horizontal Row Form Card)
   * ========================== */
  desktopContainer: "hidden sm:flex items-center gap-4",

  desktopImageWrapper: "relative w-24 h-20 shrink-0 rounded-lg overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)]",

  /* ==========================
   * Common Elements
   * ========================== */
  image: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",

  badge: "absolute top-0.5 left-0.5 px-1 py-0.2 rounded text-[7px] font-bold uppercase bg-black/75 text-white tracking-wider backdrop-blur-xs",

  brand: "text-[9px] font-bold uppercase text-[var(--color-primary)] tracking-wider leading-none mb-0.5",

  title: "text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate leading-tight",

  subtitle: "text-[10px] text-[var(--color-text-secondary)]",

  priceValue: "text-xs sm:text-base font-black text-[var(--color-primary)] tracking-tight",
};

export default vehicleSummaryToken;