export type SortByType =
  | "name"
  | "length"
  | "width"
  | "height"
  | "curbWeight"
  | "gvw"
  | "loadArea"
  | "";

export type SortByDirection = "" | "asc" | "desc";

export type SearchTags = [] | string[];

export interface Product {
  name: string;
  category: keyof Messages["products"]["trailerDetail"];
  path: string;
  family: string;
  height: number;
  gvw: number;
  pathID: string;
  widthArea: number;
  lengthArea: number;
  width: number;
  length: number;
  curbWeight: number;
  tags: string[];
}

export interface Data {
  products: Product[];
  tags: string[];
}

export interface UseSortSelectProps {
  selectedTags: string[];
  sortBy: { type: SortByType; direction: SortByDirection };
  setSortBy: (sort: { type: SortByType; direction: SortByDirection }) => void;
  category: string;
  router: any;
}

export interface UseSortSelectReturn {
  sortBy: { type: SortByType; direction: SortByDirection };
  handleSort: (type: SortByType, direction: SortByDirection) => void;
}

export interface UseTagSelectProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  router: any;
  sortBy: { type: SortByType; direction: SortByDirection };
}

export interface UseTagSelectReturn {
  handleTagClick: (tag: string) => void;
}

export interface UseSearchTermProps {
  selectedTags: string[];
  category: string;
  router: any;
  sortBy: { type: SortByType; direction: SortByDirection };
}

export interface SortAndFilterProps {
  productsArray: Product[];
  sortBy: { type: SortByType; direction: SortByDirection };
  selectedTags: string[];
  category: string;
}
