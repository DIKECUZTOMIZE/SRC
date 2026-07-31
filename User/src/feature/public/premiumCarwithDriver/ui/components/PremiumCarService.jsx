import React from "react";
import { Clock, CalendarDays, Phone, Tag } from "lucide-react";
import { vehicleCardToken } from "../../../../../shared/styles";
import { Badge } from "../../../../../shared/components/ui";

const PremiumCarService = ({ pricePerDay, pricePerHour, description, features = ["VIP Long Trip", "VIP Long Day"] }) => {
  const services = [
    {
      label: "Day Price",
      price: pricePerDay,
      unit: "/day",
      icon: CalendarDays,
    },
    {
      label: "Hour Price",
      price: pricePerHour,
      unit: "/hour",
      icon: Clock,
    },
  ];

  const hasAnyPrice = services.some(
    (s) => s.price !== undefined && s.price !== null && s.price !== "" && Number(s.price) > 0
  );

  return (
    <div className={vehicleCardToken.serviceSection}>
      <h4 className={vehicleCardToken.serviceTitle}>Premium Service</h4>

      {/* Pricing List */}
      <div className="flex flex-col gap-1 my-1">
        {hasAnyPrice ? (
          services.map((service) => {
            const Icon = service.icon;
            const isValid =
              service.price !== undefined &&
              service.price !== null &&
              service.price !== "" &&
              Number(service.price) > 0;

            if (!isValid) return null;

            return (
              <div key={service.label} className={vehicleCardToken.serviceRow}>
                <div className="flex items-center gap-1.5 min-w-0">
                  <Icon size={13} className={vehicleCardToken.specIcon} />
                  <span className={vehicleCardToken.serviceLabel}>{service.label}</span>
                </div>
                <span className={vehicleCardToken.serviceValue}>
                  ₹{Number(service.price).toLocaleString("en-IN")}
                  <span className="text-[9px] font-normal opacity-80">{service.unit}</span>
                </span>
              </div>
            );
          })
        ) : (
          <div className={vehicleCardToken.serviceRow}>
            <div className="flex items-center gap-1.5 min-w-0">
              <Phone size={13} className={vehicleCardToken.specIcon} />
              <span className={vehicleCardToken.serviceLabel}>Discussion Price</span>
            </div>
            <Badge variant="primary" className="text-[9px] px-1.5 py-0.5 font-bold">
              Contact
            </Badge>
          </div>
        )}
      </div>

      {/* Highlights / Badges Tag Section */}
      {features && features.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1.5 pt-1.5 border-t border-[var(--color-border)]/40">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 rounded-md bg-[var(--color-bg-primary)] px-1.5 py-0.5 text-[9px] font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border)]/80 min-w-0"
            >
              <Tag size={10} className="text-[var(--color-primary)] shrink-0" />
              <span className="truncate">{feature}</span>
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="mt-1.5 text-[10px] sm:text-xs leading-snug text-[var(--color-text-secondary)] line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default React.memo(PremiumCarService);