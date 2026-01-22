import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HeroPage } from "./pages/HeroPage";
import { ShopPage } from "./pages/ShopPage";
import { ProductPage } from "./components/shop/ProductPage/ProductPage";

function Home() {
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
}

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header text_up="Aura" text_down="store" />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
