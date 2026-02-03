import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SidebarProps } from "../../types/header";
import { usePurchase } from "../../context/PurchasesContext";

export const CartSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { purchases } = usePurchase();

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
        className={`fixed top-0 right-0 h-screen w-96 bg-gray-50 shadow-xl transition-transform duration-500 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {purchases.length === 0 && (
          <p className="mt-24 flex items-center justify-center">
            Nenhum item favoritado.
          </p>
        )}

        <div className="p-5 pt-24  flex-1 overflow-y-auto flex flex-col gap-6 text-xl font-comfortaa ">
          {purchases.map((item) => (
            <section
              key={item.id}
              onClick={onClose}
              className="w-full h-28 shrink-0 flex flex-col items-center gap-1 shadow-sm shadow-gray-300 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center justify-between w-full p-2">
                <div className="bg-amber-300 p-8 rounded-lg"></div>
                <span className="text-sm">{item.title}</span>
                <span className="text-sm font-bold">$ {item.price}</span>
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="text-sm p-1 cursor-pointer">
                  <FontAwesomeIcon icon="trash" />
                </button>
              </div>
            </section>
          ))}
        </div>
        <div className="flex items-center justify-between p-2">
          <button
            className="mt-5 mb-5 mx-auto px-6 py-2 border-2 border-black text-black
            font-bold font-comfortaa text-sm 
             cursor-pointer uppercase rounded-lg"
          >
            Confirmed purchase
          </button>
        </div>
      </aside>
    </>
  );
};
