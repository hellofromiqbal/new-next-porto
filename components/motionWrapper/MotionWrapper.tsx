"use client";

import { motionProps } from "@/lib/motion/motionProps";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionWrapper({
  children,
  offsetX = 0,
  offsetY = 0,
  duration = 0.5,
  delay = 0.3,
  className = ""
}: {
  children: ReactNode;
  offsetX?: number;
  offsetY?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      aria-hidden={false}
      {...motionProps(offsetX, offsetY, duration, delay)}
    >
      {children}
    </motion.div>
  );
}