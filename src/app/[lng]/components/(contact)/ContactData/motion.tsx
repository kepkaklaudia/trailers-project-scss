"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionHoverProps {
  children: ReactNode;
  className: string;
}

export const MotionHover: React.FC<MotionHoverProps> = ({
  children,

  className,
}) => {
  const whileHover = {
    translateX: "20px",
    translateY: "-10px",
  };

  const transition = { type: "spring", stiffness: 80 };

  return (
    <>
      <motion.div
        className={className}
        transition={transition}
        whileHover={whileHover}
      >
        {children}
      </motion.div>
    </>
  );
};
