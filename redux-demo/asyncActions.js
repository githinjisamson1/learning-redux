// redux
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// thunkMiddleware
const thunkMiddleware = require("redux-thunk").default;

// axios
const axios = require("axios");

// actionConstants
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// actionCreators

const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUESTED };
};

const fetchUsersSuccess = (users) => {
  return { type: FETCH_USERS_SUCCEEDED, payload: users };
};

const fetchUsersFailure = (error) => {
  return { type: FETCH_USERS_FAILED, payload: error };
};

// initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// !fetchUsers actionCreator
// !redux-thunk allows actionCreator to return a function
// !doesn't have to be pure/can have side-effects e.g., async actions
// !receives dispatch as its argument
const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    // TODO: fetch()

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);

        // return/extract ids
        const users = data.map((user) => {
          return user.id;
        });
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        // console.log(err.message);

        dispatch(fetchUsersFailure(err.message));
      });

    // TODO: axios

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     const users = response.data.map((user) => {
    //       return user.id;
    //     });
    //     dispatch(fetchUsersSuccess(users));
    //   })
    //   .catch((err) => {
    //     dispatch(fetchUsersFailure(err.message));
    //   });
  };
};

// store
const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

// getState
// console.log("Initial state", store.getState());

// subscribe
const unsubsribe = store.subscribe(() => {
  // console.log("Updated state", store.getState());
});

// dispatch
store.dispatch(fetchUsers());

// unsubscribe
// unsubsribe();
