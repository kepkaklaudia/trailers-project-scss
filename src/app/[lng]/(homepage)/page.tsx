import { useTranslations } from "next-intl";
import { CategoriesCarousel } from "@/app/[lng]/components/(homepage)/CategoriesCarousel/categoriesCarousel";
import { AboutUs } from "@/app/[lng]/components/(homepage)/AboutUs";
import { ContactForm } from "@/app/[lng]/components/(common)/ContactForm";
import { AboutProduction } from "@/app/[lng]/components/(homepage)/AboutProduction";
import { CreateTrailers } from "@/app/[lng]/components/(homepage)/CreateTrailers";
import { Title } from "@/app/[lng]/components/(common)/Title";
import { Carousel } from "@/app/[lng]/components/(homepage)/Carousel";
import { carouselImages } from "@/app/[lng]/(homepage)/backgroundImages";
import { Border } from "@/app/[lng]/components/(common)/Border";
import styles from "@/app/[lng]/(homepage)/homepage.module.scss";
import { getTranslator } from "next-intl/server";

interface Props {
  params: { lng: string };
}

export async function generateMetadata({ params: { lng } }: Props) {
  const t = await getTranslator(lng, "metaData.homepage");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <>
      <Title
        heading={t("Categories")}
        subheading={t("Choose your ideal trailer")}
      />
      <CategoriesCarousel />
      <CreateTrailers />
      <AboutUs />
      <AboutProduction />
      <section className={styles.section}>
        <Carousel className={styles.image} images={carouselImages} />
      </section>
      <Border additionalClass={styles.border} />
      <ContactForm isHome={true} />
    </>
  );
}
