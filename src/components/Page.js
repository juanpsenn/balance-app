import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default function Page({ children, ...rest }) {
  const classes = useStyles();
  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
}
