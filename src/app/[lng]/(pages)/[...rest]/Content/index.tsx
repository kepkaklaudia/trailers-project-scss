"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "@/app/[lng]/(pages)/[...rest]/Content/content.module.scss";

export const Content = () => {
  const t = useTranslations("notFound");
  const locale = useLocale();

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 404, { duration: 1 });

    return animation.stop;
  }, []);

  return (
    <>
      <div className={styles.container}>
        <motion.h1 className={styles.header}>{rounded}</motion.h1>
      </div>
      <h2 className={styles.title}>{t("Page not found")}</h2>
      <Link className={styles.link} href={`/${locale}/`}>
        {t("Back to main page")}
      </Link>
    </>
  );
};
