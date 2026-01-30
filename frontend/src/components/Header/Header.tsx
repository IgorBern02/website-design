import { MenuHamburguer } from "./MenuHamburguer";
import type { HeaderProps } from "./types";
import { BagPurchase } from "./BagPurchase";

export const Header = ({
  isMenuOpen,
  onMenuToggle,
  onCartToggle,
}: HeaderProps) => {
  return (
    <header className="fixed z-50 w-full h-20 flex items-center justify-between px-6 bg-gray-50">
      <MenuHamburguer isOpen={isMenuOpen} onToggle={onMenuToggle} />

      <span className="text-2xl font-black font-comfortaa">Aura store</span>

      <BagPurchase onToggle={onCartToggle} />
    </header>
  );
};
