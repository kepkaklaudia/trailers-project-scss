import styles from "@/app/[lng]/components/(products)/TrailerDetail/Grid/Header/header.module.scss";

interface HeaderProps {
  path: string;
  name: string;
  category: string;
}

export const Header: React.FC<HeaderProps> = ({ path, name, category }) => (
  <div className={styles.container}>
    <div className={`${styles.ticket} ${path}`}></div>
    <h2 className={styles.title}>{name}</h2>
    <h2 className={styles.subtitle}>{category}</h2>
  </div>
);
