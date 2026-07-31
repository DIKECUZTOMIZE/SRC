export const colors = {
  // Primary Accent States
  primary: {
    DEFAULT: "var(--color-primary)",
    hover: "var(--color-primary-hover)",
    // Fallback if active state isn't defined separately
    active: "var(--color-primary-hover)",
  },

  // Surfaces & Backgrounds
  background: {
    primary: "var(--color-bg-primary)",
    secondary: "var(--color-bg-secondary)",
  },

  // Content & Typography Colors
  text: {
    primary: "var(--color-text-primary)",
    secondary: "var(--color-text-secondary)",
  },

  // Borders
  border: "var(--color-border)",

  // Neutral Scale
  neutral: {
    50: "var(--color-bg-secondary)",
    100: "var(--color-border)",
    500: "var(--color-text-secondary)",
    900: "var(--color-text-primary)",
  },

  // System Statuses
  status: {
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)",
    info: "#0284c7", // Sky-600 default
  },
};