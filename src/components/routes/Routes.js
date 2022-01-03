import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StoreProvider from "../context/Provider";
import LoginPage from "../pages/login/login";
import Profile from "../pages/profile-user/Profile";
import ProtectedRoutes from "./private/private";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";

export default function MainRoutes() {
  return (
    <Router>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </StoreProvider>
    </Router>
  );
}
