import React from "react";
import { useInc } from "../hooks/useInc";

const Inc = () => {
  const [volumn, { dec, inc, reset }] = useInc({
    maxValue: 10,
    minValue: 0,
    initial: 10
  });
  return (
    <div>
      <h3>Volume</h3>
      <button onClick={dec}>-</button>
      {volumn}
      <button onClick={inc}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Inc;
