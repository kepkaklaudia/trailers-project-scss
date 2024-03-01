import {
  SearchTags,
  SortByDirection,
  SortByType,
} from "@/app/[lng]/(pages)/products/[category]/types";

export interface SortModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: { type: SortByType; direction: SortByDirection };
  setSelectedTags: React.Dispatch<React.SetStateAction<SearchTags>>;
  setSortBy: React.Dispatch<
    React.SetStateAction<{ type: SortByType; direction: SortByDirection }>
  >;
  handleSort: (type: SortByType, direction: SortByDirection) => void;
}
