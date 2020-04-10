import { useState } from "react";

export const useToggle = initial => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle(s => !s);
  return [isToggled, setToggle, toggle];
};
