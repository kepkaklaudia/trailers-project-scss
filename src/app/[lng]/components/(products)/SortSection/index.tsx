"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";
import { SortSectionProps } from "@/app/[lng]/components/(products)/SortSection/types";
import {
  SortByDirection,
  SortByType,
} from "@/app/[lng]/(pages)/products/[category]/types";
import styles from "@/app/[lng]/components/(products)/SortSection/sortSection.module.scss";

export const SortSection: React.FC<SortSectionProps> = ({
  sortBy,
  setSortBy,
  handleSort,
  setShowModal,
}) => {
  const [show, setShow] = useState(false);
  const [showArea, setShowArea] = useState(false);
  const t = useTranslations("products.sortSection");
  const router = useRouter();
  const pathname = usePathname();

  const handleCheckboxChange = (type: SortByType) => {
    setShow(type === "gvw" ? !show : false);
    setShowArea(type === "loadArea" ? !showArea : false);

    setSortBy((prevSortBy) => ({
      type: type === "gvw" ? "gvw" : "loadArea",
      direction: prevSortBy.type === type ? prevSortBy.direction : "",
    }));
  };

  const handleRadioChange = (type: SortByType, direction: SortByDirection) => {
    handleSort(type, direction);
    setShow(false);
    setShowArea(false);
  };

  const resetURL = () => {
    router.push(pathname);
  };

  const resetSortAndURL = () => {
    handleSort("", "");
    setShowArea(false);
    setShow(false);
    resetURL();
  };

  return (
    <div className={styles.wrapper}>
      <Form.Group className={styles.group}>
        <div className={styles.container}>
          <Form.Check
            onChange={() => handleCheckboxChange("gvw")}
            className={styles.checkbox}
            type="checkbox"
            label={t("GVW")}
            checked={
              show ||
              (!show &&
                sortBy.type === "gvw" &&
                (sortBy.direction === "asc" || sortBy.direction === "desc"))
            }
          />
          <div
            className={`${styles.checkbox__details} ${
              show ? styles.checkbox__show : ""
            }`}
          >
            <Form.Check
              type="radio"
              label={t("Ascending")}
              name="gvw"
              checked={sortBy.type === "gvw" && sortBy.direction === "asc"}
              onChange={() => handleRadioChange("gvw", "asc")}
            />
            <Form.Check
              type="radio"
              label={t("Descending")}
              name="gvw"
              checked={sortBy.type === "gvw" && sortBy.direction === "desc"}
              onChange={() => handleRadioChange("gvw", "desc")}
            />
          </div>
        </div>
        <div className={styles.container}>
          <Form.Check
            onChange={() => handleCheckboxChange("loadArea")}
            className={styles.checkbox}
            type="checkbox"
            label={t("Load area")}
            checked={
              showArea ||
              (!showArea &&
                sortBy.type === "loadArea" &&
                (sortBy.direction === "asc" || sortBy.direction === "desc"))
            }
          />
          <div
            className={`${styles.checkbox__details} ${
              showArea ? styles.checkbox__show : ""
            }`}
          >
            <Form.Check
              type="radio"
              label={t("Ascending")}
              name="loadArea"
              checked={sortBy.type === "loadArea" && sortBy.direction === "asc"}
              onChange={() => handleRadioChange("loadArea", "asc")}
            />
            <Form.Check
              type="radio"
              label={t("Descending")}
              name="loadArea"
              checked={
                sortBy.type === "loadArea" && sortBy.direction === "desc"
              }
              onChange={() => handleRadioChange("loadArea", "desc")}
            />
          </div>
        </div>
      </Form.Group>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            setShowModal(true);
            resetSortAndURL();
          }}
          className={`${styles.sort}`}
        >
          {t("More options")}
        </button>
        <button onClick={resetSortAndURL} className={`${styles.reset}`}>
          {t("Reset")}
        </button>
      </div>
    </div>
  );
};
