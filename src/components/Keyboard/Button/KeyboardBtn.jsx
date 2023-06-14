import React from "react";
import "./KeyboardBtn.scss";

const KeyboardBtn = ({ mission, value, clickHandler, icon }) => {
  return (
    <div className={`keyboard-btn ${mission}`} onClick={clickHandler}>
      {icon ? icon : value}
    </div>
  );
};

export default KeyboardBtn;
