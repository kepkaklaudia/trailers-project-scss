import { useTranslations } from "next-intl";
import { MotionSpring } from "@/app/[lng]/components/(downloads)/Intro/motion";
import { Stroke } from "../../(common)/Stroke";
import styles from "@/app/[lng]/components/(downloads)/Intro/intro.module.scss";
import Image from "next/image";

export const Intro = () => {
  const t = useTranslations("downloads.intro");

  return (
    <MotionSpring>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={"/assets/downloads/cards.webp"}
          alt=""
          width={800}
          height={526}
        />
        <div className={styles.wrapper}>
          <Stroke
            additionalClass={styles.stroke}
            src={"/assets/strokes/strokeRight.svg"}
          />
          <p>{t("Please use")}</p>
          <p>{t("All the images")}</p>
        </div>{" "}
      </div>
    </MotionSpring>
  );
};
