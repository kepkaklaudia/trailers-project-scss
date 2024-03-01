import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "@/app/[lng]/components/(products)/ViewSelector/viewSelector.module.scss";

interface ViewSelectorProps {
  handleViewChange: (view: string) => void;
  view: string;
}

export const ViewSelector: React.FC<ViewSelectorProps> = ({
  handleViewChange,
  view,
}) => {
  const t = useTranslations("products.viewSelector");

  return (
    <div className={styles.container}>
      <p>{t("View")}</p>
      <div className={styles.container__content}>
        <Image
          onClick={() => handleViewChange("list")}
          className={view === "list" ? styles.image__active : styles.image}
          src={"/assets/products/list.svg"}
          width={30}
          height={30}
          alt="list"
        />{" "}
        <Image
          onClick={() => handleViewChange("grid")}
          className={view === "grid" ? styles.image__active : styles.image}
          src={"/assets/products/grid.svg"}
          width={30}
          height={30}
          alt="grid"
        />
      </div>
    </div>
  );
};
