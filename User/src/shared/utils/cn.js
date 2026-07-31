import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...classes) {
  return twMerge(clsx(classes));
}