import React from "react";
import { Plane, MapPin, RotateCcw } from "lucide-react";

import { vehicleCardToken } from "../../../../../shared/styles";

const AirportService = ({ pickupPrice, dropPrice, roundTripPrice }) => {
  const services = [
    {
      label: "Airport Pickup",
      price: pickupPrice,
      icon: Plane,
    },
    {
      label: "Airport Drop",
      price: dropPrice,
      icon: MapPin,
    },
    {
      label: "Round Trip",
      price: roundTripPrice,
      icon: RotateCcw,
    },
  ];

  return (
    <div className={vehicleCardToken.serviceSection}>
      <h4 className={vehicleCardToken.serviceTitle}>
        Airport Service Local Area
      </h4>

      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div key={service.label} className={vehicleCardToken.serviceRow}>
            <div className="flex items-center gap-2">
              <Icon size={15} className={vehicleCardToken.specIcon} />

              <span className={vehicleCardToken.serviceLabel}>
                {service.label}
              </span>
            </div>

            <span className={vehicleCardToken.serviceValue}>
              ₹{Number(service.price || 0).toLocaleString("en-IN")}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(AirportService);
