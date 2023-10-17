import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "./Auth";

export default function PrivateRoute() {
  const user = useContext(authContext);
  return user ? <Outlet /> : <Navigate to="/" />;
}
