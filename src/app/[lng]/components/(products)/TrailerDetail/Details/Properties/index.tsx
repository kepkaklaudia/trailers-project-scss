import React from "react";
import Image from "next/image";
import styles from "@/app/[lng]/components/(products)/TrailerDetail/Details/Properties/properties.module.scss";

interface PropertiesProps {
  title: string;
  icon: string;
  value: string | number;
}

export const Properties: React.FC<PropertiesProps> = ({
  title,
  icon,
  value,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.image}>
        <Image width={50} height={20} src={icon} alt="" />
        <p className={styles.value}>{value ? value : "-"}</p>
      </div>
    </div>
  );
};
