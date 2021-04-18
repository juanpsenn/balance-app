import React from "react";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import MoneyInput from "@rschpdr/react-money-input";

export default function MoneyInputController({
  name,
  setValue,
  getValues,
  ...props
}) {
  const handleChangeValue = (event) => {
    const value = event.target.value;
    setValue(name, value);
  };

  return (
    <MoneyInput
      customInput={TextField}
      value={getValues(name)}
      onChange={handleChangeValue}
      currencyConfig={{
        locale: "es-AR",
        currencyCode: "ARS",
        currencyDisplay: "symbol",
        useGrouping: true,
        minimumFractionDigits: undefined,
      }}
      {...props}
    />
  );
}
