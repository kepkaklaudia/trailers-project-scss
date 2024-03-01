"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card } from "@/app/[lng]/components/(downloads)/MarketingMaterials/Card";
import styles from "@/app/[lng]/components/(downloads)/MarketingMaterials/marketingMaterials.module.scss";

export const MarketingMaterials = () => {
  const t = useTranslations("downloads.marketingMaterials");

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={styles.wrapper}
    >
      <Card
        imageSrc={"/assets/downloads/trailer.svg"}
        paragraphText={t("Manuals")}
      />
      <Card
        imageSrc={"/assets/downloads/trailer.svg"}
        paragraphText={t("Product cards")}
      />
      <Card
        imageSrc={"/assets/downloads/trailer.svg"}
        paragraphText={t("Flyers")}
      />
      <Card
        imageSrc={"/assets/downloads/trailer.svg"}
        paragraphText={t("Images")}
      />
    </motion.div>
  );
};
