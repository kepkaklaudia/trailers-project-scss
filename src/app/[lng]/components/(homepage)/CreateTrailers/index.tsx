import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import styles from "@/app/[lng]/components/(homepage)/CreateTrailers/createTrailers.module.scss";
import { Title } from "@/app/[lng]/components/(common)/Title";
import { Border } from "@/app/[lng]/components/(common)/Border";
import { SectionImage } from "@/app/[lng]/components/(homepage)/CreateTrailers/SectionImage";

export const CreateTrailers = () => {
  const t = useTranslations("homepage.createTrailers");
  const locale = useLocale();

  return (
    <>
      <section className={styles.section}>
        <Border additionalClass={styles.border} />
        <Title heading={t("Creating trailers")} subheading={t("Learn more")} />
        <SectionImage />
        <Link href={`/${locale}/about-us`} className={styles.link}>
          {t("Check out")}
        </Link>
      </section>
    </>
  );
};
