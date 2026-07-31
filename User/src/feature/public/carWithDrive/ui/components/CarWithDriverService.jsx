import React from "react";
import { Clock, CalendarDays } from "lucide-react";

import { vehicleCardToken } from "../../../../../shared/styles";
import { Badge } from "../../../../../shared/components/ui";
 

const CarWithDriverService = ({
  pricePerHour,
  pricePerDay,
  driverChargePerDay,
}) => {
  const services = [
    {
      label: "Per Hour",
      price: pricePerHour,
      //   unit: "/hour",
      icon: Clock,
    },

    {
      label: "Per Day",
      price: pricePerDay,
      //   unit: "/day",
      icon: CalendarDays,
    },
    {
      label: "Driver Charge Day",
      price: driverChargePerDay,
      //   unit: "/day",
      icon: CalendarDays,
    },
  ];

  return (
    <div className={vehicleCardToken.serviceSection}>
      <h4 className={vehicleCardToken.serviceTitle}>Car With Driver</h4>

      {services.map((service) => {
        const Icon = service.icon;
        console.log(service);
        const hasPrice =
          service.price !== undefined &&
          service.price !== null &&
          service.price !== "" &&
          Number(service.price) > 0;

        return (
          <div key={service.label} className={vehicleCardToken.serviceRow}>
            <div className="flex items-center gap-2">
              <Icon size={14} className={vehicleCardToken.specIcon} />

              <span className={vehicleCardToken.serviceLabel}>
                {service.label}
              </span>
            </div>

            {hasPrice ? (
              <span className={vehicleCardToken.serviceValue}>
                ₹{Number(service.price).toLocaleString("en-IN")}
                {service.unit}
              </span>
            ) : (
              <Badge variant="primary" className="text-[10px]">
                Contact
              </Badge>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(CarWithDriverService);
