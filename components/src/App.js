import "./App.css";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return (
    <Main>
      <Welcome UserName="Laura" today={today}></Welcome>
      <Welcome UserName="Jane" today={today}></Welcome>
      <Welcome UserName="World" today={today}></Welcome>
    </Main>
  );
}

export default App;
