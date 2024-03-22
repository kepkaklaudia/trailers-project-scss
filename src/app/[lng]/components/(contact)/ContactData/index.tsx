import { useTranslations } from "next-intl";
import { ContactDataItem } from "@/app/[lng]/components/(contact)/ContactData/ContactDataItem";
import styles from "@/app/[lng]/components/(contact)/ContactData/contactData.module.scss";

export const ContactData = () => {
  const t = useTranslations("contact.contactData");

  return (
    <section className={styles.section}>
      <ContactDataItem
        title={"Balhanger"}
        firstParagraph={"Wsola, Gombrowicza 4"}
        secondParagraph={"26-660 Jedlińsk, Poland"}
        firstLink={"info@balhanger.com"}
        firstHref={"mailto:info@balhanger.com"}
      />
      <ContactDataItem
        title={t("Assembly plant")}
        firstLink={"info@balhanger.com"}
        firstHref={"mailto:info@balhanger.comm"}
      />
      <ContactDataItem
        title={t("Sales Representative")}
        firstLink={"r.spychala@balhanger.com"}
        firstHref={"mailto:r.spychala@balhanger.com"}
      />
    </section>
  );
};
