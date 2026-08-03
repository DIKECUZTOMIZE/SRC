import React from "react";
import { useFormContext } from "react-hook-form";
import { cx } from "../../../utils/cn";
import { buttonTokens } from "../../../styles";

const SubmitButton = React.memo(
  ({
    children = "Submit",
    loadingText = "Submitting...",
    disabled = false,
    fullWidth = true,
    variant = "primary",
    size = "md",
    className = "",
    ...props
  }) => {
    const {
      formState: { isSubmitting },
    } = useFormContext();

    return (
      <button
        type="submit"
        disabled={disabled || isSubmitting}
        className={cx(
          buttonTokens.base,
          buttonTokens.variants[variant],
          buttonTokens.sizes[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {isSubmitting ? loadingText : children}
      </button>
    );
  },
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
