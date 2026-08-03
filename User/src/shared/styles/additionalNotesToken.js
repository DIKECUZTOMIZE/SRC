export const additionalNotesToken = {
    /* ==========================
     * Card Section Container
     * ========================== */
    section:
        "rounded-2xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-primary,#ffffff)]/80 backdrop-blur-md p-4 sm:p-6 shadow-xs hover:shadow-sm transition-all duration-300 space-y-4",

    header: "flex items-start gap-3 border-b border-[var(--color-border,#f1f5f9)] pb-3.5 mb-1",

    iconWrapper:
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary,#10b981)]/10 text-[var(--color-primary,#10b981)]",

    title:
        "text-sm sm:text-base font-bold text-[var(--color-text-primary,#0f172a)] tracking-tight",

    description:
        "text-xs text-[var(--color-text-secondary,#64748b)] mt-0.5 leading-relaxed",

    /* ==========================
     * Quick Chips / Badges
     * ========================== */
    chipsContainer: "flex flex-wrap gap-1.5 sm:gap-2 pt-1",

    chip: `
    inline-flex items-center gap-1.5
    px-2.5 py-1.5
    text-xs font-medium
    rounded-lg
    border border-[var(--color-border,#e2e8f0)]
    bg-[var(--color-bg-secondary,#f8fafc)]
    text-[var(--color-text-secondary,#475569)]
    hover:border-[var(--color-primary,#10b981)]
    hover:text-[var(--color-primary,#10b981)]
    hover:bg-[var(--color-primary,#10b981)]/5
    active:scale-[0.97]
    transition-all duration-150 cursor-pointer select-none
  `.replace(/\s+/g, " ").trim(),

    /* ==========================
     * Textarea Override & Counter
     * ========================== */
    textareaWrapper: "relative w-full",

    charCounter:
        "text-[11px] font-medium text-[var(--color-text-secondary,#94a3b8)] text-right mt-1.5",
};

export default additionalNotesToken;