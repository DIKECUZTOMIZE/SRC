export const sidebar = {
  // Mobile Overlay Backdrop (Synced with layout.zIndex.backdrop = 400)
  mobileOverlay:
    "fixed inset-0 z-[400] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300",

  // Sidebar Shell Container (Synced with layout.zIndex.drawer = 300)
  base: "fixed lg:sticky top-0 left-0 z-[300] h-screen w-[280px] sm:w-64 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] flex flex-col border-r border-[var(--color-border)] transition-transform duration-300 ease-in-out shrink-0 select-none",

  // Mobile Slide Drawer States
  mobileClosed: "-translate-x-full lg:translate-x-0",
  mobileOpen: "translate-x-0",

  // Sidebar Header / Brand Slot
  header:
    "h-14 sm:h-16 flex items-center justify-between px-5 border-b border-[var(--color-border)] font-bold text-lg text-[var(--color-text-primary)] shrink-0",

  // Scrollable Sidebar Navigation Items Area
  content:
    "flex-1 overflow-y-auto p-3 space-y-1 hide-scrollbar",

  // Navigation Link / Item Base Style
  item: "flex items-center gap-3 px-3.5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg text-sm font-medium text-[var(--color-text-secondary)] [@media(hover:hover)]:hover:bg-[var(--color-bg-primary)] [@media(hover:hover)]:hover:text-[var(--color-text-primary)] active:scale-[0.98] transition-all touch-manipulation cursor-pointer",

  // Active Navigation Route Item State
  itemActive:
    "bg-[var(--color-primary)]/15 text-[var(--color-primary)] font-semibold border-l-2 border-[var(--color-primary)] pl-3",

  // Sidebar Icon Helper (Left aligned icon)
  itemIcon: "w-5 h-5 shrink-0 text-current",

  // Sidebar Badge/Counter Badge Slot
  itemBadge: "ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]",

  // Sidebar Footer Area (Profile / Logout / Settings Slot)
  footer:
    "p-4 border-t border-[var(--color-border)] mt-auto bg-[var(--color-bg-secondary)] shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom))]",
};