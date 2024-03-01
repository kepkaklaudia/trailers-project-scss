import { useEffect } from "react";
import {
  UseTagSelectProps,
  UseTagSelectReturn,
} from "@/app/[lng]/(pages)/products/[category]/types";

export const useTagSelect = ({
  sortBy,
  selectedTags,
  setSelectedTags,
  category,
  router,
}: UseTagSelectProps): UseTagSelectReturn => {
  const handleTagClick = (tag: string): void => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();
    let shouldUpdateURL = false;

    if (selectedTags.length > 0) {
      selectedTags.forEach((tag) => {
        queryParams.append("tag", tag);
        shouldUpdateURL = true;
      });
    } else {
      queryParams.delete("tag");
      shouldUpdateURL = true;
    }

    if (sortBy.type) {
      queryParams.set("sortType", sortBy.type);
    }

    if (sortBy.direction) {
      queryParams.set("sortDirection", sortBy.direction);
    }

    if (shouldUpdateURL) {
      router.replace(`/products/${category}?${queryParams}`);
    }
  }, [selectedTags]);

  return { handleTagClick };
};
