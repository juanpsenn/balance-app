import React from "react";
import { Box, Container } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import ModalNuevoMovimiento from "src/components/Modales/ModalNuevoMovimiento";
import TablaMovimientos from "./TablaMovimientos";

export default function ListaMovimientosGeneral() {
  const [
    isOpenModalNuevoMovimiento,
    setOpenModalNuevoMovimiento,
  ] = React.useState(false);

  const handleOpenModalNuevoMovimiento = () => {
    setOpenModalNuevoMovimiento(true);
  };

  const handleCloseModalNuevoMovimiento = () => {
    setOpenModalNuevoMovimiento(false);
  };

  return (
    <Page>
      <Container maxWidth={false}>
        <Box mt={2}>
          <Header
            handleOpenModalNuevoMovimiento={handleOpenModalNuevoMovimiento}
          />
          <Box mt={3}>
            <TablaMovimientos />
          </Box>
        </Box>
      </Container>
      <ModalNuevoMovimiento
        open={isOpenModalNuevoMovimiento}
        handleClose={handleCloseModalNuevoMovimiento}
      />
    </Page>
  );
}
