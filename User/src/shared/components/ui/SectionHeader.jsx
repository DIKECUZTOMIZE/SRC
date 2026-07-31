/* eslint-disable no-unused-vars */
import React from "react";
import { Eye } from "lucide-react";

import { cx } from "../../utils/cn";
import { buttonTokens, sectionHeader } from "../../styles";
import { Button } from "./Button";

const SectionHeader = ({
  badge,
  title,
  subtitle,
  subtitleClassName,
  description,
  buttonLabel,
  buttonIcon: Icon = Eye,
  buttonVariant = "primary",
  buttonSize = "md",
  onButtonClick,
  actions,
  children,
  className,
}) => {
  const hasRightContent = Boolean(buttonLabel || actions);

  // Safe Fallback for Button Tokens
  const btnBase =
    buttonTokens?.base ||
    "inline-flex items-center gap-2 rounded-lg font-medium transition-all";
  const btnVariant =
    buttonTokens?.variants?.[buttonVariant] ||
    buttonTokens?.variants?.primary ||
    "";
  const btnSize =
    buttonTokens?.sizes?.[buttonSize] ||
    buttonTokens?.sizes?.md ||
    "px-4 py-2 text-sm";

  return (
    <header className={cx(sectionHeader.wrapper, className)}>
      {/* Left Content Area */}
      <div className={sectionHeader.content}>
        {/* Badge Indicator */}
        {badge && (
          <div className="flex items-center gap-2 mb-1.5">
            <span className={sectionHeader.badge}>
              {sectionHeader.dot && (
                <span className={sectionHeader.dot} aria-hidden="true" />
              )}
              {badge}
            </span>
          </div>
        )}

        {/* Section Heading */}
        {title && (
          <h2 className={sectionHeader.title}>
            {title}{" "}
            {subtitle && (
              <span className={cx(sectionHeader.subtitle, subtitleClassName)}>
                {subtitle}
              </span>
            )}
          </h2>
        )}

        {/* Section Description */}
        {description && (
          <p className={sectionHeader.description}>{description}</p>
        )}

        {/* Custom Left Slot (Tabs, Filters, Stats) */}
        {children && <div className="mt-3.5">{children}</div>}
      </div>

      {/* Right Action Slot (Mobile Auto-Stack / Desktop Align-End) */}
      {hasRightContent && (
        <div className={sectionHeader.actions}>
          {actions}

          {buttonLabel && (
            <Button
              type="button"
              onClick={onButtonClick}
              className={cx(
                btnBase,
                btnVariant,
                btnSize,
                sectionHeader.button,
                "w-full sm:w-auto justify-center",
              )}
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
              <span>{buttonLabel}</span>
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default React.memo(SectionHeader);
