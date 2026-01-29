import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuHamburguer } from "./MenuHamburguer";
import type { HeaderProps } from "./types";

export const Header = ({ isOpen, onToggle }: HeaderProps) => {
  return (
    <header className="relative z-50 w-full h-20 flex items-center justify-between px-6">
      <MenuHamburguer isOpen={isOpen} onToggle={onToggle} />
      <span className="text-2xl font-black font-comfortaa">Aura store</span>
      <section className="flex items-center gap-7">
        <div className="flex items-center justify-center p-3 shadow-sm shadow-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition">
          <FontAwesomeIcon icon="bag-shopping" className="text-sm" />
        </div>
      </section>
    </header>
  );
};
