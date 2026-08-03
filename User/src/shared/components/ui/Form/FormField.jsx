import React from "react";
import { formToken } from "../../../styles";

const FormField = React.memo(
  ({
    id,
    label,
    required = false,
    error,
    helperText,
    className = "",
    children,
  }) => {
    const helperId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    return (
      <div className={`${formToken.group} ${className}`}>
        {/* Label */}
        {label && (
          <label htmlFor={id} className={formToken.label}>
            {label}
            {required && (
              <span className={formToken.required} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Input / Select / Textarea */}
        {children}

        {/* Helper Text */}
        {!error && helperText && (
          <p id={helperId} className={formToken.helperText}>
            {helperText}
          </p>
        )}

        {/* Error */}
        {error && (
          <p id={errorId} role="alert" className={formToken.errorText}>
            {error.message || error}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = "FormField";

export default FormField;
