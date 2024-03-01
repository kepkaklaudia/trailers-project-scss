import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(products)/Tags/tags.module.scss";

interface TagsProps {
  handleTagClick: (tag: keyof Messages["products"]["tags"]) => void;
  tags: string[];
  selectedTags: string[];
}

export const Tags: React.FC<TagsProps> = ({
  handleTagClick,
  tags,
  selectedTags,
}) => {
  const t = useTranslations("products.tags");

  return (
    <div className={styles.tags}>
      <p>{t("Tags")}</p>
      <div className={styles.tags__content}>
        {tags.map((tag) => (
          <p
            key={tag}
            onClick={() =>
              handleTagClick(tag as keyof Messages["products"]["tags"])
            }
            className={
              selectedTags.includes(tag) ? styles.tag__active : styles.tag
            }
          >
            {t(tag as keyof Messages["products"]["tags"])}
          </p>
        ))}
      </div>
    </div>
  );
};
