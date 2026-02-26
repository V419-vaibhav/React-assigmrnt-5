import React, { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };

  const subtract = () => {
    setResult(Number(firstNumber) - Number(secondNumber));
  };

  const multiply = () => {
    setResult(Number(firstNumber) * Number(secondNumber));
  };

  const divide = () => {
    if (Number(secondNumber) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(firstNumber) / Number(secondNumber));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={add}>Add</button>
        <button onClick={subtract} style={{ marginLeft: "10px" }}>
          Subtract
        </button>
        <button onClick={multiply} style={{ marginLeft: "10px" }}>
          Multiply
        </button>
        <button onClick={divide} style={{ marginLeft: "10px" }}>
          Divide
        </button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Result: </strong> {result}
      </div>
    </div>
  );
}

export default Calculator;