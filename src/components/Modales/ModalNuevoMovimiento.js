import {
  Card,
  CardContent,
  CardHeader,
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
  return (
    <Modal open={open}>
      <Card className={classes.root}>
        <CardHeader title="Nuevo movimiento" />
        <CardContent>
          <MovimientoForm />
        </CardContent>
      </Card>
    </Modal>
  );
}
