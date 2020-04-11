import { useState } from "react";

export const useInc = (initial = 0) => {
  const [value, setValue] = useState(0);

  const inc = () => {
    setValue(s => s + 1);
  };
  const dec = () => {
    setValue(s => s - 1);
  };

  return [value, { inc, dec }];
};
