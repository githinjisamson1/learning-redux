// !@reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// !initialState
const initialState = {
  numberOfCakes: 10,
};

// !cakeSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      // can directly mutate state/no explicit newState return/immer under the hood
      state.numberOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

// !default export
export default cakeSlice.reducer;

export const cakeActions = cakeSlice.actions;

// TODO:
// app state is split into separate slices that can be managed separately
// e.g., cakeSlice, iceCreamSlice, usersSlice

// createSlice() automatically generates
// 1. actionCreators with same name as reducer functions
// 2. returns main reducer function that we can provide to redux store
