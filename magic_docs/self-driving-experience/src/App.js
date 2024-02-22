import TeslaTitle from "./components/TeslaTitle"
import Showreel from "./components/Showreel"
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TeslaTitle />
        <a
          className="App-link"
          href="https://www.tesla.com/en_gb/support/autopilot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
      <Showreel />
    </div>
  );
}

export default App;
