import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const MenuHamburguer = () => {
  return (
    <div className="md:hidden absolute right-10 p-2 rounded-md cursor-pointer hover:bg-gray-700">
      <button className="flex flex-col space-y-2">
        <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
      </button>
    </div>
  );
};
