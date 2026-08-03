import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import {
  Car,
  Route,
  CreditCard,
  Tag,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import Card from "../../../../../../shared/components/ui/Card";
import priceSummaryToken from "../../../../../../shared/styles/priceSummaryToken";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount || 0);
};

const formatServiceLabel = (type) => {
  if (!type) return "-";
  if (type === "roundTrip") return "Round Trip";
  return type.charAt(0).toUpperCase() + type.slice(1);
};

const PriceSummaryCard = React.memo(({ vehicle }) => {
  const formContext = useFormContext();
  const watch = formContext?.watch;

  const tripType = watch ? watch("tripType") : "local";
  const serviceType = watch ? watch("serviceType") : "pickup";
  const paymentMethod = watch ? watch("paymentMethod") : "-";

  // Compute Total Fare dynamically
  const totalFare = useMemo(() => {
    if (tripType !== "local" || !vehicle) return 0;

    switch (serviceType) {
      case "pickup":
        return vehicle?.pickupPrice || 0;
      case "drop":
        return vehicle?.dropPrice || 0;
      case "roundTrip":
        return vehicle?.roundTripPrice || 0;
      default:
        return 0;
    }
  }, [tripType, serviceType, vehicle]);

  const vehicleName = useMemo(() => {
    if (!vehicle) return "Standard Vehicle";
    return `${vehicle.brand || ""} ${vehicle.model || ""}`.trim();
  }, [vehicle]);

  return (
    <Card className={priceSummaryToken.card}>
      <Card.Header className={priceSummaryToken.header}>
        <div className="flex items-center justify-between">
          <div>
            <Card.Title className={priceSummaryToken.title}>
              Booking Summary
            </Card.Title>
            <Card.Description className={priceSummaryToken.description}>
              Review your trip parameters & price details
            </Card.Description>
          </div>
          <span className="rounded-full bg-emerald-50 p-2 text-emerald-600 border border-emerald-100">
            <Sparkles size={18} />
          </span>
        </div>
      </Card.Header>

      <Card.Body className={priceSummaryToken.body}>
        <div className="space-y-3.5">
          {/* Vehicle Info */}
          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Car size={15} className="text-slate-400" />
              Vehicle Selected
            </span>
            <span className={priceSummaryToken.value}>{vehicleName}</span>
          </div>

          {/* Trip Type */}
          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Route size={15} className="text-slate-400" />
              Trip Type
            </span>
            <span className={priceSummaryToken.badge}>
              {tripType || "Local"}
            </span>
          </div>

          {/* Service Type */}
          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Tag size={15} className="text-slate-400" />
              Service
            </span>
            <span className={priceSummaryToken.value}>
              {formatServiceLabel(serviceType)}
            </span>
          </div>

          {/* Payment Method */}
          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <CreditCard size={15} className="text-slate-400" />
              Payment Mode
            </span>
            <span className={priceSummaryToken.value}>
              {paymentMethod ? paymentMethod.toUpperCase() : "-"}
            </span>
          </div>

          <hr className={priceSummaryToken.divider} />

          {/* Fare Summary Logic */}
          {tripType === "local" ? (
            <div>
              <div className={priceSummaryToken.totalRow}>
                <span className={priceSummaryToken.totalLabel}>Total Fare</span>
                <span className={priceSummaryToken.totalPrice}>
                  {formatCurrency(totalFare)}
                </span>
              </div>

              <p className={priceSummaryToken.disclaimer}>
                * Excludes state taxes, parking, and toll fees unless
                specifically detailed in trip terms.
              </p>
            </div>
          ) : (
            <div className={priceSummaryToken.quoteCard}>
              <div className={priceSummaryToken.quoteTitle}>
                <ShieldAlert size={16} className="text-amber-600 shrink-0" />
                Custom Quote Required
              </div>

              <p className={priceSummaryToken.quoteText}>
                Outstation routes are dynamically priced based on exact
                distance, driver allowances, and permits.
              </p>

              <div className={priceSummaryToken.quoteHighlight}>
                Team will contact via Call / WhatsApp with quotation.
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
});

PriceSummaryCard.displayName = "PriceSummaryCard";

export default PriceSummaryCard;
