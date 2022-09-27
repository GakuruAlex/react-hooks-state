import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
    console.log("Counter without callBack is ",count);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
