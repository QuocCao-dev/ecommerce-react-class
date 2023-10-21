import ProductTable from "@/app/components/ProductTable";

const ProductsPage = () => {
  return (
    <div>
      <ProductTable products={[]} currentPageNo={1} />
    </div>
  );
};
export default ProductsPage;
