import { Control, Controller, FieldError } from "react-hook-form";

import { Input, InputProps } from "../Input";

import { Error } from "./styles";

interface ControlledInputProps extends InputProps {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

export function ControlledInput({
  control,
  name,
  error,
  ...rest
}: ControlledInputProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input value={value} onChangeText={onChange} {...rest} />
        )}
      />
      {error && <Error>{error?.message}</Error>}
    </>
  );
}
