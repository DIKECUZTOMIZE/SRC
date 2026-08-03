import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import FormField from "./FormField";
import { cx } from "../../../utils/cn";
import { formToken } from "../../../styles";

 
const DateField = forwardRef(
  (
    {
      name,
      label,
      required = false,
      helperText,
      min,
      max,
      className = "",
      ...props
    },
    ref,
  ) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const error = errors?.[name];

    return (
      <FormField
        id={name}
        label={label}
        required={required}
        helperText={helperText}
        error={error}
      >
        <input
          id={name}
          type="date"
          min={min}
          max={max}
          ref={ref}
          aria-invalid={!!error}
          {...register(name, { required })}
          className={cx(
            formToken.input,
            error && formToken.states.error,
            className,
          )}
          {...props}
        />
      </FormField>
    );
  },
);

DateField.displayName = "DateField";

export default React.memo(DateField);