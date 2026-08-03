import React from "react";

import typographyToken from "../../styles/typographyToken";
import { cx } from "../../utils/cn";

const elementMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  bodyLarge: "p",
  bodyMuted: "p",
  caption: "span",
  overline: "span",
};

const Typography = React.memo(
  ({ as, variant = "body", className = "", children, ...props }) => {
    const Component = as || elementMap[variant] || "p";

    return (
      <Component className={cx(typographyToken[variant], className)} {...props}>
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
