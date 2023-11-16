// !redux
const redux = require("redux");

// !createStore
const createStore = redux.createStore;

// 1. action
// 2. reducer
// 3. store

// !actionConstant
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// !actionCreator: function that returns an action
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

// !initialState
const initialState = {
  numberOfCakes: 10,
};

// !reducer: (previousState, action) => newState/initialState passed as default value
const reducer = (state = initialState, action) => {
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

// !store: createStore(reducer)
const store = createStore(reducer);

// !store.getState()
console.log("Initial state", store.getState());

// !store.subscribe(()=>{})/listener
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

// !store.dispatch(actionCreator())
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// !alternatively/cannot be re-used
store.dispatch({ type: CAKE_ORDERED, payload: 1 });

// !restock
store.dispatch(restockCake(4));

// !unsubscribe
unsubscribe();

// !unreachable since we have already unsubscribed to the changes
// store.dispatch(orderCake(1));

// !!! NEVER MUTATE STATE/ALWAYS RETURN A NEW STATE/COPY FIRST THEN MAKE CHANGES
