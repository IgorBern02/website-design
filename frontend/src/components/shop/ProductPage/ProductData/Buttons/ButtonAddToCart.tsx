import {
  usePurchase,
  type PurchaseItem,
} from "../../../../../context/PurchasesContext";

type ButtonBuyProps = {
  text: String;
  item: PurchaseItem;
};

export const ButtonAddToCart = ({ text, item }: ButtonBuyProps) => {
  const { togglePurchase, isPurchase } = usePurchase();
  const purchased = isPurchase(item.id);

  return (
    <button
      onClick={() => togglePurchase(item)}
      disabled={purchased}
      className="w-full border rounded-2xl text-black px-10 py-4 font-comfortaa text-sm hover:bg-gray-100 transition cursor-pointer "
    >
      {text}
    </button>
  );
};
