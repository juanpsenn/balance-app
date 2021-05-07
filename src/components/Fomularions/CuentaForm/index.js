import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import InputController from "src/components/FormHookControllerInputs/InputController";
import { listUser } from "src/request/authRequest";
import { listOwners, listBanks } from "src/request/genericsRequest";
import { createAccount } from "src/request/accountsRequest";
import schemaValidation from "./schemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";

function CuentaForm({ onSubmit, setLoading = () => {} }, ref) {
  const [bancos, setBancos] = React.useState([]);
  const [owners, setOwners] = React.useState([]);
  const [usuarios, setUsuarios] = React.useState([]);
  const methods = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {
      owner: "",
      bank: "",
      user: "",
    },
    resolver: yupResolver(schemaValidation),
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const handleGetDataSupport = async () => {
    try {
      const { data: dataUsers } = await listUser();
      const { data: dataOwners } = await listOwners();
      const { data: dataBanks } = await listBanks();
      setBancos(dataBanks);
      setOwners(dataOwners);
      setUsuarios(dataUsers);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitRequest = async (data) => {
    try {
      setLoading(true);
      const { status } = await createAccount(data);
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

  React.useEffect(() => {
    handleGetDataSupport();
  }, []);

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
            select
            variant="outlined"
            name="owner"
            label="Dueño"
            control={control}
            error={Boolean(errors.owner?.message)}
            helperText={Boolean(errors.owner?.message) && errors.owner?.message}
          >
            {owners.map((c, i) => (
              <MenuItem key={i} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </InputController>
        </Grid>
        <Grid item xs={12}>
          <InputController
            fullWidth
            select
            variant="outlined"
            name="bank"
            label="Banco"
            control={control}
            error={Boolean(errors.bank?.message)}
            helperText={Boolean(errors.bank?.message) && errors.bank?.message}
          >
            {bancos.map((c, i) => (
              <MenuItem key={i} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </InputController>
        </Grid>
        <Grid item xs={12}>
          <InputController
            fullWidth
            select
            variant="outlined"
            name="user"
            label="Usuario"
            control={control}
            error={Boolean(errors.user?.message)}
            helperText={Boolean(errors.user?.message) && errors.user?.message}
          >
            {usuarios.map((c, i) => (
              <MenuItem key={i} value={c.id}>
                {c.username}
              </MenuItem>
            ))}
          </InputController>
        </Grid>
      </Grid>
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
}

export default React.forwardRef(CuentaForm);
