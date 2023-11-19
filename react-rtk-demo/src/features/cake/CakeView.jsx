import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
  // !useSelector/pass in callback/note how we access readable state
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCakes;
  });

  // !dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button
        onClick={() => {
          dispatch(cakeActions.ordered(1));
        }}
      >
        Order cake
      </button>
      <button
        onClick={() => {
          dispatch(cakeActions.restocked(2));
        }}
      >
        Restock cake
      </button>
    </div>
  );
};

export default CakeView;
