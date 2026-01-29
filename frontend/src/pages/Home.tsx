import { ShopPage } from "../components/shop/ShopPage";

interface HomeProps {
  searchTerm: string;
  selectedCategory: string;
}

export const Home = ({ searchTerm, selectedCategory }: HomeProps) => {
  return (
    <ShopPage searchTerm={searchTerm} selectedCategory={selectedCategory} />
  );
};
