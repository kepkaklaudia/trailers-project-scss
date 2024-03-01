"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionSpringProps {
  children: ReactNode;
}

export const MotionSpring: React.FC<MotionSpringProps> = ({ children }) => {
  const initial = { y: 150 };
  const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 2,
  };
  const whileInView = {
    y: 0,
  };
  const viewport = {
    once: true,
    amount: 0.3,
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
