"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/app/[lng]/components/(product)/ProductDetails/MotionContent/motionContent.module.scss";

interface MotionContentProps {
  children: ReactNode;
  ownKey: string;
}

export const MotionContent: React.FC<MotionContentProps> = ({
  children,
  ownKey,
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className={styles.container}
          key={ownKey}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
