import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Modal,
} from "@material-ui/core";
import React from "react";
import MovimientoForm from "../Fomularions/MovimientoForm";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    boxShadow: theme.shadows[20],
    width: 850,
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%",
  },
}));

export default function ModalNuevoMovimiento({ open, handleClose }) {
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal open={open}>
      <Card className={classes.root}>
        <CardHeader title="Nuevo movimiento" />
        <Divider />
        <CardContent>
          <MovimientoForm onSubmit={onSubmit} />
        </CardContent>
        <Divider />
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button variant="outlined" color={"primary"}>
            Cancelar
          </Button>
          <Button variant="contained" color={"primary"}>
            Aceptar
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}
