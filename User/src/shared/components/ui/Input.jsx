import React, { useId } from "react";
import { inputTokens } from "../../styles";
 
// Class merger utility
const cx = (...classes) => classes.filter(Boolean).join(" ");

export const Input = React.memo(
  React.forwardRef(
    (
      {
        label,
        error,
        helperText,
        size = "md",
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        onRightIconClick,
        containerClassName,
        inputClassName,
        className,
        id,
        required = false,
        disabled = false,
        ...props
      },
      ref,
    ) => {
      const generatedId = useId();
      const inputId = id || props.name || generatedId;

      return (
        <div className={cx(inputTokens.container, containerClassName)}>
          {/* Label Section */}
          {label && (
            <label htmlFor={inputId} className={inputTokens.label}>
              {label}
              {required && <span className={inputTokens.requiredStar}>*</span>}
            </label>
          )}

          {/* Input + Icons Wrapper */}
          <div className={inputTokens.wrapper}>
            {LeftIcon && (
              <span className={inputTokens.iconLeft}>
                <LeftIcon size={16} />
              </span>
            )}

            <input
              {...props}
              ref={ref}
              id={inputId}
              required={required}
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={
                !error && helperText ? `${inputId}-helper` : undefined
              }
              aria-errormessage={error ? `${inputId}-error` : undefined}
              className={cx(
                inputTokens.base,
                inputTokens.sizes[size] || inputTokens.sizes.md,
                error ? inputTokens.states.error : inputTokens.states.default,
                disabled && inputTokens.states.disabled,
                LeftIcon && inputTokens.withIconLeft,
                RightIcon && inputTokens.withIconRight,
                inputClassName,
                className,
              )}
            />

            {RightIcon && (
              <span
                onClick={!disabled ? onRightIconClick : undefined}
                className={cx(
                  inputTokens.iconRight,
                  onRightIconClick && !disabled
                    ? "cursor-clickable hover:text-[var(--color-primary)]"
                    : "pointer-events-none",
                )}
              >
                <RightIcon size={16} />
              </span>
            )}
          </div>

          {/* Feedback Messages */}
          {error ? (
            <p id={`${inputId}-error`} className={inputTokens.errorText}>
              {error}
            </p>
          ) : helperText ? (
            <p id={`${inputId}-helper`} className={inputTokens.helperText}>
              {helperText}
            </p>
          ) : null}
        </div>
      );
    },
  ),
);

Input.displayName = "Input";

export default Input;
