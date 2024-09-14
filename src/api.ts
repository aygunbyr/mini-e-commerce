import axios from "axios";
import Product from "./models/Product";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>("/products/categories");
  return response.data;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};
