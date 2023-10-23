import { TProduct } from "@/app/components/ProductTable";
import axiosClient from "@/app/libs/axios-client";

export const fetchProducts = async () => {
  const res = await axiosClient.get<TPaginationResponse<TProduct>>("/products");
  return res.data;
};

export const fetchProduct = async (id: string) => {
  const res = await axiosClient.get<TProduct>(`/products/${id}`);
  return res.data;
};

export const fetchLatestProducts = async () => {
  const res = await axiosClient.get<TProduct[]>("/products/latest");
  return res.data;
};
