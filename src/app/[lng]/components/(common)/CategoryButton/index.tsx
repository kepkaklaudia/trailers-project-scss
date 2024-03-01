import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(common)/CategoryButton/categoryButton.module.scss";

interface CategoryButtonProps {
  category: string;
  titleKey: keyof Messages[`common`][`categories`];
  activeCategory?: boolean;
  additionalLinkClass?: string;
  additionalBackgroundClass?: string;
  boxShadow: string;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  titleKey,
  activeCategory,
  additionalLinkClass,
  additionalBackgroundClass,
  boxShadow,
}) => {
  const locale = useLocale();
  const t = useTranslations("common.categories");

  const whileHover = {
    scale: 1.01,
    boxShadow: boxShadow,
    borderRadius: "20px",
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 300,
    },
  };

  return (
    <Link
      href={`/${locale}/products/${category}`}
      className={`${styles.link} ${additionalLinkClass}`}
    >
      <motion.div
        whileHover={activeCategory ? "" : whileHover}
        className={`${additionalBackgroundClass} ${
          activeCategory
            ? styles[`${category}__background__active`]
            : styles[`${category}__background`]
        }`}
      >
        <div className={styles.description}>
          <p className={styles.paragraph}>{t(titleKey)}</p>
        </div>
      </motion.div>
    </Link>
  );
};
