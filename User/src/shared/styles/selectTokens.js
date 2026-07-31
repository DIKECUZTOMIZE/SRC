export const selectTokens = {
  container: "w-full",
  
  // Label Styling
  label:
    "block text-[10px] font-extrabold text-[var(--color-text-secondary)] uppercase tracking-widest mb-1.5",
  requiredStar: "ml-1 text-[var(--color-danger)]",

  // Wrapper for Icon & Chevron Positioning
  inputWrapper: "relative flex items-center",

  // Icons
  leftIcon: "absolute left-3.5 text-[var(--color-text-secondary)] pointer-events-none z-10",
  chevronIcon: "absolute right-3.5 text-[var(--color-text-secondary)] pointer-events-none z-10",

  // Core Select Element
  select:
    "w-full appearance-none bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)]/30 focus:bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 rounded-[var(--radius-md)] py-2 text-sm font-medium text-[var(--color-text-primary)] transition-fast outline-none disabled:opacity-60 disabled:cursor-not-allowed pr-10 cursor-clickable touch-44",

  // Padding variants for Left Icon support
  hasLeftIcon: "pl-10",
  noLeftIcon: "pl-3.5",

  // Error States
  errorBorder:
    "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/20",

  // Message / Error Text
  errorText: "mt-1 text-[10px] font-bold text-[var(--color-danger)]",
  helperText: "mt-1 text-[10px] font-medium text-[var(--color-text-secondary)]",

  // Option dropdown items for dark/light themes
  option: "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]",
};