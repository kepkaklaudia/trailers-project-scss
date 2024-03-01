import { Content } from "@/app/[lng]/(pages)/[...rest]/Content";
import { getTranslator } from "next-intl/server";

interface Props {
  params: { lng: string };
}

export async function generateMetadata({ params: { lng } }: Props) {
  const t = await getTranslator(lng, "metaData.notFound");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function NotFound() {
  return <Content />;
}
