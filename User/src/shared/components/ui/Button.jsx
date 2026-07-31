import React from "react";
import { Loader2 } from "lucide-react";
import { buttonTokens, iconSizeTokens } from "../../styles";

// Class merger utility
const cx = (...classes) => classes.filter(Boolean).join(" ");

export const Button = React.memo(
  React.forwardRef(
    (
      {
        children,
        variant = "secondary",
        size = "md",
        isLoading = false,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        fullWidth = false,
        rounded = false,
        className,
        disabled,
        type = "button",
        ...props
      },
      ref,
    ) => {
      const variantClass =
        buttonTokens.variants[variant] || buttonTokens.variants.primary;

      const sizeClass = buttonTokens.sizes[size] || buttonTokens.sizes.md;

      const iconSize = iconSizeTokens[size] || iconSizeTokens.md;

      return (
        <button
          ref={ref}
          type={type}
          disabled={disabled || isLoading}
          className={cx(
            buttonTokens.base,
            variantClass,
            sizeClass,
            fullWidth && "w-full",
            rounded && "!rounded-full",
            className,
          )}
          {...props}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin shrink-0" size={iconSize} />
              {children && <span>{children}</span>}
            </>
          ) : (
            <>
              {LeftIcon && <LeftIcon className="shrink-0" size={iconSize} />}
              {children && <span>{children}</span>}
              {RightIcon && <RightIcon className="shrink-0" size={iconSize} />}
            </>
          )}
        </button>
      );
    },
  ),
);

Button.displayName = "Button";

export default Button;
