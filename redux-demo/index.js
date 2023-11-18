// !redux
const redux = require("redux");

// !createStore
const createStore = redux.createStore;

// !bindActionCreators
const bindActionCreators = redux.bindActionCreators;

// !combineReducers
const combineReducers = redux.combineReducers;

// !applyMiddleware
const applyMiddleware = redux.applyMiddleware;

// !reduxLogger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// TODO: REDUX STEPS
// 1. action
// 2. reducer
// 3. store

// !cakeActionConstants
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// !iceCreamActionConstants
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

// !cakeActionCreators: function that returns an action
const orderCake = () => {
  // action: obj having type/payload property
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

// restockCake
const restockCake = (quantity) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
};

// !iceCreamActionCreators
const orderIceCream = (quantity = 1) => {
  // action: obj having type/payload property
  return {
    type: ICE_CREAM_ORDERED,
    payload: quantity,
  };
};

// restockCake
const restockIceCream = (quantity) => {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: quantity,
  };
};

// !initialCakeState
const initialCakeState = {
  numberOfCakes: 10,
};

// !initialIceCreamState
const initialIceCreamState = {
  numberOfIceCreams: 5,
};

// !cakeReducer: (previousState, action) => newState/initialState passed as default value
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      // spread oldState return newState
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

// !iceCreamReducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      // spread oldState return newState
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

// !rootReducer
const rootReducer = combineReducers({
  // pass in allReducers
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// !store: createStore(reducer)/applyMiddleware(...listOfMiddleware)
const store = createStore(rootReducer, applyMiddleware(logger));

// !store.getState()
console.log("Initial state", store.getState());

// !store.subscribe(()=>{})/listener/subscribing to any change(s)
const unsubscribe = store.subscribe(() => {
  // console.log("Updated state", store.getState());
});

// !store.dispatch(actionCreator())
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// !alternatively/cannot be re-used
store.dispatch({ type: CAKE_ORDERED, payload: 1 });

// !restock
store.dispatch(restockCake(4));

// !actions: bindActionCreators({ orderCake, restockCake }, store.dispatch);
// not necessary/adds boilerplate
// const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch);
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.restockCake(5);

store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(2));

// !unsubscribe
unsubscribe();

// !unreachable since we have already unsubscribed to the changes
// store.dispatch(orderCake(1));

// !!! NEVER MUTATE STATE/ALWAYS RETURN A NEW STATE/COPY FIRST THEN MAKE CHANGES (UPDATE)
