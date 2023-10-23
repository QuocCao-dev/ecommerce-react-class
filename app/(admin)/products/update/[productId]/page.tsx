"use client";

import { useProduct } from "@/app/features/products/hooks/queries/useProduct";
import ProductForm from "@/app/components/ProductForm";

type Props = {
  params: { productId: string };
};

const UpdateProductPage = ({ params: { productId } }: Props) => {
  const { product } = useProduct(productId);

  return (
    <div>
      <ProductForm onSubmit={function () {}} initialValue={product as any} />
    </div>
  );
};
export default UpdateProductPage;
