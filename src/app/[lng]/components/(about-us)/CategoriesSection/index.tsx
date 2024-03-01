import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(about-us)/CategoriesSection/categoriesSection.module.scss";
import CategoriesButtons from "./CategoriesButtons";

export const CategoriesSection = () => {
  const t = useTranslations("about-us.categoriesSection");

  return (
    <section>
      <h2 className={styles.heading}>{t("Our trailer models")}</h2>
      <h3 className={styles.subheading}>{t("We offer a variety")}</h3>
      <CategoriesButtons />
    </section>
  );
};
