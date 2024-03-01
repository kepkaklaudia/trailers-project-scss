import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "@/app/[lng]/components/(product)/ProductDetails/Downloads/downloads.module.scss";

interface DownloadsProps {
  pdfGalvanized: string;
  pdfPowdered: string;
  pdfGalvanizedEn: string;
}

export const Downloads = ({
  pdfGalvanized,
  pdfPowdered,
  pdfGalvanizedEn,
}: DownloadsProps) => {
  const t = useTranslations("product.productDetails.downloads");

  return (
    <div className={styles.maincontainer}>
      {pdfGalvanized || pdfPowdered ? (
        <h2 className={styles.heading}>{t("Product cards")}</h2>
      ) : (
        t("No downloads")
      )}
      <div className={styles.container}>
        {pdfGalvanized && (
          <Link
            className={styles.link}
            title={t("Open product card")}
            target="_blank"
            rel="noopener noreferrer"
            href={`/assets/trailers/details/files/${pdfGalvanized}.pdf`}
          >
            <Image
              alt=""
              width="100"
              height="100"
              src="/assets/product/pdf.svg"
            />
            {t("Product card galvanized PL")}
          </Link>
        )}
        {pdfPowdered && (
          <Link
            className={styles.link}
            title={t("Open product card")}
            target="_blank"
            rel="noopener noreferrer"
            href={`/assets/trailers/details/files/${pdfPowdered}.pdf`}
          >
            <Image
              alt=""
              width="100"
              height="100"
              src="/assets/product/pdf.svg"
            />
            {t("Product card powdered")}
          </Link>
        )}
        {pdfGalvanizedEn && (
          <Link
            className={styles.link}
            title={t("Open product card")}
            target="_blank"
            rel="noopener noreferrer"
            href={`/assets/trailers/details/files/${pdfGalvanizedEn}.pdf`}
          >
            <Image
              alt=""
              width="100"
              height="100"
              src="/assets/product/pdf.svg"
            />
            {t("Product card galvanized EN")}
          </Link>
        )}
      </div>
    </div>
  );
};
