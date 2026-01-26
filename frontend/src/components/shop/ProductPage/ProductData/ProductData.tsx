import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { ProductSize } from "./ProductSize";
import { ButtonBuy } from "./ButtonBuy";
import { ProductDescription } from "./ProductDescription";

type Product = {
  product: {
    name: string;
    price: number;
  };
};

export const ProductData = ({ product }: Product) => {
  return (
    <div className="flex flex-col gap-6 p-10 w-1/3 h-full">
      <h1 className="text-3xl font-bold font-comfortaa">{product.name}</h1>
      <p className="text-2xl font-semibold ">${product.price}</p>
      <div className="flex items-center gap-1 border p-1 border-gray-300 rounded-md w-full">
        <FontAwesomeIcon
          icon={faExclamation}
          className="text-gray-700 text-sm p-1 rounded-full shadow-sm shadow-gray-300"
        />
        <p className="text-[12px]">Order in to get next day delivery</p>
      </div>
      <ProductSize />
      <ButtonBuy text="Buy" />
      <ProductDescription />
    </div>
  );
};
