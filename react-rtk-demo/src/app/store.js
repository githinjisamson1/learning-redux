// configureStore/handles combineReducers({}) under the hood
import { configureStore } from "@reduxjs/toolkit";

// import cakeReducer
import cakeReducer from "../features/cake/cakeSlice";

// import iceCreamReducer
import iceCreamReducer from "../features/iceCream/iceCreamSlice";

// import usersReducer
import usersReducer from "../features/users/usersSlice";

// logger middleware
import { createLogger } from "redux-logger";
const logger = createLogger();

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
export default store;
