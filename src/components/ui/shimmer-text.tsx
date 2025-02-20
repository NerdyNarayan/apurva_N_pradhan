"use client";
import React, { useMemo, type JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TextShimmerProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

export function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 3,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements,
  );

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);
  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#444444] [--base-gradient-color:#000]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        "dark:[--base-color:#cccccc] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className,
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}
// import { cn } from "@/lib/utils";
//
// export default function ShimmerText({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <span className={cn("relative w-fit font-bold text-primary/80", className)}>
//       {children}
//       <span className="animate-shine absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent mix-blend-screen"></span>
//     </span>
//   );
// }
