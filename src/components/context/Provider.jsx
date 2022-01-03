import React, { useState } from "react";
import StoreContext from "./Context";

const StoreProvider = (props) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token") || "null"));

  localStorage.setItem("token", JSON.stringify(token));

  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
