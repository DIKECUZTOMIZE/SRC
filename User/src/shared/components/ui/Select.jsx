import React, { useId } from "react";
import { ChevronDown } from "lucide-react";
import { selectTokens } from "../../styles";

// Class merger helper (matches cn/cx utility)
const cx = (...classes) => classes.filter(Boolean).join(" ");

export const Select = React.memo(
  React.forwardRef(
    (
      {
        label,
        options = [],
        error,
        helperText,
        leftIcon: LeftIcon,
        containerClassName,
        selectClassName,
        className,
        id,
        placeholder = "Select Option",
        required = false,
        disabled = false,
        ...props
      },
      ref,
    ) => {
      const generatedId = useId();
      const selectId = id || props.name || generatedId;

      return (
        <div className={cx(selectTokens.container, containerClassName)}>
          {label && (
            <label htmlFor={selectId} className={selectTokens.label}>
              {label}
              {required && <span className={selectTokens.requiredStar}>*</span>}
            </label>
          )}

          <div className={selectTokens.inputWrapper}>
            {LeftIcon && (
              <LeftIcon size={16} className={selectTokens.leftIcon} />
            )}

            <select
              {...props}
              ref={ref}
              id={selectId}
              required={required}
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={
                !error && helperText ? `${selectId}-helper` : undefined
              }
              aria-errormessage={error ? `${selectId}-error` : undefined}
              className={cx(
                selectTokens.select,
                LeftIcon ? selectTokens.hasLeftIcon : selectTokens.noLeftIcon,
                error && selectTokens.errorBorder,
                selectClassName,
                className,
              )}
            >
              {placeholder && (
                <option
                  value=""
                  disabled
                  hidden
                  className={selectTokens.option}
                >
                  {placeholder}
                </option>
              )}

              {options.map((opt) => {
                const value = typeof opt === "object" ? opt.value : opt;
                const optionLabel = typeof opt === "object" ? opt.label : opt;

                return (
                  <option
                    key={value}
                    value={value}
                    className={selectTokens.option}
                  >
                    {optionLabel}
                  </option>
                );
              })}
            </select>

            <ChevronDown size={16} className={selectTokens.chevronIcon} />
          </div>

          {error ? (
            <p id={`${selectId}-error`} className={selectTokens.errorText}>
              {error}
            </p>
          ) : helperText ? (
            <p id={`${selectId}-helper`} className={selectTokens.helperText}>
              {helperText}
            </p>
          ) : null}
        </div>
      );
    },
  ),
);

Select.displayName = "Select";
