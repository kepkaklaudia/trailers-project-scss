import { useTranslations } from "next-intl";

import styles from "@/app/[lng]/components/(product)/ProductDetails/MenuButtons/menuButtons.module.scss";

interface MenuButtonsProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  activeSection: string;
}

const buttonNames: Array<
  keyof Messages["product"]["productDetails"]["menuButtons"]
> = [
  "Technical specifications",
  "Additional equipment",
  "Dimensional drawings",
  "Downloads",
];

export const MenuButtons: React.FC<MenuButtonsProps> = ({
  setActiveSection,
  activeSection,
}) => {
  const t = useTranslations("product.productDetails.menuButtons");

  const handleButtonClick = (
    section: keyof Messages["product"]["productDetails"]["menuButtons"]
  ) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      {buttonNames.map((section) => (
        <button
          key={section}
          onClick={() => handleButtonClick(section)}
          className={
            activeSection === section ? styles.button__active : styles.button
          }
        >
          {t(section)}
        </button>
      ))}
    </div>
  );
};
