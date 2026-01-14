import "./App.css";
import backgtround from "./assets/images/background.png";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header title="Website Design" />
      <img src={backgtround} alt="Background" />
    </div>
  );
}

export default App;
