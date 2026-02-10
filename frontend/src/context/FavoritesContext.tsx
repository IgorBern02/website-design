import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/products";
import { API } from "../services/api";

type FavoritesContextType = {
  favorites: Product[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: Product) => Promise<void>;
  reloadFavorites: () => Promise<void>;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const loadFavorites = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setFavorites([]);
      return;
    }

    const res = await fetch(`${API}/favorites`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { favorites } = await res.json();

    const mapped: Product[] = favorites.map((f: any) => ({
      id: f.product._id,
      name: f.product.name,
      imageUrl: f.product.imageUrl,
      price: f.product.price,
    }));

    setFavorites(mapped);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  const toggleFavorite = async (item: Product) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (isFavorite(item.id)) {
      await fetch(`${API}/favorites/${item.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      await fetch(`${API}/favorites/${item.id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    await loadFavorites(); // 🔥 sincroniza com o banco sempre
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        reloadFavorites: loadFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
