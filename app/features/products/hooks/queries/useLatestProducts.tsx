import { fetchLatestProducts } from "@/app/features/products/services/products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useLatestProducts = () => {
  const query = useQuery({
    queryKey: ["latest-products"],
    queryFn: () => fetchLatestProducts(),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    latestProducts: query?.data ?? [],
  };
};
