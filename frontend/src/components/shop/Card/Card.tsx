import type { Product } from "../../../types/products";
import { CardImage } from "./CardImage";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";

type Props = {
  product: Product;
};

export const Card = ({ product }: Props) => {
  return (
    <section className="group relative w-full h-80 mt-10">
      <CardImage imageUrl={product.imageUrl} name={product.name} />

      <div className="w-full flex justify-between items-start mt-4">
        <CardInfo name={product.name} price={product.price} />
        <CardButton />
      </div>
    </section>
  );
};
