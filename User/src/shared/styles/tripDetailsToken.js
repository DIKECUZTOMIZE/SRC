export const tripDetailsToken = {
  // Main Section & Spacing
  section: "space-y-6 text-xs sm:text-sm",

  // Core Responsive Grids
  gridTwoCols: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  gridThreeCols: "grid grid-cols-1 sm:grid-cols-3 gap-4",

  // Conditional Card Containers
  cardContainerTwoCols:
    "grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 shadow-xs",
  cardContainerThreeCols:
    "grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 shadow-xs",

  // Notice Card Layout
  noticeCard:
    "col-span-full mt-2 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/80 dark:bg-amber-950/40 p-4 text-amber-900 dark:text-amber-200 shadow-xs",
  noticeTitle:
    "font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2 text-sm sm:text-base",
  noticeText:
    "mt-1.5 text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed",

  // Route Indicator Banner
  routeCard:
    "col-span-full mt-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-4 text-slate-800 dark:text-slate-200 shadow-xs",
  routeTitle: "font-semibold text-slate-900 dark:text-slate-100 text-sm",
  routeText:
    "mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium",

  // Time Field Wrapper & AM/PM Options
  timeWrapper: "flex items-center gap-2",
  timeInputFlex: "flex-1",
  ampmSelect:
    "w-24 shrink-0 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20",

  // Column Spanning Modifiers
  fullSpan: "sm:col-span-2",
  singleSpan: "",
};

export default tripDetailsToken;