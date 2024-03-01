import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(products)/Heading/heading.module.scss";

export const Heading = ({
  category,
}: {
  category: keyof Messages["products"]["heading"];
}) => {
  const t = useTranslations("products.heading");

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{category ? t(category) : ""}</h2>
    </div>
  );
};
