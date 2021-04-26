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
  const refForm = React.createRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    console.log(refForm.current);
  }, [refForm.current]);

  if (!open) {
    return null;
  }

  return (
    <Modal open={open}>
      <Card className={classes.root}>
        <CardHeader title="Nuevo movimiento" />
        <Divider />
        <CardContent>
          <MovimientoForm ref={refForm} onSubmit={onSubmit} />
        </CardContent>
        <Divider />
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button variant="outlined" color={"primary"} onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color={"primary"}
            onClick={() => refForm.current.handleSubmit()}
          >
            Aceptar
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}
