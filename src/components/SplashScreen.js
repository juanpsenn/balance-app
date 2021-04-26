import React from "react";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    padding: theme.spacing(3),
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2000,
  },
  logo: {
    width: 200,
    maxWidth: "100%",
  },
}));

function SlashScreen({ open, ...props }) {
  const classes = useStyles();

  if (!open) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center" mb={6}>
        <img
          alt="Logo"
          style={{ maxWidth: 160 }}
          src={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQHkMq22crOWuw/company-logo_200_200/0/1608661347769?e=2159024400&v=beta&t=CAnDep5EfJxV4LKFM7CCXr18Ctds6XbmgzC0BpzLBns"
          }
          {...props}
        />
      </Box>
      <CircularProgress />
    </div>
  );
}

export default SlashScreen;
