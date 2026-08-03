import React from "react";
import { Clock, CalendarDays } from "lucide-react";

import { vehicleCardToken } from "../../../../../shared/styles";

const SelfDriveService = ({ pricePerHour, pricePerDay }) => {
  const services = [
    {
      label: "Hourly Rate",
      price: pricePerHour,
      //   unit: "/hour",
      icon: Clock,
    },
    {
      label: "Daily Rate",
      price: pricePerDay,
      //   unit: "/day",
      icon: CalendarDays,
    },
  ];

  return (
    <div className={vehicleCardToken.serviceSection}>
      <h4 className={vehicleCardToken.serviceTitle}>Self Drive Pricing</h4>

      {services.map((service) => {
        const Icon = service.icon;

        const hasPrice =
          service.price !== undefined &&
          service.price !== null &&
          service.price !== "" &&
          Number(service.price) > 0;

        if (!hasPrice) return null;

        return (
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
        );
      })}
    </div>
  );
};

export default React.memo(SelfDriveService);
