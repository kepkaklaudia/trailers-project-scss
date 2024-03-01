import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(product)/ProductDetails/AdditionalEquipment/additionalEquipment.module.scss";

interface AdditionalEquipmentProps {
  optional: string[];
}

export const AdditionalEquipment: React.FC<AdditionalEquipmentProps> = ({
  optional,
}) => {
  const t = useTranslations("product.productDetails.additionalEquipment");

  return (
    <>
      {optional.length > 0 ? (
        <>
          <div className={styles.container}>
            <p className={styles.title}>{t("Additional equipment")}</p>
            <div className={styles.list}>
              {optional.map((item, index) => (
                <div key={index} className={styles.item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className={styles.paragraph}>{t("No data")}</p>
      )}
    </>
  );
};
