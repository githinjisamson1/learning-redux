// createSlice
import { createSlice } from "@reduxjs/toolkit";

import { cakeActions } from "../cake/cakeSlice";

// initialState
const initialState = {
  numberOfIceCreams: 20,
};

// iceCreamSlice
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  // !reponding to actionTypes of another slice/cakeSlice
  // extraReducers: {
  //   ["cake/ordered"]: (state, action) => {
  //     state.numberOfIceCreams--;
  //   },
  // },

  // !builder.addCase(actionCreator, ()=>{})
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberOfIceCreams--;
    });
  },
});

// default export
export default iceCreamSlice.reducer;

export const iceCreamActions = iceCreamSlice.actions;
