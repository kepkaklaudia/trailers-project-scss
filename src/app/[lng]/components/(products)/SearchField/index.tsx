"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Form } from "react-bootstrap";
import styles from "@/app/[lng]/components/(products)/SearchField/searchField.module.scss";

export interface SearchFieldProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const t = useTranslations("products.searchField");
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSearchChange = () => {
    setSearchTerm(inputValue);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{t("Select a trailer")}</h2>
      <Form.Group className={styles.group} controlId="Search">
        <Form.Control
          type="text"
          value={inputValue}
          onChange={onInputChange}
          className={`${styles.input}`}
          placeholder={t("Provide the name of the trailer")}
        />
        <button className={styles.link} onClick={handleSearchChange}>
          {t("Search")}
        </button>
      </Form.Group>
    </div>
  );
};
