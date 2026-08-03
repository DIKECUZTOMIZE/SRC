import React from "react";
import { formToken } from "../../../styles";
import { cx } from "../../../utils/cn";
 
const FormHelperText = React.memo(
  ({ children, className = "" }) => {
    if (!children) return null;

    return (
      <p className={cx(formToken.helperText, className)}>
        {children}
      </p>
    );
  }
);

FormHelperText.displayName = "FormHelperText";

export default FormHelperText;