export const ProductSize = () => {
  return (
    <>
      <span className="font-poppins text-sm">Select Size</span>
      <ul className="flex items-center gap-3">
        <li className="border rounded-2xl px-6 py-2 hover:bg-gray-100 cursor-pointer">
          S
        </li>
        <li className="border rounded-2xl px-6 py-2 hover:bg-gray-100 cursor-pointer">
          M
        </li>
        <li className="border rounded-2xl px-6 py-2 hover:bg-gray-100 cursor-pointer">
          L
        </li>
        <li className="border rounded-2xl px-6 py-2 hover:bg-gray-100 cursor-pointer">
          XL
        </li>
        <li className="border rounded-2xl px-6 py-2 hover:bg-gray-100 cursor-pointer">
          XXL
        </li>
      </ul>
    </>
  );
};
