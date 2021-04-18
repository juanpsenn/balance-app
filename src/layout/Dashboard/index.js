import { makeStyles } from "@material-ui/core";
import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    // paddingTop: 64,
    // [theme.breakpoints.up("lg")]: {
    // },
    paddingLeft: 256,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

export function DashboardUser({ route }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Suspense fallback={"hola"}>{renderRoutes(route.routes)}</Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
