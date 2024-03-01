import { SortByType } from "@/app/[lng]/(pages)/products/[category]/types";

export const sortOptions: {
  type: SortByType;
  label: keyof Messages["products"]["sortModal"];
}[] = [
  { type: "name", label: "Name" },
  { type: "length", label: "Length" },
  { type: "width", label: "Width" },
  { type: "height", label: "Height" },
  { type: "curbWeight", label: "Curb weight" },
];
