import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Modal } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { StyledModalProps } from "@/app/[lng]/components/(common)/ContactForm/Modal/types";
import styles from "@/app/[lng]/components/(common)/ContactForm/Modal/modal.module.scss";

export const StyledModal: React.FC<StyledModalProps> = ({
  show,
  setShow,
  modalItems,
  data,
  isHome,
}) => {
  const t = useTranslations("common.contact");
  const router = useRouter();
  const locale = useLocale();

  return (
    <Modal
      keyboard={false}
      backdrop="static"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton className={styles.header}>
        <Modal.Title className={styles.title}>
          {t("Thank you")}
          <p className={styles.subtitle}>{t("The form has been sent")}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        {modalItems.map(
          (item, index) =>
            data &&
            data[item?.value] && (
              <div key={index} className={styles.body__wrapper}>
                {t(`${item.label as keyof Messages["common"]["contact"]}`)}
                {": "}
                <p className={styles.body__paragraph}>{data[item.value]}</p>
              </div>
            )
        )}
        <button
          className={styles.link}
          onClick={() => {
            setShow(false), isHome ? undefined : router.push(`/${locale}/`);
          }}
        >
          {isHome ? t("Close") : t("Back to home page")}
        </button>
      </Modal.Body>
    </Modal>
  );
};
