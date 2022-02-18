import React from "react";
import { Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";

const PrivateRoute = () => {
  const { user } = useAuth0();
  return user ? <Outlet /> : <Login />;
};
export default PrivateRoute;
