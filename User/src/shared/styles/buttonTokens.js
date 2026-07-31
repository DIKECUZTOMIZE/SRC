export const buttonTokens = {
  base:
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",

  variants: {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-sm hover:shadow-md",

    secondary:
      "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-border)]/50",

    outline:
      "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]",

    ghost:
      "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]",

    danger:
      "bg-[var(--color-danger)] text-white hover:opacity-90 shadow-sm",

    success:
      "bg-[var(--color-success)] text-white hover:opacity-90 shadow-sm",

    warning:
      "bg-[var(--color-warning)] text-black hover:opacity-90 shadow-sm",

    info:
      "bg-sky-500 text-white hover:bg-sky-600 shadow-sm",

    light:
      "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]",

    dark:
      "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:opacity-90",

    link:
      "p-0 bg-transparent text-[var(--color-primary)] hover:underline active:scale-100",

    gradient:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white shadow-md hover:opacity-95",
  },


  sizes: {

    xs:
      "px-2.5 py-1 text-xs rounded-[var(--radius-sm)] min-h-8",

    sm:
      "px-3 py-1.5 text-xs rounded-[var(--radius-md)] min-h-9",

    md:
      "px-4 py-2 text-sm rounded-[var(--radius-md)] min-h-10",

    lg:
      "px-5 py-2.5 text-base rounded-[var(--radius-lg)] min-h-12",

    xl:
      "px-6 py-3 text-lg rounded-[var(--radius-lg)] min-h-14",


    icon:
      "w-10 h-10 p-0 rounded-full flex items-center justify-center shrink-0",
  },
};

export default buttonTokens;