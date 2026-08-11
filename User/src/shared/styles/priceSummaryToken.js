export const priceSummaryToken = {
  // Card Wrapper & Layout (Dynamic Dark/Light theme with CSS variables)
  card: "mt-6 overflow-hidden rounded-[var(--radius-lg,16px)] border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-primary,#ffffff)] shadow-[var(--shadow-md)] backdrop-blur-md transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-primary)]/30",
  
  header: "border-b border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-secondary,#f8fafc)]/60 px-6 py-5 flex items-center justify-between",
  
  title: "text-lg font-bold tracking-tight text-[var(--color-text-primary,#0f172a)] flex items-center gap-2",
  
  description: "mt-1 text-xs font-medium text-[var(--color-text-secondary,#475569)]",
  
  body: "p-6 space-y-4",

  // Key-Value Rows with smooth hover effect
  row: "flex items-center justify-between py-1.5 text-sm rounded-lg px-2 -mx-2 transition-colors duration-150 hover:bg-[var(--color-bg-secondary,#f8fafc)]/70",
  
  label: "font-medium text-[var(--color-text-secondary,#475569)] flex items-center gap-2 text-xs sm:text-sm",
  
  value: "font-semibold text-[var(--color-text-primary,#0f172a)] text-right capitalize tracking-tight",
  
  badge: "inline-flex items-center gap-1 rounded-[var(--radius-sm,6px)] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 text-xs font-semibold border border-[var(--color-primary)]/20 shadow-2xs backdrop-blur-xs",

  // Pricing Callout Section
  divider: "my-4 border-t border-[var(--color-border,#e2e8f0)] opacity-80",
  
  totalRow: "flex items-center justify-between pt-2 pb-1",
  
  totalLabel: "text-sm sm:text-base font-bold text-[var(--color-text-primary,#0f172a)] tracking-tight",
  
  totalPrice: "text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent tracking-tight",
  
  disclaimer: "mt-2 text-[11px] leading-relaxed text-[var(--color-text-secondary,#475569)] font-normal opacity-85",

  // High-Contrast Dark Quote Card with Crisp White Text
  quoteCard: "mt-3 rounded-[var(--radius-md,10px)] border border-slate-800 bg-slate-900 dark:bg-slate-950 p-4 text-white shadow-md backdrop-blur-xs animate-fade-in",
  
  quoteTitle: "flex items-center gap-2 text-sm font-bold text-white tracking-wide",
  
  quoteText: "mt-1.5 text-xs text-slate-300 leading-relaxed font-normal",
  
  quoteHighlight: "mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-[var(--radius-sm,6px)] border border-amber-500/30 shadow-2xs",
};

export default priceSummaryToken;