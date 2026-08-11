import React from "react";
import { useFormContext } from "react-hook-form";

import { Car, CreditCard, Tag, Sparkles } from "lucide-react";
import Card from "../../../../../../shared/components/ui/Card";
import priceSummaryToken from "../../../../../../shared/styles/priceSummaryToken";

const PriceSummaryCard = React.memo(({ vehicle }) => {
  const { watch } = useFormContext();

 
  const paymentMethod = watch("paymentMethod");
  const deliveryType = watch("deliveryType");
  const deliveryKm = watch("deliveryKm");
  const driverRequired = watch("driverRequired");
  const decorationPrice = Number(watch("decorationPrice")) || 0;
  const rentalDays = Number(watch("rentalDays")) || 1;
  const driverDays = Number(watch("driverDays")) || 1;

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

  const driverCharge =
    driverRequired === "yes"
      ? (vehicle?.driverChargePerDay || 0) * driverDays
      : 0;

  const vehicleName = vehicle
    ? `${vehicle.brand || ""} ${vehicle.model || ""}`.trim()
    : "-";

  const decorationCharge = decorationPrice;

  const baseFare = (vehicle?.pricePerDay || 0) * rentalDays;

  const totalPrice =
    baseFare + driverCharge + decorationCharge + deliveryCharge;

 
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
              {rentalDays} Day Rental
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
            <span className={priceSummaryToken.label}>Base Fare (Car)</span>

            <span className={priceSummaryToken.value}>₹{baseFare}</span>
          </div>

          {driverCharge > 0 && (
            <div className={priceSummaryToken.row}>
              <span className={priceSummaryToken.label}>Driver Charge</span>

              <span className={priceSummaryToken.value}>₹{driverCharge}</span>
            </div>
          )}

          {decorationCharge > 0 && (
            <div className={priceSummaryToken.row}>
              <span className={priceSummaryToken.label}>Decoration Charge</span>

              <span className={priceSummaryToken.value}>
                ₹{decorationCharge}
              </span>
            </div>
          )}

          {deliveryCharge > 0 && (
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
        </div>
      </Card.Body>
    </Card>
  );
});

PriceSummaryCard.displayName = "PriceSummaryCard";

export default React.memo(PriceSummaryCard);
