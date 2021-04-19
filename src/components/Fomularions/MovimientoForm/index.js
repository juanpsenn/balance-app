import React from "react";
import { Grid, makeStyles, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import InputController from "src/components/FormHookControllerInputs/InputController";
import MoneyInputController from "src/components/FormHookControllerInputs/MoneyInputController";
import InputImage from "./InputImage";

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

export default function MovimientoForm({ onSubmit }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    getValues,
    errors,
  } = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {
      type: "",
      amount: "",
      category: "",
      balance_to_date: null,
      description: null,
    },
  });
  const watchFields = watch("amount");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item container spacing={2} xs={6}>
          <Grid item xs={12}>
            <InputController
              fullWidth
              select
              variant="outlined"
              name="type"
              label="Tipo"
              control={control}
            >
              <MenuItem>Ingreso</MenuItem>
              <MenuItem>Egreso</MenuItem>
            </InputController>
          </Grid>

          <Grid item xs={12}>
            <InputController
              fullWidth
              select
              variant="outlined"
              name="category"
              label="Motivo"
              control={control}
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
            />
          </Grid>
          <Grid item xs={12}>
            <MoneyInputController
              setValue={setValue}
              getValues={getValues}
              variant="outlined"
              name="amount"
              label="Importe"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <InputImage />
        </Grid>
      </Grid>
    </form>
  );
}
