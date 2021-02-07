import { useDropy } from "./components/customHooks/useDropy";
import "./App.css";

function App() {
  const data = useDropy();
  console.log(data);
  return (
    <div className="App" id="drop-area">
      <div id="drop-zone" />
    </div>
  );
}

export default App;
