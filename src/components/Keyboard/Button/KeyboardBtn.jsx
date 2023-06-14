import React from "react";
import "./KeyboardBtn.scss";
const KeyboardBtn = ({ mission, value, clickHandler }) => {
  return (
    <div className={`keyboard-btn ${mission}`} onClick={clickHandler}>
      {value}
    </div>
  );
};

export default KeyboardBtn;
