/* eslint-disable no-unused-vars */
import React from "react";
import { Users, Fuel, Gauge, Check, Repeat, PlaneTakeoff } from "lucide-react";
import { vehicleSummaryToken } from "../../styles";

const VehicleSummary = ({
  prices = [],
  vehicle,
  selected = false,
  onClick,
  note,
}) => {
  if (!vehicle) return null;

  const getImageSource = (src) => {
    if (!src)
      return "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop";
    return src.startsWith("http") ? src : `http://localhost:3000${src}`;
  };

  const formattedPrice = vehicle.pricePerDay
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(vehicle.pricePerDay)
    : "N/A";

  return (
    <div
      onClick={onClick}
      className={`${vehicleSummaryToken.wrapper} ${
        selected
          ? "border-[var(--color-primary)] bg-[var(--color-bg-secondary)]"
          : ""
      }`}
    >
      {/* -------------------------------------------------
          MOBILE LAYOUT (Compact & Touch Friendly Form Card)
         ------------------------------------------------- */}
      <div className={vehicleSummaryToken.mobileContainer}>
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Image */}
          <div className={vehicleSummaryToken.mobileImageWrapper}>
            <img
              src={getImageSource(vehicle.image)}
              alt={vehicle.model}
              className={vehicleSummaryToken.image}
              loading="lazy"
            />

            {vehicle.classification && (
              <span className={vehicleSummaryToken.badge}>
                {vehicle.classification}
              </span>
            )}
          </div>

          {/* Vehicle Info */}
          <div className="flex-1 min-w-0">
            <p className={vehicleSummaryToken.brand}>
              {vehicle.brand || "Vehicle"}
            </p>

            <h3 className={vehicleSummaryToken.title}>{vehicle.model}</h3>

            <p className={vehicleSummaryToken.priceValue}>
              {formattedPrice}
              <span className={vehicleSummaryToken.subtitle}> /day</span>
            </p>
          </div>

          {/* Radio */}
          <div className={vehicleSummaryToken.radioIndicator}>
            <div
              className={`${vehicleSummaryToken.radioDot} ${
                selected ? "opacity-100" : ""
              }`}
            />
          </div>
        </div>

        {/* Specs */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className={vehicleSummaryToken.mobileSpecBadge}>
            <Users size={12} />
            <span>{vehicle.seats || "-"} Seats</span>
          </div>

          <div className={vehicleSummaryToken.mobileSpecBadge}>
            <Fuel size={12} />
            <span>{vehicle.fuel || "-"}</span>
          </div>

          <div className={vehicleSummaryToken.mobileSpecBadge}>
            <Gauge size={12} />
            <span>{vehicle.transmission || "-"}</span>
          </div>
        </div>

        {/* Prices */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-3">
          {prices
            .filter((price) => price?.value)
            .map((price, index) => (
              <div
                key={index}
                className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2"
              >
                <p className="text-[10px] text-slate-500">{price.label}</p>

                <p className="text-sm font-semibold text-sky-700">
                  ₹{price.value}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* -------------------------------------------------
          DESKTOP LAYOUT (Horizontal Form Row)
         ------------------------------------------------- */}
      <div className={vehicleSummaryToken.desktopContainer}>
        {/* Form Selection Radio Indicator */}
        <div className={vehicleSummaryToken.radioIndicator}>
          <div
            className={`${vehicleSummaryToken.radioDot} ${
              selected ? "opacity-100" : ""
            }`}
          />
        </div>

        {/* Thumbnail */}
        <div className={vehicleSummaryToken.desktopImageWrapper}>
          <img
            src={getImageSource(vehicle.image)}
            alt={vehicle.model}
            className={vehicleSummaryToken.image}
            loading="lazy"
          />
          {vehicle.classification && (
            <span className={vehicleSummaryToken.badge}>
              {vehicle.classification}
            </span>
          )}
        </div>

        {/* Vehicle Info */}
        <div className="flex-1 min-w-0">
          <p className={vehicleSummaryToken.brand}>
            {vehicle.brand || "Vehicle"}
          </p>
          <h3 className={vehicleSummaryToken.title}>{vehicle.model}</h3>
          {/* Specs Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 text-[11px] sm:text-xs text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1">
              <Users
                size={12}
                className="text-[var(--color-primary)] shrink-0"
              />
              <span>{vehicle.seats || "-"} Seats</span>
            </span>

            <span className="flex items-center gap-1">
              <Fuel
                size={12}
                className="text-[var(--color-primary)] shrink-0"
              />
              <span>{vehicle.fuel || "-"}</span>
            </span>

            <span className="flex items-center gap-1">
              <Gauge
                size={12}
                className="text-[var(--color-primary)] shrink-0"
              />
              <span>{vehicle.transmission || "-"}</span>
            </span>
          </div>

          {/* Multi-Pricing & Service Badges Row */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2.5 pt-2 border-t border-[var(--color-border)]/50 text-[10px] sm:text-xs font-semibold">
            {prices
              .filter((price) => price?.value)
              .map((price, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-sky-500/10 text-sky-700 px-2 py-0.5 rounded-md border border-sky-500/20"
                >
                  {price.icon && <price.icon size={11} />}
                  <span>
                    {price.label}: ₹{price.value}
                  </span>
                </span>
              ))}
          </div>
        </div>

        {/* Price & Action Status */}
        {/* <div className="text-right shrink-0">
          <span className={vehicleSummaryToken.priceValue}>
            {formattedPrice}
          </span>
          <p className={vehicleSummaryToken.subtitle}>Per Day</p>
        </div> */}
      </div>
      {note && (
        <>
          {/* Mobile */}
          <div className="mt-3 block sm:hidden rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
            <p className="text-[10px] leading-5 text-amber-800">
              <span className="font-semibold">ℹ Outstation Transfers:</span>
              <br />
              {note}
            </p>
          </div>

          {/* Desktop */}
          <div className="mt-3 hidden sm:block rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
            <p className="text-xs leading-6 text-blue-800">
              <span className="font-semibold"> Outstation Transfers:</span>{" "}
              {note}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(VehicleSummary);
