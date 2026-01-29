import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SearchInputProps } from "./types";

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
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
  );
};
