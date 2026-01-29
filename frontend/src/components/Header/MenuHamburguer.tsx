import type { HeaderProps } from "./types";

export const MenuHamburguer = ({ isOpen, onToggle }: HeaderProps) => {
  return (
    <section
      onClick={onToggle}
      className={`p-2 flex flex-col justify-center gap-1.5 cursor-pointer z-50 transition-transform duration-500 ${
        isOpen ? "translate-x-48" : "translate-x-0"
      }`}
    >
      {/* Os traços do hambúrguer continuam iguais */}
      <div
        className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
      />
      <div
        className={`w-4 h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
      />
      <div
        className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </section>
  );
};
