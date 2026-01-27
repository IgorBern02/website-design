import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FiltersProps {
  onSearch: (term: string) => void;
  onCategorySelect: (category: string) => void;
}

export const Filters = ({ onSearch, onCategorySelect }: FiltersProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = ["all", "pants", "sets", "hoodie", "t-shirts"];

  return (
    <section className="h-20 w-full flex items-center px-10 bg-white border-b border-gray-100 gap-4 relative">
      {/* Container do Dropdown */}
      <div className="relative">
        <div
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-gray-500 text-sm cursor-pointer border border-transparent hover:border-gray-200 transition-all"
        >
          <span>Categories</span>
          <FontAwesomeIcon
            icon="chevron-down"
            className={`text-[10px] transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
          />
        </div>

        {/* Lista Suspensa (O Menu que abre) */}
        {isCategoriesOpen && (
          <ul className="absolute top-12 left-0 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-90 animate-in fade-in zoom-in duration-200">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  onCategorySelect(cat); // Avisa o ShopPage que "T-Shirts" foi selecionado
                  setIsCategoriesOpen(false);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Barra de Busca (Mantenha seu código) */}
      <div className="flex-1 max-w-xl relative">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-gray-50 py-2 px-5 pr-10 rounded-full text-sm outline-none border border-transparent focus:border-gray-200"
        />
        <FontAwesomeIcon
          icon="magnifying-glass"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
        />
      </div>
    </section>
  );
};
