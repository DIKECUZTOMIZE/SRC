import React from "react";
import {
  CalendarDays,
  Clock,
  Fuel,
  Settings,
  Users,
  Snowflake,
} from "lucide-react";
import { vehicleCardToken } from "../../../../../../shared/styles";

const LuxuryCarService = () => {
  const services = [
    // {
    //   label: "Per Day",
    //   value: `₹${Number(pricePerDay || 0).toLocaleString("en-IN")}/day`,
    //   icon: CalendarDays,
    // },
    // {
    //   label: "Per Hour",
    //   value: `₹${Number(pricePerHour || 0).toLocaleString("en-IN")}/hour`,
    //   icon: Clock,
    // },
    // {
    //   label: "Fuel",
    //   value: fuel || "N/A",
    //   icon: Fuel,
    // },
    // {
    //   label: "Transmission",
    //   value: transmission || "N/A",
    //   icon: Settings,
    // },
    // {
    //   label: "Seats",
    //   value: `${seats || 0} Seats`,
    //   icon: Users,
    // },
    // {
    //   label: "Air Conditioning",
    //   value: ac ? "AC" : "Non AC",
    //   icon: Snowflake,
    // },
  ];

  return (
    <div className={vehicleCardToken.serviceSection}>
      {/* <h4 className={vehicleCardToken.serviceTitle}>Luxury Car Details</h4> */}

      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div key={service.label} className={vehicleCardToken.serviceRow}>
            <div className="flex items-center gap-2">
              <Icon size={14} className={vehicleCardToken.specIcon} />

              <span className={vehicleCardToken.serviceLabel}>
                {service.label}
              </span>
            </div>

            <span className={vehicleCardToken.serviceValue}>
              {service.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(LuxuryCarService);
