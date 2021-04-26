import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = React.useState(!!sessionStorage.getItem("_uid"));

  return (
    <AuthContext.Provider value={{ handlerAuth: { isAuth, setAuth } }}>
      {children}
    </AuthContext.Provider>
  );
}
