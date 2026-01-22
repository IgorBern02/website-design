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

        // No seu hook useProducts
        const data = await res.json();

        // Transformar _id em id, se necessário
        const normalizedData = data.map((p: any) => ({
          ...p,
          id: p.id || p._id, // Se não houver 'id', usa o '_id'
        }));

        setProducts(normalizedData);
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
