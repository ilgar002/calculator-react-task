import React from "react";
import "./App.scss";
import Result from "./components/Result/Result";
import Keyboard from "./components/Keyboard/Keyboard";
import { initOperation } from "./data/data";
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
