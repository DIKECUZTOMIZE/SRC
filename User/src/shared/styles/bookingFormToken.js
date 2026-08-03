export const FormToken = {
  /* ==========================
   * Wrapper
   * ========================== */
  wrapper: "space-y-4 w-full",

  form: "space-y-4 w-full",

  section:
    "rounded-xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-primary,#ffffff)]/90 backdrop-blur-sm shadow-sm p-4 sm:p-5 transition-all",

  sectionTitle:
    "text-sm sm:text-base font-bold text-[var(--color-text-primary,#0f172a)] border-b border-[var(--color-border,#e2e8f0)] pb-2 mb-4 flex items-center justify-between",

  /* ==========================
   * Grid Systems
   * ========================== */
  grid: {
    one: "grid grid-cols-1 gap-3 sm:gap-4",
    two: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4",
    three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
    full: "col-span-1 md:col-span-2 lg:col-span-3",
  },

  /* ==========================
   * Label
   * ========================== */
  label:
    "block mb-1 text-[11px] sm:text-xs font-semibold text-[var(--color-text-secondary,#475569)] select-none",

  required: "text-red-500 ml-0.5 font-bold",

  /* ==========================
   * Inputs & Controls
   * ========================== */
  input:
    "w-full rounded-lg border border-[var(--color-border,#cbd5e1)] bg-[var(--color-bg-secondary,#f8fafc)] px-3 py-2 text-xs sm:text-sm text-[var(--color-text-primary,#0f172a)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:border-[var(--color-primary,#10b981)] focus:ring-2 focus:ring-[var(--color-primary,#10b981)]/20 disabled:opacity-60 disabled:cursor-not-allowed",

  inputError:
    "border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20",

  textarea:
    "w-full rounded-lg border border-[var(--color-border,#cbd5e1)] bg-[var(--color-bg-secondary,#f8fafc)] px-3 py-2 text-xs sm:text-sm text-[var(--color-text-primary,#0f172a)] resize-none outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:border-[var(--color-primary,#10b981)] focus:ring-2 focus:ring-[var(--color-primary,#10b981)]/20 disabled:opacity-60 disabled:cursor-not-allowed",

  textareaError:
    "border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20",

  select:
    "w-full rounded-lg border border-[var(--color-border,#cbd5e1)] bg-[var(--color-bg-secondary,#f8fafc)] px-3 py-2 text-xs sm:text-sm text-[var(--color-text-primary,#0f172a)] outline-none transition-all duration-200 focus:bg-white focus:border-[var(--color-primary,#10b981)] focus:ring-2 focus:ring-[var(--color-primary,#10b981)]/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",

  selectError:
    "border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500/20",

  /* ==========================
   * Inline / Group
   * ========================== */
  inline: "flex items-center gap-2",

  timeInput:
    "flex-1 rounded-lg border border-[var(--color-border,#cbd5e1)] bg-[var(--color-bg-secondary,#f8fafc)] px-3 py-2 text-xs outline-none transition-all focus:border-[var(--color-primary,#10b981)] focus:ring-2 focus:ring-[var(--color-primary,#10b981)]/20",

  ampm: "w-24 rounded-lg border border-[var(--color-border,#cbd5e1)] bg-[var(--color-bg-secondary,#f8fafc)] px-3 py-2 text-xs font-semibold outline-none transition-all focus:border-[var(--color-primary,#10b981)] focus:ring-2 focus:ring-[var(--color-primary,#10b981)]/20 cursor-pointer",

  /* ==========================
   * Error Text
   * ========================== */
  error: "mt-1 block text-[11px] font-medium text-red-500 animate-in fade-in-50 duration-150",

  /* ==========================
   * Payment & Summary Cards
   * ========================== */
  paymentCard:
    "rounded-xl border border-emerald-100 bg-white/90 backdrop-blur-sm shadow-sm p-4 flex flex-col justify-between space-y-3",

  paymentInfo:
    "rounded-lg border border-emerald-200 bg-emerald-50/80 p-3 text-[11px] leading-relaxed text-emerald-900",

  summary:
    "rounded-xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white shadow-md p-4 sm:p-5 flex flex-col justify-between",

  summaryTitle: "text-sm font-bold text-emerald-200 mb-3",

  summaryList: "space-y-2 text-emerald-100/80 text-xs sm:text-sm",

  summaryRow: "flex items-center justify-between",

  summaryValue: "font-semibold text-white",

  total:
    "mt-3 pt-3 border-t border-emerald-800/80 flex items-center justify-between",

  totalLabel: "text-xs font-semibold text-emerald-300 uppercase tracking-wider",

  totalValue: "text-xl sm:text-2xl font-black text-emerald-400",

  /* ==========================
   * Submit Button
   * ========================== */
  submit:
    "w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

  /* ==========================
   * Misc
   * ========================== */
  hidden: "hidden",
  transition: "transition-all duration-200 ease-out",
};

export default FormToken;