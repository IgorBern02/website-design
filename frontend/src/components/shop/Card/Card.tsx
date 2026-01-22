import type { Product } from "../../../types/products";
import { CardImage } from "./CardImage";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import { useRevealOnScroll } from "../../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export const Card = ({ product }: Props) => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <Link to={`/product/${product.id}`} className="relative block">
      <section
        ref={ref}
        className={`
      group relative w-full h-80 mt-15
      transition-all duration-700 ease-out
      ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }
    `}
      >
        <CardImage imageUrl={product.imageUrl} name={product.name} />

        <div className="w-full flex justify-between items-start mt-4">
          <CardInfo name={product.name} price={product.price} />
          <CardButton />
        </div>
      </section>
    </Link>
  );
};
