export const modal = {
  // Backdrop overlay with standard backdrop Z-Index & smooth backdrop blur
  backdrop:
    "fixed inset-0 z-[400] bg-black/60 backdrop-blur-sm transition-opacity duration-200",

  // Wrapper: Bottom-sheet layout on Mobile, Centered Modal on Desktop
  wrapper:
    "fixed inset-0 z-[500] overflow-y-auto p-0 sm:p-4 md:p-6 flex items-end sm:items-center justify-center pointer-events-none",

  // Panel Container with Mobile Safe Area Bottom Padding
  panel:
    "pointer-events-auto w-full max-w-lg bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-t-3xl sm:rounded-2xl p-5 sm:p-6 text-left shadow-2xl border-t sm:border border-[var(--color-border)] max-h-[90vh] sm:max-h-[85vh] overflow-y-auto pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:pb-6 transition-all duration-200",

  // Mobile Bottom-Sheet Pull Handle Bar
  handle:
    "w-12 h-1.5 bg-[var(--color-border)] rounded-full mx-auto mb-4 sm:hidden shrink-0",

  // Modal Header Section
  header:
    "flex items-center justify-between pb-3.5 border-b border-[var(--color-border)] gap-3",

  // Modal Title Typography
  title:
    "text-lg sm:text-xl font-bold text-[var(--color-text-primary)] leading-snug tracking-tight",

  // Accessible Close Button (44px Mobile Touch Standard)
  closeButton:
    "min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] [@media(hover:hover)]:hover:text-[var(--color-text-primary)] [@media(hover:hover)]:hover:bg-[var(--color-bg-secondary)] active:scale-95 transition-all shrink-0 cursor-pointer",

  // Modal Content Body
  body:
    "py-4 text-sm text-[var(--color-text-secondary)] space-y-3 leading-relaxed",

  // Modal Action Footer (Auto-stacks buttons on Mobile)
  footer:
    "pt-4 border-t border-[var(--color-border)] flex flex-col-reverse sm:flex-row justify-end gap-3",
};