import React, { useContext } from "react";

import { Outlet, Navigate } from "react-router-dom";
import StoreContext from "../../context/Context";

const useAuth = () => {
  const { token } = useContext(StoreContext);

  const user = { isLoggedIn: token !== null ? true : false };

  return user && user.isLoggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
