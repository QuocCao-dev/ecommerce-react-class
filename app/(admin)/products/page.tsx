"use client";

import { useProducts } from "@/app/features/products/hooks/queries/useProducts";
import ProductTable from "@/app/components/ProductTable";
import { useState } from "react";

type Props = {
  searchParams: {
    page: string;
  };
};

const ProductsPage = ({ searchParams: { page } }: Props) => {
  const currentPage = Number(page) || 1;

  const { products } = useProducts({ page: currentPage });

  return (
    <div>
      <ProductTable
        products={products}
        currentPageNo={currentPage}
        showPageNavigator
        hasMore
      />
    </div>
  );
};
export default ProductsPage;
