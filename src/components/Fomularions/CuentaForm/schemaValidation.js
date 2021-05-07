import * as yup from "yup";

const schemaValidation = yup.object().shape({
  bank: yup.string().required("Seleccione un banco."),
  owner: yup.string().required("Seleccione un dueño."),
  user: yup.string().required("Seleccione un usuario."),
});

export default schemaValidation;
