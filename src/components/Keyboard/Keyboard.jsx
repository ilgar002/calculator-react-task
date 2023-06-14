import React from "react";
import "./Keyboard.scss";
import KeyboardBtn from "./Button/KeyboardBtn";
import { buttonsData } from "./data";

const Keyboard = ({ operation, setOperation }) => {
  const clickHandlerNumber = (value) => {
    setOperation((prev) => {
      if (prev.process) {
        return { ...prev, secondValue: Number(prev.secondValue + value) };
      } else {
        return { ...prev, firstValue: Number(prev.firstValue + value) };
      }
    });
  };
  const clickHandlerOperators = (value) => {
    setOperation((prev) => ({
      ...prev,
      process: value,
    }));
  };
  const clickHandlerResult = () => {
    setOperation((prev) => ({
      firstValue: eval(
        `${Number(prev.firstValue)} ${prev.process} ${Number(prev.secondValue)}`
      ),
      process: "",
      secondValue: "",
    }));
  };
  console.log(operation);
  return (
    <div id="keyboard">
      <div className="row">
        {buttonsData.operators.slice(0, 5).map((obj) => (
          <KeyboardBtn
            key={obj.id}
            mission={obj.mission}
            value={obj.value}
            clickHandler={() => clickHandlerOperators(obj.value)}
          />
        ))}
      </div>
      <div className="row">
        {buttonsData.values.slice(0, 10).map((obj) => (
          <KeyboardBtn
            key={obj.id}
            mission={obj.mission}
            value={obj.value}
            clickHandler={() => clickHandlerNumber(obj.value)}
          />
        ))}
      </div>
      <div className="row">
        {buttonsData.operators.slice(5, 6).map((obj) => (
          <KeyboardBtn
            key={obj.id}
            mission={obj.mission}
            value={obj.value}
            clickHandler={clickHandlerResult}
          />
        ))}
        {buttonsData.values.slice(10, 11).map((obj) => (
          <KeyboardBtn key={obj.id} mission={obj.mission} value={obj.value} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
