import { useState } from "react";

export const useInc = ({
  maxValue = 100000,
  minValue = -100000,
  initial = 0
}) => {
  const [value, setValue] = useState(initial);

  const inc = () => {
    setValue(s => (s >= maxValue ? maxValue : s + 1));
  };
  const dec = () => {
    setValue(s => (s <= minValue ? minValue : s - 1));
  };
  
  const reset = () => setValue(initial)

  return [value, { inc, dec, reset }];
};
