import React from "react";
import { BadgeIndianRupee, Sparkles,CircleCheckBig ,XCircle} from "lucide-react";

import { vehicleCardToken } from "../../../../../shared/styles";

const WeddingCarService = ({
  pricePerDay,
  decorationPrice,
  decorationName,
  description,
}) => {
  const services = [
    {
      label: "Car Price ",
      price: pricePerDay,
      unit: "/day",
      icon: BadgeIndianRupee,
    },
    {
      label: decorationName || "Decoration",
      price: decorationPrice,
      unit: "",
      icon: Sparkles,
    },
  ];

  return (
    <div className={vehicleCardToken.serviceSection}>
      <h4 className={vehicleCardToken.serviceTitle}>Wedding Service</h4>

      {services.map((service) => {
        const Icon = service.icon;

        const hasPrice =
          service.price !== undefined &&
          service.price !== null &&
          service.price !== "" &&
          Number(service.price) > 0;

        if (!hasPrice) return null;

        return (
          <>
            <div key={service.label} className={vehicleCardToken.serviceRow}>
              <div className="flex items-center gap-2">
                <CircleCheckBig size={14} className={vehicleCardToken.specIcon} />

                <span className={vehicleCardToken.serviceLabel}>
                  Select Car
                </span>
              </div>
            </div>
            <div key={service.label} className={vehicleCardToken.serviceRow}>
              <div className="flex items-center gap-2">
                <Icon size={14} className={vehicleCardToken.specIcon} />

                <span className={vehicleCardToken.serviceLabel}>
                  {service.label}
                </span>
              </div>

              <span className={vehicleCardToken.serviceValue}>
                ₹{Number(service.price).toLocaleString("en-IN")}
                {service.unit}
              </span>
            </div>

            <div key={service.label} className={vehicleCardToken.serviceRow}>
              <div className="flex items-center gap-2">
                <XCircle size={14} className={vehicleCardToken.specIcon} />

                <span className={vehicleCardToken.serviceLabel}>
                  Not Include Decorate Price
                </span>
              </div>
            </div>
          </>
        );
      })}

      {description && (
        <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
};

export default React.memo(WeddingCarService);
