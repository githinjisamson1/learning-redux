import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamActions } from "./iceCreamSlice";

const IceCreamView = () => {
  const numberOfIceCreams = useSelector((state) => {
    return state.iceCream.numberOfIceCreams;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of ice creams - {numberOfIceCreams}</h1>
      <button
        onClick={() => {
          dispatch(iceCreamActions.ordered(1));
        }}
      >
        Order ice cream
      </button>
      <button
        onClick={() => {
          dispatch(iceCreamActions.restocked(2));
        }}
      >
        Restock ice cream
      </button>
    </div>
  );
};

export default IceCreamView;
