import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../../../../../context/FavoritesContext";
import type { Product } from "../../../../../types/products";

type Props = {
  product: Product;
};

export const ButtonFavorite = ({ product }: Props) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const liked = isFavorite(product.id);

  return (
    <FontAwesomeIcon
      icon={liked ? ["fas", "heart"] : ["far", "heart"]}
      onClick={() => toggleFavorite(product)}
      className="text-xl text-gray-700 p-4 cursor-pointer rounded-full hover:bg-gray-100 ml-4 shadow-sm shadow-gray-300"
    />
  );
};
