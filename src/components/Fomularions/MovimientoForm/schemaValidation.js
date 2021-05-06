import * as yup from "yup";

const schemaValidation = yup.object().shape({
  type: yup.string().required("Seleccione un tipo de movimiento."),
  amount: yup
    .number()
    .min(1, "Ingrese una cantidad mayor a 1.")
    .required("Ingrese un importe."),
  category: yup.string().required("Seleccione un motivo."),
  account: yup.string().required("Seleccione una cuenta."),

  description: yup.string().required("Ingrese una descripcion"),
  date_time: yup.date().required("Ingrese una fecha."),
});

export default schemaValidation;
