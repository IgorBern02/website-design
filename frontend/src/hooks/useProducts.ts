import { useEffect, useState } from "react";
import type { Product } from "../types/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);

        if (!res.ok) throw new Error("Erro ao buscar produtos");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError("Falha ao carregar produtos");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};
