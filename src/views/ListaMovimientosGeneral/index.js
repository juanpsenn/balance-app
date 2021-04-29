import React from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import ModalNuevoMovimiento from "src/components/Modales/ModalNuevoMovimiento";
import TablaMovimientos from "./TablaMovimientos";
import { listMovements } from "src/request/movementsRequest";
import ListaMovimientos from "./ListaMovimientos";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#000",
  },
}));

export default function ListaMovimientosGeneral() {
  const classes = useStyles();
  const [
    isOpenModalNuevoMovimiento,
    setOpenModalNuevoMovimiento,
  ] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [movimientos, setMovimientos] = React.useState([]);
  const [isOpenBackdrop, setOpenBackdrop] = React.useState(false);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenModalNuevoMovimiento = () => {
    setOpenModalNuevoMovimiento(true);
  };

  const handleCloseModalNuevoMovimiento = (event) => {
    setOpenModalNuevoMovimiento(false);
    !event && handleGetMovements();
  };

  const handleGetMovements = async () => {
    const limit = 10;
    setOpenBackdrop(true);
    try {
      const { status, data } = await listMovements({
        limit,
        offset: limit * (page - 1),
        orderby: "-date_time",
      });
      status === 200 ? setMovimientos(data.results) : setMovimientos([]);
      setOpenBackdrop(false);
    } catch (error) {
      console.error(error);
      setOpenBackdrop(false);
    }
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  React.useEffect(() => {
    handleGetMovements();
  }, [page]);

  return (
    <Page>
      <Container maxWidth={false}>
        <Box mt={2}>
          <Header
            handleOpenModalNuevoMovimiento={handleOpenModalNuevoMovimiento}
          />
          <Box mt={3}>
            {!isMdDown && <TablaMovimientos movimientos={movimientos} />}
            {isMdDown && <ListaMovimientos movimientos={movimientos} />}
          </Box>
          <Box
            mt={2}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Pagination
              count={10}
              page={page}
              color="primary"
              onChange={handleChangePage}
            />
          </Box>
        </Box>
        <Backdrop className={classes.backdrop} open={isOpenBackdrop}>
          <CircularProgress color="primary" />
        </Backdrop>
      </Container>
      <ModalNuevoMovimiento
        open={isOpenModalNuevoMovimiento}
        handleClose={handleCloseModalNuevoMovimiento}
      />
    </Page>
  );
}
