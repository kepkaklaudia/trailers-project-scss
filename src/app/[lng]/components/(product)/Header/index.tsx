import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(product)/Header/header.module.scss";

interface HeaderProps {
  path: string;
  name: string;
  category: keyof Messages["products"]["heading"];
}

export const Header: React.FC<HeaderProps> = ({ path, name, category }) => {
  const t = useTranslations("products.heading");

  return (
    <div className={styles.container}>
      <div className={`${styles.ticket} ${path}`}></div>
      <h2 className={styles.title}>{name}</h2>
      <h2 className={styles.subtitle}>{t(category)}</h2>
    </div>
  );
};
