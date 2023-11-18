// configureStore/handles combineReducers({}) under the hood
const configureStore = require("@reduxjs/toolkit").configureStore;

// import cakeReducer
const cakeReducer = require("../features/cake/cakeSlice");

// import iceCreamReducer
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");

// store
const store = configureStore({
  reducer: {
    // pass in list of reducers
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

// default export
module.exports = store;
