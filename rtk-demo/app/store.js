// configureStore
const configureStore = require("@reduxjs/toolkit").configureStore;

// import cakeReducer
const cakeReducer = require("../features/cake/cakeSlice");

// store
const store = configureStore({
  reducer: {
    // pass in list of reducers
    cake: cakeReducer,
  },
});

// default export
module.exports = store;
