import { CategoryDropdown } from "./CategoryDropdown";
import { SearchInput } from "./SearchInput";
import type { FiltersProps } from "./types";

export const Filters = ({ onSearch, onCategorySelect }: FiltersProps) => {
  return (
    <section className="h-20 w-full flex items-center px-10  gap-4 relative">
      <CategoryDropdown onCategorySelect={onCategorySelect} />
      <SearchInput onSearch={onSearch} />
    </section>
  );
};
