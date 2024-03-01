import { ReactNode } from "react";
import styles from "@/app/[lng]/components/(layout)/Footer/Section/section.module.scss";

interface SectionProps {
  heading: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  heading,
  children,
  className,
}) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.section__heading}>{heading}</h2>
      {children}
    </section>
  );
};
