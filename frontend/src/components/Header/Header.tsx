import { MenuHamburguer } from "./MenuHamburguer";
import type { HeaderProps } from "../../types/header";
import { BagPurchase } from "./BagPurchase";
import { LoginButton } from "./LoginButton";

export const Header = ({
  isMenuOpen,
  onMenuToggle,
  onCartToggle,
}: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-90 w-full h-20 flex items-center justify-between px-6 bg-gray-50">
      <div className="flex items-center gap-4">
        <MenuHamburguer isOpen={isMenuOpen} onToggle={onMenuToggle} />
      </div>

      {/* <span className="text-2xl font-black font-comfortaa">Aura store</span> */}

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <LoginButton />
          <BagPurchase onToggle={onCartToggle} />
        </div>
      </div>
    </header>
  );
};
