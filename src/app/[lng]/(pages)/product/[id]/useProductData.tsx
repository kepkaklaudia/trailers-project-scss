import { useQuery } from "@tanstack/react-query";
import { ProductData } from "./types";

const useProductData = ({ locale, id }: { locale: string; id: string }) => {
  const { data, isLoading, error, isPaused } = useQuery<ProductData>(
    ["productById", id],
    async () => {
      const response = await fetch(
        `/assets/trailers/details/${locale}/${id}.json`
      );
      const data = await response.json();
      return data;
    },
    {
      staleTime: 600000,
      retry: 1,
    }
  );

  return { data, isLoading, error, isPaused };
};

export default useProductData;
