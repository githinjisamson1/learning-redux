// configureStore/handles combineReducers({}) under the hood
const configureStore = require("@reduxjs/toolkit").configureStore;

// logger middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// import cakeReducer
const cakeReducer = require("../features/cake/cakeSlice");

// import iceCreamReducer
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");

const usersReducer = require("../features/users/usersSlice");

// store
const store = configureStore({
  reducer: {
    // pass in list of reducers
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   // !to the list of defaultMiddleware append loggerMiddleware
  //   return getDefaultMiddleware().concat(logger);
  // },
});

// default export
module.exports = store;
