"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MotionScaleProps {
  children: ReactNode;
}

export const MotionScale: React.FC<MotionScaleProps> = ({ children }) => {
  const whileHover = {
    scale: 1.05,
  };

  const transition = { type: "spring", stiffness: 80 };

  return (
    <>
      <AnimatePresence>
        <motion.div transition={transition} whileHover={whileHover}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
