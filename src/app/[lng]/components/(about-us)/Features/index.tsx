import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(about-us)/Features/features.module.scss";
import { Feature } from "@/app/[lng]/components/(about-us)/Features/Feature";
import { MotionHover } from "../../(common)/Motion/MotionHover";
import { MotionShuffle } from "../../(common)/Motion/MotionShuffle";

export const Features = () => {
  const t = useTranslations("about-us.features");

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <Feature
            title={t("High quality")}
            description={t("Our trailers")}
            firstTag={t("Safety")}
            secondTag={t("Functionality")}
            src={"/assets/about-us/high-quality.webp"}
          />
        </MotionHover>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <Feature
            title={t("Innovative solutions")}
            description={t("We introduce")}
            firstTag={t("Technology")}
            secondTag={t("Innovation")}
            src={"/assets/about-us/innovative.webp"}
          />
        </MotionHover>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <Feature
            title={t("Customized")}
            description={t("We offer")}
            firstTag={t("Versatility")}
            secondTag={t("Customization")}
            src={"/assets/about-us/customized.webp"}
          />
        </MotionHover>
      </div>
      <MotionShuffle x={"50vw"}>
        <h2 className={styles.heading}>{t("Why choose")}</h2>
        <p>{t("As a new producer")}</p>
      </MotionShuffle>
    </section>
  );
};
