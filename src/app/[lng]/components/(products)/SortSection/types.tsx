import {
  SortByDirection,
  SortByType,
} from "@/app/[lng]/(pages)/products/[category]/types";

export interface SortSectionProps {
  sortBy: {
    type: SortByType;
    direction: SortByDirection;
  };
  selectedTags: string[] | [];
  setSortBy: React.Dispatch<
    React.SetStateAction<{
      type: SortByType;
      direction: SortByDirection;
    }>
  >;
  handleSort: (type: SortByType, direction: SortByDirection) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
