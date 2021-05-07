import React from "react";
import {
  Container,
  Box,
  Grid,
  Button,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import CuentaForm from "src/components/Fomularions/CuentaForm";
import CircularProgressForButton from "src/components/CircularProgressForButton";
import MotivoForm from "src/components/Fomularions/MotivoForm";

export default function Configuracion() {
  const refFormCuenta = React.createRef();
  const refFormMotivo = React.createRef();
  const [isLoading, setLoading] = React.useState(false);

  return (
    <Page>
      <Container maxWidth={false}>
        <Box mt={2}>
          <Header />
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Card>
                  <CardHeader title="Nueva cuenta" />
                  <Divider />
                  <CardContent>
                    <CuentaForm ref={refFormCuenta} setLoading={setLoading} />
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      color={"primary"}
                      disabled={isLoading}
                      onClick={() => refFormCuenta.current.handleSubmit()}
                    >
                      Aceptar
                      {isLoading && <CircularProgressForButton />}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card>
                  <CardHeader title="Nuevo motivo" />
                  <Divider />
                  <CardContent>
                    <MotivoForm ref={refFormMotivo} setLoading={setLoading} />
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      color={"primary"}
                      disabled={isLoading}
                      onClick={() => refFormMotivo.current.handleSubmit()}
                    >
                      Aceptar
                      {isLoading && <CircularProgressForButton />}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
