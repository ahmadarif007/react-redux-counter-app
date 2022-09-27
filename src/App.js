import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import StaticCounter from "./components/StaticCounter";

function App() {
  return (
    <div className="App row p-4">
      <Counter />
      <HooksCounter />
      <StaticCounter />
    </div>
  );
}

export default App;
