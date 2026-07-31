// Optimized for Mobile Touch Targets & Proportional Layout Spacing
export const spacing = {
  // Raw Rem Value Scale
  0: "0px",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px (Ideal comfortable touch height)
  16: "4rem", // 64px
  20: "5rem", // 80px

  // Explicit Mobile Touch Target Helpers
  touch: {
    min: "2.75rem", // 44px (iOS / Android Minimum Target)
    comfortable: "3rem", // 48px (Material Design Recommended)
  },

  // Component Semantic Spacing Helpers
  semantic: {
    cardPadding: "p-4 sm:p-6",
    sectionGap: "space-y-6 sm:space-y-8",
    formGap: "space-y-4 sm:space-y-5",
    inlineGap: "gap-2 sm:gap-3",
    containerPadding: "px-4 sm:px-6 lg:px-8",
  },

  // Pre-compiled Tailwind Class Helpers
  classes: {
    touchMin: "min-h-[44px] min-w-[44px]",
    touchComfortable: "min-h-[48px] min-w-[48px]",
  },
};