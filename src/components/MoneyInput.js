import React from "react";
import { TextField } from "@material-ui/core";
import MoneyInput from "@rschpdr/react-money-input";

export default function MoneyInputs() {
  const [value, setValue] = React.useState("");

  const handleParseValue = (event) => {
    console.log(event.target.value);
    const originalValue = event.target.value;

    setValue(originalValue);
  };

  return (
    <MoneyInput
      customInput={TextField}
      variant="outlined"
      label="Importe"
      placeholder="0,00"
      value={value}
      currencyConfig={{
        locale: "es-AR",
        currencyCode: "ARS",
        currencyDisplay: "symbol",
        useGrouping: true,
        minimumFractionDigits: undefined,
      }}
      onChange={handleParseValue}
    />
  );
}
