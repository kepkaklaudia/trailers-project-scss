import { Stroke } from "@/app/[lng]/components/(common)/Stroke";
import { ContactForm } from "@/app/[lng]/components/(common)/ContactForm";
import { Intro } from "@/app/[lng]/components/(about-us)/Intro";
import { ColoredSection } from "@/app/[lng]/components/(about-us)/ColoredSection";
import { CategoriesSection } from "@/app/[lng]/components/(about-us)/CategoriesSection";
import { Features } from "@/app/[lng]/components/(about-us)/Features";
import { Summary } from "@/app/[lng]/components/(about-us)/Summary";
import { Border } from "@/app/[lng]/components/(common)/Border";
import styles from "@/app/[lng]/(pages)/about-us/about-us.module.scss";

import { getTranslator } from "next-intl/server";

interface Props {
  params: { lng: string };
}

export async function generateMetadata({ params: { lng } }: Props) {
  const t = await getTranslator(lng, "metaData.aboutPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Stroke
        additionalClass={styles.stroke}
        src={"/assets/strokes/stroke.svg"}
      />
      <Features />
      <Border additionalClass={styles.border} />
      <ColoredSection />
      <Summary />
      <CategoriesSection />
      <ContactForm />
    </>
  );
}
