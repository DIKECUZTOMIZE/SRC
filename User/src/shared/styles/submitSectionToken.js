export const submitSectionToken = {
  // Sticky or Bottom Actions Container
  container:
    "sticky bottom-0 z-10 mt-6 rounded-[var(--radius-md,10px)] border border-sky-100 dark:border-sky-900/50 bg-white/95 dark:bg-slate-900/95 p-3.5 sm:p-4 backdrop-blur-md shadow-lg transition-all duration-200",

  actions: "flex flex-col sm:flex-row items-center justify-between gap-3",

  // Left Hint Text
  hintText:
    "flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-200 font-medium",

  hintIcon: "h-3.5 w-3.5 text-amber-500 shrink-0",

  // Button Action Group
  buttonGroup: "w-full sm:w-auto flex items-center justify-end gap-2.5",

  cancelBtn:
    "touch-44 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md border border-slate-300 dark:border-slate-700 transition-colors",

  submitBtn:
    "touch-44 px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 rounded-md shadow-2xs hover:shadow-xs transition-all",
};

export default submitSectionToken;