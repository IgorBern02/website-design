export const MenuHamburguer = () => {
  return (
    <div className="absolute right-10 p-2 rounded-md cursor-pointer hover:bg-gray-700">
      <button className="flex flex-col space-y-2">
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
      </button>
    </div>
  );
};
