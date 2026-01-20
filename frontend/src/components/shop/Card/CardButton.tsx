type Props = {
  onClick?: () => void;
};

export const CardButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="border border-black rounded-xl px-5 py-2 text-black font-semibold transition-colors cursor-pointer hover:bg-gray-100"
    >
      Buy In
    </button>
  );
};
