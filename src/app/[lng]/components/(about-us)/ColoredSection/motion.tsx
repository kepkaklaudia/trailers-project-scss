"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MotionScrollInProps {
  children: ReactNode;
}

export const MotionScrollIn: React.FC<MotionScrollInProps> = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [-200, -100, -50, -50]
  );

  return (
    <motion.div ref={ref} style={{ x: xPosition }}>
      <motion.div> {children} </motion.div>
    </motion.div>
  );
};
