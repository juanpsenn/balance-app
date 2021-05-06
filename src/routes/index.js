import React from "react";
import { renderRoutes } from "react-router-config";
import { AuthContext } from "src/context/AuthContext";
import loginRoutes from "./loginRoutes";
import userRoutes from "./userRoutes";

export default function UserRoutes() {
  const { handlerAuth } = React.useContext(AuthContext);
  if (handlerAuth.isAuth) return renderRoutes(userRoutes);
  return renderRoutes(loginRoutes);
}
