import react, { useState } from "react";
import "./app.scss";
import Carousel from "./components/Carousel";
import LightButton from "./components/light-button";
import DarkButton from "./components/dark-button";

function App() {
  const [mode, setMode] = useState("light");

  const modeToggle = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <div className={mode === "light" ? "App" : "App-dark"}>
      <div className="text-container">
        <div className="toggle-div" onClick={modeToggle}>
          {mode === "light" ? <DarkButton /> : <LightButton />}
        </div>
        <h1>Image Carousel</h1>
        <h2> The Greatest Philosophers of Mankind</h2>
      </div>
      <Carousel mode={mode} />
    </div>
  );
}

export default App;
