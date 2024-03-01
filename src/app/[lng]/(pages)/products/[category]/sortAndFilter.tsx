import {
  Product,
  SortAndFilterProps,
} from "@/app/[lng]/(pages)/products/[category]/types";

export const sortAndFilter = ({
  productsArray,
  sortBy,
  selectedTags,
  category,
}: SortAndFilterProps): Product[] => {
  const { type, direction } = sortBy;

  const sortedProducts = productsArray.slice().sort((a, b) => {
    if (type === "name") {
      return sortBy.direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (type === "height") {
      return sortBy.direction === "asc"
        ? a.height - b.height
        : b.height - a.height;
    } else if (type === "length") {
      return direction === "asc" ? a.length - b.length : b.length - a.length;
    } else if (type === "width") {
      return direction === "asc" ? a.width - b.width : b.width - a.width;
    } else if (type === "gvw") {
      return direction === "asc" ? a.gvw - b.gvw : b.gvw - a.gvw;
    } else if (type === "curbWeight") {
      return direction === "asc"
        ? a.curbWeight - b.curbWeight
        : b.curbWeight - a.curbWeight;
    } else if (type === "loadArea") {
      const loadAreaA = a.widthArea * a.lengthArea;
      const loadAreaB = b.widthArea * b.lengthArea;
      return sortBy.direction === "asc"
        ? loadAreaA - loadAreaB
        : loadAreaB - loadAreaA;
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((product) => {
    if (product.path !== category && category !== "all") {
      return false;
    }
    if (selectedTags.length > 0) {
      return selectedTags.every(
        (tag) => product.tags && product.tags.includes(tag)
      );
    }
    return true;
  });

  return filteredProducts;
};
