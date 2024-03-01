"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(about-us)/CategoriesSection/CategoriesButtons/categoriesButtons.module.scss";
import { CategoryButton } from "@/app/[lng]/components/(common)/CategoryButton";
import { categories } from "@/app/[lng]/components/(common)/CategoryButton/categoriesData";

const CategoriesButtons = () => {
  const t = useTranslations("products.categoriesButtons");

  return (
    <div className={styles.buttons}>
      {categories.map((category, index) => (
        <CategoryButton
          boxShadow="12px 12px 10px rgba(0, 0, 0, 0.2)"
          key={index}
          titleKey={category.titleKey}
          category={category.path}
          additionalBackgroundClass={styles.background}
          additionalLinkClass={styles.link}
        />
      ))}
    </div>
  );
};

export default CategoriesButtons;
