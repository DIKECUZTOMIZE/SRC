export const badgeToken = {

  base:
    "inline-flex items-center justify-center font-medium shrink-0 max-w-full truncate transition-colors",

  sizes: {
    xs: "px-2 py-1 text-xs",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  },

  rounded: {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },

  variants: {
    default:
      "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",

    primary:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300",

    success:
      "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",

    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",

    danger:
      "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",

    info:
      "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
  },

  dot:
    "mr-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0",

  pulse:
    "animate-pulse",

  states: {

    clickable:
      "cursor-pointer min-h-8 hover:opacity-90 active:scale-95",

    disabled:
      "opacity-50 cursor-not-allowed pointer-events-none",

  },

};

 