"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionOpacityProps {
  children: ReactNode;
}

export const MotionOpacity: React.FC<MotionOpacityProps> = ({ children }) => {
  const initial = { opacity: 0 };
  const transition = {
    duration: 0.7,
  };
  const whileInView = {
    opacity: 1,
  };
  const viewport = {
    once: true,
    amount: 0.2,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
