import React from "react";

import { cx } from "../../utils/cn";
import { badgeToken } from "../../styles/badgeToken";
const Badge = React.memo(
  ({
    children,
    variant = "default",
    size = "sm",
    rounded = "full",
    dot = false,
    pulse = false,
    clickable = false,
    disabled = false,
    className,
    onClick,
    ...props
  }) => {
    return (
      <span
        onClick={!disabled ? onClick : undefined}
        className={cx(
          badgeToken.base,

          badgeToken.sizes[size] || badgeToken.sizes.sm,

          badgeToken.rounded[rounded] || badgeToken.rounded.full,

          badgeToken.variants[variant] || badgeToken.variants.default,

          dot && "pl-2",

          pulse && badgeToken.pulse,

          clickable && badgeToken.states.clickable,

          disabled && badgeToken.states.disabled,

          className,
        )}
        {...props}
      >
        {dot && <span className={badgeToken.dot} />}

        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
export { Badge };
