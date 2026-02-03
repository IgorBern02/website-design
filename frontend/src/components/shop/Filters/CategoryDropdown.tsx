import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categories } from "./categories";
import type { CategoryDropdownProps } from "./types";

export const CategoryDropdown = ({
  onCategorySelect,
}: CategoryDropdownProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-500 text-sm cursor-pointer border border-transparent hover:border-gray-200 transition-all"
      >
        <span>Categories</span>
        <FontAwesomeIcon
          icon="chevron-down"
          className={`text-[10px] transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Lista Suspensa (O Menu que abre) */}
      {isCategoriesOpen && (
        <ul className="absolute top-12 left-0 w-48 flex flex-col gap-2 bg-gray-100 border border-gray-100 rounded-2xl shadow-xl py-2 z-90 animate-in fade-in zoom-in duration-200">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                onCategorySelect(cat); // Avisa o ShopPage que "T-Shirts" foi selecionado
                setIsCategoriesOpen(false);
              }}
              className="px-3 py-1 text-sm text-gray-700 font-poppins cursor-pointer hover:bg-gray-200 transition"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
