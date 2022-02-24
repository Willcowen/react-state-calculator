import "./App.css";
import { useState } from "react";


function App() {
  
  const [counter, setNumberOne] = useState(0);
  const [counterTwo, setNumberTwo] = useState(0);
  const [operation, setOperation] = useState("+");

  const updateNumberOne = (num) => {
    if (counter != "0") {
      const newNum = counter + num;
      setNumberOne(newNum);
    } else {
      const newNum = num;
      setNumberOne(newNum);
    }
  };

  const updateNumberTwo = (num) => {
    if (counterTwo != "0") {
      const newNum = counterTwo + num;
      setNumberTwo(newNum);
    } else {
      const newNum = num;
      setNumberTwo(newNum);
    }
  };

  const calculate = () => {
    let answer = 0;
    if (operation === "+") {
      answer = Number(counter) + Number(counterTwo);
    } else if (operation === "-") {
      answer = Number(counter) - Number(counterTwo);
    } else if (operation === "/") {
      answer = Number(counter) / Number(counterTwo);
    } else if (operation === "*") {
      answer = Number(counter) * Number(counterTwo);
    }
    return answer;
  };


  return (
    <div className="calculator">
      <div className="panel">
        <p>{counter}</p>
        <div className="numbers">
          <button onClick={() => updateNumberOne("1")}>1</button>
          <button onClick={() => updateNumberOne("2")}>2</button>
          <button onClick={() => updateNumberOne("3")}>3</button>
          <button onClick={() => updateNumberOne("4")}>4</button>
          <button onClick={() => updateNumberOne("5")}>5</button>
          <button onClick={() => updateNumberOne("6")}>6</button>
          <button onClick={() => updateNumberOne("7")}>7</button>
          <button onClick={() => updateNumberOne("8")}>8</button>
          <button onClick={() => updateNumberOne("9")}>9</button>
          <button onClick={() => updateNumberOne("0")}>0</button>
          <button onClick={() => setNumberOne("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{counterTwo}</p>
        <div className="numbers">
          <button onClick={() => updateNumberTwo("1")}>1</button>
          <button onClick={() => updateNumberTwo("2")}>2</button>
          <button onClick={() => updateNumberTwo("3")}>3</button>
          <button onClick={() => updateNumberTwo("4")}>4</button>
          <button onClick={() => updateNumberTwo("5")}>5</button>
          <button onClick={() => updateNumberTwo("6")}>6</button>
          <button onClick={() => updateNumberTwo("7")}>7</button>
          <button onClick={() => updateNumberTwo("8")}>8</button>
          <button onClick={() => updateNumberTwo("9")}>9</button>
          <button onClick={() => updateNumberTwo("0")}>0</button>
          <button onClick={() => setNumberTwo("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{calculate()}</p>
      </div>
    </div>
  );
}

export default App;
