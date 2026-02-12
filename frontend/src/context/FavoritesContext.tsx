import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/products";
import { API } from "../services/api";
import { useAuth } from "./AuthContext";

type FavoritesContextType = {
  favorites: FavoriteProduct[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: Product) => Promise<void>;
  reloadFavorites: () => Promise<void>;
};

type FavoriteProduct = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const { token } = useAuth();

  const loadFavorites = async () => {
    if (!token) {
      setFavorites([]);
      return;
    }

    const res = await fetch(`${API}/favorites`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    const list = Array.isArray(data) ? data : [];

    const mapped: FavoriteProduct[] = list.map((f: any) => ({
      id: f.product._id,
      name: f.product.name,
      imageUrl: f.product.imageUrl,
      price: f.product.price,
    }));

    setFavorites(mapped);
  };

  useEffect(() => {
    if (token) {
      loadFavorites();
    } else {
      setFavorites([]);
    }
  }, [token]);

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  const toggleFavorite = async (item: Product) => {
    if (!token) return;

    const alreadyFavorite = isFavorite(item.id);

    const favoriteItem: FavoriteProduct = {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price,
    };

    setFavorites((prev) =>
      alreadyFavorite
        ? prev.filter((f) => f.id !== item.id)
        : [...prev, favoriteItem],
    );

    try {
      await fetch(`${API}/favorites/${item.id}`, {
        method: alreadyFavorite ? "DELETE" : "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      await loadFavorites(); // 🔥 sincroniza com backend
    } catch {
      loadFavorites();
    }

    console.log("Favorites:", favorites);
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
