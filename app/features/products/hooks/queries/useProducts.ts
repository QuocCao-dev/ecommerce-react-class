import { fetchProducts } from "@/app/features/products/services/products";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useProducts = ({ page = 1 }: { page: number }) => {
  const query = useQuery({
    queryKey: ["products", { page }],
    queryFn: () => fetchProducts(),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    products: query.data?.data ?? [],
    meta: query.data?.meta ?? {},
  };
};
