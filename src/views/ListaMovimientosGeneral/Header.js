import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  SvgIcon,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    "& + &": {
      marginLeft: theme.spacing(1),
    },
    textDecoration: "none",
  },
  actionIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Header({ handleOpenModalNuevoMovimiento, ...rest }) {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" spacing={3} {...rest}>
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          Movimientos
        </Typography>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          variant="contained"
          className={classes.action}
          onClick={handleOpenModalNuevoMovimiento}
        >
          Nuevo movimiento
        </Button>
      </Grid>
    </Grid>
  );
}
