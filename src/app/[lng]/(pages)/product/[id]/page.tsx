import { getTranslator } from "next-intl/server";
import { Content } from "./content";

interface Props {
  params: { lng: string; id: string };
}

export async function generateMetadata({ params: { lng, id } }: Props) {
  const t = await getTranslator(lng, "metaData.productPage");

  return {
    title: `${t(`title`)} ${id} | Balhanger`,
    description: `${id} Balhanger ${t(`description`)} `,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Content id={params.id} />
    </>
  );
}
