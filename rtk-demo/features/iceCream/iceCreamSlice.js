// createSlice
const createSlice = require("@reduxjs/toolkit").createSlice;

const cakeActions = require("../cake/cakeSlice").cakeActions;

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
module.exports = iceCreamSlice.reducer;

// named export
module.exports.iceCreamActions = iceCreamSlice.actions;
