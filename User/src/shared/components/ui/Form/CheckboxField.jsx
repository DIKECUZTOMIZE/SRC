import React, { forwardRef } from "react";
import { useFormContext, useWatch, get } from "react-hook-form";
import { Check } from "lucide-react";

import checkboxToken from "../../../styles/checkboxField";
import { cx } from "../../../utils/cn";

const CheckboxField = forwardRef(
  ({ name, label, disabled = false, className = "", ...props }, ref) => {
    const {
      register,
      control,
      formState: { errors },
    } = useFormContext();

    const checked = useWatch({
      control,
      name,
    });

    const error = get(errors, name);

    return (
      <div className={cx(checkboxToken.wrapper, className)}>
        <label
          htmlFor={name}
          className={cx(
            checkboxToken.container,
            checked && checkboxToken.states.checked,
            error && checkboxToken.states.error,
          )}
        >
          <div className="relative">
            <input
              id={name}
              type="checkbox"
              disabled={disabled}
              ref={ref}
              {...register(name)}
              className="peer h-5 w-5 cursor-pointer opacity-0 absolute"
              {...props}
            />

            <div
              className={cx(
                "h-5 w-5 rounded border-2 border-slate-300 flex items-center justify-center",
                checked && "bg-blue-600 border-blue-600",
              )}
            >
              {checked && <Check size={14} className="text-white" />}
            </div>
          </div>

          <div className={checkboxToken.content}>
            <span className={checkboxToken.label}>{label}</span>
          </div>
        </label>
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";

export default React.memo(CheckboxField);
