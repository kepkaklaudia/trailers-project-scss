import { useTranslations } from "next-intl";
import { Border } from "@/app/[lng]/components/(common)/Border";
import { Stroke } from "@/app/[lng]/components/(common)/Stroke";
import { ContactForm } from "@/app/[lng]/components/(common)/ContactForm";
import { ContactData } from "@/app/[lng]/components/(contact)/ContactData";
import styles from "@/app/[lng]/(pages)/contact/contact.module.scss";
import { MotionSpring } from "@/app/[lng]/components/(common)/Motion/MotionSpring";
import { MotionOpacity } from "@/app/[lng]/components/(common)/Motion/MotionOpacity";
import { getTranslator } from "next-intl/server";

interface Props {
  params: { lng: string };
}

export async function generateMetadata({ params: { lng } }: Props) {
  const t = await getTranslator(lng, "metaData.contactPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <div className={styles.container}>
        <MotionOpacity>
          <h2 className={styles.container__header}>{t("Contact")}</h2>
          <ContactData />
        </MotionOpacity>
      </div>
      <Border additionalClass={styles.border} />
      <div className={styles.container}>
        <MotionSpring>
          <h2 className={styles.container__heading}>
            {t("Complaints and returns")}
          </h2>

          <p className={styles.container__paragraph}>
            {t("We strongly encourage you")}
          </p>
        </MotionSpring>
      </div>
      <Stroke
        additionalClass={styles.stroke}
        src={"/assets/strokes/black.svg"}
      />
      <div className={styles.container}>
        <MotionOpacity>
          <h2 id="contactForm" className={styles.container__header}>
            {t("We are at your service")}
          </h2>
        </MotionOpacity>
      </div>
      <ContactForm />
    </>
  );
}
