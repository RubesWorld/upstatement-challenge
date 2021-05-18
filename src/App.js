import react, { useState } from "react";

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
        <div className="toggle-div">
          <h1>Image Carousel</h1>
          {mode === "light" ? (
            <DarkButton modeToggle={modeToggle} />
          ) : (
            <LightButton modeToggle={modeToggle} />
          )}
        </div>
        <h2> The Greatest Philosophers of Mankind</h2>
      </div>
      <Carousel mode={mode} />
    </div>
  );
}

export default App;
