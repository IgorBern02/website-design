import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BagPurchase = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div
      onClick={onToggle}
      className="flex items-center justify-center p-3 shadow-sm shadow-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition"
    >
      <FontAwesomeIcon icon="bag-shopping" className="text-sm" />
    </div>
  );
};
