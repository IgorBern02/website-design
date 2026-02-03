import { Footer } from "../components/Footer/Footer";
import { HeroPage } from "../components/Hero";
import { ShopPage } from "../components/shop/ShopPage";

export const Home = () => {
  return (
    <>
      <HeroPage />
      <ShopPage />
      <Footer />
    </>
  );
};
