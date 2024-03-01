import { useEffect } from "react";
import {
  SortByType,
  SortByDirection,
  UseSortSelectProps,
  UseSortSelectReturn,
} from "@/app/[lng]/(pages)/products/[category]/types";

export const useSortSelect = ({
  selectedTags,
  sortBy,
  setSortBy,
  category,
  router,
}: UseSortSelectProps): UseSortSelectReturn => {
  const handleSort = (type: SortByType, direction: SortByDirection) => {
    setSortBy({ type, direction });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();
    let shouldUpdateURL = false;

    if (sortBy.direction && ["asc", "desc"].includes(sortBy.direction)) {
      queryParams.set("sortDirection", sortBy.direction);
      queryParams.set("sortType", sortBy.type);
      shouldUpdateURL = true;
    }

    selectedTags &&
      selectedTags.forEach((tag: string) => {
        queryParams.append("tag", tag);
      });

    if (shouldUpdateURL) {
      router.replace(`/products/${category}?${queryParams}`);
    }
  }, [sortBy.direction]);

  return { sortBy, handleSort };
};
