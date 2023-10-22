"use client";

import { useProducts } from "@/app/(admin)/_hooks/products/queries/useProducts";
import ProductTable from "@/app/components/ProductTable";
import { useState } from "react";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const { products, isLoading } = useProducts({ page });
  console.log(products);

  return (
    <div>
      <ProductTable products={products} currentPageNo={1} showPageNavigator />
    </div>
  );
};
export default ProductsPage;
