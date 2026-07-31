export const modalToken = {
    /* Overlay */
    overlay:
        "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",

    /* Container */
    container:
        "relative w-full max-w-lg overflow-hidden rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-2xl",

    /* Sizes */
    sizes: {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-7xl h-[95vh]",
    },

    /* Header */
    header:
        "flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4",

    title:
        "text-lg sm:text-xl font-bold text-[var(--color-text-primary)]",

    subtitle:
        "mt-1 text-sm text-[var(--color-text-secondary)]",

    /* Close Button */
    closeButton:
        "flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-bg-secondary)]",

    /* Body */
    body:
        "max-h-[70vh] overflow-y-auto px-5 py-4",

    /* Footer */
    footer:
        "flex flex-col-reverse gap-3 border-t border-[var(--color-border)] px-5 py-4 sm:flex-row sm:justify-end",

    /* Animation */
    enter:
        "animate-in fade-in zoom-in-95 duration-200",

    exit:
        "animate-out fade-out zoom-out-95 duration-150",
};

export default modalToken;