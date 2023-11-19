// createSlice
import { createSlice } from "@reduxjs/toolkit";

// !import createAsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

// initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// !createAsynThunk generates pending/fulfilled/rejected actionTypes
// !pass in two args: (actionType, callback) === (typePrefix, payloadCreator)
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
      return response.data;
    });
});

// !createSlice does not generate reducers/we have to manually add extraReducers
// !redux-thunk is applied as middelware under the hood
const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    // pass in actionCreator && reducer
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
export default usersSlice.reducer;

// named export
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };

// createAsyncThunk(actionType, ()=>{{return axios.get()}})
// createAsyncThunk dispatches LFC actions we can listen to using extraReducers
// pending/fulfilled/rejected
// module.exports = usersSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
// attach usersReducer to store
// dispatch the async action
