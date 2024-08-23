import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="bg-primary">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {data.map((item) => (
        <img src={item.logo} />
      ))}
    </div>
  );
}

export default App;
