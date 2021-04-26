import React from "react";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import InputController from "src/components/FormHookControllerInputs/InputController";
import wait from "src/utils/wait";
import SplashScreen from "src/components/SplashScreen";
import { Button } from "@material-ui/core";
import authRequest from "src/request/authRequest";
import { AuthContext } from "src/context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [isOpenSplahScreen, setOpenSplashScreen] = React.useState(false);
  const { handlerAuth } = React.useContext(AuthContext);
  const methods = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleSubmitLogin = async (dataForm) => {
    setOpenSplashScreen(true);
    try {
      const { status, data } = await authRequest.login({ ...dataForm });
      sessionStorage.setItem("_uid", data.token);
      await wait(3000);
      setOpenSplashScreen(false);
      handlerAuth.setAuth(true);
    } catch (error) {
      setOpenSplashScreen(false);
    }
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Ingresar
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitLogin)} className={classes.form}>
        <InputController
          control={control}
          variant="outlined"
          margin="normal"
          fullWidth
          label="Usuario"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <InputController
          control={control}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Iniciar sesión
        </Button>
      </form>
      <SplashScreen open={isOpenSplahScreen} />
    </div>
  );
}
