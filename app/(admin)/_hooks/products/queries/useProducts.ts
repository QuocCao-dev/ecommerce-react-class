import { fetchProducts } from "@/app/(admin)/_services/products";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useProducts = ({ page = 1 }: { page: number }) => {
  const query = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(),
    placeholderData: keepPreviousData,
    staleTime: 0,
  });

  return {
    ...query,
    products: query?.data ?? [],
  };
};
