import { useCart } from "../../../../../context/CartContext";
import type { Product } from "../../../../../types/products";

type Props = {
  product: Product;
};

export const ButtonAddToCart = ({ product }: Props) => {
  const { addToCart, isInCart } = useCart();

  const inCart = isInCart(product.id);

  return (
    <button
      onClick={() => addToCart(product)}
      disabled={inCart}
      className="w-full border rounded-2xl text-black px-10 py-4 font-comfortaa text-sm hover:bg-gray-100 transition cursor-pointer"
    >
      {inCart ? "In cart" : "Add to cart"}
    </button>
  );
};
