import React from "react";
import "./App.scss";
import Result from "./components/Result/Result";
import Keyboard from "./components/Keyboard/Keyboard";
const initOperation = {
  firstValue: "",
  process: "",
  secondValue: "",
};
const App = () => {
  const [operation, setOperation] = React.useState(initOperation);

  return (
    <div className="container">
      <div id="app">
        <Result operation={operation} />
        <Keyboard operation={operation} setOperation={setOperation} />
      </div>
    </div>
  );
};

export default App;
