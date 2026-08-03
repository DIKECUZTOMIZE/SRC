export const drawerToken = {
  // Smooth backdrop with subtle blur
  overlay:
    "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300",

  // Responsive: Bottom Sheet on mobile (<md), Right Slide-Over on desktop (md+)
  wrapper:
    "fixed z-50 flex flex-col bg-[var(--color-bg-primary,white)] dark:bg-[var(--color-bg-primary,slate-900)] shadow-2xl transition-all duration-300 ease-in-out inset-x-0 bottom-0 max-h-[85vh] rounded-t-3xl md:inset-x-auto md:top-0 md:bottom-0 md:right-0 md:h-full md:max-h-full md:rounded-t-none md:rounded-l-3xl border-t border-slate-200/50 dark:border-slate-800/50 md:border-t-0 md:border-l",

  // Default width for desktop (mobile handles width automatically via inset-x-0)
  width: "md:w-96",

  // Visual drag handle for mobile bottom sheets
  dragHandle:
    "w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto my-2.5 md:hidden shrink-0",

  header:
    "flex items-center justify-between px-6 py-4 border-b border-[var(--color-border,slate-200/80)] dark:border-[var(--color-border,slate-800)] shrink-0",

  title:
    "text-lg font-bold tracking-tight text-[var(--color-text-primary,slate-900)] dark:text-[var(--color-text-primary,white)]",

  closeButton:
    "flex items-center justify-center rounded-full p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95 cursor-pointer",

  body:
    "flex-1 overflow-y-auto p-6 text-[var(--color-text-primary,slate-700)] dark:text-[var(--color-text-primary,slate-300)] overscroll-contain",
};

export default drawerToken;