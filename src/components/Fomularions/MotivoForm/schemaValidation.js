import * as yup from "yup";

const schemaValidation = yup.object().shape({
  name: yup.string().required("Ingrese un nombre."),
});

export default schemaValidation;
