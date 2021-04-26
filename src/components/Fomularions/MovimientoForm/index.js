import React from "react";
import { Grid, Hidden, makeStyles, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import InputController from "src/components/FormHookControllerInputs/InputController";
import MoneyInputController from "src/components/FormHookControllerInputs/MoneyInputController";
import InputImage from "./InputImage";
import { DateTime } from "luxon";
import schemaValidation from "./schemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyles = makeStyles((theme) => ({
  dropArea: {
    border: `3px dashed ${theme.palette.secondary.main}`,
    "border-radius": 10,
    "font-size": 21,
    "min-height": 200,
    padding: 15,
    outline: 0,
    resize: "none",
    width: "100%",
  },
}));

function MovimientoForm({ onSubmit }, ref) {
  const classes = useStyles();
  const btnRef = React.createRef();
  const methods = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {
      type: "",
      amount: 0,
      category: "",
      description: "",
      date_time: DateTime.now().toISODate(),
      image_url: null,
    },
    resolver: yupResolver(schemaValidation),
  });
  const {
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = methods;

  const handleSubmitRequest = (data) => {
    console.log(data);
  };

  const handleSubmitForm = () => {
    handleSubmit(handleSubmitRequest)();
  };

  React.useImperativeHandle(ref, () => ({
    handleSubmit: handleSubmitForm,
    reset,
  }));

  return (
    <form onSubmit={handleSubmit(handleSubmitRequest)}>
      <Grid container spacing={2}>
        <Grid item container spacing={2} xs={12} md={6}>
          <Grid item xs={12}>
            <InputController
              fullWidth
              select
              variant="outlined"
              name="type"
              label="Tipo"
              control={control}
              error={Boolean(errors.type?.message)}
              helperText={Boolean(errors.type?.message) && errors.type?.message}
            >
              <MenuItem value="1">Ingreso</MenuItem>
              <MenuItem value="2">Egreso</MenuItem>
            </InputController>
          </Grid>
          <Grid item xs={12}>
            <InputController
              fullWidth
              select
              variant="outlined"
              name="account"
              label="Cuenta"
              control={control}
              error={Boolean(errors.account?.message)}
              helperText={
                Boolean(errors.account?.message) && errors.account?.message
              }
            >
              <MenuItem>Ingreso</MenuItem>
              <MenuItem>Egreso</MenuItem>
            </InputController>
          </Grid>
          <Grid item xs={12}>
            <InputController
              variant="outlined"
              name="date_time"
              label="Fecha"
              control={control}
              fullWidth
              type="date"
              InputProps={{
                shrink: "true",
              }}
              error={Boolean(errors.date_time?.message)}
              helperText={
                Boolean(errors.date_time?.message) && errors.date_time?.message
              }
            />
          </Grid>

          <Grid item xs={12}>
            <InputController
              fullWidth
              select
              variant="outlined"
              name="category"
              label="Motivo"
              control={control}
              error={Boolean(errors.category?.message)}
              helperText={
                Boolean(errors.category?.message) && errors.category?.message
              }
            >
              <MenuItem value="1">Ingreso</MenuItem>
              <MenuItem value="2">Egreso</MenuItem>
            </InputController>
          </Grid>
          <Grid item xs={12}>
            <InputController
              variant="outlined"
              name="description"
              label="Descripción"
              control={control}
              fullWidth
              error={Boolean(errors.description?.message)}
              helperText={
                Boolean(errors.description?.message) &&
                errors.description?.message
              }
            />
          </Grid>
          <Grid item xs={12}>
            <MoneyInputController
              control={control}
              variant="outlined"
              name="amount"
              label="Importe"
              error={Boolean(errors.amount?.message)}
              helperText={
                Boolean(errors.amount?.message) && errors.amount?.message
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputImage />
        </Grid>
      </Grid>
    </form>
  );
}

export default React.forwardRef(MovimientoForm);
