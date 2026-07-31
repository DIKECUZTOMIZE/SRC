export const vehicleCardToken = {
    /* ==========================
     * Card Outer Container
     * ========================== */
    card:
        "group relative flex  flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--color-border)]/80 bg-[var(--color-bg-primary)] shadow-xs transition-all duration-300 ease-out hover:border-[var(--color-primary)]/40 hover:shadow-md active:scale-[0.98] sm:active:scale-100 select-none w-full",

    /* ==========================
     * Image Banner
     * ========================== */
    imageWrapper:
        "relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] shrink-0",

    image:
        "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",

    /* ==========================
     * Top Overlay Badges & Controls
     * ========================== */
    statusBadge:
        "absolute top-1.5 left-1.5 z-10 rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[var(--color-bg-primary)]/90 text-[var(--color-text-primary)] border border-white/20 shadow-xs backdrop-blur-md line-clamp-1",

    rating:
        "absolute top-1.5 right-1.5 z-10 flex items-center gap-1 rounded-full bg-black/65 backdrop-blur-md px-2 py-0.5 text-[10px] sm:text-xs font-bold text-white shadow-xs tabular-nums",

    favoriteBtn:
        "absolute bottom-1.5 right-1.5 z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[var(--color-bg-primary)]/90 backdrop-blur-md text-[var(--color-text-secondary)] shadow-xs transition-all active:scale-90 hover:text-red-500 hover:bg-[var(--color-bg-primary)] border border-white/10",

    /* ==========================
     * Card Body (Compact Padding, Large Text Fit)
     * ========================== */
    content:
        "flex flex-1 flex-col justify-between gap-1.5 sm:gap-2.5 p-2 sm:p-3 min-w-0",

    /* ==========================
     * Header (Bada Title & Subtitle)
     * ========================== */
    header:
        "flex items-start justify-between gap-1 min-w-0",

    titleGroup:
        "min-w-0 flex-1",

    title:
        "line-clamp-1 text-xs sm:text-sm md:text-base font-bold tracking-tight text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)]",

    subtitle:
        "mt-0.5 line-clamp-1 text-[10px] sm:text-xs font-medium text-[var(--color-text-secondary)]",

    /* ==========================
     * Specs Grid (Micro Grid + Readable Text)
     * ========================== */
    specs:
        "grid grid-cols-2 gap-x-1.5 gap-y-1 sm:gap-1.5 rounded-lg sm:rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-bg-secondary)]/50 p-1.5 sm:p-2 min-w-0",

    specItem:
        "flex items-center gap-1 text-[10px] sm:text-xs font-medium text-[var(--color-text-secondary)] min-w-0 leading-tight",

    specIcon:
        "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-[var(--color-primary)] stroke-[2]",

    /* ==========================
     * Dynamic Service Section (Bade Labels & Price)
     * ========================== */
    serviceSection:
        "rounded-lg sm:rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-bg-secondary)]/30 p-1.5 sm:p-2 min-w-0",

    serviceTitle:
        "mb-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-primary)] line-clamp-1",

    serviceRow:
        "flex items-center justify-between gap-1 py-0.5 text-[10px] sm:text-xs min-w-0",

    serviceLabel:
        "line-clamp-1 text-[var(--color-text-secondary)] font-medium min-w-0 flex-1",

    serviceValue:
        "font-bold text-[var(--color-primary)] tabular-nums shrink-0 text-right",

    /* ==========================
     * Footer Actions (Prominent Button Text)
     * ========================== */
    footer:
        "mt-0.5 flex items-center gap-1 w-full",

    primaryButton:
        "w-full rounded-lg sm:rounded-xl bg-[var(--color-primary)] px-2 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white transition-all hover:bg-[var(--color-primary)]/90 active:scale-[0.98] focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:outline-none shadow-xs flex items-center justify-center gap-1 min-h-[32px] sm:min-h-[36px]",

    secondaryButton:
        "rounded-lg sm:rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-bg-secondary)] active:scale-[0.98] min-h-[32px] sm:min-h-[36px]",
};

export default vehicleCardToken;