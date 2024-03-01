"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MotionScrollOutProps {
  children: ReactNode;
}

interface MotionAppearProps {
  firstItem: ReactNode;
  secondItem: ReactNode;
  thirdItem: ReactNode;
}

export const MotionScrollOut: React.FC<MotionScrollOutProps> = ({
  children,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const xPosition = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 100]);

  return (
    <motion.div ref={ref} style={{ x: xPosition }}>
      <motion.div>{children} </motion.div>
    </motion.div>
  );
};

export const MotionAppear: React.FC<MotionAppearProps> = ({
  firstItem,
  secondItem,
  thirdItem,
}) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>{firstItem}</motion.div>
        <motion.div variants={item}>{secondItem}</motion.div>
        <motion.div variants={item}>{thirdItem}</motion.div>
      </motion.div>
    </>
  );
};
