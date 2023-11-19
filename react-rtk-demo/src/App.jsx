import React from "react";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UsersView from "./features/users/UsersView";

const App = () => {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UsersView />
    </>
  );
};

export default App;
