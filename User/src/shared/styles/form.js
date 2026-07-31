export const form = {
  // Form Field Wrapper
  group: "space-y-1.5 mb-4 sm:mb-5 w-full",

  // Label Styling
  label:
    "block text-sm font-semibold text-[var(--color-text-primary)] select-none",

  // Required Star Badge
  required: "text-[var(--color-danger)] ml-0.5",

  // Input Field (Prevents iOS Safari auto-zoom on focus)
  input: `
    w-full
    min-h-[44px]
    px-3.5
    text-base sm:text-sm
    rounded-lg
    border
    border-[var(--color-border)]
    bg-[var(--color-bg-primary)]
    text-[var(--color-text-primary)]
    placeholder:text-[var(--color-text-secondary)]/60
    focus:outline-none
    focus:border-[var(--color-primary)]
    focus-visible:ring-2
    focus-visible:ring-[var(--color-primary)]/20
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:bg-[var(--color-bg-secondary)]
    transition-all
    duration-150
  `,

  // Textarea Styling
  textarea: `
    w-full
    min-h-[120px]
    p-3.5
    text-base sm:text-sm
    rounded-lg
    border
    border-[var(--color-border)]
    bg-[var(--color-bg-primary)]
    text-[var(--color-text-primary)]
    placeholder:text-[var(--color-text-secondary)]/60
    focus:outline-none
    focus:border-[var(--color-primary)]
    focus-visible:ring-2
    focus-visible:ring-[var(--color-primary)]/20
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:bg-[var(--color-bg-secondary)]
    resize-y
    transition-all
    duration-150
  `,

  // Status-Specific Border Overrides
  states: {
    error: "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)]/20",
    success: "border-[var(--color-success)] focus:border-[var(--color-success)] focus-visible:ring-[var(--color-success)]/20",
  },

  // Helper Description
  helperText: "text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1.5 leading-normal",

  // Error Message Block
  errorText: `
    text-xs sm:text-sm
    text-[var(--color-danger)]
    mt-1.5
    flex items-center gap-1.5
    font-medium
    animate-fade-in
  `,
};