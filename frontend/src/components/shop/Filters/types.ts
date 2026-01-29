export type FiltersProps = {
  onSearch: (term: string) => void;
  onCategorySelect: (category: string) => void;
};

export type CategoryDropdownProps = {
  onCategorySelect: (category: string) => void;
};

export type SearchInputProps = {
  onSearch: (term: string) => void;
};
