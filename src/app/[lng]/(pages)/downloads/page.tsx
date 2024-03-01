import { getTranslator } from "next-intl/server";
import { Content } from "./content";

interface Props {
  params: { lng: string };
}

export async function generateMetadata({ params: { lng } }: Props) {
  const t = await getTranslator(lng, "metaData.downloads");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DownloadsPage() {
  return (
    <>
      <Content />
    </>
  );
}
