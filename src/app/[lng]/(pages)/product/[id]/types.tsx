export interface ProductData {
  data: {
    pathID: string;
    pdfGalvanized: string;
    pdfGalvanizedEn: string;
    pdfPowdered: string;
    name: string;
    category: keyof Messages["products"]["heading"];
    path: string;
    family: string;
    tags: keyof Messages["product"][];
  };
  specification: {
    gvw: string;
    load: string;
    area: string;
    weight: string;
    dimensions: string;
    axles: string;
    axlesType: string;
    wheels: string;
  };
  drawings: {
    profile: string;
    front: string;
    top: string;
  };
  standard: string[];
  optional: string[];
  images: {
    galvanized: string[];
    powdered: string[];
    filled: string[];
  };
}
