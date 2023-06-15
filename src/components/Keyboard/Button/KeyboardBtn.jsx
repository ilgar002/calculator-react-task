import React from "react";
import "./KeyboardBtn.scss";

const KeyboardBtn = ({ mission, value, clickHandler, icon, active }) => {
  active = active ? "active" : "";
  return (
    <div className={`keyboard-btn ${mission} ${active}`} onClick={clickHandler}>
      {icon ? icon : value}
    </div>
  );
};

export default KeyboardBtn;
