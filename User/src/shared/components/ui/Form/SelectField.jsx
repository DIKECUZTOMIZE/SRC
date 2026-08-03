import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
 
import { formToken } from "../../../styles";
 
import FormField from "./FormField";
import { cx } from "../../../utils/cn";

const SelectField = forwardRef(
  (
    {
      name,
      label,
      required = false,
      helperText,
      placeholder = "Select an option",
      options = [],
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
        <select
          id={name}
          ref={ref}
          aria-invalid={!!error}
          {...register(name, { required })}
          className={cx(
            formToken.input,
            error && formToken.states.error,
            className,
          )}
          {...props}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </FormField>
    );
  },
);

SelectField.displayName = "SelectField";

export default React.memo(SelectField);
