import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { makeStyles } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    "@media all and (-ms-high-contrast:none)": {
      height: 0, // IE11 fix
    },
  },
  content: {
    flexGrow: 1,
    maxWidth: "100%",
    overflowX: "hidden",
  },
}));

function Auth({ route }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Auth;
