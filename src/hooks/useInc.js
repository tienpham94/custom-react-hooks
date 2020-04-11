import { useState } from "react";

export const useInc = (initial = 0) => {
  const [value, setValue] = useState(initial);

  const inc = () => {
    setValue(s => s + 1);
  };
  const dec = () => {
    setValue(s => s - 1);
  };

  return [value, { inc, dec }];
};
