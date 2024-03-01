"use client";

import React from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import { SortModalProps } from "@/app/[lng]/components/(products)/SortModal/types";
import { SortByType } from "@/app/[lng]/(pages)/products/[category]/types";
import { sortOptions } from "@/app/[lng]/components/(products)/SortModal/sortOptions";
import styles from "@/app/[lng]/components/(products)/SortModal/sortModal.module.scss";

export const SortModal: React.FC<SortModalProps> = ({
  showModal,
  setShowModal,
  sortBy,
  setSortBy,
  handleSort,
  setSelectedTags,
}) => {
  const t = useTranslations("products.sortModal");
  const pathname = usePathname();
  const router = useRouter();

  const handleButtonClick = (type: SortByType) => {
    setSortBy((prevSortBy) => ({
      type,
      direction: sortBy.type === type ? prevSortBy.direction : "",
    }));
  };

  const resetURL = () => {
    router.push(pathname);
  };

  const resetSortAndURL = () => {
    handleSort("", "");
    setSelectedTags([]);
    resetURL();
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.header}>{t("Sort by")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.buttons}>
          {sortOptions.map(({ type, label }) => (
            <button
              key={type}
              className={` ${
                sortBy.type === type ? styles.button__active : styles.button
              }`}
              onClick={() => handleButtonClick(type as SortByType)}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <div className={styles.checkbox}>
          {sortBy.type && (
            <>
              <Form.Check
                type="radio"
                label={t("Ascending")}
                checked={sortBy.direction === "asc"}
                onChange={() => handleSort(sortBy.type, "asc")}
              />
              <Form.Check
                type="radio"
                label={t("Descending")}
                checked={sortBy.direction === "desc"}
                onChange={() => handleSort(sortBy.type, "desc")}
              />
            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={`${styles.button__reset}`} onClick={resetSortAndURL}>
          {t("Reset")}
        </button>
        <button
          className={`${
            sortBy.direction === "" || sortBy.type === ""
              ? styles.button__disabled
              : styles.button__sort
          }`}
          onClick={() => setShowModal(false)}
          disabled={sortBy.direction === "" || sortBy.type === ""}
        >
          {t("Sort")}
        </button>
      </Modal.Footer>
    </Modal>
  );
};
