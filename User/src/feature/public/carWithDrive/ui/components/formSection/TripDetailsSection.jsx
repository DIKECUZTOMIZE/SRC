import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormSection,
  SelectField,
  DateField,
  InputField,
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
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const TripDetailsSection = React.memo(() => {
  const { watch } = useFormContext();

  const serviceType = watch("serviceType");
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

        {/* Pickup Address */}
        <InputField
          name="pickupLocation"
          label="Pickup Address"
          placeholder="Enter pickup location"
          required
        />

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
              className="px-3 py-1 mb-3 rounded bg-blue-600 text-white text-sm"
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
                    You can book an hourly rental for a minimum of{" "}
                    <strong>1 hour</strong> and a maximum of{" "}
                    <strong>6 hours</strong>.
                  </>
                ) : (
                  <>
                    আপুনি নূন্যতম <strong>১ ঘণ্টা</strong> আৰু সৰ্বাধিক{" "}
                    <strong>৬ ঘণ্টা</strong>লৈকে ঘণ্টা ভিত্তিক গাড়ী বুক কৰিব
                    পাৰে।
                  </>
                )}
              </p>

              <p>
                •{" "}
                {language === "en" ? (
                  <>
                    A grace period of up to <strong>30 minutes</strong> is
                    allowed after your booked duration.
                  </>
                ) : (
                  <>
                    বুক কৰা সময় শেষ হোৱাৰ পিছত <strong>৩০ মিনিট</strong>{" "}
                    পৰ্যন্ত Grace Time দিয়া হ'ব।
                  </>
                )}
              </p>

              <p>
                •{" "}
                {language === "en" ? (
                  <>
                    If the trip exceeds the 30-minute grace period, extra
                    charges may apply.
                  </>
                ) : (
                  <>
                    যদি ৩০ মিনিটতকৈ অধিক সময় লাগে, তেন্তে অতিৰিক্ত ভাড়া
                    প্ৰযোজ্য হ'ব পাৰে।
                  </>
                )}
              </p>

              <p>
                •{" "}
                {language === "en" ? (
                  <>
                    If the total trip duration exceeds <strong>7 hours</strong>,
                    the booking will automatically be converted to a{" "}
                    <strong>Full-Day Rental</strong>.
                  </>
                ) : (
                  <>
                    যদি মুঠ যাত্ৰাৰ সময় <strong>৭ ঘণ্টাতকৈ বেছি</strong> হয়,
                    তেন্তে বুকিং স্বয়ংক্ৰিয়ভাৱে{" "}
                    <strong>Full-Day Rental</strong> হিচাপে গণনা কৰা হ'ব।
                  </>
                )}
              </p>

              {/* <p>
                •{" "}
                {language === "en" ? (
                  <>
                    Rental time starts when the driver reports at your pickup
                    location.
                  </>
                ) : (
                  <>
                    ড্ৰাইভাৰ আপোনাৰ Pickup Location-ত উপস্থিত হোৱাৰ সময়ৰ পৰা
                    ভাড়াৰ সময় গণনা আৰম্ভ হ'ব।
                  </>
                )}
              </p> */}
            </div>
          </div>
        )}

        {/* Daily Notice */}
        {/* {serviceType === "daily" && (
          <div className={tripDetailsToken.noticeCard}>
            <h4 className={tripDetailsToken.noticeTitle}>
              Daily Rental Information
            </h4>

            <p className={tripDetailsToken.noticeText}>
              • Daily rental is charged on a per-day basis.
              <br />
              • Extra days and extra kilometres will be charged separately.
            </p>
          </div>
        )} */}

        {/* Booking Information */}
        {/* <div className={tripDetailsToken.routeCard}>
          <h4 className={tripDetailsToken.routeTitle}>
            Booking Information
          </h4>

          <p className={tripDetailsToken.routeText}>
            • Pickup time starts when the driver reports at your pickup
            location.
            <br />
            • Your booking will be confirmed after our team accepts the request.
            <br />
            • Driver details will be shared after booking confirmation.
            <br />
            • Route can be customized during the trip if applicable.
          </p>
        </div> */}
      </div>
    </FormSection>
  );
});

TripDetailsSection.displayName = "TripDetailsSection";

export default React.memo(TripDetailsSection);
