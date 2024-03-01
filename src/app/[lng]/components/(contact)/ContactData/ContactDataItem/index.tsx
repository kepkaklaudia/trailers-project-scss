import styles from "@/app/[lng]/components/(contact)/ContactData/ContactDataItem/contactDataItem.module.scss";

interface ContactDataItemProps {
  title: string;
  firstParagraph?: string;
  secondParagraph?: string;
  firstLink: string;
  firstHref: string;
  secondLink?: string;
  secondHref?: string;
}

export const ContactDataItem = ({
  title,
  firstParagraph,
  secondParagraph,
  firstLink,
  firstHref,
  secondLink,
  secondHref,
}: ContactDataItemProps) => {
  return (
    <div>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.wrapper}>
        {firstParagraph && <p className={styles.paragraph}>{firstParagraph}</p>}
        {secondParagraph && (
          <p className={styles.paragraph}>{secondParagraph}</p>
        )}
        <a className={styles.wrapper__link} href={firstHref}>
          {firstLink}
        </a>
        {secondLink && secondHref && (
          <a className={styles.wrapper__link} href={secondHref}>
            {secondLink}
          </a>
        )}
      </div>
    </div>
  );
};
