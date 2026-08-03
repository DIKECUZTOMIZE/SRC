import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import FormField from "./FormField";
import { cx } from "../../../utils/cn";
import { formToken } from "../../../styles";

 
const RadioField = forwardRef(
  (
    {
      name,
      label,
      options = [],
      helperText,
      required = false,
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
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                ref={ref}
                aria-invalid={!!error}
                {...register(name, { required })}
                className={cx(
                  "h-4 w-4 shrink-0 border-[var(--color-border)] text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]",
                  className,
                )}
                {...props}
              />

              <span className={formToken.label}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </FormField>
    );
  },
);

RadioField.displayName = "RadioField";

export default React.memo(RadioField);