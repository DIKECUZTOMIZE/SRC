import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import FormField from "./FormField";
import { formToken } from "../../../styles";
import { cx } from "../../../utils/cn";

const FileField = forwardRef(
  (
    {
      name,
      label,
      required = false,
      helperText,
      accept,
      multiple = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const {
      register,
      watch,
      formState: { errors },
    } = useFormContext();

    const files = watch(name);
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
          type="file"
          accept={accept}
          multiple={multiple}
          ref={ref}
          aria-invalid={!!error}
          {...register(name, { required })}
          className={cx(
            formToken.input,
            "file:mr-4 file:border-0 file:bg-[var(--color-primary)] file:px-3 file:py-2 file:text-white file:rounded-md file:cursor-pointer",
            error && formToken.states.error,
            className,
          )}
          {...props}
        />

        {files?.length > 0 && (
          <div className="mt-2 space-y-1">
            {Array.from(files).map((file) => (
              <p key={file.name} className={formToken.helperText}>
                {file.name}
              </p>
            ))}
          </div>
        )}
      </FormField>
    );
  },
);

FileField.displayName = "FileField";

export default React.memo(FileField);
