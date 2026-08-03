export const priceSummaryToken = {
  // Card Wrapper & Layout
  card: "mt-6 overflow-hidden rounded-2xl border border-[var(--color-border,#e2e8f0)] bg-white shadow-sm transition-all duration-300 hover:shadow-md",
  header: "border-b border-[var(--color-border,#f1f5f9)] bg-slate-50/50 px-6 py-5",
  title: "text-lg font-bold tracking-tight text-slate-900",
  description: "mt-1 text-xs text-slate-500 font-medium",
  body: "p-6 space-y-4",

  // Key-Value Rows
  row: "flex items-center justify-between py-1 text-sm",
  label: "text-slate-500 font-medium flex items-center gap-1.5",
  value: "font-semibold text-slate-900 text-right capitalize",
  badge: "inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700 border border-slate-200/60",

  // Pricing Callout Section
  divider: "my-4 border-slate-100",
  totalRow: "flex items-baseline justify-between pt-2",
  totalLabel: "text-base font-bold text-slate-900",
  totalPrice: "text-2xl font-extrabold text-emerald-600 tracking-tight",
  disclaimer: "mt-2.5 text-[11px] leading-relaxed text-slate-400 font-normal",

  // Outstation / Custom Quote Box
  quoteCard: "mt-3 rounded-xl border border-amber-200/80 bg-amber-50/60 p-4 text-amber-900 shadow-xs animate-in fade-in-50 duration-200",
  quoteTitle: "flex items-center gap-2 text-sm font-bold text-amber-950",
  quoteText: "mt-1.5 text-xs text-amber-800/90 leading-relaxed",
  quoteHighlight: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-200",
};

export default priceSummaryToken;