import { listHeaderItems } from "./list-header-items/ListHeaderItems";
import { MenuHamburguer } from "./menu-hamburguer/MenuHamburguer";

type HeaderProps = {
  text_up: string;
  text_down: string;
};

export const Header = ({ text_up, text_down }: HeaderProps) => {
  return (
    <header className="w-full h-20 flex justify-between items-center px-6 text-white fixed top-0 left-0  backdrop-blur-md z-50">
      <div className="leading-none">
        <span className="block font-bold text-2xl tracking-tight font-poppins">
          {text_up}
        </span>

        <span className="block font-bold text-xl tracking-tight font-poppins -mt-1">
          {text_down}
        </span>
      </div>

      {listHeaderItems()}
      <MenuHamburguer />
      <p className="font-semibold font-comfortaa text-base">
        account id - 003.201
      </p>
    </header>
  );
};
