export const listYourCarToken = {
  // Form Main Container & Sticky/Polished Header layout
  container: "max-w-5xl mx-auto space-y-8 p-1 sm:p-2",

  // Sections Wrapper & Card Styling
  sectionWrapper:
    "rounded-[var(--radius-lg,16px)] border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-primary,#ffffff)] p-5 sm:p-7 shadow-[var(--shadow-md)] backdrop-blur-md transition-all duration-300 hover:shadow-[var(--shadow-lg)]",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6",

  sectionSpacing: "space-y-6 sm:space-y-8",

  // Sleek Divider with subtle glow
  divider: "border-t border-[var(--color-border,#e2e8f0)] opacity-70 my-8",

  // Verification & Information Notice Box
  noticeCard:
    "rounded-[var(--radius-md,10px)] border border-blue-500/30 bg-blue-500/10 dark:bg-blue-950/30 p-5 text-blue-900 dark:text-blue-200 shadow-2xs backdrop-blur-xs animate-fade-in",

  noticeTitle:
    "flex items-center gap-2.5 text-base font-bold text-blue-950 dark:text-blue-100 tracking-tight",

  noticeText:
    "mt-2 text-xs sm:text-sm leading-relaxed text-blue-900/80 dark:text-blue-200/80 font-normal",

  // Vehicle Image Upload Grid & Preview Cards
  imageGrid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4.5 mt-3",

  previewCard:
    "relative group overflow-hidden rounded-[var(--radius-md,10px)] border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-secondary,#f8fafc)] transition-all duration-200 hover:scale-[1.02] hover:shadow-md",

  previewImage:
    "h-28 sm:h-32 w-full object-cover rounded-[var(--radius-md,10px)] transition-transform duration-300 group-hover:scale-105",

  // Submit / Bottom Action Bar Container
  submitCard:
    "sticky bottom-0 z-20 mt-8 rounded-[var(--radius-lg,16px)] border border-[var(--color-border,#e2e8f0)] bg-[var(--color-bg-primary,#ffffff)]/90 backdrop-blur-md p-4 sm:p-5 shadow-lg flex items-center justify-between gap-4",

  // Success Confirmation Card
  successCard:
    "rounded-[var(--radius-md,10px)] border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30 p-5 text-emerald-950 dark:text-emerald-100 shadow-2xs backdrop-blur-xs animate-fade-in",

  successTitle:
    "flex items-center gap-2 text-base font-bold text-emerald-900 dark:text-emerald-100",

  successText:
    "mt-1.5 text-xs sm:text-sm text-emerald-800/90 dark:text-emerald-200/90 leading-relaxed",
};

export default listYourCarToken;