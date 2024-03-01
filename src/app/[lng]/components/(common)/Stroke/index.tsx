import Image from "next/image";

interface StrokeProps {
  additionalClass: string;
  src: string;
}

export const Stroke: React.FC<StrokeProps> = ({ additionalClass, src }) => (
  <Image
    className={additionalClass}
    alt="stroke"
    width={1920}
    height={85}
    src={src}
  />
);
