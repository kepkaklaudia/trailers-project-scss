import { getTranslator } from "next-intl/server";
import { Content } from "@/app/[lng]/partners/content";

interface Props {
  params: { lng: string };
}

export async function generateMetadata({ params: { lng } }: Props) {
  const t = await getTranslator(lng, "metaData.partners");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Partners() {
  return (
    <>
      <Content />
    </>
  );
}
