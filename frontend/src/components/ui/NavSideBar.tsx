import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import type { SidebarProps } from "../../types/header";

export const NavSideBar = ({ isOpen, onClose }: SidebarProps) => {
  const ArrayItems = [
    { name: "Home", icon: "home" },
    { name: "Favorites", icon: "bookmark" },
    { name: "Products", icon: "cart-shopping" },
    { name: "Profile", icon: "user" },
    { name: "Settings", icon: "gear" },
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
        className={`fixed top-0 left-0 h-screen w-72 bg-gray-50 shadow-xl transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-10 pt-24 flex flex-col gap-6 text-xl font-comfortaa">
          {ArrayItems.map((item) => (
            <Link
              to={`/${item.name.toLowerCase()}`}
              key={item.name}
              onClick={onClose}
              className="flex items-center gap-5 text-base hover:text-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={item.icon as any} className="text-sm" />
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};
