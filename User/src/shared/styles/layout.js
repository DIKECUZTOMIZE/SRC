export const layout = {
  // Breakpoints synced with standard Tailwind CSS defaults
  breakpoints: {
    sm: "640px", // Mobile Landscape / Small Tablets
    md: "768px", // Tablets
    lg: "1024px", // Laptops / Desktops
    xl: "1280px", // Large Monitors
    "2xl": "1536px", // Ultra-wide Displays
  },

  // Z-Index Stacking Hierarchy (Prevents overlapping UI bugs)
  zIndex: {
    base: 0,
    dropdown: 50,
    sticky: 100,
    header: 200,
    drawer: 300,
    backdrop: 400,
    modal: 500,
    toast: 600,
    tooltip: 700,
  },

  // Responsive Container Utilities
  container: {
    // Complete ready-to-use container class
    base: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    
    // Individual class splits for custom layouts
    mobilePadding: "px-4 sm:px-6 lg:px-8",
    maxWidth: "max-w-7xl mx-auto",
    
    // Narrow layout for Forms, Blogs, or Settings pages
    narrow: "w-full max-w-4xl mx-auto px-4 sm:px-6",
  },

  // Mobile Safe Areas (Prevents notch & home bar overlap)
  safeArea: {
    top: "pt-[env(safe-area-inset-top)]",
    bottom: "pb-[env(safe-area-inset-bottom)]",
    all: "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]",
  },
};