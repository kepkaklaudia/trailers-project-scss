import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Properties } from "@/app/[lng]/components/(products)/TrailerDetail/Details/Properties";
import styles from "@/app/[lng]/components/(products)/TrailerDetail/Details/details.module.scss";

interface Product {
  name: string;
  gvw: number;
  height: number;
  widthArea: number;
  lengthArea: number;
  width: number;
  length: number;
  curbWeight: number;
}

interface DetailsProps {
  product: Product;
}

export const Details: React.FC<DetailsProps> = ({ product }) => {
  const t = useTranslations("products.trailerDetail");
  const locale = useLocale();

  const properties = [
    {
      title: t("GVW [kg]"),
      icon: `/assets/products/${locale === "pl" ? "dmc" : "gvw"}.svg`,
      value: product.gvw,
    },
    {
      title: t("HEIGHT [mm]"),
      icon: "/assets/products/height.svg",
      value: product.height,
    },
    {
      title: t("WIDTH [mm]"),
      icon: "/assets/products/width.svg",
      value: product.width,
    },
  ];

  const data = [
    {
      tag: t("Loading area"),
      value:
        product.widthArea && product.lengthArea
          ? `${product.widthArea}\u00A0x\u00A0${product.lengthArea}`
          : "-",
      unit: "mm",
    },
    { tag: t("Length"), value: product.length, unit: "mm" },
    { tag: t("Curb weight"), value: product.curbWeight, unit: "kg" },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        {t("Properties of")} {product.name}
      </h3>
      <div className={styles.properites}>
        {properties.map((property, index) => (
          <Properties
            key={index}
            title={property.title}
            icon={property.icon}
            value={property.value}
          />
        ))}
      </div>
      <div className={styles.tags}>
        {data.map((item, index) => (
          <div className={styles.tag} key={index}>
            {item.tag} {item.value ? item.value : "-"}
            <span className={styles.subtitle}>[{item.unit}]</span>
          </div>
        ))}
      </div>
    </div>
  );
};
