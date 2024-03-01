import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import styles from "@/app/[lng]/components/(products)/TrailerDetail/Grid/grid.module.scss";
import { Details } from "@/app/[lng]/components/(products)/TrailerDetail/Details";
import { Header } from "@/app/[lng]/components/(products)/TrailerDetail/Grid/Header";
import { nanoid } from "nanoid";

interface Product {
  name: string;
  category: keyof Messages["products"]["trailerDetail"];
  family: string;
  path: string;
  height: number;
  gvw: number;
  pathID: string;
  widthArea: number;
  lengthArea: number;
  width: number;
  length: number;
  curbWeight: number;
  tags: string[];
}

interface TrailerDetailGridProps {
  products: Product[];
}

export const TrailerDetailGrid: React.FC<TrailerDetailGridProps> = ({
  products,
}) => {
  const locale = useLocale();
  const t = useTranslations("products.trailerDetail");

  const [versions, setVersions] = useState(() =>
    products.map(() => t("Galvanized"))
  );

  const [isImageError, setIsImageError] = useState<boolean[]>([]);

  const updateVersion = (index: number, newVersion: any) => {
    setVersions((prevVersions) => {
      const updatedVersions = [...prevVersions];
      updatedVersions[index] = newVersion;
      return updatedVersions;
    });
  };

  const handleImageError = (index: number) => {
    setIsImageError((prevErrors) => {
      const updatedErrors = [...prevErrors];
      updatedErrors[index] = true;
      return updatedErrors;
    });
  };

  return (
    <div className={styles.container}>
      {products.length === 0 ? (
        <p className={styles.paragraph}>Brak produktów</p>
      ) : (
        products.map((product, index) => (
          <React.Fragment key={index}>
            <div className={styles.wrapper__main}>
              <Header
                path={product.path}
                name={product.name}
                category={t(product.category)}
              />
              <div className={styles.wrapper}>
                <Link href={`/${locale}/product/${product.pathID}`}>
                  {isImageError[index] ? (
                    <Image
                      className={styles.image}
                      width={960}
                      height={540}
                      alt="no-trailer"
                      src={`/assets/noTrailer.svg`}
                    />
                  ) : (
                    <Image
                      className={styles.image}
                      width={960}
                      height={540}
                      alt={`${product.family}`}
                      src={`/assets/trailers/list/images/${product.family}/${
                        versions[index] === t("Galvanized")
                          ? "galvanized"
                          : "powdered"
                      }.webp`}
                      onError={() => handleImageError(index)}
                    />
                  )}
                </Link>
                <div className={styles.details__container}>
                  <Details product={product} />
                  <div className={styles.checkbox__description}>
                    {t("Available versions")}
                  </div>
                  <div className={styles.checkbox__container}>
                    <Form.Check
                      type="radio"
                      className={styles.checkbox}
                      label={t("Galvanized")}
                      name={nanoid()}
                      checked={versions[index] === t("Galvanized")}
                      onChange={() => updateVersion(index, t("Galvanized"))}
                    />
                    <Form.Check
                      type="radio"
                      className={styles.checkbox}
                      label={t("Powder-coated")}
                      name={nanoid()}
                      checked={versions[index] === t("Powder-coated")}
                      onChange={() => updateVersion(index, t("Powder-coated"))}
                    />
                  </div>
                </div>
              </div>
              <Link
                href={`/${locale}/product/${product.pathID}`}
                className={styles.button}
              >
                {t("More information")}
              </Link>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};
