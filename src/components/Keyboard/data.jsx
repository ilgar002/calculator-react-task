import { v4 as uuidv4 } from "uuid";
export const buttonsData = {
  values: [
    { id: uuidv4(), value: "0", mission: "value" },
    { id: uuidv4(), value: "1", mission: "value" },
    { id: uuidv4(), value: "2", mission: "value" },
    { id: uuidv4(), value: "3", mission: "value" },
    { id: uuidv4(), value: "4", mission: "value" },
    { id: uuidv4(), value: "5", mission: "value" },
    { id: uuidv4(), value: "6", mission: "value" },
    { id: uuidv4(), value: "7", mission: "value" },
    { id: uuidv4(), value: "8", mission: "value" },
    { id: uuidv4(), value: "9", mission: "value" },
    { id: uuidv4(), value: ".", mission: "value" },
  ],
  operators: [
    { id: uuidv4(), value: "AC", mission: "clear" },
    { id: uuidv4(), value: "%", mission: "operator" },
    { id: uuidv4(), value: "x", mission: "operator" },
    { id: uuidv4(), value: "-", mission: "operator" },
    { id: uuidv4(), value: "+", mission: "operator" },
    { id: uuidv4(), value: "=", mission: "operator" },
  ],
};
