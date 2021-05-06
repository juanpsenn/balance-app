/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import Auth from "src/layout/Auth";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />,
  },
  {
    path: "*",
    component: Auth,
    routes: [
      {
        path: "/login",
        exact: true,
        component: lazy(() => import("src/views/Login")),
      },
      {
        component: () => <Redirect to="/login" />,
      },
    ],
  },
  {
    component: () => <Redirect to="/login" />,
  },
];
