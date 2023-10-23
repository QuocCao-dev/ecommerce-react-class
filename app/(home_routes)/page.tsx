"use client";

import GridView from "@/app/components/GridView";
import { useLatestProducts } from "@/app/features/products/hooks/queries/useLatestProducts";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  const { latestProducts } = useLatestProducts();

  return (
    <div className="py-4 space-y-4">
      <GridView>
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridView>
    </div>
  );
}
