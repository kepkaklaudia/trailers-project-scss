import React, { ReactNode } from "react";
import styles from "@/app/[lng]/components/(product)/ProductDetails/TechnicalSpecifications/Container/container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>
    <table className={styles.table}>{children}</table>
  </div>
);
