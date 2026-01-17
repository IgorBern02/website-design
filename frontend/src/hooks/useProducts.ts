import { useEffect, useState } from "react";
import type { Product } from "../types/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return { products };
};
