import React from "react";
import { X } from "lucide-react";

import { Card } from "./Card";
import { Button } from "./Button";
import { cx } from "../../utils/cn";
import { modalToken } from "../../styles";

const Modal = ({
  open,
  onClose,
  title,
  subtitle,
  size = "md",
  children,
  footer,
  className,
}) => {
  if (!open) return null;

  return (
    <div className={modalToken.overlay} onClick={onClose}>
      <Card
        className={cx(
          modalToken.container,
          modalToken.sizes[size],
          modalToken.enter,
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={modalToken.header}>
          <div>
            {title && <h2 className={modalToken.title}>{title}</h2>}

            {subtitle && (
              <p className={modalToken.subtitle}>{subtitle}</p>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={modalToken.closeButton}
          >
            <X size={18} />
          </Button>
        </div>

        {/* Body */}
        <div className={modalToken.body}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className={modalToken.footer}>
            {footer}
          </div>
        )}
      </Card>
    </div>
  );
};

export default React.memo(Modal);