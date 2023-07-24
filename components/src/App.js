import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="main">
      <Welcome name="Laura"></Welcome>
      <Welcome name="Jane"></Welcome>
      <Welcome name="World"></Welcome>
    </div>
  );
}

export default App;
