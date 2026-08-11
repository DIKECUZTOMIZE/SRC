import React from "react";
import { useFormContext } from "react-hook-form";
import { AlertCircle, MapPin } from "lucide-react";

import {
  DateField,
  FormSection,
  InputField,
  SelectField,
} from "../../../../../../shared/components/ui/Form";
import tripDetailsToken from "../../../../../../shared/styles/tripDetailsToken";
 

const DRIVER_OPTIONS = [
  { label: "With Driver", value: "yes" },
  { label: "Without Driver", value: "no" },
];

const DELIVERY_OPTIONS = [
  { label: "Pickup", value: "pickup" },
  { label: "Delivery", value: "delivery" },
];

const PERIOD_OPTIONS = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const DELIVERY_KM_OPTIONS = [
  { label: "0 - 3 KM (Free)", value: "0-3" },
  { label: "3 - 5 KM (₹300)", value: "3-5" },
  { label: "5 - 10 KM (₹500)", value: "5-10" },
  { label: "10+ KM (₹1000)", value: "10+" },
];

const DAY_OPTIONS = Array.from({ length: 30 }, (_, i) => ({
  label: `${i + 1} Day${i > 0 ? "s" : ""}`,
  value: i + 1,
}));

const TripDetailsSection = React.memo(() => {
  const { watch } = useFormContext();

  const driverRequired = watch("driverRequired");
  const deliveryType = watch("deliveryType");
  const pickupLocation = watch("pickupLocation");
  const venue = watch("venue");

  return (
    <FormSection
      title="Trip Details"
      description="Provide your wedding trip and rental details."
    >
      <div className={tripDetailsToken.section}>
        {/* Horizontal Row 1: Driver & Delivery Options */}
        <div className={tripDetailsToken.gridTwoCols}>
          <SelectField
            name="driverRequired"
            label="Driver Option"
            required
            options={DRIVER_OPTIONS}
          />

          {driverRequired === "no" && (
            <SelectField
              name="deliveryType"
              label="Pickup / Delivery"
              required
              options={DELIVERY_OPTIONS}
            />
          )}
        </div>

        {/* Horizontal Row 2: Delivery Details Card */}
        {driverRequired === "no" && deliveryType === "delivery" && (
          <div className={tripDetailsToken.cardContainerTwoCols}>
            <InputField
              name="deliveryAddress"
              label="Delivery Address"
              placeholder="Enter delivery address"
              required
            />

            <SelectField
              name="deliveryKm"
              label="Delivery Distance"
              required
              options={DELIVERY_KM_OPTIONS}
            />
          </div>
        )}

        {/* Horizontal Row 3: With Driver Details Card */}
        {driverRequired === "yes" && (
          <div className={tripDetailsToken.cardContainerThreeCols}>
            <SelectField
              name="driverDays"
              label="Driver Required For"
              required
              options={DAY_OPTIONS}
            />

            <InputField
              name="pickupLocation"
              label="Pickup Location"
              placeholder="Enter pickup location"
              required
            />

            <InputField
              name="venue"
              label="Wedding Venue"
              placeholder="Enter wedding venue"
              required
            />
          </div>
        )}

        {/* Route Banner (When Driver is Selected) */}
        {driverRequired === "yes" && pickupLocation && venue && (
          <div className={tripDetailsToken.routeCard}>
            <div className={tripDetailsToken.routeTitle}>
              <MapPin className="inline h-4 w-4 mr-1.5 text-slate-600" />
              Route Preview
            </div>
            <div className={tripDetailsToken.routeText}>
              Pickup from <span className="font-bold">{pickupLocation}</span> to Venue: <span className="font-bold">{venue}</span>
            </div>
          </div>
        )}

        {/* Horizontal Row 4: Schedule & Time Grid */}
        <div className={tripDetailsToken.gridThreeCols}>
          <SelectField
            name="rentalDays"
            label="Car Required For"
            required
            options={DAY_OPTIONS}
          />

          <DateField
            name="eventDate"
            label="Wedding Date"
            required
          />

          {/* Time Input + Custom AM/PM Select Toggle */}
          <div className={tripDetailsToken.timeWrapper}>
            <div className={tripDetailsToken.timeInputFlex}>
              <InputField
                name="eventTime"
                label="Event Time"
                placeholder="08:30"
                required
              />
            </div>
            <div className="pt-5">
              <SelectField
                name="eventPeriod"
                label=""
                required
                options={PERIOD_OPTIONS}
                className={tripDetailsToken.ampmSelect}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Row 5: Destination & Special Requirement */}
        <div className={tripDetailsToken.gridTwoCols}>
          {driverRequired === "no" && (
            <InputField
              name="destination"
              label="Where Is Going"
              placeholder="Enter destination"
              required
            />
          )}

          <div
            className={
              driverRequired === "no"
                ? tripDetailsToken.singleSpan
                : tripDetailsToken.fullSpan
            }
          >
            <InputField
              name="note"
              label="Special Requirement"
              placeholder="Any special requirement"
            />
          </div>
        </div>

        {/* Important Guidelines Notice Card */}
        <div className={tripDetailsToken.noticeCard}>
          <div className={tripDetailsToken.noticeTitle}>
            <AlertCircle className="h-4 w-4 shrink-0" /> Important Booking Terms
          </div>
          <p className={tripDetailsToken.noticeText}>
            Please ensure dates and timings align with your wedding plan. Extra hourly charges apply if the car rental period exceeds the booked duration.
          </p>
        </div>
      </div>
    </FormSection>
  );
});

TripDetailsSection.displayName = "TripDetailsSection";

export default TripDetailsSection;