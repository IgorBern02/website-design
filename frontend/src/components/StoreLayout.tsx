import { Header } from "../components/Header/Header";
import { NavSideBar } from "./ui/NavSideBar";
import { CartSidebar } from "./ui/CartSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const StoreLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Funções para alternar
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Funções para fechar
  const closeMenu = () => setIsMenuOpen(false);
  const closeCart = () => setIsCartOpen(false);

  // Fechar ambos quando um abrir (opcional - melhora UX em mobile)
  const handleMenuToggle = () => {
    if (isCartOpen) closeCart();
    toggleMenu();
  };

  const handleCartToggle = () => {
    if (isMenuOpen) closeMenu();
    toggleCart();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
        onCartToggle={handleCartToggle}
      />

      {/* Overlay para quando algum sidebar estiver aberto */}
      {(isMenuOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => {
            if (isMenuOpen) closeMenu();
            if (isCartOpen) closeCart();
          }}
        />
      )}

      {/* Sidebars */}
      <NavSideBar isOpen={isMenuOpen} onClose={closeMenu} />
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />

      {/* Conteúdo principal */}
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
};
