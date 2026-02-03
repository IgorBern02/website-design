import type { SidebarProps } from "../../types/header";

export const CartSidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Right */}
      <aside
        className={`fixed top-0 right-0 h-screen w-96 bg-gray-50 shadow-xl transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold">Seu carrinho</h2>
        </div>
      </aside>
    </>
  );
};
