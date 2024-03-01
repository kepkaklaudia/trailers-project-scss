import styles from "@/app/[lng]/components/(product)/Properties/properties.module.scss";
import { useTranslations } from "next-intl";

interface PropertiesProps {
  standard: string[];
}

export const Properties: React.FC<PropertiesProps> = ({ standard }) => {
  const t = useTranslations("product.properties");

  return (
    <div>
      {standard.length > 0 ? (
        <div className={styles.container}>
          <p className={styles.title}>{t("Properties")}</p>
          <ul className={styles.ul}>
            {standard.map((item: string, index: number) => (
              <li className={styles.li} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
