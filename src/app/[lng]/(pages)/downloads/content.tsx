"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { StrokedTitle } from "@/app/[lng]/components/(downloads)/StrokedTitle";
import { Intro } from "@/app/[lng]/components/(downloads)/Intro";
import styles from "@/app/[lng]/(pages)/downloads/downloads.module.scss";
import { MotionHover } from "@/app/[lng]/(pages)/downloads/motion";

export const Content = () => {
  const t = useTranslations("downloads");

  return (
    <>
      {/* <StrokedTitle title={t("Marketing materials")} />*/}
      {/* <MarketingMaterials />*/}
      <Intro />
      <StrokedTitle title={"Logo"} />
      <div className={styles.container}>
        <a
          title="Open svg logo"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/logo-svg.svg`}
          className={styles.card}
        >
          <MotionHover>
            <Image
              className={styles.image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/svg.svg"}
            />
          </MotionHover>
          <p className={styles.paragraph}>{t("Logo")}</p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/logo-sign-book.pdf`}
          className={styles.card}
        >
          <MotionHover>
            <Image
              className={styles.image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={styles.paragraph}>{t("Sign book")}</p>
        </a>
      </div>
      <StrokedTitle title={t("Instructions")} />
      <div className={styles.container}>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-pl.pdf`}
          className={styles.card}
        >
          <MotionHover>
            <Image
              className={styles.image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={styles.paragraph}>{t("Instruction PL")}</p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-en.pdf`}
          className={styles.card}
        >
          <MotionHover>
            <Image
              className={styles.image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={styles.paragraph}>{t("Instruction EN")}</p>
        </a>
      </div>
      <div className={styles.container__last}>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-fr.pdf`}
          className={styles.card}
        >
          <MotionHover>
            <Image
              className={styles.image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={styles.paragraph}>{t("Instruction FR")}</p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-de.pdf`}
          className={styles.card}
        >
          <MotionHover>
            <Image
              className={styles.image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={styles.paragraph}>{t("Instruction DE")}</p>
        </a>
      </div>

      {/*
        <StrokedTitle title={t("Complaint form")} />
        <div className={styles.container}>
          <div className={styles.card}>
            <MotionHover>
              <Image
                className={styles.image}
                width={100}
                height={100}
                alt=""
                src={"/assets/downloads/svg.svg"}
              />
            </MotionHover>
            <p className={styles.paragraph}>{t("Logo")}</p>
          </div>
          <div className={styles.card}>
            <MotionHover>
              <Image
                className={styles.image}
                width={100}
                height={100}
                alt=""
                src={"/assets/downloads/pdf.svg"}
              />
            </MotionHover>
            <p className={styles.paragraph}>{t("Sign book")}</p>
    </div> 
        </div>*/}
    </>
  );
};
