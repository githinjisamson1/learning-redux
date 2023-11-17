// redux
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// actionConstants
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// actionCreators

const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUESTED };
};

const fetchUsersSuccess = (users) => {
  return { type: FETCH_USERS_FAILED, payload: users };
};

const fetchUsersFailure = (error) => {
  return { type: FETCH_USERS_FAILED, payload: error };
};

// fetchUsers
const fetchUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
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

// store
const store = createStore(reducer, applyMiddleware(logger));

// subscribe
const unsubsribe = store.subscribe(() => {});

// unsubscribe
unsubsribe();
