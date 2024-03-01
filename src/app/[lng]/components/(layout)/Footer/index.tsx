import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/app/[lng]/components/(layout)/Footer/Section";
import { Wrapper } from "@/app/[lng]/components/(layout)/Footer/Wrapper";
import styles from "@/app/[lng]/components/(layout)/Footer/footer.module.scss";

export const Footer = () => {
  const t = useTranslations("layout.footer");
  const locale = useLocale();

  return (
    <>
      <footer className={styles.footer}>
        <div id="footer" className={styles.footer__container}>
          <Section heading={"Balhanger"}>
            <Wrapper href={`/${locale}/about-us`} linkText={t("About us")} />
            <Wrapper href={`/${locale}/partners`} linkText={t("Partners")} />
            <Wrapper
              isMail={true}
              href="mailto:info@balhanger.com"
              linkText="info@balhanger.com"
            />
            <Wrapper> Wsola, Gombrowicza 4</Wrapper>
            <Wrapper>26-660 Jedlińsk</Wrapper>
          </Section>
          <Section
            className={styles.section__complaints}
            heading={t("Service and complaints")}
          >
            <Wrapper
              isMail={true}
              href="mailto:serwis@balhanger.com"
              linkText="serwis@balhanger.com"
            />
            <Wrapper
              href={`/${locale}/contact/#contactForm`}
              linkText={t("Contact form")}
            />
          </Section>
          <div className={styles.section__empty}></div>
          <Image
            src={"/assets/layout/Balhanger_LOGO.svg"}
            height={40}
            width={245}
            className={styles.section__logo}
            alt="Logo"
          />
          <Section
            className={styles.section__sales}
            heading={t("Sales Representative")}
          >
            <Wrapper>Radosław Spychała</Wrapper>
            <Wrapper
              isMail={true}
              href="mailto:r.spychala@balhanger.com"
              linkText="r.spychala@balhanger.com"
            />
          </Section>
          <Section
            className={styles.section__assembly}
            heading={t("Assembly plant")}
          >
            <Wrapper
              isMail={true}
              href="mailto:info@balhanger.com"
              linkText="info@balhanger.com"
            />
          </Section>
          <Section className={styles.section__statute} heading={t("Statute")}>
            <Wrapper
              rel="noopener noreferrer"
              target="_blank"
              href={"https://kratki.com/pl/polityka-prywatnosci"}
              linkText={t("Privacy policy")}
            />
          </Section>
        </div>
        <section className={styles.section__footer}>
          <div className={styles.section__socials}>
            <Image
              src={"/assets/layout/linkdin.svg"}
              height={35}
              width={35}
              className={styles.section__image}
              alt="Logo"
            />
            <Image
              src={"/assets/layout/facebook.svg"}
              height={35}
              width={35}
              className={styles.section__image}
              alt="Logo"
            />
          </div>
          <div className={styles.section__product}>
            A product of{" "}
            <Image
              src={"/assets/layout/Balhanger_LOGO.svg"}
              height={12}
              width={110}
              alt="Logo"
            />
          </div>
          <div>© 2024</div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
