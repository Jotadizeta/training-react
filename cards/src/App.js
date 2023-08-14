import "./App.css";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";

function App() {
  const freelancer = [
    {
      id: 0,
      tittle: "MR",
      lastName: "ROBERT",
      role: "UX/UI Designer",
      fee: 85,
      reviews: 105,
    },
  ];

  return (
    <div className="card-container">
      <CardWrapper>
        <CardImg></CardImg>
        <CardInfo></CardInfo>
      </CardWrapper>
    </div>
  );
}

export default App;
