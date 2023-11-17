// redux
const redux = require("redux");

// createStore
const createStore = redux.createStore;

// !produce
const produce = require("immer").produce;

// initialState
const initialState = {
  name: "John",
  address: {
    street: "123 abc",
    city: "Nairobi",
    state: "Kenya",
  },
};

// actionConstant
const STREET_UPDATED = "STREET_UPDATED";

// actionCreator
const updateStreet = (updatedStreet) => {
  return {
    type: STREET_UPDATED,
    payload: updatedStreet,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      // !immer under the hood translates the below code into the above code
      // !acts as if state can be mutated directly
      // !draft is a draft copy of the state
      return produce(state, (draft) => {
        draft.address.street = "789 Silicon Valley";
      });

    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// getState
console.log("Initial state", store.getState());

// subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

// dispatch
store.dispatch(updateStreet("321 cba"));

// unsubscribe
unsubscribe();

// TODO: immer
// difficult to keep track of the nested state to modify only the required property
// use immer to help in update process/handling immutable data structures
// npm install immer
// const produce = require("immer").produce
// return produce(state, (draft) => {draft.address.street="789 Silico Valley"})
