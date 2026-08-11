import React from "react";
import { useFormContext } from "react-hook-form";

import { Car, CreditCard, Tag, Sparkles } from "lucide-react";
import Card from "../../../../../../shared/components/ui/Card";
import priceSummaryToken from "../../../../../../shared/styles/priceSummaryToken";

const PriceSummaryCard = React.memo(({ vehicle }) => {
  const { watch } = useFormContext();
  const serviceType = watch("serviceType");
  const paymentMethod = watch("paymentMethod");
  const deliveryType = watch("deliveryType");
  const deliveryKm = watch("deliveryKm");
  const hours = watch("hours");
  const days = watch("days");
  const getDeliveryCharge = (distance) => {
    switch (distance) {
      case "0-3":
        return 0;
      case "3-5":
        return 300;
      case "5-10":
        return 500;
      case "10+":
        return 1000;
      default:
        return 0;
    }
  };

  const deliveryCharge =
    deliveryType === "delivery" ? getDeliveryCharge(deliveryKm) : 0;
  const vehicleName = vehicle
    ? `${vehicle.brand || ""} ${vehicle.model || ""}`.trim()
    : "Standard Vehicle";

  const baseFare =
    serviceType === "hourly"
      ? (vehicle?.pricePerHour || 0) * (Number(hours) || 1)
      : (vehicle?.pricePerDay || 0) * (Number(days) || 1);
 
  const totalPrice = baseFare + deliveryCharge;
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
          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Car size={15} />
              Vehicle
            </span>

            <span className={priceSummaryToken.value}>{vehicleName}</span>
          </div>

          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>
              <Tag size={15} />
              Service
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
              Payment
            </span>

            <span className={priceSummaryToken.value}>
              {paymentMethod ? paymentMethod.toUpperCase() : "-"}
            </span>
          </div>

          <hr className={priceSummaryToken.divider} />

          <div className={priceSummaryToken.row}>
            <span className={priceSummaryToken.label}>Base Fare</span>

            <span className={priceSummaryToken.value}>₹{baseFare}</span>
          </div>

          {deliveryType === "delivery" && (
            <div className={priceSummaryToken.row}>
              <span className={priceSummaryToken.label}>Delivery Charge</span>

              <span className={priceSummaryToken.value}>₹{deliveryCharge}</span>
            </div>
          )}

          <hr className={priceSummaryToken.divider} />

          <div className={priceSummaryToken.totalRow}>
            <span className={priceSummaryToken.totalLabel}>Total Price</span>

            <span className={priceSummaryToken.totalPrice}>₹{totalPrice}</span>
          </div>

          <hr className={priceSummaryToken.divider} />
        </div>
      </Card.Body>
    </Card>
  );
});

PriceSummaryCard.displayName = "PriceSummaryCard";

export default React.memo(PriceSummaryCard);
