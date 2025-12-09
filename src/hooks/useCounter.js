import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    
    setCount((c) => c + 1);
  }

  function decrement() {
    if(count===0) return
    setCount((c) => c - 1);
  }

  return { count, increment, decrement };
}
