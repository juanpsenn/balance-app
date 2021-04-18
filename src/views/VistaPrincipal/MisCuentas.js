import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import TarjetaSaldo from "src/components/TarjetaSaldo";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerTarjeta: {
    minWidth: 256,
  },
}));

export default function MisCuentas() {
  const classes = useStyles();
  return (
    <Box>
      <Box pb={2} pt={2}>
        <Typography variant="h4"> Mis cuentas</Typography>
      </Box>

      <Box display="flex" className={classes.container}>
        {[1, 2, 3, 4, 5, 6, 7].map((cuenta, index) => (
          <TarjetaSaldo className={classes.containerTarjeta} />
        ))}
      </Box>
    </Box>
  );
}
