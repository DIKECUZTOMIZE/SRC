import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

import FormField from "./FormField";
import { inputTokens } from "../../../styles";
import { cx } from "../../../utils/cn";

const InputField = forwardRef(
  (
    {
      name,
      label,
      type = "text",
      placeholder,
      required = false,
      helperText,

      leftIcon: LeftIcon,
      rightIcon: RightIcon,

      size = "md",

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
        <div className={inputTokens.wrapper}>
          {LeftIcon && (
            <span className={inputTokens.iconLeft}>
              <LeftIcon size={16} />
            </span>
          )}

          <input
            id={name}
            type={type}
            placeholder={placeholder}
            aria-invalid={!!error}
            ref={ref}
            {...register(name, { required })}
            className={cx(
              inputTokens.base,
              inputTokens.sizes[size],
              error ? inputTokens.states.error : inputTokens.states.default,
              LeftIcon && inputTokens.withIconLeft,
              RightIcon && inputTokens.withIconRight,
              className,
            )}
            {...props}
          />

          {RightIcon && (
            <span className={inputTokens.iconRight}>
              <RightIcon size={16} />
            </span>
          )}
        </div>
      </FormField>
    );
  },
);

InputField.displayName = "InputField";

export default React.memo(InputField);
