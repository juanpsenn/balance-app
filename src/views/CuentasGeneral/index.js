import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import { listAccounts } from "src/request/accountsRequest";
import { parseCurrencyARS } from "src/utils/parseCurrency";
import { DateTime } from "luxon";

export default function CuentasGeneral() {
  const [cuentas, setCuentas] = React.useState([]);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handleGetCuentas = async () => {
    try {
      const { data, status } = await listAccounts();
      console.log(data);
      status === 200 ? setCuentas(data) : setCuentas([]);
    } catch (error) {
      console.error(error);
    }
  };

  const saldoGeneral = cuentas.reduce(
    (acc, cuenta) => Number(cuenta.balance) + acc,
    0
  );

  console.log(saldoGeneral);

  React.useEffect(() => {
    handleGetCuentas();
  }, []);

  return (
    <Page>
      <Container maxWidth={false}>
        <Box mt={2}>
          <Header />
          <Box mt={3}>
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
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
