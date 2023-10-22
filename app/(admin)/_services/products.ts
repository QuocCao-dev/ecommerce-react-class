import { TProduct } from "@/app/components/ProductTable";
import axiosClient from "@/app/libs/axios-client";

export const fetchProducts = async () => {
  const res = await axiosClient.get<TProduct[]>("/products");
  return res.data;
};
