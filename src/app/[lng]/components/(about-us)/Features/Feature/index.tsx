import Image from "next/image";
import styles from "@/app/[lng]/components/(about-us)/Features/Feature/feature.module.scss";

interface FeatureProps {
  title: string;
  description: string;
  firstTag: string;
  secondTag: string;
  src: string;
}

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  firstTag,
  secondTag,
  src,
}) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        alt="about"
        width={100}
        height={100}
        src={src}
      />
      <div>
        <h3 className={styles.heading}>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          <div className={styles.tag}>{firstTag}</div>
          <div className={styles.tag}>{secondTag}</div>
        </div>
      </div>
    </div>
  );
};
