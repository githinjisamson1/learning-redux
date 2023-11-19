import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UsersView = () => {
  // useSelector
  const users = useSelector((state) => {
    return state.users;
  });

  // dispatch
  const dispatch = useDispatch();

  // side effect/run on initial render/once
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>List of users</h1>

      {/* loading = true */}
      {users.loading && <h1>Loading...</h1>}

      {/* error = "..." */}
      {!users.loading && users.error ? <h1>{users.error}</h1> : null}

      {/* users.users array has value */}
      {!users.loading && users.users ? (
        <ul>
          {users.users.map((user) => {
            return <li>{user.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default UsersView;
