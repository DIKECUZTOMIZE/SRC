import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { formToken } from "../../../styles";
import { cx } from "../../../utils/cn";

const CheckboxField = forwardRef(
  (
    { name, label, helperText, required = false, className = "", ...props },
    ref,
  ) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const error = errors?.[name];

    return (
      <div className={formToken.group}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            id={name}
            type="checkbox"
            ref={ref}
            aria-invalid={!!error}
            {...register(name, { required })}
            className={cx(
              "mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]",
              className,
            )}
            {...props}
          />

          <span className={formToken.label}>
            {label}

            {required && <span className={formToken.required}>*</span>}
          </span>
        </label>

        {!error && helperText && (
          <p className={formToken.helperText}>{helperText}</p>
        )}

        {error && (
          <p role="alert" className={formToken.errorText}>
            {error.message || "This field is required"}
          </p>
        )}
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";

export default React.memo(CheckboxField);
