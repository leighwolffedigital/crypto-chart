import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import ChartContainer from "./components/chartContainer/chartContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ChartContainer />
    </div>
  );
}

export default App;
