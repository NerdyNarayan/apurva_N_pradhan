import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const staggerContainer = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const fadeInUp = {
  initial: {
    opacity: 0,

    y: 50,
  },
  animate: {
    opacity: 1,

    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
