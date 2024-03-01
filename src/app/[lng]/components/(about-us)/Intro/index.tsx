import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  MotionScrollOut,
  MotionAppear,
} from "@/app/[lng]/components/(about-us)/Intro/motion";
import styles from "@/app/[lng]/components/(about-us)/Intro/intro.module.scss";

export const Intro = () => {
  const t = useTranslations("about-us.intro");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <MotionAppear
            firstItem={
              <MotionScrollOut>
                <Image
                  className={styles.image}
                  width={700}
                  height={150}
                  src="/assets/about-us/trailer.svg"
                  alt=""
                />
              </MotionScrollOut>
            }
            secondItem={
              <h2 className={styles.container__heading}>
                {t("Get to know Balhanger")}
              </h2>
            }
            thirdItem={<p className={styles.paragraph}>{t("As a producer")}</p>}
          />
        </div>
      </div>
    </section>
  );
};
