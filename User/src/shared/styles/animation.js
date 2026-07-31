export const animation = {
  // Transition
  transition: {
    fast: "transition-all duration-150 ease-out",
    normal: "transition-all duration-200 ease-out",
    slow: "transition-all duration-300 ease-in-out",
  },

  // Hover (Desktop Only - Mobile par touch stuck issue fix)
  hover: {
    lift: "[@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-lg transition-all duration-300",
    scale: "[@media(hover:hover)]:hover:scale-105 transition-transform duration-200",
    fade: "[@media(hover:hover)]:hover:opacity-80 transition-opacity duration-200",
  },

  // Active / Touch Feedback (Mobile + Desktop dono ke liye smooth)
  active: {
    press: "active:scale-95 transition-transform duration-100",
  },

  // Focus
  focus: {
    ring: "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
  },

  // Keyframes / Animations (Aapki global CSS ke sath fully synced)
  keyframes: {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    bounce: "animate-bounce",
    pulse: "animate-pulse",
    spin: "animate-spin",
    ping: "animate-ping",
  },

  // Mobile Specific UX Helpers
  mobile: {
    touch: "active:scale-95 touch-manipulation select-none",
    sheet: "fixed inset-x-0 bottom-0 z-50 rounded-t-[20px] bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] animate-slide-up shadow-2xl",
  },
};