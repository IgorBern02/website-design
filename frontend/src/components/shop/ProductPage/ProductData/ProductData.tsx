import { ProductSize } from "./ProductSize";
import { ButtonsBuyAndFavorite } from "./Buttons/ButtonsBuyAndFavorite";
import { ProductDescription } from "./ProductDescription";
import { Discount } from "./Discount";
import type { Product } from "../../../../types/products";

export const ProductData = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-6 p-10 w-1/3 h-full">
      <h1 className="text-3xl font-bold font-comfortaa">{product.name}</h1>
      <p className="text-2xl font-semibold ">${product.price}</p>
      <Discount />
      <ProductSize sizes={product.sizes} />

      <ButtonsBuyAndFavorite product={product} />

      <ProductDescription description={product.description} />
    </div>
  );
};
