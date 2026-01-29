import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { HeaderProps } from "./types";

export const Sidebar = ({ isOpen, onClose }: HeaderProps) => {
  const ArrayItems = [
    {
      name: "Favorites",
      icon: "bookmark",
    },
    {
      name: "Products",
      icon: "cart-shopping",
    },
    {
      name: "Profile",
      icon: "user",
    },
    {
      name: "Settings",
      icon: "gear",
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Menu */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-10 pt-24 flex flex-col gap-6 text-xl font-comfortaa">
          {/* pt-24 dá espaço para o X não cobrir o texto "Home" */}
          {ArrayItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center justify-start gap-5 text-base font-comfortaa hover:text-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={item.icon as any} className="text-sm" />{" "}
              {item.name}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};
