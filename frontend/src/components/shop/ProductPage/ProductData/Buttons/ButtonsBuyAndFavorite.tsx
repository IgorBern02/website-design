import type { Product } from "../../../../../types/products";
import { ButtonAddToCart } from "./ButtonAddToCart";
import { ButtonFavorite } from "./ButtonFavorite";

type Props = {
  product: Product;
};

export const ButtonsBuyAndFavorite = ({ product }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <ButtonAddToCart product={product} />
      <ButtonFavorite product={product} />
    </div>
  );
};
