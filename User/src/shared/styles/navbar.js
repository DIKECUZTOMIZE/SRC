export const navbar = {
  // Base header wrapper with Z-Index Header scale (200) & glassmorphism
  base: "w-full bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)] sticky top-0 z-[200] transition-colors duration-200",

  // Responsive Container (Syncs with layout.container)
  container:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4",

  // Brand / Logo Wrapper
  brand:
    "flex items-center gap-2.5 font-bold text-base sm:text-lg text-[var(--color-text-primary)] shrink-0 select-none cursor-pointer",

  // Desktop Navigation Link Group
  navGroup: "hidden md:flex items-center gap-6",

  // Nav Link Base Style
  navLink:
    "text-sm font-medium text-[var(--color-text-secondary)] [@media(hover:hover)]:hover:text-[var(--color-text-primary)] transition-colors py-1 relative",

  // Active Nav Link Variant (For current route highlight)
  navLinkActive:
    "text-[var(--color-primary)] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--color-primary)] after:rounded-full",

  // Mobile Hamburger Button (Accessible 44px Touch Target)
  mobileMenuBtn:
    "md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-text-primary)] [@media(hover:hover)]:hover:bg-[var(--color-bg-secondary)] active:scale-95 transition-all rounded-lg shrink-0 cursor-pointer",

  // Action Buttons Group (Login / Signup / Theme Toggle Slot)
  actions: "flex items-center gap-2 sm:gap-3 shrink-0",
};