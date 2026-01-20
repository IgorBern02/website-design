import { Header } from "./components/Header/Header";
import { HeroPage } from "./pages/HeroPage";
import { Shop } from "./pages/Shop";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header text_up="Aura" text_down="store" />

      <main className="pt-20">
        <section id="main" className="">
          <HeroPage />
        </section>

        <section id="shop" className="">
          <Shop />
        </section>
      </main>
    </div>
  );
}

export default App;
