import { GetListItemRequest } from "@my-arc/components/src/TheAmazingListBuilder";
import { Product } from "../types/Product";
import axios from "axios";

export const getAll = async (args?: GetListItemRequest): Promise<Product[]> => {
  return (await axios.get(`https://dummyjson.com/products?limit=${args?.limit ?? 10}&skip=${args?.skip ?? 0}`)).data.products;
  };
  

const ProductService = {
    getAll,
}

export default ProductService
