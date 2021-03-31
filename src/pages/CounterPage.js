import { useReducer, useState } from "react";
import { useCounter } from "../contexts/counter";
import Counter from "../components/Counter";
import ExtraCounter from "../components/ExtraCounter";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  addByAmount,
} from "../feature/counter/counterSlice";

// const INITIAL_STATE = {
//   counter: 0,
// };

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1 };
//     case "decrement":
//       return { counter: state.counter - 1 };
//     case "reset":
//       return { counter: 0 };
//     default:
//       return state;
//   }
// }

function CounterPage() {
  const history = useHistory();
  // const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  // console.log("___reducer counter state", state);
  const [toggle, setToggle] = useState(true);
  // const counter = useCounter(); // const { state , dispatch } = useCounter(); เหมือนกัน
  const [amount, setAmount] = useState(100);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div>
      <h1>Counter page</h1>
      {toggle && (
        <Counter
          counter={counter}
          incrementCounter={() => dispatch(increment())}
          decrementCounter={() => dispatch(decrement())}
          resetCounter={() => dispatch(reset())}
          addByAmount={() => dispatch(addByAmount(amount))}
        />
      )}
      <h1>Show Counter: {counter}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => history.push("/")}>go homehage</button>
    </div>
  );
}

export default CounterPage;
