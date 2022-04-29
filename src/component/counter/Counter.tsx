import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decriment = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={decriment}>-</button>
      <span className="_value">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
