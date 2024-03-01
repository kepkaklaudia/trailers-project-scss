import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(product)/VariantButtons/VariantButton/variantButton.module.scss";

interface VariantButtonProps {
  type: string;
  label: keyof Messages["product"]["productDetails"]["variantButtons"];
  setVariant: React.Dispatch<React.SetStateAction<string>>;
  images: {
    galvanized: string[];
    powdered: string[];
    filled: string[];
  };
  path: string;
  buttonType: string;
}

export const VariantButton: React.FC<VariantButtonProps> = ({
  type,
  label,
  setVariant,
  images,
  path,
  buttonType,
}) => {
  const t = useTranslations("product.productDetails.variantButtons");

  return (
    type in images && (
      <button
        onClick={() => setVariant(type)}
        className={`${styles.button} ${styles[`${path}__${buttonType}`]}`}
      >
        {t(label)}
      </button>
    )
  );
};
