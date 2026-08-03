import React from "react";
import { cx } from "../../../utils/cn";
import Card from "../Card";
import Typography from "../Typography";

const FormSection = React.memo(
  ({ title, description, children, className = "", bodyClassName = "" }) => {
    return (
      <Card className={cx("overflow-hidden", className)}>
        {(title || description) && (
          <Card.Header>
            {title && <Typography variant="h3">{title}</Typography>}

            {description && (
              <Typography variant="bodyMuted">{description}</Typography>
            )}
          </Card.Header>
        )}

        <Card.Body className={bodyClassName}>{children}</Card.Body>
      </Card>
    );
  },
);

FormSection.displayName = "FormSection";

export default FormSection;
