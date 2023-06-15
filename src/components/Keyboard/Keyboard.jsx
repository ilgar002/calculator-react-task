import React from "react";
import "./Keyboard.scss";
import KeyboardBtn from "./Button/KeyboardBtn";
import { buttonsData, initOperation } from "../../data/data";

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
    setOperation((prev) => {
      if (prev.firstValue) {
        if (prev.secondValue) {
          return {
            firstValue: eval(
              `${prev.firstValue} ${prev.process} ${prev.secondValue}`
            ),
            process: value,
            secondValue: "",
          };
        } else
          return {
            ...prev,
            process: value,
          };
      } else return prev;
    });
  };
  const clickHandlerResult = () => {
    setOperation((prev) => ({
      firstValue: eval(
        `${prev.firstValue} ${prev.process} ${prev.secondValue}`
      ),
      process: "",
      secondValue: "",
    }));
  };
  const clickHandlerClear = () => {
    setOperation(initOperation);
  };
  const clickHandlerDot = () => {
    setOperation((prev) => {
      if (prev.process) {
        return {
          ...prev,
          secondValue: String(prev.secondValue).includes(".")
            ? prev.secondValue
            : prev.secondValue + ".",
        };
      } else {
        return {
          ...prev,
          firstValue: String(prev.firstValue).includes(".")
            ? prev.firstValue
            : prev.firstValue + ".",
        };
      }
    });
  };
  return (
    <div id="keyboard">
      <div className="row">
        <KeyboardBtn
          key={buttonsData.clear.id}
          mission={buttonsData.clear.mission}
          value={buttonsData.clear.value}
          clickHandler={clickHandlerClear}
        />
        {buttonsData.operators.map((obj) => (
          <KeyboardBtn
            key={obj.id}
            mission={obj.mission}
            icon={<obj.icon />}
            active={operation.process == obj.value}
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
        <KeyboardBtn
          key={buttonsData.result.id}
          mission={buttonsData.result.mission}
          value={buttonsData.result.value}
          clickHandler={clickHandlerResult}
        />
        <KeyboardBtn
          key={buttonsData.dot.id}
          mission={buttonsData.dot.mission}
          value={buttonsData.dot.value}
          clickHandler={clickHandlerDot}
        />
      </div>
    </div>
  );
};

export default Keyboard;
