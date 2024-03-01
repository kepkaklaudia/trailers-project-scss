import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(about-us)/Summary/summary.module.scss";
import { MotionShuffle } from "@/app/[lng]/components/(common)/Motion/MotionShuffle";

export const Summary = () => {
  const t = useTranslations("about-us.summary");

  return (
    <section className={styles.section}>
      <MotionShuffle x={"-50vw"}>
        <Image
          className={`${styles.image}`}
          width={700}
          height={300}
          src="/assets/about-us/trailer3.svg"
          alt=""
        />
      </MotionShuffle>
      <MotionShuffle x={"50vw"}>
        <p>{t("After completing")}</p>
      </MotionShuffle>
    </section>
  );
};
