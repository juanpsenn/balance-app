import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Page from "src/components/Page";
import Header from "./Header";
import MisCuentas from "./MisCuentas";
import TablaMovimientos from "./TablaMovimientos";
import ModalNuevoMovimiento from "src/components/Modales/ModalNuevoMovimiento";

const useStyles = makeStyles((theme) => ({}));

export default function VistaPrincipal() {
  // const classes = useStyles();
  return (
    <Page>
      <Container maxWidth={false}>
        <Box mt={2}>
          <Header />
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MisCuentas />
              </Grid>
              <Grid item xs={12}>
                <TablaMovimientos />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ModalNuevoMovimiento open={true} />
      </Container>
    </Page>
  );
}
