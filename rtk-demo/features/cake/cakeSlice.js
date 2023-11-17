// !@reduxjs/toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

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
module.exports = cakeSlice.reducer;

// !named export
// cakeSlice handles creating
// 1. actionConstants
// 2. actionCreators - cake/ordered, cake/restocked
// 3. actionObjects
// 4. switch statements in the reducer
// 5. handling immutable updates in the reducer

module.exports.cakeActions = cakeSlice.actions;

// TODO:
// app state is split into separate slices that can be managed separately
// e.g., cakeSlice, iceCreamSlice, usersSlice

// createSlice() automatically generates
// 1. actionCreators with same name as reducer functions
// 2. returns main reducer function that we can provide to redux store
