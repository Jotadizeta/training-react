import "./App.css";
import Person from "./Person";
import ShowCounter from "./ShowCounter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => {
    setCount(count + 1);
  };
  const handleTimes5 = () => {
    setCount(count * 5);
  };
  const handleMinusOne = () => {
    setCount(count - 1);
  };
  const handleDivideByHundred = () => {
    if (count !== 0) {
      setCount(count / 100);
    } else {
      console.log("Division of 0 not allowed");
    }
  };
  return (
    <div>
      <ShowCounter count={count} />
      <button onClick={handlePlusOne}>Pulsame para sumar</button>
      <button onClick={handleTimes5}>Pulsame para multiplicar x 5</button>
      <button onClick={handleMinusOne}>Pulsame para restar</button>
      <button onClick={handleDivideByHundred}>
        Pulsame para dividir por 100
      </button>
    </div>
  );
}

export default App;

// function App() {
//   // const [count, setCount]=useState(0);
//   return (
//     <div>
//       <Person></Person>
//       {/* <p>Has clicado {count} veces</p>
//       <button onClick={()=>{
//         setCount(count +1)
//       }}>Pulsame</button> */}

//     </div>
//   );
// }

// export default App;
