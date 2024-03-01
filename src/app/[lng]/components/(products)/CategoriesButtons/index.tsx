import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CategoryButton } from "@/app/[lng]/components/(common)/CategoryButton";
import { categories } from "@/app/[lng]/components/(common)/CategoryButton/categoriesData";
import styles from "@/app/[lng]/components/(products)/CategoriesButtons/categoriesButtons.module.scss";

interface CategoriesButtonsProps {
  category: string;
}

const CategoriesButtons: React.FC<CategoriesButtonsProps> = ({
  category: pageCategory,
}) => {
  const t = useTranslations("products.categoriesButtons");

  return (
    <>
      <div className={styles.buttons}>
        {categories.map((category, index) => (
          <CategoryButton
            boxShadow="12px 12px 10px rgba(0, 0, 0, 0.4)"
            key={index}
            category={category.path}
            titleKey={category.titleKey}
            activeCategory={pageCategory === category.path}
            additionalBackgroundClass={styles.background}
            additionalLinkClass={styles.link}
          />
        ))}
      </div>
      <Link
        href="/products/all"
        className={pageCategory === "all" ? styles.all__active : styles.all}
      >
        {t("Show all")}
      </Link>
    </>
  );
};

export default CategoriesButtons;
