import { useQuery } from "@tanstack/react-query";

import { fetchProduct } from "@/app/features/products/services/products";

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  return {
    ...query,
    product: query?.data ?? null,
  };
};
