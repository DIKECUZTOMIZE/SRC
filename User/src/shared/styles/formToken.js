export const formToken = {
  /* ==========================
   * Group & Section Containers
   * ========================== */
  group: "space-y-1.5 mb-4 sm:mb-5 w-full transition-all",

  section:
    "rounded-2xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-primary,#ffffff)]/80 backdrop-blur-md p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 mb-5",

  sectionTitle:
    "text-sm sm:text-base font-bold text-[var(--color-text-primary,#0f172a)] border-b border-[var(--color-border,#f1f5f9)] pb-3 mb-4 flex items-center justify-between tracking-tight",

  grid: {
    one: "grid grid-cols-1 gap-3.5 sm:gap-4.5",
    two: "grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5",
    three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5",
    full: "col-span-1 md:col-span-2 lg:col-span-3",
  },

  inline: "flex items-center gap-2.5",

  /* ==========================
   * Labels & Typography
   * ========================== */
  label:
    "block text-xs sm:text-sm font-semibold text-[var(--color-text-primary,#334155)] tracking-wide select-none",

  required: "text-[var(--color-danger,#ef4444)] ml-1 font-bold",

  /* ==========================
   * Form Controls (Input, Textarea, Select)
   * ========================== */
  input: `
    w-full
    min-h-[44px] sm:min-h-[42px]
    px-3.5 sm:px-4
    py-2.5 sm:py-2
    text-base sm:text-sm
    rounded-xl
    border border-[var(--color-border,#e2e8f0)]
    bg-[var(--color-bg-primary,#ffffff)]
    text-[var(--color-text-primary,#0f172a)]
    placeholder:text-[var(--color-text-secondary,#94a3b8)]
    outline-none
    transition-all duration-200 ease-in-out
    hover:border-[var(--color-border-hover,#cbd5e1)]
    focus:border-[var(--color-primary,#10b981)]
    focus:bg-white
    focus-visible:ring-4
    focus-visible:ring-[var(--color-primary,#10b981)]/15
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:bg-[var(--color-bg-secondary,#f8fafc)]
    shadow-xs
  `.replace(/\s+/g, " ").trim(),

  textarea: `
    w-full
    min-h-[110px] sm:min-h-[130px]
    p-3.5 sm:p-4
    text-base sm:text-sm
    rounded-xl
    border border-[var(--color-border,#e2e8f0)]
    bg-[var(--color-bg-primary,#ffffff)]
    text-[var(--color-text-primary,#0f172a)]
    placeholder:text-[var(--color-text-secondary,#94a3b8)]
    outline-none
    transition-all duration-200 ease-in-out
    hover:border-[var(--color-border-hover,#cbd5e1)]
    focus:border-[var(--color-primary,#10b981)]
    focus:bg-white
    focus-visible:ring-4
    focus-visible:ring-[var(--color-primary,#10b981)]/15
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:bg-[var(--color-bg-secondary,#f8fafc)]
    resize-y
    shadow-xs
  `.replace(/\s+/g, " ").trim(),

  select: `
    w-full
    min-h-[44px] sm:min-h-[42px]
    px-3.5 sm:px-4
    py-2.5 sm:py-2
    text-base sm:text-sm
    rounded-xl
    border border-[var(--color-border,#e2e8f0)]
    bg-[var(--color-bg-primary,#ffffff)]
    text-[var(--color-text-primary,#0f172a)]
    outline-none
    transition-all duration-200 ease-in-out
    hover:border-[var(--color-border-hover,#cbd5e1)]
    focus:border-[var(--color-primary,#10b981)]
    focus:bg-white
    focus-visible:ring-4
    focus-visible:ring-[var(--color-primary,#10b981)]/15
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:bg-[var(--color-bg-secondary,#f8fafc)]
    cursor-pointer
    shadow-xs
  `.replace(/\s+/g, " ").trim(),

  /* ==========================
   * Validation & Feedback States
   * ========================== */
  states: {
    error:
      "border-[var(--color-danger,#ef4444)] text-red-900 focus:border-[var(--color-danger,#ef4444)] focus-visible:ring-[var(--color-danger,#ef4444)]/15 bg-red-50/20",
    success:
      "border-[var(--color-success,#10b981)] focus:border-[var(--color-success,#10b981)] focus-visible:ring-[var(--color-success,#10b981)]/15 bg-emerald-50/20",
  },

  /* ==========================
   * Helper & Error Typography
   * ========================== */
  helperText:
    "text-xs text-[var(--color-text-secondary,#64748b)] mt-1.5 leading-normal",

  errorText:
    "text-xs text-[var(--color-danger,#ef4444)] mt-1.5 flex items-center gap-1.5 font-medium animate-in fade-in slide-in-from-top-1 duration-150",

  /* ==========================
   * Cards & Price Summary
   * ========================== */
  infoCard:
    "rounded-xl border border-emerald-100 bg-emerald-50/60 p-3.5 text-xs text-emerald-900 leading-relaxed shadow-xs",

  summaryCard:
    "rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white p-5 shadow-lg flex flex-col justify-between border border-slate-700/50",

  summaryTitle: "text-sm font-bold text-emerald-400 mb-3 tracking-wide uppercase text-[11px]",

  summaryRow: "flex items-center justify-between py-1 text-xs sm:text-sm text-slate-300",

  totalRow:
    "mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between",

  totalValue: "text-xl sm:text-2xl font-black text-emerald-400 tracking-tight",

  /* ==========================
   * Buttons
   * ========================== */
  submit:
    "w-full min-h-[46px] sm:min-h-[48px] rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.99] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/25 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2",
};

export default formToken;