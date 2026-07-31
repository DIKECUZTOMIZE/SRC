export const vehicleCardToken = {
  /* ==========================
   * Card
   * ========================== */
  card:
    "group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] shadow-sm transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-xl",

  /* ==========================
   * Image
   * ========================== */
  imageWrapper:
    "relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]",

  image:
    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",

  /* ==========================
   * Overlay
   * ========================== */
  statusBadge:
    "absolute top-3 left-3 z-20 text-[10px] font-bold",

  classificationBadge:
    "absolute top-3 right-3 z-20 text-[10px] font-bold",

  rating:
    "absolute bottom-3 right-3 z-20 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur",

  favoriteBtn:
    "absolute bottom-3 left-3 z-20 h-8 w-8 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center hover:text-red-500",

  /* ==========================
   * Body
   * ========================== */
  content:
    "flex flex-1 flex-col gap-3 p-4",

  header:
    "flex items-start justify-between",

  titleGroup:
    "flex-1 min-w-0",

  title:
    "truncate text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors",

  subtitle:
    "mt-1 text-xs text-[var(--color-text-secondary)] truncate",

  /* ==========================
   * Specs
   * ========================== */
  specs:
    "grid grid-cols-2 gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2",

  specItem:
    "flex items-center gap-2 text-xs text-[var(--color-text-secondary)]",

  specIcon:
    "h-4 w-4 shrink-0 text-[var(--color-primary)]",

  /* ==========================
   * Service
   * ========================== */
  serviceSection:
    "rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-3",

  serviceTitle:
    "mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]",

  serviceRow:
    "flex items-center justify-between py-1.5",

  serviceLabel:
    "flex items-center gap-2 text-xs font-medium text-[var(--color-text-secondary)]",

  serviceValue:
    "text-sm font-bold text-[var(--color-primary)]",

  /* ==========================
   * Footer
   * ========================== */
  footer:
    "mt-auto pt-2",

  primaryButton:
    "w-full min-h-10 rounded-xl",

  secondaryButton:
    "w-full min-h-10 rounded-xl",
};

export default vehicleCardToken;