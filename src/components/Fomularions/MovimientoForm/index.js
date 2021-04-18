import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { useForm } from "react-hook-form";

export default function MovimientoForm({ handleCancel, handleSuccess }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    errors,
  } = useForm({
    mode: "onChange | onSubmit",
    defaultValues: {},
  });

  return <form></form>;
}
