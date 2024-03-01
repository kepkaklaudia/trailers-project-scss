import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./card.module.scss";

interface CardProps {
  imageSrc: string;
  paragraphText: string;
}

export const Card: React.FC<CardProps> = ({ imageSrc, paragraphText }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={item} className={styles.card}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt=""
        width={150}
        height={150}
      />
      <p className={styles.paragraph}>{paragraphText}</p>
    </motion.div>
  );
};
