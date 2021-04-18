import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserRoutes from "./routes";
import { createStyles, ThemeProvider } from "@material-ui/styles";
import theme from "./data/theme";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",

        width: "100%",
      },
      "#root": {
        height: "100%",
        minWidth: 960,
        width: "100%",
      },
    },
  })
);

function App() {
  useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
