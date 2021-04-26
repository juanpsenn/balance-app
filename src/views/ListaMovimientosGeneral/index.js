import React from "react";
import { Box, Container } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import ModalNuevoMovimiento from "src/components/Modales/ModalNuevoMovimiento";
import TablaMovimientos from "./TablaMovimientos";
import { listMovements } from "src/request/movementsRequest";

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

  const handleGetMovements = async () => {
    try {
      const { status, data } = await listMovements({});
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    handleGetMovements();
  }, []);

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
