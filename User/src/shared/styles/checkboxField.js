    // checkboxToken.js

    const checkboxToken = {
    wrapper: "space-y-2",

    container:
        "group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 cursor-pointer hover:border-blue-500 hover:bg-slate-50",

    disabled:
        "opacity-60 cursor-not-allowed pointer-events-none",

input:
"mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-2 border-slate-300 bg-white text-blue-600 accent-blue-600 focus:ring-2 focus:ring-blue-500",
    content: "flex flex-1 flex-col",

    label:
        "text-sm font-semibold text-slate-900 leading-5 select-none",

    helper:
        "mt-1 text-xs leading-5 text-slate-500",

    error:
        "mt-1 text-xs font-medium leading-5 text-red-600",

    required:
        "ml-1 text-red-500",

    states: {
        checked:
        "border-blue-500 bg-blue-50",

        error:
        "border-red-300 bg-red-50",

        focus:
        "ring-2 ring-blue-500 ring-offset-2",

        hover:
        "hover:shadow-sm",

        active:
        "scale-[0.99]",
    },
    };

    export default checkboxToken;