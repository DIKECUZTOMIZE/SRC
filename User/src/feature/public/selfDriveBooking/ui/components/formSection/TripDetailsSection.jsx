import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  DateField,
  FormSection,
  InputField,
  SelectField,
} from "../../../../../../shared/components/ui/Form";
import tripDetailsToken from "../../../../../../shared/styles/tripDetailsToken";

const HOUR_OPTIONS = [
  { label: "1 Hour", value: 1 },
  { label: "2 Hours", value: 2 },
  { label: "3 Hours", value: 3 },
  { label: "4 Hours", value: 4 },
  { label: "5 Hours", value: 5 },
  { label: "6 Hours", value: 6 },
];

const DAY_OPTIONS = Array.from({ length: 30 }, (_, i) => ({
  label: `${i + 1} Day${i === 0 ? "" : "s"}`,
  value: i + 1,
}));

const PERIOD_OPTIONS = [
  {
    label: "AM",
    value: "AM",
  },
  {
    label: "PM",
    value: "PM",
  },
];

// Delivery KM Options
const DELIVERY_DISTANCE_OPTIONS = [
  {
    label: "0 - 3 KM (Free)",
    value: "0-3",
  },
  {
    label: "3 - 5 KM (₹300)",
    value: "3-5",
  },
  {
    label: "5 - 10 KM (₹500)",
    value: "5-10",
  },
  {
    label: "10+ KM (₹1000)",
    value: "10+",
  },
];

const TripDetailsSection = React.memo(() => {
  const { watch } = useFormContext();

  const serviceType = watch("serviceType");

  // Your existing delivery option
  const deliveryType = watch("deliveryType");

  const [language, setLanguage] = useState("en");

  return (
    <FormSection
      title="Trip Details"
      description="Choose your rental type and travel schedule."
    >
      <div className={tripDetailsToken.grid}>
        {/* Rental Type */}

        <SelectField
          name="serviceType"
          label="Rental Type"
          required
          options={[
            {
              label: "Hourly Rental",
              value: "hourly",
            },
            {
              label: "Daily Rental",
              value: "daily",
            },
          ]}
        />

        {/* Hourly */}

        {serviceType === "hourly" && (
          <SelectField
            name="hours"
            label="Number of Hours"
            required
            options={HOUR_OPTIONS}
          />
        )}

        {/* Daily */}

        {serviceType === "daily" && (
          <SelectField
            name="days"
            label="Number of Days"
            required
            options={DAY_OPTIONS}
          />
        )}

        {/* Pickup / Delivery Existing Option */}

        <SelectField
          name="deliveryType"
          label="Pickup / Delivery"
          required
          options={[
            {
              label: "Pickup",
              value: "pickup",
            },
            {
              label: "Delivery",
              value: "delivery",
            },
          ]}
        />

        {/* Delivery Fields */}

        {deliveryType === "delivery" && (
          <>
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
              options={DELIVERY_DISTANCE_OPTIONS}
            />
          </>
        )}

        {/* Pickup Date */}

        <DateField name="pickupDate" label="Pickup Date" required />

        {/* Pickup Time */}

        <div className="flex items-end gap-3">
          <div className="flex-1">
            <InputField
              name="pickupTime"
              label="Pickup Time"
              placeholder="08:30"
              required
            />
          </div>

          <div className="w-28">
            <SelectField
              name="pickupPeriod"
              label="AM / PM"
              required
              options={PERIOD_OPTIONS}
            />
          </div>
        </div>

        {/* Destination */}

        <InputField
          name="destination"
          label="Destination"
          placeholder="Where are you going?"
          required
        />

        {/* Hourly Notice */}

        {serviceType === "hourly" && (
          <div className={tripDetailsToken.noticeCard}>
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "as" : "en")}
              className="
                px-3
                py-1
                mb-3
                rounded
                bg-blue-600
                text-white
                text-sm
                "
            >
              {language === "en"
                ? "অসমীয়া ভাষালৈ সলনি কৰক"
                : "Change to English"}
            </button>

            <h4 className={tripDetailsToken.noticeTitle}>
              {language === "en"
                ? "Hourly Rental Information"
                : "ঘণ্টা ভিত্তিক ভাড়াৰ তথ্য"}
            </h4>
            <div className={tripDetailsToken.noticeText}>
              <p>
                •{" "}
                {language === "en" ? (
                  <>
                    Minimum booking <strong>1 hour</strong> and maximum
                    <strong> 6 hours</strong>.
                  </>
                ) : (
                  <>
                    নূন্যতম <strong>১ ঘণ্টা</strong> আৰু সৰ্বাধিক
                    <strong> ৬ ঘণ্টা</strong>লৈকে বুক কৰিব পাৰিব।
                  </>
                )}
              </p>

              <p>
                •{" "}
                {language === "en" ? (
                  <>
                    Grace period up to <strong>30 minutes</strong>.
                  </>
                ) : (
                  <>
                    <strong>৩০ মিনিট</strong> পৰ্যন্ত Grace Time দিয়া হ'ব।
                  </>
                )}
              </p>

              <p>
                •{" "}
                {language === "en"
                  ? "After grace period extra charges apply."
                  : "Grace Time শেষ হোৱাৰ পিছত অতিৰিক্ত ভাড়া প্ৰযোজ্য হ'ব।"}
              </p>

              <p>
                •{" "}
                {language === "en" ? (
                  <>
                    Above <strong>7 hours</strong> converts to Full-Day Rental.
                  </>
                ) : (
                  <>
                    <strong>৭ ঘণ্টাতকৈ বেছি</strong> হ'লে Full-Day Rental হিচাপে
                    গণনা কৰা হ'ব।
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </FormSection>
  );
});

TripDetailsSection.displayName = "TripDetailsSection";

export default TripDetailsSection;
