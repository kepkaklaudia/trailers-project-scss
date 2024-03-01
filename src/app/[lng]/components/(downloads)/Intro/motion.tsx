"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "@/app/[lng]/components/(downloads)/Intro/intro.module.scss";

interface MotionSpringProps {
  children: ReactNode;
}

export const MotionSpring: React.FC<MotionSpringProps> = ({ children }) => {
  const initial = { y: 550 };
  const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 2,
  };
  const animate = { y: 0 };

  return (
    <motion.div
      initial={initial}
      transition={transition}
      animate={animate}
      className={styles.div}
    >
      {children}
    </motion.div>
  );
};
