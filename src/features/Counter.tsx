import React, { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={classes.btn}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
