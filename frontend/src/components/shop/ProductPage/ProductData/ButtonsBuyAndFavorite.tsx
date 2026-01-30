import { ButtonBuy } from "./ButtonBuy";
import { ButtonFavorite } from "./ButtonFavorite";
import type { FavoriteItem } from "../../../../context/FavoritesContext";

type Props = {
  item: FavoriteItem;
};

export const ButtonsBuyAndFavorite = ({ item }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <ButtonBuy text="Buy now" />
      <ButtonFavorite item={item} />
    </div>
  );
};
