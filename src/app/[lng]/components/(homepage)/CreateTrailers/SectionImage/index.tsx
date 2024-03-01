"use client";

import Image from "next/image";
import styles from "@/app/[lng]/components/(homepage)/CreateTrailers/SectionImage/sectionImage.module.scss";
import { MotionSpring } from "@/app/[lng]/components/(common)/Motion/MotionSpring";

export const SectionImage = () => {
  return (
    <MotionSpring>
      <Image
        className={styles.image}
        src={"/assets/homepage/trailerBottom.webp"}
        width={1920}
        height={640}
        alt="trailer-bottom"
      />
    </MotionSpring>
  );
};
