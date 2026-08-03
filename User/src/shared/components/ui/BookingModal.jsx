import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { Card } from "./Card";
import { Button } from "./Button";
import { cx } from "../../utils/cn";
import { bookingModalToken } from "../../styles";

const BookingModal = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = "md",
  showHeader = true,
  showHandle = false,
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEsc = true,
  className,
  overlayClassName,
  containerClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
}) => {
  const modalRef = useRef(null);

  // 1. Prevent background scrolling & keyboard ESC listener
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && closeOnEsc) {
        e.stopPropagation();
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEsc, onClose]);

  // 2. Focus management (Auto-focus modal on open)
  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  // 3. Precise Backdrop click handler
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onClose?.();
    }
  };

  const modalContent = (
    <>
      {/* Visual Backdrop */}
      <div
        className={cx(bookingModalToken.backdrop, overlayClassName)}
        aria-hidden="true"
      />

      {/* Clickable Modal Wrapper */}
      <div
        className={cx(bookingModalToken.wrapper, containerClassName)}
        onClick={handleWrapperClick}
      >
        <Card
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "booking-modal-title" : undefined}
          aria-describedby={subtitle ? "booking-modal-subtitle" : undefined}
          className={cx(
            bookingModalToken.panel,
            bookingModalToken.sizes[size] || bookingModalToken.sizes.md,
            bookingModalToken.transition,
            bookingModalToken.enter,
            "outline-none",
            className
          )}
        >
          {/* Mobile Drag/Indicator Handle */}
          {showHandle && <div className={bookingModalToken.handle} />}

          {/* Header Section */}
          {showHeader && (
            <div className={cx(bookingModalToken.header, headerClassName)}>
              <div className="flex-1 min-w-0 pr-2">
                {title && (
                  <h2
                    id="booking-modal-title"
                    className={bookingModalToken.title}
                  >
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p
                    id="booking-modal-subtitle"
                    className={bookingModalToken.subtitle}
                  >
                    {subtitle}
                  </p>
                )}
              </div>

              {showCloseButton && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close modal"
                  onClick={onClose}
                  className={bookingModalToken.closeButton}
                >
                  <X size={18} />
                </Button>
              )}
            </div>
          )}

          {/* Scrollable Body */}
          <div className={cx(bookingModalToken.body, bodyClassName)}>
            {children}
          </div>

          {/* Footer Section */}
          {footer && (
            <div className={cx(bookingModalToken.footer, footerClassName)}>
              {footer}
            </div>
          )}
        </Card>
      </div>
    </>
  );

  // Render modal safely at document body level via Portal
  return createPortal(modalContent, document.body);
};

export default React.memo(BookingModal);