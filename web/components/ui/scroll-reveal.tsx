"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  direction = "up",
  distance = 50
}: ScrollRevealProps) {
  const getInitialStyle = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: distance };
      case "right": return { opacity: 0, x: -distance };
      default: return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitialStyle()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom ease-out function
      }}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
}
