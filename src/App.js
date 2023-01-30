import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    console.log("Sum");
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.Value));
    console.log("Minus");
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.Value));
    console.log("Multiplied");
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.Value));
    console.log("Divided");
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '/0';
    console.log("Imput zeroed");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
    console.log("Result zeroed");
  }

  return (
    <div className="App">
      <div className="calctitle">
        <h1>Cyberpunk Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;