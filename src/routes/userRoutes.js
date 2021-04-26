/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";
import Auth from "src/layout/Auth";
import { DashboardUser } from "../layout/Dashboard";

export default [
  {
    path: "*",
    component: DashboardUser,
    routes: [
      // {
      //   path: "/",
      //   exact: true,
      //   component: lazy(() => import("src/views/VistaPrincipal")),
      // },
      {
        path: "/movimientos-general/",
        exact: true,
        component: lazy(() => import("src/views/ListaMovimientosGeneral")),
      },
    ],
  },
];
