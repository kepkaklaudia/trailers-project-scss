"use client";

import { useState } from "react";
import { TechnicalSpecifications } from "@/app/[lng]/components/(product)/ProductDetails/TechnicalSpecifications";
import { AdditionalEquipment } from "@/app/[lng]/components/(product)/ProductDetails/AdditionalEquipment";
import { Drawings } from "@/app/[lng]/components/(product)/ProductDetails/Drawings";
import { Downloads } from "@/app/[lng]/components/(product)/ProductDetails/Downloads";
import { MenuButtons } from "@/app/[lng]/components/(product)/ProductDetails/MenuButtons";
import { MotionContent } from "@/app/[lng]/components/(product)/ProductDetails/MotionContent";
import styles from "@/app/[lng]/components/(product)/ProductDetails/productDetails.module.scss";

interface ProductDetailsProps {
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
  optional: string[];
  pathID: string;
  pdfPowdered: string;
  pdfGalvanized: string;
  pdfGalvanizedEn: string;
  drawings: {
    profile: string;
    front: string;
    top: string;
  };
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  specification,
  optional,
  pathID,
  pdfGalvanized,
  pdfGalvanizedEn,
  pdfPowdered,
  drawings,
}) => {
  const [activeSection, setActiveSection] = useState(
    "Technical specifications"
  );

  let content: JSX.Element | null = null;
  switch (activeSection) {
    case "Technical specifications":
      content = <TechnicalSpecifications specification={specification} />;
      break;
    case "Additional equipment":
      content = <AdditionalEquipment optional={optional} />;
      break;
    case "Dimensional drawings":
      content = (
        <Drawings
          pathID={pathID}
          profile={drawings.profile}
          front={drawings.front}
          top={drawings.top}
        />
      );
      break;
    case "Downloads":
      content = (
        <Downloads
          pdfGalvanized={pdfGalvanized}
          pdfGalvanizedEn={pdfGalvanizedEn}
          pdfPowdered={pdfPowdered}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <div className={styles.container}>
      <MenuButtons
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MotionContent ownKey={activeSection}>{content}</MotionContent>
    </div>
  );
};
