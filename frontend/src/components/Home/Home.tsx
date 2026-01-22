import { HeroPage } from "../../pages/HeroPage";
import { ShopPage } from "../../pages/ShopPage";

export const Home = () => {
  return (
    <>
      <section id="main">
        <HeroPage />
      </section>

      <section id="shop">
        <ShopPage />
      </section>
    </>
  );
};
