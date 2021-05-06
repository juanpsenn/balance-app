import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { createStyles, ThemeProvider } from "@material-ui/styles";
import theme from "./data/theme";
import { createMuiTheme, makeStyles } from "@material-ui/core";
import AuthContextProvider from "src/context/AuthContext";

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
        width: "100%",
      },
    },
  })
);

function App() {
  useStyles();
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <AuthContextProvider>
        <Router>
          <Routes />
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
