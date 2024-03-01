import Image from "next/image";
import styles from "@/app/[lng]/components/(product)/ProductDetails/Drawings/drawings.module.scss";
import { useTranslations } from "next-intl";

interface DrawingsProps {
  pathID: string;
  profile: string;
  front: string;
  top: string;
}

export const Drawings: React.FC<DrawingsProps> = ({
  pathID,
  profile,
  front,
  top,
}) => {
  const t = useTranslations("product.productDetails.drawings");

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.style.display = "none";
  };

  const arePathsEmpty = !profile && !front && !top;

  if (arePathsEmpty) {
    return <p className={styles.paragraph}>{t("No drawings")}</p>;
  }

  return (
    <div className={styles.container}>
      {profile && (
        <Image
          className={`${styles.image__first} ${styles.image}`}
          src={`/assets/trailers/details/drawings/${pathID}/${profile}.webp`}
          alt="Dimensional drawing"
          width={1200}
          height={307}
          onError={handleImageError}
        />
      )}

      {front && (
        <Image
          className={styles.image}
          src={`/assets/trailers/details/drawings/${pathID}/${front}.webp`}
          alt="Dimensional drawing"
          width={600}
          height={280}
          onError={handleImageError}
        />
      )}
      {top && (
        <Image
          className={styles.image}
          src={`/assets/trailers/details/drawings/${pathID}/${top}.webp`}
          alt="Dimensional drawing"
          width={600}
          height={280}
          onError={handleImageError}
        />
      )}
    </div>
  );
};
