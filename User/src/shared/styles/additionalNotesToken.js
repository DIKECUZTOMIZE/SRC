export const additionalNotesToken = {
  // Main Wrapper
  wrapper: "space-y-3.5 text-xs sm:text-sm",

  // Header & Controls Layout
  topBar: "flex items-center justify-end mb-2",

  // Field Icons styling
  icon: "h-3.5 w-3.5 text-sky-600 dark:text-sky-400 shrink-0",

  // Collapsible Note Card (High-Contrast Clean Theme)
  noteCard:
    "mt-3.5 rounded-[var(--radius-md,10px)] border border-sky-100 dark:border-sky-900/50 bg-slate-50/95 dark:bg-slate-900/90 shadow-2xs overflow-hidden transition-all duration-200",

  // Header Trigger (Clickable)
  noteHeader:
    "flex items-center justify-between gap-2 p-3 sm:p-3.5 cursor-pointer select-none bg-sky-50/70 dark:bg-sky-950/40 hover:bg-sky-100/70 dark:hover:bg-sky-900/50 transition-colors",

  noteTitle:
    "flex items-center gap-2 text-xs font-bold tracking-wider text-sky-900 dark:text-sky-200 uppercase",

  noteIcon: "h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0",

  // Language Switcher Controls
  langButtonGroup:
    "flex items-center gap-0.5 rounded-md bg-white dark:bg-slate-800 p-0.5 border border-sky-200/80 dark:border-sky-800/80",

  langBtn:
    "px-2 py-0.5 text-[10px] font-bold rounded-sm transition-all duration-150",

  activeLangBtn:
    "bg-sky-600 text-white shadow-2xs font-bold",

  inactiveLangBtn:
    "text-slate-700 dark:text-slate-200 hover:text-sky-800 dark:hover:text-white",

  // Note Text Content (Enhanced Readability)
  noteBody:
    "px-3.5 pb-3.5 text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium border-t border-sky-100 dark:border-sky-900/50 bg-white/60 dark:bg-slate-950/20 pt-2.5 mx-3.5",
};

export default additionalNotesToken;