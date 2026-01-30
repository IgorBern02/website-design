// utils/mapProductToFavorite.ts
import type { Product } from "../types/products";
import type { FavoriteItem } from "../context/FavoritesContext";

export const mapProductToFavorite = (product: Product): FavoriteItem => ({
  id: product.id,
  title: product.name,
  price: product.price,
  image: product.imageUrl,
});
