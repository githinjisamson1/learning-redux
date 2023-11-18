// createSlice
const createSlice = require("@reduxjs/toolkit").createSlice;

// !import createAsyncThunk
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const axios = require("axios");

// initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// !createAsynThunk generates pending/fulfilled/rejected actionTypes
// !pass in two args: (actionType, callback)
// !createAsyncThunk handles errors/no need of catch block
// !remember to return fetch()/axios.get()
// !createAsynThunk uses redux-thunk library under the hood
const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  // TODO: fetch()
  //   return fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       return data.map((user) => {
  //         return user.id;
  //       });
  //     });

  // TODO: axios.get()
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data.map((user) => {
        return user.id;
      });
    });
});

// !createSlice does not generate reducers/we have to manually add extraReducers
// !redux-thunk is applied as middelware under the hood
const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      //   should be exact
      state.error = action.error.message;
    });
  },
});

// default export
module.exports = usersSlice.reducer;

// named export
module.exports.fetchUsers = fetchUsers;

// createAsyncThunk(actionType, ()=>{{return axios.get()}})
// createAsyncThunk dispatched LFC actions we can listen to using extraReducers
// pending/fulfilled/rejected
// module.exports = usersSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
// attach usersReducer to store
// dispatch the async action
