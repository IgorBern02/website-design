import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useFavorites,
  type FavoriteItem,
} from "../../../../context/FavoritesContext";

type ButtonFavoriteProps = {
  item: FavoriteItem;
};

export const ButtonFavorite = ({ item }: ButtonFavoriteProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const liked = isFavorite(item.id);

  return (
    <FontAwesomeIcon
      icon={liked ? ["fas", "heart"] : ["far", "heart"]}
      onClick={() => toggleFavorite(item)}
      className="text-xl text-gray-700 p-4 cursor-pointer rounded-full hover:bg-gray-100 ml-4 shadow-sm shadow-gray-300"
    />
  );
};
