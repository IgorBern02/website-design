import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductPage } from "./components/shop/ProductPage/ProductPage";
import { Home } from "./components/Home/Home";
import { Collection } from "./components/Collection/Collection";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header text_up="Aura" text_down="store" />

      <main className="pt-20">
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
