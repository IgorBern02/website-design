import { ProductSize } from "./ProductSize";
import { ButtonBuy } from "./ButtonBuy";
import { ProductDescription } from "./ProductDescription";
import { Discount } from "./Discount";

type Product = {
  product: {
    name: string;
    price: number;
    description: string;
  };
};

export const ProductData = ({ product }: Product) => {
  return (
    <div className="flex flex-col gap-6 p-10 w-1/3 h-full">
      <h1 className="text-3xl font-bold font-comfortaa">{product.name}</h1>
      <p className="text-2xl font-semibold ">${product.price}</p>
      <Discount />
      <ProductSize />
      <ButtonBuy text="Buy Now" />
      <ProductDescription description={product.description} />
    </div>
  );
};
