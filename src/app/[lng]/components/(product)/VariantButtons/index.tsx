import { VariantButton } from "@/app/[lng]/components/(product)/VariantButtons/VariantButton";
import styles from "@/app/[lng]/components/(product)/VariantButtons/variantButtons.module.scss";

interface VariantButtonsProps {
  path: string;
  setVariant: React.Dispatch<React.SetStateAction<string>>;
  images: {
    galvanized: string[];
    powdered: string[];
    filled: string[];
  };
}

export const VariantButtons: React.FC<VariantButtonsProps> = ({
  path,
  setVariant,
  images,
}) => {
  return (
    <div className={styles.container}>
      <VariantButton
        type={"galvanized"}
        label={"Galvanized"}
        setVariant={setVariant}
        images={images}
        path={path}
        buttonType={"first"}
      />
      <VariantButton
        type={"powdered"}
        label={"Powder-coated"}
        setVariant={setVariant}
        images={images}
        path={path}
        buttonType={"second"}
      />
      <VariantButton
        type={"filled"}
        label={"With filling"}
        setVariant={setVariant}
        images={images}
        path={path}
        buttonType={"third"}
      />
    </div>
  );
};
