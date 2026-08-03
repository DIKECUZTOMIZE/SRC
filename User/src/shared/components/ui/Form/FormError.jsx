import React from "react";
import { cx } from "../../../utils/cn";
import { formToken } from "../../../styles";

const FormError = React.memo(({ children, className = "" }) => {
  if (!children) return null;

  return <p className={cx(formToken.errorText, className)}>{children}</p>;
});

FormError.displayName = "FormError";

export default FormError;
