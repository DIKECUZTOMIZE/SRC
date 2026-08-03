export const tripDetailsToken = {
    section: "space-y-6",

    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",

    // Notice card layout (placed outside the 2-col grid to prevent UI breaks)
    noticeCard:
        "col-span-full mt-2 rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-amber-900 shadow-xs",

    noticeTitle: "font-semibold text-amber-900 flex items-center gap-2 text-sm sm:text-base",

    noticeText: "mt-1.5 text-xs sm:text-sm text-amber-800 leading-relaxed",

    // Route indicator banner
    routeCard:
        "col-span-full mt-2 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-slate-800 shadow-xs",

    routeTitle: "font-semibold text-slate-900 text-sm",

    routeText: "mt-1 text-xs sm:text-sm text-slate-600 font-medium",

    // Time field wrapper with AM/PM toggle select styling
    timeWrapper: "flex items-center gap-2",
    ampmSelect:
        "w-24 shrink-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20",
};

export default tripDetailsToken;