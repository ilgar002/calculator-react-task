import React from "react";
import "./Result.scss";
const Result = ({ operation }) => {
  const preview = operation.secondValue
    ? operation.secondValue
    : operation.firstValue;
  const alert = String(preview).length > 17 ? "active" : "";
  return (
    <div className="result-group">
      <span id="result">{preview}</span>
      <small className={`alert ${alert}`}>exceeded the process limit</small>
    </div>
  );
};

export default Result;
