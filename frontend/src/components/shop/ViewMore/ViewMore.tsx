interface ViewMoreProps {
  onClick: () => void;
  isExpanded: boolean; // Nova prop
}

export const ViewMore = ({ onClick, isExpanded }: ViewMoreProps) => {
  return (
    <button
      onClick={onClick}
      className="mt-10 mx-auto px-6 py-2 border-2 border-black text-black font-bold font-comfortaa text-sm hover:bg-gray-100 hover:text-white transition-all duration-300 cursor-pointer uppercase"
    >
      {isExpanded ? "View Less" : "View More Products"}
    </button>
  );
};
