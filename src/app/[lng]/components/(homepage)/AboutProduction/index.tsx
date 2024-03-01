import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import styles from "@/app/[lng]/components/(homepage)/AboutProduction/aboutProduction.module.scss";
import { MotionOpacity } from "@/app/[lng]/components/(common)/Motion/MotionOpacity";
import { MotionHover } from "@/app/[lng]/components/(common)/Motion/MotionHover";
import { MotionShuffle } from "@/app/[lng]/components/(common)/Motion/MotionShuffle";

export const AboutProduction = () => {
  const t = useTranslations("homepage.aboutProduction");
  const locale = useLocale();

  return (
    <MotionOpacity>
      <section className={styles.section}>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <div className={styles.container}>
            <Image
              alt="about"
              width={100}
              height={100}
              src={"/assets/homepage/about-production.webp"}
            />
            <div>
              <h3 className={styles.subheading}>{t("A wide selection")}</h3>
              <p>{t("A wide selection description")}</p>
              <Link className={styles.link} href={`/${locale}/products/all`}>
                <button className={styles.button}>{t("Our trailers")}</button>
              </Link>
            </div>
          </div>
        </MotionHover>
        <MotionShuffle x={"50vw"}>
          <h2 className={styles.heading}>{t("How we create")}</h2>
          <p>{t("How we create description")}</p>
        </MotionShuffle>
      </section>
    </MotionOpacity>
  );
};
