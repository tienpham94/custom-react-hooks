import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(s => !s)}>Toggle</button>
      {isToggled && <p>To be toggled</p>}
    </div>
  );
};

export default Toggle;
