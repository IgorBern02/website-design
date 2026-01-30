import type { MenuHamburguerProps } from "./types";

export const MenuHamburguer = ({ isOpen, onToggle }: MenuHamburguerProps) => {
  return (
    <section
      onClick={onToggle}
      className={`p-2 cursor-pointer flex flex-col gap-1.5 transition-transform duration-500 ${isOpen ? "translate-x-48" : "translate-x-0"}`}
    >
      <div
        className={`w-6 h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <div
        className={`w-4 h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </section>
  );
};
