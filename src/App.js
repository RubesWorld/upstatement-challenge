import logo from "./logo.svg";
import "./app.scss";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <div className="text-container">
        <h1>Image Carousel</h1>
        <h2> The Greatest Philosophers of Mankind</h2>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
