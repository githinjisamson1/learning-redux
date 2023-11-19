import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamActions } from "./iceCreamSlice";

const IceCreamView = () => {
  // useSelector
  const numberOfIceCreams = useSelector((state) => {
    return state.iceCream.numberOfIceCreams;
  });

  // dispatch
  const dispatch = useDispatch();

  // state for value
  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>Number of ice creams - {numberOfIceCreams}</h1>
      <button
        onClick={() => {
          dispatch(iceCreamActions.ordered(parseInt(value)));
        }}
      >
        Order ice cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(iceCreamActions.restocked(parseInt(value)));
        }}
      >
        Restock ice cream
      </button>
    </div>
  );
};

export default IceCreamView;
