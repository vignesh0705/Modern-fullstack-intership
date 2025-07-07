import { useState, useEffect } from "react";




const App = () => {
  const {count, setCount} = useState(0);

  useEffect(() => {
    if (count < 0) {
      let timer = settime(() => {
        reset();
      },1000);
      return () => {
        clearTimeout(timer);
      };
    }
  },[count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="CounterApp">
     
    </div>
  )

}