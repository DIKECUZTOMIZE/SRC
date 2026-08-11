import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import { Car, CreditCard, Tag, Sparkles } from "lucide-react";
import Card from "../../../../../../shared/components/ui/Card";
import priceSummaryToken from "../../../../../../shared/styles/priceSummaryToken";

const PriceSummaryCard = React.memo(({ vehicle }) => {
  console.log(vehicle);
  const { watch } = useFormContext();
  const serviceType = watch("serviceType");
  const paymentMethod = watch("paymentMethod");

  const hours = watch("hours");
  const days = watch("days");

  const baseFare = useMemo(() => {
    if (!vehicle) return 0;

    if (serviceType === "hourly") {
      return (vehicle.pricePerHour || 0) * (Number(hours) || 1);
    }

    if (serviceType === "daily") {
      return (vehicle.pricePerDay || 0) * (Number(days) || 1);
    }

    return 0;
  }, [vehicle, serviceType, hours, days]);

  const driverCharge = useMemo(() => {
    if (!vehicle) return 0;

    return vehicle.driverChargePerDay || 0; // fixed driver charge
  }, [vehicle]);

  const totalFare = baseFare + driverCharge;

  return (
    <Card className={priceSummaryToken.card}>
      <Card.Header className={priceSummaryToken.header}>
        <div className="flex items-center justify-between">
          <div>
            <Card.Title className={priceSummaryToken.title}>
              Car With Driver Summary
            </Card.Title>

            <Card.Description className={priceSummaryToken.description}>
              Review vehicle, driver charges & total booking fare
            </Card.Description>
          </div>

          <span className="rounded-full bg-emerald-50 p-2 text-emerald-600 border border-emerald-100">
            <Sparkles size={18} />
          </span>
        </div>
      </Card.Header>

      <Card.Body className={priceSummaryToken.body}>
        <div className="space-y-3.5">
          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Car size={15} />
              Vehicle
            </span>

            <span className={priceSummaryToken.value}>
              {vehicle ? `${vehicle.brand} ${vehicle.model}` : "-"}
            </span>
          </div>

          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Tag size={15} />
              Rental Type
            </span>

            <span className={priceSummaryToken.value}>
              {serviceType === "hourly"
                ? "Hourly Rental"
                : serviceType === "daily"
                  ? "Daily Rental"
                  : "-"}
            </span>
          </div>

          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <CreditCard size={15} />
              Payment Mode
            </span>

            <span className={priceSummaryToken.value}>
              {paymentMethod ? paymentMethod.toUpperCase() : "-"}
            </span>
          </div>

          <hr className={priceSummaryToken.divider} />

          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>Car Rental Price</span>

            <span className={priceSummaryToken.value}>₹{baseFare}</span>
          </div>

          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>Driver Fixed Charge</span>

            <span className={priceSummaryToken.value}>₹{driverCharge}</span>
          </div>

          <hr className={priceSummaryToken.divider} />

          <div className={priceSummaryToken.totalRow}>
            <span className={priceSummaryToken.totalLabel}>Final Total</span>

            <span className={priceSummaryToken.totalPrice}>₹{totalFare}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
});

PriceSummaryCard.displayName = "PriceSummaryCard";

export default React.memo(PriceSummaryCard);
