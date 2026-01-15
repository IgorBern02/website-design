import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className=" h-screen w-full flex flex-col overflow-hidden bg-amber-300">
      <Header text_up="Aura" text_down="store" />
      <Main />
    </div>
  );
}

export default App;
