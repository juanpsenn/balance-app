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
  const methods = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleSubmitLogin = async () => {
    setOpenSplashScreen(true);
    await wait(2);
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
          label="Email"
          name="email"
          autoComplete="email"
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
