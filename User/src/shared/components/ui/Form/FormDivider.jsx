import React from "react";
import { cx } from "../../../utils/cn";
 
const FormDivider = React.memo(
  ({ label, className = "" }) => {
    return (
      <div className={cx("relative my-6", className)}>
        <div className="border-t border-[var(--color-border)]" />

        {label && (
          <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-bg-primary)] px-3 text-xs text-[var(--color-text-secondary)]">
            {label}
          </span>
        )}
      </div>
    );
  }
);

FormDivider.displayName = "FormDivider";

export default FormDivider;