export const typography = {
  // System Font Stacks (Native Performance)
  fontFamily: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // Mobile-Optimized Responsive Font Sizes (Higher minimums for mobile readability)
  fontSize: {
    xs: "clamp(0.75rem, 2.5vw, 0.813rem)",     // Mobile pe min 12px
    sm: "clamp(0.875rem, 3vw, 0.938rem)",      // Mobile pe min 14px
    base: "clamp(0.938rem, 3.5vw, 1.063rem)",  // Mobile pe min ~15px
    lg: "clamp(1.063rem, 4vw, 1.188rem)",     // Mobile pe min ~17px
    xl: "clamp(1.188rem, 4.5vw, 1.313rem)",   // Mobile pe min ~19px
    "2xl": "clamp(1.313rem, 5vw, 1.625rem)",   // Mobile pe min ~21px
    "3xl": "clamp(1.5rem, 6vw, 2rem)",         // Heading
    "4xl": "clamp(1.875rem, 7vw, 2.375rem)",   // Hero Subtitle
    "5xl": "clamp(2.25rem, 8vw, 3rem)",        // Hero Title
  },

  // Font Weight Scale
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // Proportional Line Heights
  lineHeight: {
    none: "1",
    tight: "1.2",
    snug: "1.35",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Semantic Typography Classes (Mobile-First Utility Strings)
  semantic: {
    h1: "text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight leading-tight",
    h2: "text-xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight leading-snug",
    h3: "text-lg sm:text-2xl font-semibold text-[var(--color-text-primary)] leading-snug",
    body: "text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed",
    bodyMuted: "text-xs sm:text-sm text-[var(--color-text-secondary)] leading-normal",
    caption: "text-[11px] sm:text-xs text-[var(--color-text-secondary)] leading-normal",
  },
};

export default typography;