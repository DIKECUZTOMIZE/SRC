export const cardTokens = {
  /* ==========================
   * Base Card Container
   * ========================== */
  base: "bg-[var(--color-bg-primary)] border border-[var(--color-border)] transition-all duration-200 rounded-xl sm:rounded-2xl overflow-hidden text-[var(--color-text-primary)] w-full flex flex-col justify-between select-none touch-manipulation",

  /* ==========================
   * Visual Variants
   * ========================== */
  variants: {
    flat: "shadow-none",

    elevated:
      "shadow-[var(--shadow-sm)] [@media(hover:hover)]:hover:shadow-[var(--shadow-lg)]",

    interactive:
      "cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none [@media(hover:hover)]:hover:border-[var(--color-primary)] [@media(hover:hover)]:hover:shadow-[var(--shadow-md)] active:scale-[0.98] sm:active:scale-[0.995]",
  },

  /* ==========================
   * Interactive Hover State
   * ========================== */
  hoverEffect:
    "[@media(hover:hover)]:hover:border-[var(--color-primary)] [@media(hover:hover)]:hover:shadow-[var(--shadow-lg)] [@media(hover:hover)]:hover:-translate-y-0.5",

  /* ==========================
   * Sub-components (Mobile Readable Text + Micro Padding)
   * ========================== */

  // Header: Balanced tight padding
  header:
    "p-2 sm:p-3.5 md:p-4 border-b border-[var(--color-border)] flex items-center justify-between gap-1.5 min-w-0",

  // Title: Readable Prominent Font (Mobile pe text-sm/base, desktop pe text-lg/xl)
  title:
    "text-sm sm:text-base md:text-lg font-bold text-[var(--color-text-primary)] leading-snug tracking-tight line-clamp-1 min-w-0",

  // Description: Clear & Legible Text
  description:
    "text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5 leading-snug line-clamp-2 min-w-0 font-medium",

  // Body: Dense & Flexible Padding
  body: "p-2 sm:p-3.5 md:p-4 flex-1 min-w-0",

  // Footer: Horizontal Fit with Clear Action Text
  footer:
    "p-2 sm:p-3.5 md:p-4 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] flex items-center justify-between gap-1.5 mt-auto min-w-0",
};

export default cardTokens;