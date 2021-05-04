import React from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  useMediaQuery,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import { listAccounts } from "src/request/accountsRequest";
import ListaCuentas from "./ListaCuentas";
import PanelCuentas from "./PanelCuentas";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#000",
  },
}));

export default function CuentasGeneral() {
  const classes = useStyles();
  const [cuentas, setCuentas] = React.useState([]);
  const [isOpenBackdrop, setOpenBackdrop] = React.useState(false);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handleGetCuentas = async () => {
    setOpenBackdrop(true);
    try {
      const { data, status } = await listAccounts();
      console.log(data);
      status === 200 ? setCuentas(data) : setCuentas([]);
      setOpenBackdrop(false);
    } catch (error) {
      setOpenBackdrop(false);
      console.error(error);
    }
  };

  const saldoGeneral = cuentas.reduce(
    (acc, cuenta) => Number(cuenta.balance) + acc,
    0
  );

  React.useEffect(() => {
    handleGetCuentas();
  }, []);

  return (
    <Page>
      <Container maxWidth={false}>
        <Box mt={2}>
          <Header />
          <Box mt={3}>
            {isMdDown && (
              <ListaCuentas cuentas={cuentas} saldoGeneral={saldoGeneral} />
            )}
            {!isMdDown && (
              <PanelCuentas cuentas={cuentas} saldoGeneral={saldoGeneral} />
            )}
          </Box>
        </Box>
      </Container>
      <Backdrop className={classes.backdrop} open={isOpenBackdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Page>
  );
}
