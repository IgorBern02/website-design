type ButtonBuyProps = {
  text: String;
};

export const ButtonBuy = ({ text }: ButtonBuyProps) => {
  return (
    <button className="w-full border rounded-2xl text-black px-10 py-4 font-comfortaa text-sm hover:bg-gray-100 transition cursor-pointer ">
      {text || "Comprar agora"}
    </button>
  );
};
