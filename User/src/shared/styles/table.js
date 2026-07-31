export const table = {
  // Mobile Horizontal Touch Scroll Wrapper (Bleeds to edges on mobile with -mx-4)
  wrapper:
    "w-full overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-thin scroll-smooth touch-pan-x select-none sm:select-auto",

  // Base Table Element
  base: "w-full text-left text-xs sm:text-sm text-[var(--color-text-secondary)] border-collapse min-w-[600px] sm:min-w-full align-middle",

  // Header Row Wrapper
  header:
    "bg-[var(--color-bg-secondary)] uppercase text-[10px] sm:text-xs font-bold tracking-wider text-[var(--color-text-secondary)] border-b border-[var(--color-border)] sticky top-0 z-10",

  // Header Cell
  headerCell:
    "px-3 py-3 sm:px-6 sm:py-3.5 whitespace-nowrap font-semibold select-none",

  // Table Body Container
  body: "divide-y divide-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]",

  // Table Row Interactive States (Desktop Hover + Mobile Active Scale/Highlight)
  row: "transition-colors duration-150 [@media(hover:hover)]:hover:bg-[var(--color-bg-secondary)]/80 active:bg-[var(--color-bg-secondary)]",

  // Alternating Row State (Zebra Striping Variant)
  rowStriped:
    "even:bg-[var(--color-bg-secondary)]/40 transition-colors duration-150 [@media(hover:hover)]:hover:bg-[var(--color-bg-secondary)]",

  // Standard Table Cell
  cell: "px-3 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-[var(--color-text-primary)] align-middle",

  // Action Cell Slot (Right-aligned buttons/menu slot)
  cellActions:
    "px-3 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-right font-medium shrink-0",

  // Empty Data State Layout
  emptyState:
    "px-4 py-8 text-center text-xs sm:text-sm text-[var(--color-text-secondary)]",
};