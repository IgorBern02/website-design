import { listHeaderItems } from "./list-header-items/ListHeaderItems";
import { MenuHamburguer } from "./menu-hamburguer/MenuHamburguer";

type HeaderProps = {
  title: String;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full flex justify-center items-center p-4  text-white">
      <h1 className="absolute left-10 font-bold text-2xl">{title}</h1>
      {listHeaderItems()}
      <MenuHamburguer />
    </header>
  );
};
