import React from "react";
import "./Result.scss";
const Result = ({ operation }) => {
  return (
    <div className="result-group">
      <span id="result">
        {operation.secondValue ? operation.secondValue : operation.firstValue}
      </span>
      <small className="alert">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </small>
    </div>
  );
};

export default Result;
