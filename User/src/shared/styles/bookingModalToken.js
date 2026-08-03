export const bookingModalToken = {
  /* ==========================
   * Backdrop
   * ========================== */
  backdrop:
    "fixed inset-0 z-[400] bg-black/60 backdrop-blur-sm transition-opacity duration-300",

  /* ==========================
   * Wrapper
   * ========================== */
  wrapper:
    "fixed inset-0 z-[500] flex items-center justify-center p-0 sm:p-4",

  /* ==========================
   * Main Panel
   * ========================== */
  panel:
    "relative w-full h-screen sm:h-[92vh] sm:max-h-[92vh] bg-[var(--color-bg-primary)] rounded-none sm:rounded-2xl shadow-2xl border border-[var(--color-border)] flex flex-col overflow-hidden",

  /* ==========================
   * Sizes
   * ========================== */
  sizes: {
    sm: "sm:max-w-md",
    md: "sm:max-w-2xl",
    lg: "sm:max-w-4xl",
    xl: "sm:max-w-6xl",
    full: "w-screen h-screen sm:w-[98vw] sm:h-[96vh]",
  },

  /* ==========================
   * Mobile Handle
   * ========================== */
  handle:
    "w-12 h-1.5 bg-[var(--color-border)] rounded-full mx-auto my-2 sm:hidden",

  /* ==========================
   * Header
   * ========================== */
  header:
    "sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-4 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] shrink-0",

  title:
    "text-lg sm:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]",

  subtitle:
    "mt-0.5 text-xs sm:text-sm text-[var(--color-text-secondary)]",

  /* ==========================
   * Close Button
   * ========================== */
  closeButton:
    "flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] transition-colors",

  /* ==========================
   * Body
   * ========================== */
  body:
    "flex-1 overflow-y-auto px-5 sm:px-6 py-5 text-sm sm:text-base text-[var(--color-text-secondary)]",

  /* ==========================
   * Footer
   * ========================== */
  footer:
    "sticky bottom-0 z-20 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 px-5 sm:px-6 py-4 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] shrink-0",

  /* ==========================
   * Animation
   * ========================== */
  enter: "opacity-100 translate-y-0 scale-100",

  exit: "opacity-0 translate-y-4 scale-[0.98]",

  transition: "transition-all duration-300 ease-out",
};

export default bookingModalToken;