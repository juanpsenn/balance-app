import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { parseCurrencyARS } from "src/utils/parseCurrency";
import { DateTime } from "luxon";
import { matchImg } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export default function ListaCuentas({ cuentas = [], saldoGeneral }) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              SALDO GENERAL
            </Typography>
            <Typography variant="h4" align="right">
              {parseCurrencyARS(saldoGeneral)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {cuentas.map((cuenta, index) => (
        <Grid key={index} item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Box mr={1}>
                  <Avatar
                    className={classes.large}
                    src={matchImg(cuenta.display_name)}
                  />
                </Box>
                <Box ml={1} width="100%">
                  <Typography variant="h5" gutterBottom>
                    {cuenta.display_name}
                  </Typography>
                  <Typography variant="h4" gutterBottom align="right">
                    {parseCurrencyARS(cuenta.balance)}
                  </Typography>
                  <Typography variant="caption">
                    Última actualización:{" "}
                    {DateTime.fromISO(cuenta.last_update, {
                      setZone: "utc",
                    }).toISODate()}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
