import React from "react";
import Store from "../Store/Store";
import { counterActions } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const myCounter = useSelector((Store) => {
    return Store.counter.counter;
  });
  const visibility = useSelector((Store) => {
    return Store.counter.counterVisibility;
  });
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };

  const toggleVisibility = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <div className="text-center">
      <div>Welcome to Counter</div>
      {visibility && <div>{myCounter}</div>}
      <button
        className="border-2 border-white bg-orange-400 px-4 py-2 rounded-md"
        onClick={increaseHandler}
      >
        Increase
      </button>
      <button
        className="border-2 border-white bg-orange-400 px-4 py-2 rounded-md"
        onClick={decreaseHandler}
      >
        Decrease
      </button>

      <button
        className="border-2 border-white bg-orange-400 px-4 py-2 rounded-md"
        onClick={toggleVisibility}
      >
        Toggle
      </button>
    </div>
  );
};

export default Counter;
