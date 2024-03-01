"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Stroke } from "@/app/[lng]/components/(common)/Stroke";
import { Loader } from "@/app/[lng]/components/(common)/Loader";
import { ProductCarousel } from "@/app/[lng]/components/(product)/ProductCarousel";
import { Header } from "@/app/[lng]/components/(product)/Header";
import { VariantButtons } from "@/app/[lng]/components/(product)/VariantButtons";
import { Properties } from "@/app/[lng]/components/(product)/Properties";
import { Tags } from "@/app/[lng]/components/(product)/Tags";
import { ProductDetails } from "@/app/[lng]/components/(product)/ProductDetails";
import styles from "@/app/[lng]/(pages)/product/[id]/product.module.scss";
import useProductData from "@/app/[lng]/(pages)/product/[id]/useProductData";

export const Content = ({ id }: { id: string }) => {
  const locale = useLocale();

  const t = useTranslations("product");

  const [variant, setVariant] = useState("galvanized");

  if (typeof window !== "undefined") {
    localStorage.setItem("scrollState", "auto");
  }

  const { data, isLoading, error, isPaused } = useProductData({
    locale,
    id,
  });

  if (isPaused) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Check your internet connection")}
      </p>
    );
  }

  if (isLoading && !data) {
    return <Loader />;
  }

  if (error) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Please try again later")}
      </p>
    );
  }

  if (!data) {
    return <p>{t("Data is not available")}</p>;
  }

  const {
    specification,
    optional,
    data: productData,
    images,
    standard,
    drawings,
  } = data;

  return (
    <>
      <Header
        path={productData.path}
        name={productData.name}
        category={productData.path as keyof Messages["products"]["heading"]}
      />
      <Stroke
        src={`/assets/strokes/${productData.path}Stroke.svg`}
        additionalClass={styles.stroke}
      />
      <div className={styles.grid}>
        <div className={styles.flex}>
          <VariantButtons
            path={productData.path}
            images={images}
            setVariant={setVariant}
          />
          <div className={styles.container}>
            <ProductCarousel
              family={productData.family}
              variant={variant}
              url={images}
            />
            <Tags
              path={productData.path}
              tags={productData.tags}
              locale={locale}
            />
          </div>
        </div>
        <Properties standard={standard} />
      </div>
      <ProductDetails
        specification={specification}
        optional={optional}
        pathID={productData.pathID}
        pdfGalvanized={productData.pdfGalvanized}
        pdfGalvanizedEn={productData.pdfGalvanizedEn}
        pdfPowdered={productData.pdfPowdered}
        drawings={drawings}
      />
    </>
  );
};
