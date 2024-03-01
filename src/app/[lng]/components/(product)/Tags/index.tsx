import styles from "@/app/[lng]/components/(product)/Tags/tags.module.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface TagsProps {
  path: string;
  tags: keyof Messages["product"]["tags"][];
  locale: string;
}

export const Tags: React.FC<TagsProps> = ({ path, tags, locale }) => {
  const t = useTranslations("product.tags");

  return (
    <div className={styles.container}>
      {tags && t("Tags")}
      <div className={styles.tags}>
        {Array.isArray(tags)
          ? tags.map(
              (tag: keyof Messages["product"]["tags"], index: number) => (
                <Link
                  href={`/${locale}/products/all?tag=${tag}`}
                  className={`${styles.tag} ${styles[`${path}`]}`}
                  key={index}
                >
                  {t(tag)}
                </Link>
              )
            )
          : ""}
      </div>
    </div>
  );
};
