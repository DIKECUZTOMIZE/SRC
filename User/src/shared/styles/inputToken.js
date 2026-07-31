export const inputTokens = {
  // Container wrapper
  container: "w-full",

  // Label styling mapped to CSS Variables
  label:
    "block text-[10px] font-extrabold text-[var(--color-text-secondary)] uppercase tracking-widest mb-1.5",
  requiredStar: "ml-1 text-[var(--color-danger)]",

  // Relative Input Wrapper
  wrapper: "relative flex items-center w-full",

  // Base input mapped with CSS Variables
  base: "w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none transition-fast text-base sm:text-sm font-medium",

  // Sizes with Touch-Target Standards
  sizes: {
    sm: "min-h-[38px] px-3 rounded-[var(--radius-sm)]",
    md: "min-h-[44px] px-3.5 rounded-[var(--radius-md)]", // Mobile Safe Touch Standard
    lg: "min-h-[52px] px-4 rounded-[var(--radius-lg)]",
  },

  // State Variants
  states: {
    default:
      "focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/50",
    error:
      "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-2 focus:ring-[var(--color-danger)]/20",
    disabled:
      "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]/50 cursor-not-allowed opacity-70",
  },

  // Icon Padding Classes
  withIconLeft: "pl-10",
  withIconRight: "pr-10",

  // Icon Positioning & Styling
  iconLeft:
    "absolute left-3.5 text-[var(--color-text-secondary)] pointer-events-none w-4 h-4 flex items-center justify-center shrink-0 z-10",
  iconRight:
    "absolute right-3.5 text-[var(--color-text-secondary)] w-4 h-4 flex items-center justify-center shrink-0 z-10",

  // Helper & Error Message Text
  errorText: "mt-1 text-[10px] font-bold text-[var(--color-danger)]",
  helperText: "mt-1 text-[10px] font-medium text-[var(--color-text-secondary)]",
};