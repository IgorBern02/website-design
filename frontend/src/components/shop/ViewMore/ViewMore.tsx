interface ViewMoreProps {
  onClick: () => void;
}

export const ViewMore = ({ onClick }: ViewMoreProps) => {
  return (
    <button
      onClick={onClick}
      className="mt-10 mx-auto px-6 py-2 border-2 border-black text-black font-bold font-comfortaa text-sm hover:bg-gray-100 hover:text-white transition-colors cursor-pointer"
    >
      View More Products
    </button>
  );
};
