import "./App.css";
import Weather from "./src/Components/Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lincoln" />
      </div>
    </div>
  );
}
