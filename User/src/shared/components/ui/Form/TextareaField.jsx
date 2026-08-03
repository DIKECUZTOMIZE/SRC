import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import FormField from "./FormField";
import { formToken } from "../../../styles";
import { cx } from "../../../utils/cn";
 
 
const TextareaField = forwardRef(
  (
    {
      name,
      label,
      placeholder,
      required = false,
      helperText,
      rows = 3,
      maxLength,
      className = "",
      rules = {},
      ...props
    },
    ref
  ) => {
    const {
      register,
      watch,
      formState: { errors },
    } = useFormContext() || {};

    // Support nested error object paths (e.g., "passenger.notes")
    const error = name
      ?.split(".")
      .reduce((acc, part) => acc?.[part], errors);

    const currentValue = watch ? watch(name) || "" : "";
    const charCount = currentValue.length;

    // Merge react-hook-form ref with forwarded ref
    const { ref: registerRef, ...registerProps } = register
      ? register(name, { required, maxLength, ...rules })
      : { ref: null };

    return (
      <FormField
        id={name}
        label={label}
        required={required}
        helperText={helperText}
        error={error}
      >
        <div className="relative w-full">
          <textarea
            id={name}
            rows={rows}
            placeholder={placeholder}
            maxLength={maxLength}
            aria-invalid={!!error}
            ref={(node) => {
              registerRef?.(node);
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            className={cx(
              formToken?.textarea || "w-full rounded-xl border p-3.5 text-sm",
              error && formToken?.states?.error,
              className
            )}
            {...registerProps}
            {...props}
          />

          {/* Optional Built-in Character Count Display */}
          {maxLength && (
            <div className="flex justify-end mt-1">
              <span
                className={cx(
                  "text-[11px] font-medium transition-colors",
                  charCount >= maxLength
                    ? "text-red-500 font-bold"
                    : charCount >= maxLength - 20
                    ? "text-amber-600 font-semibold"
                    : "text-[var(--color-text-secondary,#94a3b8)]"
                )}
              >
                {charCount} / {maxLength}
              </span>
            </div>
          )}
        </div>
      </FormField>
    );
  }
);

TextareaField.displayName = "TextareaField";

export default React.memo(TextareaField);