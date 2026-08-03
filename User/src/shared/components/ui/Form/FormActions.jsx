import React from "react";
import { cx } from "../../../utils/cn";
 
const FormActions = React.memo(
  ({
    children,
    className = "",
    align = "end",
    direction = "row",
  }) => {
    const justify = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    };

    const flexDirection = {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    };

    return (
      <div
        className={cx(
          "flex gap-3 pt-4",
          flexDirection[direction],
          justify[align],
          "flex-col-reverse sm:flex-row",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

FormActions.displayName = "FormActions";

export default FormActions;