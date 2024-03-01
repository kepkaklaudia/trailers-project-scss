import Image from "next/image";
import { useTranslations } from "next-intl";
import { Stroke } from "@/app/[lng]/components/(common)/Stroke";
import { MotionShuffle } from "@/app/[lng]/components/(common)/Motion/MotionShuffle";
import { MotionScrollIn } from "@/app/[lng]/components/(about-us)/ColoredSection/motion";
import styles from "@/app/[lng]/components/(about-us)/ColoredSection/coloredSection.module.scss";

export const ColoredSection = () => {
  const t = useTranslations("about-us.coloredSection");

  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__wrapper}>
          <MotionScrollIn>
            <Image
              className={styles.image__smaller}
              width={900}
              height={237}
              src="/assets/about-us/trailer1.webp"
              alt=""
            />
          </MotionScrollIn>
          <div className={styles.wrapper__reordered}>
            <MotionShuffle x={"50vw"}>
              <h2 className={styles.heading}>{t("Production process")}</h2>
              <p className={styles.paragraph}>{t("It starts with")}</p>
            </MotionShuffle>
          </div>
        </div>
        <div className={styles.section__wrapper}>
          <MotionShuffle x={"-50vw"}>
            <div className={styles.wrapper}>
              <p className={styles.paragraph}>{t("An essential stage")}</p>
            </div>
          </MotionShuffle>
          <MotionShuffle x={"50vw"}>
            <Image
              className={`${styles.image__paddings}`}
              width={700}
              height={300}
              src="/assets/about-us/trailer2.svg"
              alt=""
            />
          </MotionShuffle>
        </div>
        <div className={styles.stroke__wrapper}>
          <Stroke
            additionalClass={styles.stroke}
            src={"/assets/strokes/black.svg"}
          />
        </div>
      </section>
    </>
  );
};
