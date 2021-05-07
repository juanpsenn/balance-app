import React from "react";
import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import InputController from "src/components/FormHookControllerInputs/InputController";
import { createCategory } from "src/request/genericsRequest";
import schemaValidation from "./schemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";

function CuentaForm({ onSubmit, setLoading = () => {} }, ref) {
  const methods = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {
      name: "",
      id_income: true,
    },
    resolver: yupResolver(schemaValidation),
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const handleSubmitRequest = async (data) => {
    try {
      setLoading(true);
      const { status } = await createCategory(data);
      setLoading(false);
      reset();
      onSubmit();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        <Grid item xs={12}>
          <InputController
            fullWidth
            variant="outlined"
            name="name"
            label="Nombre"
            control={control}
            error={Boolean(errors.name?.message)}
            helperText={Boolean(errors.name?.message) && errors.name?.message}
          />
        </Grid>
      </Grid>
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
}

export default React.forwardRef(CuentaForm);
