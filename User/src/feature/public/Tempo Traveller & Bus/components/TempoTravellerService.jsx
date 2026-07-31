import React from "react";
import { Users, Phone, Route } from "lucide-react";

import { vehicleCardToken } from "../../../../shared/styles";
import { Badge } from "../../../../shared/components/ui";

const TempoTravellerService = ({ description }) => {
  return (
    <div className={vehicleCardToken.serviceSection}>
      <h4 className={vehicleCardToken.serviceTitle}>Tempo Traveller Bus</h4>

      <div className={vehicleCardToken.serviceRow}>
        <div className="flex items-center gap-2">
          <Users size={14} className={vehicleCardToken.specIcon} />

          <span className={vehicleCardToken.serviceLabel}>
            Seating Capacity
          </span>
        </div>

        {/* <span className={vehicleCardToken.serviceValue}>{seats} Seats</span> */}
      </div>

      <div className={vehicleCardToken.serviceRow}>
        <div className="flex items-center gap-2">
          <Route size={14} className={vehicleCardToken.specIcon} />

          <span className={vehicleCardToken.serviceLabel}>Long Journey</span>
        </div>

        {/* <span className={vehicleCardToken.serviceValue}>{seats} Seats</span> */}
      </div>
      <div className={vehicleCardToken.serviceRow}>
        <div className="flex items-center gap-2">
          <Phone size={14} className={vehicleCardToken.specIcon} />

          <span className={vehicleCardToken.serviceLabel}>
            Price Discussion
          </span>
        </div>

        <Badge variant="primary" className="text-[10px]">
          Contact
        </Badge>
      </div>

      {description && (
        <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
};

export default React.memo(TempoTravellerService);
