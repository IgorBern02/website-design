import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonBuyProps = { text?: string };

export const ButtonBuy = ({ text }: ButtonBuyProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <button className="w-full border rounded-2xl text-white px-10 py-4 font-comfortaa text-sm hover:bg-gray-100 transition cursor-pointer">
        {text || "Comprar agora"}
      </button>

      <FontAwesomeIcon
        icon={liked ? ["fas", "heart"] : ["far", "heart"]}
        onClick={() => setLiked(!liked)}
        className="text-xl text-gray-700 p-4 cursor-pointer rounded-full hover:bg-gray-100 ml-4 shadow-sm shadow-gray-300"
      />
    </div>
  );
};
