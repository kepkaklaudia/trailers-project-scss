import { getTranslator } from "next-intl/server";
import { Content } from "./content";

interface Props {
  params: { lng: string; category: keyof Messages["metaData"]["productsPage"] };
}

export async function generateMetadata({ params: { lng, category } }: Props) {
  const t = await getTranslator(lng, "metaData.productsPage");

  return {
    title: t(`${category}.title`),
    description: t(`${category}.description`),
  };
}

export default function ProductsPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <>
      <Content category={params.category} />
    </>
  );
}
