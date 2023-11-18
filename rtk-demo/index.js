// import store
const store = require("./app/store");

// import cakeActions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

// getState()
console.log("Initial state", store.getState());

// subscribe()
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

// dispatch()
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.restocked(3));

// unsubscribe
unsubscribe();
