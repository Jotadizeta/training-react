import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return (
    <div className="main">
      <Welcome UserName="Laura" today={today}></Welcome>
      <Welcome UserName="Jane" today={today}></Welcome>
      <Welcome UserName="World" today={today}></Welcome>
    </div>
  );
}

export default App;
