import styles from "@/app/[lng]/components/(common)/Border/border.module.scss";

interface BorderProps {
  additionalClass?: string;
}

export const Border: React.FC<BorderProps> = ({ additionalClass }) => (
  <div className={`${styles.border} ${additionalClass}`} />
);
