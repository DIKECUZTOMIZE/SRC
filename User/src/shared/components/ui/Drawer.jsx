import React, { useEffect } from "react";
import { X } from "lucide-react";
import { drawerToken } from "../../styles";

const Drawer = ({
  open,
  onClose,
  title = "",
  children,
  width = drawerToken.width,
}) => {
  // Handle ESC key press & Body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={drawerToken.overlay}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || "Drawer"}
        className={`${drawerToken.wrapper} ${width}`}
      >
        {/* Mobile Visual Drag Handle */}
        <div className={drawerToken.dragHandle} />

        {/* Header */}
        <div className={drawerToken.header}>
          <h2 className={drawerToken.title}>{title}</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className={drawerToken.closeButton}
          >
            <X size={18} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Body Content */}
        <div className={drawerToken.body}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
