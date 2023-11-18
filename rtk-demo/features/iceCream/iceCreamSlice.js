// createSlice
const createSlice = require("@reduxjs/toolkit").createSlice;

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
});

// default export
module.exports = iceCreamSlice.reducer;

// named export
module.exports.iceCreamActions = iceCreamSlice.actions;
