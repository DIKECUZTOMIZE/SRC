import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import FormField from "./FormField";
import { cx } from "../../../utils/cn";
import { formToken } from "../../../styles";

 
const TimeField = forwardRef(
  (
    {
      name,
      label,
      required = false,
      helperText,
      min,
      max,
      step,
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
          type="time"
          min={min}
          max={max}
          step={step}
          ref={ref}
          aria-invalid={!!error}
          {...register(name, { required })}
          className={cx(
            formToken.input,
            error && formToken.states.error,
            className
          )}
          {...props}
        />
      </FormField>
    );
  }
);

TimeField.displayName = "TimeField";

export default React.memo(TimeField);