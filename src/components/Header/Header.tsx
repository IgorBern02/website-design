import { listHeaderItems } from "./list-header-items/ListHeaderItems";
import { MenuHamburguer } from "./menu-hamburguer/MenuHamburguer";

type HeaderProps = {
  text_up: string;
  text_down: string;
};

export const Header = ({ text_up, text_down }: HeaderProps) => {
  return (
    <header className="w-full flex justify-between items-center p-4 text-white relative">
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
