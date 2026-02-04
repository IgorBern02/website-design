import { Routes, Route } from "react-router-dom";
import { StoreLayout } from "../src/components/StoreLayout";
import { Home } from "./pages/Home";
import { AuthPage } from "../src/pages/AuthPage";
import { ProductPage } from "./components/shop/ProductPage/ProductPage";
import { FavoritePage } from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      {/* Rotas da loja (com header e footer) */}
      <Route element={<StoreLayout />}>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Route>

      {/* Rotas FULLSCREEN */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
