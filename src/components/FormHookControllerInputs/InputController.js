import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

export default function InputController({
  select,
  name,
  label,
  control,
  children,
  error,
  helperText,
  ...props
}) {
  const labelId = `${name}-label`;
  return (
    <React.Fragment>
      {select && (
        <FormControl {...props} error={error}>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Controller
            control={control}
            name={name}
            render={({ onChange, onBlur, value }) => (
              <Select
                labelId={labelId}
                value={value}
                label={label}
                onChange={onChange}
                onBlur={onBlur}
              >
                {children}
              </Select>
            )}
          />
          {helperText && (
            <FormHelperText error={error}>{helperText}</FormHelperText>
          )}
        </FormControl>
      )}
      {!select && (
        <Controller
          control={control}
          name={name}
          render={({ onChange, onBlur, value }) => (
            <TextField
              label={label}
              helperText={helperText}
              error={error}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...props}
            />
          )}
        />
      )}
    </React.Fragment>
  );
}
