export const sectionHeader = {
  // Main Section Header Wrapper with Responsive Border & Padding
  wrapper:
    "mb-6 sm:mb-8 flex flex-col gap-4 sm:gap-5 border-b border-[var(--color-border)] pb-4 sm:pb-5 lg:flex-row lg:items-end lg:justify-between transition-colors duration-200",

  // Section Badge / Tag Indicator
  badge:
    "inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-bold text-[var(--color-primary)] shrink-0 w-fit leading-none",

  // Text Content Grouping Slot
  content: "flex-1 min-w-0",

  // Responsive Title Typography (Proportional scaling across mobile to desktop)
  title:
    "mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight leading-tight",

  // Highlighted Subtitle / Accent Span
  subtitle:
    "text-[var(--color-primary)] font-semibold inline-block",

  // Readable Section Description
  description:
    "mt-2 max-w-2xl text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed",

  // Action / Button Slot (e.g., "View All", "Filter" buttons on the right side)
  actions:
    "flex items-center gap-2 sm:gap-3 shrink-0 pt-2 lg:pt-0 w-full sm:w-auto",
};