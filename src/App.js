import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import StaticCounter from "./components/StaticCounter";

function App() {
  return (
    <div className="App container mt-5">
      <Counter />
      <HooksCounter />
      <StaticCounter />
    </div>
  );
}

export default App;
