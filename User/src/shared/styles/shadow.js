export const shadow = {
  // Raw CSS Variables mapped to globals.css (Handles Light + Dark Mode automatically)
  none: "none",
  sm: "var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05))",
  base: "var(--shadow-sm, 0 1px 3px 0 rgba(0, 0, 0, 0.1))",
  md: "var(--shadow-md, 0 4px 12px -2px rgba(0, 0, 0, 0.08))",
  lg: "var(--shadow-lg, 0 12px 28px -4px rgba(0, 0, 0, 0.12))",

  // Mobile Bottom-Sheet Upward Elevation Shadow
  sheet: "0 -10px 25px -5px rgba(0, 0, 0, 0.15), 0 -4px 10px -2px rgba(0, 0, 0, 0.05)",

  // Pre-compiled Tailwind Classes for Inline Usage
  classes: {
    none: "shadow-none",
    sm: "shadow-[var(--shadow-sm)]",
    md: "shadow-[var(--shadow-md)]",
    lg: "shadow-[var(--shadow-lg)]",
    sheet: "shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.15)]",
  },
};