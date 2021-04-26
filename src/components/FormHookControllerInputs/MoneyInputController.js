import React from "react";
import { Input, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import currency from "currency.js";

const max = Number.MAX_SAFE_INTEGER;

export default function MoneyInputController({
  select,
  name,
  label,
  control,
  children,
  error,
  helperText,
  ...props
}) {
  const handleChangeValue = (event, onChange) => {
    const {
      target: { value, name },
    } = event;

    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      const fakeChangeEvent = {
        target: { value: String(currency(value).value), name },
      };
      onChange(fakeChangeEvent);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <TextField
            label={label}
            helperText={helperText}
            error={error}
            value={value}
            onChange={(event) => handleChangeValue(event, onChange)}
            onBlur={onBlur}
            type="number"
            {...props}
          />
        );
      }}
    />
  );
}
