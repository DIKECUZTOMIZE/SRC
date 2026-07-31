export const filterPanelToken = {
  wrapper:
    "p-3.5 sm:p-5 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl shadow-sm mb-6 transition-colors duration-200",

  header:
    "flex items-center justify-between gap-3 pb-3 sm:pb-3.5 mb-4 sm:mb-5 border-b border-[var(--color-border)]",

  titleBadge:
    "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] select-none",

  titleIcon:
    "w-6 h-6 rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 transition-transform active:scale-95 sm:hover:scale-105",

  // Grid: 1 col on Mobile, 2 on Tablet, 4 on Desktop
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-end",

  searchCol: "col-span-1",
  typeCol: "col-span-1",
  seatsCol: "col-span-1",
  budgetCol: "col-span-1 flex flex-col justify-end w-full",

  // Labels & Values
  labelGroup: "flex items-center justify-between gap-2 mb-1.5 sm:mb-2 min-h-[20px]",
  label:
    "text-xs font-semibold text-[var(--color-text-secondary)] tracking-wide select-none",
  badgeValue:
    "text-xs font-bold text-[var(--color-primary)] px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 shadow-xs whitespace-nowrap",

 
  // Mobile-First Range Slider Wrapper
  rangeWrapper:
    "flex flex-col justify-center h-11 sm:h-10 px-3 sm:px-2 bg-[var(--color-bg-secondary)]/60 sm:bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] rounded-xl sm:rounded-lg transition-colors focus-within:border-[var(--color-primary)] active:border-[var(--color-primary)] touch-none",

  // Mobile Touch-Friendly Input Track & Thumb
  rangeInput:
  "w-full h-2 sm:h-1.5 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-[var(--color-primary)]/80 to-[var(--color-primary)]/20 focus:outline-none " +
    /* Webkit (Chrome/Safari/iOS) */
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 sm:[&::-webkit-slider-thumb]:w-4 sm:[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--color-primary)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:active:scale-125 sm:[&::-webkit-slider-thumb]:hover:scale-125 " +
    /* Firefox */
    "[&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 sm:[&::-moz-range-thumb]:w-4 sm:[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--color-primary)] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-md",

  // Mobile Text Improved Range Limits
  rangeLimits:
    "flex items-center justify-between text-xs sm:text-[11px] font-medium text-[var(--color-text-secondary)] mt-1.5 px-0.5 select-none tracking-tight tabular-nums",
}

export default filterPanelToken;