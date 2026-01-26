import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductSize } from "./ProductSize";
import { ButtonBuy } from "./ButtonBuy";
import { ProductDescription } from "./ProductDescription";

type Product = {
  product: {
    name: string;
    price: number;
    description: string;
  };
};

export const ProductData = ({ product }: Product) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const difference = endOfDay.getTime() - now.getTime();

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-10 w-1/3 h-full">
      <h1 className="text-3xl font-bold font-comfortaa">{product.name}</h1>
      <p className="text-2xl font-semibold ">${product.price}</p>
      <div className="flex items-center gap-1 border p-1 border-gray-300 rounded-md w-full">
        <FontAwesomeIcon
          icon={"exclamation"}
          className="text-gray-700 text-sm p-1 rounded-full shadow-sm shadow-gray-300"
        />
        <p className="text-[12px]">
          Order in{" "}
          <span className="font-bold">
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>{" "}
          to get next day delivery
        </p>
      </div>
      <ProductSize />
      <ButtonBuy text="Buy" />
      <ProductDescription description={product.description} />
    </div>
  );
};
