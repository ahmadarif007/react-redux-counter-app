import { HDECREMENT, HINCREMENT } from "./actionTypes";

export const hooksIncrement = (value) => {
  return {
    type: HINCREMENT,
    payload: value,
  };
};

export const hooksDecrement = (value) => {
  return {
    type: HDECREMENT,
    payload: value,
  };
};
