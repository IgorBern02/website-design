import type { Product } from "../../../types/products";

type Props = Pick<Product, "imageUrl" | "name">;

export const CardImage = ({ imageUrl, name }: Props) => {
  return (
    <div className="border border-gray-200 w-full h-full flex justify-center items-end rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-gray-400 cursor-pointer">
      <img
        src={imageUrl}
        alt={name}
        className="
          h-[120%] object-contain z-10
          transition-transform duration-500 ease-out
          group-hover:scale-110 group-hover:-translate-y-4
          drop-shadow-2xl
        "
      />
    </div>
  );
};
