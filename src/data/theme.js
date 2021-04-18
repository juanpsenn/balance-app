import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    direction: "ltr",
    typography: {
      fontFamily: [
        "-apple-system",
        '"Fira Sans"',
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontWeight: 500,
        fontSize: 35,
        letterSpacing: "-0.24px",
      },
      h2: {
        fontWeight: 500,
        fontSize: 29,
        letterSpacing: "-0.24px",
      },
      h3: {
        fontWeight: 500,
        fontSize: 24,
        letterSpacing: "-0.06px",
      },
      h4: {
        fontWeight: 500,
        fontSize: 20,
        letterSpacing: "-0.06px",
      },
      h5: {
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: "-0.05px",
      },
      h6: {
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: "-0.05px",
      },
      overline: {
        fontWeight: 500,
      },
    },
    overrides: {
      MuiLinearProgress: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
      MuiListItemIcon: {
        root: {
          minWidth: 32,
        },
      },
      MuiChip: {
        root: {
          backgroundColor: "rgba(0,0,0,0.075)",
        },
      },
      MuiInputBase: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
      MuiTableCell: {
        root: {
          padding: 10,
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1840,
      },
    },
    palette: {
      type: "light",
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: colors.common.white,
        dark: "#f4f6f8",
        paper: colors.common.white,
      },
      primary: {
        main: "#002856",
      },
      secondary: {
        main: "#235787",
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
    shadows: [
      "none",
      "0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)",
    ],
  },
  esES
);

export default theme;
