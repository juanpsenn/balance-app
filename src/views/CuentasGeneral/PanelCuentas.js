import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { parseCurrencyARS } from "src/utils/parseCurrency";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { matchAvatarURL } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function PanelCuentas({ cuentas, saldoGeneral }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card>
          <CardHeader title={<Typography variant="h4">Cuentas</Typography>} />
          <Divider />
          {cuentas.map((cuenta, index) => (
            <React.Fragment>
              <Box p={2} display="flex" alignItems="center">
                <Box mr={1}>
                  <Avatar
                    className={classes.large}
                    src={matchAvatarURL(cuenta.display_name)}
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
              <Divider />
            </React.Fragment>
          ))}
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center">
              <img
                alt="Logo"
                style={{ maxWidth: 100 }}
                src={
                  "https://media-exp1.licdn.com/dms/image/C4D0BAQHkMq22crOWuw/company-logo_200_200/0/1608661347769?e=2159024400&v=beta&t=CAnDep5EfJxV4LKFM7CCXr18Ctds6XbmgzC0BpzLBns"
                }
              />
              <Box>
                <Typography variant="h1" gutterBottom>
                  {parseCurrencyARS(saldoGeneral)}
                </Typography>
                <Typography variant="subtitle2">SALDO GENERAL</Typography>
              </Box>
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              size="medium"
              color="primary"
              component={Link}
              to={"/movimientos-general/"}
            >
              Ver últimos movimientos
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
