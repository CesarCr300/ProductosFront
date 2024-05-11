import { FormControl, TextField } from "@mui/material";
import { FieldError, RegisterOptions } from "react-hook-form";

export interface IFormInput {
  name: string;
  label: string;
  register: any;
  registerOptions?: RegisterOptions;
  size?: string;
  type?: "text" | "number";
  defaultValue?: string | number;
  hasAsyncronousDefaultValue?: boolean;
  error?: FieldError;
}

export const FormField = ({
  name,
  label,
  register,
  type = "text",
  size = "small",
  defaultValue = "",
  hasAsyncronousDefaultValue = true,
  registerOptions = {},
  error,
}: IFormInput) => {
  return (
    <FormControl key={name + label}>
      <TextField
        label={label}
        {...register(name, {
          valueAsNumber: type == "number",
          ...registerOptions,
        })}
        size={size}
        type={type}
        defaultValue={
          hasAsyncronousDefaultValue
            ? type == "text"
              ? "_"
              : type == "number"
              ? 0
              : undefined
            : defaultValue
        }
        {...(type == "number" && {
          inputProps: {
            step: "0.1",
          },
        })}
      />
      {error != undefined && <p>{error?.message?.toString()}</p>}
    </FormControl>
  );
};
