// import store
const store = require("./app/store");

// import cakeActions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

// import iceCreamActions
const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

const fetchUsers = require("./features/users/usersSlice").fetchUsers;

// getState()
console.log("Initial state", store.getState());

// subscribe()
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

// dispatch()
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.restocked(2));

store.dispatch(fetchUsers());

// unsubscribe
// unsubscribe();
