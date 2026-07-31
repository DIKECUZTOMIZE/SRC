/* eslint-disable no-unused-vars */
import React, { useId, useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Loader2,
  ChevronDown,
  Check,
  X,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Search,
  RotateCcw,
  Car,
} from "lucide-react";

// 1. UTILS
// eslint-disable-next-line react-refresh/only-export-components
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 5. CHECKBOX COMPONENT
export const Checkbox = React.memo(
  React.forwardRef(
    ({ label, error, className, id, checked, onChange, ...props }, ref) => {
      const checkId = id || props.name;

      return (
        <div>
          <label
            htmlFor={checkId}
            className="inline-flex items-center gap-2 cursor-pointer select-none group"
          >
            <div className="relative flex items-center justify-center">
              <input
                ref={ref}
                type="checkbox"
                id={checkId}
                checked={checked}
                onChange={onChange}
                className="sr-only peer"
                {...props}
              />
              <div
                className={cn(
                  "w-4 h-4 rounded-md border border-slate-300 bg-white peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all flex items-center justify-center group-hover:border-emerald-400 peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-100",
                  className,
                )}
              >
                <Check
                  size={12}
                  className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  strokeWidth={3}
                />
              </div>
            </div>
            {label && (
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                {label}
              </span>
            )}
          </label>
          {error && (
            <p className="mt-1 text-[10px] font-bold text-rose-500">{error}</p>
          )}
        </div>
      );
    },
  ),
);
Checkbox.displayName = "Checkbox";

// 6. RADIO COMPONENT
export const Radio = React.memo(
  React.forwardRef(({ label, className, id, ...props }, ref) => {
    const radioId = id || props.value;

    return (
      <label
        htmlFor={radioId}
        className="inline-flex items-center gap-2 cursor-pointer select-none group"
      >
        <div className="relative flex items-center justify-center">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              "w-4 h-4 rounded-full border border-slate-300 bg-white peer-checked:border-emerald-600 peer-checked:border-[5px] transition-all group-hover:border-emerald-400 peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-100",
              className,
            )}
          />
        </div>
        {label && (
          <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
            {label}
          </span>
        )}
      </label>
    );
  }),
);
Radio.displayName = "Radio";

// 7. TEXTAREA COMPONENT
export const Textarea = React.memo(
  React.forwardRef(
    ({ label, error, helperText, className, id, rows = 3, ...props }, ref) => {
      const areaId = id || props.name;

      return (
        <div className="w-full">
          {label && (
            <label
              htmlFor={areaId}
              className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5"
            >
              {label}
            </label>
          )}
          <textarea
            ref={ref}
            id={areaId}
            rows={rows}
            className={cn(
              "w-full bg-slate-50/80 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 rounded-xl p-3 text-xs font-semibold text-slate-800 transition-all outline-none placeholder:text-slate-400 resize-y",
              error &&
                "border-rose-300 focus:border-rose-500 focus:ring-rose-100",
              className,
            )}
            {...props}
          />
          {error ? (
            <p className="mt-1 text-[10px] font-bold text-rose-500">{error}</p>
          ) : helperText ? (
            <p className="mt-1 text-[10px] font-medium text-slate-400">
              {helperText}
            </p>
          ) : null}
        </div>
      );
    },
  ),
);
Textarea.displayName = "Textarea";

// 8. BADGE COMPONENT
const badgeVariants = {
  emerald: "bg-emerald-50 border-emerald-200/80 text-emerald-700",
  slate: "bg-slate-100 border-slate-200 text-slate-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  rose: "bg-rose-50 border-rose-200 text-rose-700",
  sky: "bg-sky-50 border-sky-200 text-sky-700",
};

const badgeDotColors = {
  emerald: "bg-emerald-500",
  slate: "bg-slate-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  sky: "bg-sky-500",
};

export const Badge = React.memo(
  ({ children, variant = "emerald", pulse = false, icon: Icon, className }) => {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 border px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-2xs",
          badgeVariants[variant],
          className,
        )}
      >
        {pulse && (
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                badgeDotColors[variant],
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                badgeDotColors[variant],
              )}
            />
          </span>
        )}
        {Icon && <Icon size={11} />}
        <span>{children}</span>
      </span>
    );
  },
);
Badge.displayName = "Badge";

// 9. MODAL COMPONENT
export const Modal = React.memo(
  ({ isOpen, onClose, title, children, className }) => {
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose?.();
      };
      if (isOpen) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
      }
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto",
            className,
          )}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-all active:scale-95 cursor-pointer z-10"
          >
            <X size={16} />
          </button>

          {title && (
            <h2 className="text-xl font-black text-slate-900 mb-4 pr-8">
              {title}
            </h2>
          )}

          {children}
        </div>
      </div>
    );
  },
);
Modal.displayName = "Modal";

 
// 11. LOADER COMPONENT
export const Loader = React.memo(
  ({ label = "Loading...", fullScreen = false, className }) => {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center p-8 gap-3 text-slate-500",
          fullScreen && "min-h-screen bg-slate-50/70",
          className,
        )}
      >
        <Loader2 size={28} className="animate-spin text-emerald-600" />
        {label && <p className="text-xs font-bold tracking-wide">{label}</p>}
      </div>
    );
  },
);
Loader.displayName = "Loader";

// 12. EMPTY STATE COMPONENT
export const EmptyState = React.memo(
  ({
    icon: Icon = SlidersHorizontal,
    title = "No Match Found",
    description = "There are no items matching your criteria.",
    actionLabel = "Reset Filters",
    onAction,
  }) => {
    return (
      <div className="text-center py-12 px-4 bg-white border border-dashed border-slate-300 rounded-2xl max-w-sm mx-auto shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-3 text-emerald-600">
          <Icon size={20} />
        </div>
        <h3 className="font-black text-slate-800 text-base">{title}</h3>
        <p className="text-xs text-slate-500 font-medium mt-1">{description}</p>
        {actionLabel && onAction && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onAction}
            className="mt-4"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    );
  },
);
EmptyState.displayName = "EmptyState";

// 13. PAGINATION COMPONENT
export const Pagination = React.memo(
  ({ currentPage = 1, totalPages = 1, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-4 mt-6">
        <span className="text-xs font-bold text-slate-500">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            leftIcon={ChevronLeft}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            rightIcon={ChevronRight}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
);
Pagination.displayName = "Pagination";

// 15. PRICE CARD COMPONENT
export const PriceCard = React.memo(({ pricePerHour, pricePerDay }) => {
  return (
    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between my-3">
      <div>
        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">
          Hourly Rate
        </span>
        <span className="text-xs font-black text-emerald-600 block mt-0.5">
          ₹{Number(pricePerHour || 0).toLocaleString("en-IN")}
        </span>
      </div>

      <div className="h-6 w-[1px] bg-slate-200" />

      <div className="text-right">
        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">
          Daily Rate
        </span>
        <span className="text-sm font-black text-slate-900 block mt-0.5">
          ₹{Number(pricePerDay || 0).toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
});
PriceCard.displayName = "PriceCard";

// 16. FILTER PANEL COMPONENT
export const FilterPanel = React.memo(
  ({
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    maxPrice,
    setMaxPrice,
    carTypes = [],
    isFilterActive,
    handleResetFilters,
  }) => {
    return (
      <Card className="p-5 mb-8">
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-2">
            <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
              <SlidersHorizontal size={13} />
            </div>
            Filter Panel
          </span>

          {isFilterActive && (
            <Button
              variant="danger"
              size="sm"
              onClick={handleResetFilters}
              leftIcon={RotateCcw}
            >
              Clear Filters
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div className="md:col-span-4">
            <Input
              label="Search Vehicles"
              placeholder="Innova, Swift, Fortuner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={Search}
            />
          </div>

          <div className="md:col-span-4">
            <Select
              label="Vehicle Classification"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              options={carTypes}
              leftIcon={Car}
              placeholder={null}
            />
          </div>

          <div className="md:col-span-4">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                Max Daily Budget
              </label>
              <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                ₹{Number(maxPrice).toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="50000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
              <span>Min: ₹100</span>
              <span>Max: ₹50,000</span>
            </div>
          </div>
        </div>
      </Card>
    );
  },
);
FilterPanel.displayName = "FilterPanel";
