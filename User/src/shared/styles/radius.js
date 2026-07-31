export const radius = {
  // Raw Rem Value Scale
  none: "0px",
  sm: "0.25rem", // 4px  - Badges / Tooltips
  md: "0.375rem", // 6px  - Buttons / Inputs (Compact)
  lg: "0.5rem", // 8px  - Inputs / Standard Buttons
  xl: "0.75rem", // 12px - Cards / Dropdowns
  "2xl": "1rem", // 16px - Desktop Modals / Large Cards
  "3xl": "1.5rem", // 24px - Mobile Bottom Sheets / Hero Cards
  full: "9999px", // Pills / Avatars / Badges

  // Pre-compiled Tailwind Utility Class Helpers
  classes: {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  },

  // Component Semantic Radius Mapping
  component: {
    button: "rounded-lg",
    input: "rounded-lg",
    card: "rounded-xl sm:rounded-2xl",
    modal: "rounded-t-3xl sm:rounded-2xl",
    badge: "rounded-full",
    avatar: "rounded-full",
  },
};