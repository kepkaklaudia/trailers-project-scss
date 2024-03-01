import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import styles from "@/app/[lng]/components/(homepage)/AboutUs/aboutUs.module.scss";
import { Border } from "@/app/[lng]/components/(common)/Border";
import { MotionOpacity } from "@/app/[lng]/components/(common)/Motion/MotionOpacity";
import { MotionHover } from "@/app/[lng]/components/(common)/Motion/MotionHover";
import { MotionShuffle } from "@/app/[lng]/components/(common)/Motion/MotionShuffle";

export const AboutUs = () => {
  const t = useTranslations("homepage.aboutUs");
  const locale = useLocale();

  return (
    <MotionOpacity>
      <section className={styles.section}>
        <MotionShuffle x={"-50vw"}>
          <h2 className={styles.heading}>{t("About us")}</h2>
          <p>{t("About us description")}</p>
        </MotionShuffle>
        <MotionHover verticalBox={"14px"} rotateY={5} skewY={0.5}>
          <div className={styles.container}>
            <Image
              alt="about"
              width={100}
              height={100}
              src={"/assets/homepage/about-us.webp"}
            />
            <div>
              <h3 className={styles.subheading}>{t("Why us")}</h3>
              <p>{t("Why us description")}</p>
              <Link className={styles.link} href={`/${locale}/about-us`}>
                <button className={styles.button}>{t("About us")}</button>
              </Link>
            </div>
          </div>
        </MotionHover>
      </section>
      <Border additionalClass={styles.border} />
    </MotionOpacity>
  );
};
