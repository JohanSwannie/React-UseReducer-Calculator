import React, { useReducer } from "react";

const initialState = {
  number1: 0,
  number2: 0,
  number3: 0,
  number4: 0,
  number5: 0,
  number6: 0,
  number7: 0,
  result: "No Result",
};

const N1 = "N1";
const N2 = "N2";
const N3 = "N3";
const N4 = "N4";
const N5 = "N5";
const N6 = "N6";
const N7 = "N7";
const ADD = "ADD";
const CLEAR = "CLEAR";

const reducer = (state, action) => {
  if (action.type === "N1") {
    return { ...state, number1: action.number };
  }
  if (action.type === "N2") {
    return { ...state, number2: action.number };
  }
  if (action.type === "N3") {
    return { ...state, number3: action.number };
  }
  if (action.type === "N4") {
    return { ...state, number4: action.number };
  }
  if (action.type === "N5") {
    return { ...state, number5: action.number };
  }
  if (action.type === "N6") {
    return { ...state, number6: action.number };
  }
  if (action.type === "N7") {
    return { ...state, number7: action.number };
  }
  if (action.type === "ADD") {
    return {
      ...state,
      result:
        state.number1 +
        state.number2 +
        state.number3 +
        state.number4 +
        state.number5 +
        state.number6 +
        state.number7,
    };
  }
  if (action.type === "CLEAR") {
    return initialState;
  }
};

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="numbers">
        <button onClick={() => dispatch({ type: N1, number: 17 })}>17</button>
        <button onClick={() => dispatch({ type: N2, number: 33 })}>33</button>
        <button onClick={() => dispatch({ type: N3, number: 43 })}>43</button>
        <button onClick={() => dispatch({ type: N4, number: 57 })}>57</button>
        <button onClick={() => dispatch({ type: N5, number: 71 })}>71</button>
        <button onClick={() => dispatch({ type: N6, number: 94 })}>94</button>
        <button onClick={() => dispatch({ type: N7, number: 105 })}>105</button>
      </div>
      <div className="other">
        <button onClick={() => dispatch({ type: ADD })}>ADD</button>
        <button onClick={() => dispatch({ type: CLEAR })}>CLEAR</button>
        <button id="result">{state.result}</button>
      </div>
    </div>
  );
}

export default Calculator;
