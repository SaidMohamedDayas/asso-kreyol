"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { createRevealVariants, revealViewport } from "@/lib/motion";

export default function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration,
  distance,
  amount = revealViewport.amount,
  once = revealViewport.once,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={createRevealVariants({
        variant,
        delay,
        duration,
        distance,
        reduceMotion: shouldReduceMotion,
      })}
    >
      {children}
    </motion.div>
  );
}
