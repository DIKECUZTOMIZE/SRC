export const textareaToken = {
  /* Textarea Base Styling */
  base: `
    w-full
    min-h-[100px]
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

  /* Validation States */
  states: {
    error:
      "border-[var(--color-danger,#ef4444)] text-red-900 focus:border-[var(--color-danger,#ef4444)] focus-visible:ring-[var(--color-danger,#ef4444)]/15 bg-red-50/20",
    success:
      "border-[var(--color-success,#10b981)] focus:border-[var(--color-success,#10b981)] focus-visible:ring-[var(--color-success,#10b981)]/15 bg-emerald-50/20",
  },

  /* Micro Elements */
  charCount:
    "text-[11px] font-medium text-[var(--color-text-secondary,#94a3b8)] transition-colors duration-200",
  charCountWarning: "text-amber-600 font-semibold",
  charCountError: "text-red-500 font-bold animate-pulse",
  footerWrapper: "flex items-center justify-between mt-1 px-0.5 text-xs",
};

export default textareaToken;