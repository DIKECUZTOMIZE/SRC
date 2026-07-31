export const imageToken = {
  /* Wrapper */
  wrapper:
    "relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[var(--color-bg-secondary)]",

  /* Image */
  image:
    "block h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105",

  /* Placeholder */
  placeholder:
    "flex h-full min-h-[180px] w-full items-center justify-center bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-sm",

  /* Loading Skeleton */
  loading:
    "absolute inset-0 animate-pulse bg-[var(--color-bg-secondary)]",

  /* Dark Gradient Overlay */
  overlay:
    "absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent",

  /* Top Left Badge */
  badge:
    "absolute left-2 top-2 z-10 sm:left-3 sm:top-3",

  /* Top Right Action */
  action:
    "absolute right-2 top-2 z-10 sm:right-3 sm:top-3",

  /* Bottom Content */
  footer:
    "absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4",

  /* Error State */
  error:
    "flex h-full min-h-[180px] items-center justify-center bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-secondary)]",
};

export default imageToken;