import styles from "@/app/[lng]/components/(common)/Title/title.module.scss";
import { MotionOpacity } from "@/app/[lng]/components/(common)/Motion/MotionOpacity";

interface TitleProps {
  heading: string;
  subheading: string;
}

export const Title: React.FC<TitleProps> = ({ heading, subheading }) => {
  return (
    <MotionOpacity>
      <h2 className={styles.heading}>{heading}</h2>
      <h3 className={styles.subheading}>{subheading}</h3>
    </MotionOpacity>
  );
};
