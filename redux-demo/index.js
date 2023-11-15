// !redux
const redux = require("redux");

// !createStore
const createStore = redux.createStore;

// 1. action
// 2. reducer
// 3. store

// !actionConstant
const CAKE_ORDERED = "CAKE_ORDERED";

// !actionCreator: function that returns an action
const orderCake = () => {
  // action: obj having type/payload property
  return {
    type: CAKE_ORDERED,
    payload: 1,
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

// !unsubscribe
unsubscribe();

// !unreachable since we have already unsubscribed to the changes
// store.dispatch(orderCake(1));
