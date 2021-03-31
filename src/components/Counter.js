import { useEffect } from "react";

function Counter(props) {
  useEffect(() => {
    console.log("Test effect");
  });

  useEffect(() => {
    console.log("Effect is running");

    return () => {
      // cleanup function
      console.log("clean up !");
    };
  }, [props.counter]);

  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.incrementCounter}>add</button>
      <button onClick={props.decrementCounter}>subtract</button>
      <button onClick={props.resetCounter}>reset</button>
      <button onClick={props.addByAmount}>Add counter by amount</button>
    </div>
  );
}

export default Counter;
