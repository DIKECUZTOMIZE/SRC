import React  from "react";
import { useFormContext } from "react-hook-form";

import {
  SelectField,
  FormSection,
  DateField,
  InputField,
} from "../../../../../../shared/components/ui/Form";
import tripDetailsToken from "../../../../../../shared/styles/tripDetailsToken";

const AIRPORT_NAME =
  "Lokpriya Gopinath Bordoloi International Airport, Guwahati";

const AIRPORT_OPTIONS = [
  {
    label: AIRPORT_NAME,
    value: "guwahati-airport",
  },
];

const PERIOD_OPTIONS = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const TripDetailsSection = React.memo(() => {
  const { watch } = useFormContext();

  const tripType = watch("tripType");
  const serviceType = watch("serviceType");

  // Dynamic Route Text
  // const routeDisplay = useMemo(() => {
  //   switch (serviceType) {
  //     case "pickup":
  //       return `Your Address → ${AIRPORT_NAME}`;

  //     case "drop":
  //       return `${AIRPORT_NAME} → Your Address`;

  //     case "roundTrip":
  //       return `Your Address → ${AIRPORT_NAME} → Your Address`;

  //     default:
  //       return "Select a service type to view route.";
  //   }
  // }, [serviceType]);
  return (
    <FormSection
      title="Trip Details"
      description="Choose your trip type, service and travel schedule."
    >
      <div className={tripDetailsToken.grid}>
        {/* Trip Type */}
        <SelectField
          name="tripType"
          label="Trip Type"
          required
          options={[
            { label: "Local", value: "local" },
            { label: "Outstation", value: "outstation" },
          ]}
        />

        {/* Service Type */}
        <SelectField
          name="serviceType"
          label="Service Type"
          required
          options={[
            { label: "Pickup (To Airport)", value: "pickup" },
            { label: "Drop (From Airport)", value: "drop" },
            { label: "Round Trip", value: "roundTrip" },
          ]}
        />

        {/* Airport Pickup: Airport -> Address */}
        {serviceType === "pickup" && (
          <>
            <InputField
              name="pickupLocation"
              label="Pickup Address"
              placeholder="Where should we pick you up?"
              required
            />

            <SelectField
              name="airport"
              label="Destination Airport"
              required
              options={AIRPORT_OPTIONS}
            />
          </>
        )}

        {/* Airport Drop: Address -> Airport */}
        {serviceType === "drop" && (
          <>
            <SelectField
              name="airport"
              label="Pickup Airport"
              required
              options={AIRPORT_OPTIONS}
            />

            <InputField
              name="dropLocation"
              label="Destination Address"
              placeholder="Where should we drop you?"
              required
            />
          </>
        )}
        {/* Round Trip */}
        {serviceType === "roundTrip" && (
          <>
            <InputField
              name="pickupLocation"
              label="Pickup Address"
              placeholder="Where should we pick you up?"
              required
            />

            <SelectField
              name="airport"
              label="Airport"
              required
              options={AIRPORT_OPTIONS}
            />

            <InputField
              name="returnDropLocation"
              label="Return Drop Address"
              placeholder="Where should we drop you after returning from the airport?"
              required
            />
          </>
        )}

        {/* Travel Date */}
        <DateField name="travelDate" label="Travel Date" required />

        {/* Travel Time with 12-Hour AM/PM Dropdown */}
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <InputField
              name="travelTime"
              label="Travel Time"
              type="text"
              placeholder="08:30"
              required
            />
          </div>
          <div className="w-28">
            <SelectField
              name="travelPeriod"
              label="AM/PM"
              required
              defaultValue="AM"
              options={PERIOD_OPTIONS}
            />
          </div>
        </div>

        {/* Outstation Fare Notice */}
        {tripType === "outstation" && (
          <div className={tripDetailsToken.noticeCard}>
            <h4 className={tripDetailsToken.noticeTitle}>
              Outstation Fare Notice
            </h4>
            <p className={tripDetailsToken.noticeText}>
              Outstation airport transfers do not have a fixed fare. After you
              submit your booking request, our team will contact you via Call or
              WhatsApp with the final quotation before confirming your booking.
            </p>
          </div>
        )}

        {/* Route Information */}
        {/* <div className={tripDetailsToken.routeCard}>
          <h4 className={tripDetailsToken.routeTitle}>
            Airport Transfer Route
          </h4>
          <p className={tripDetailsToken.routeText}>{routeDisplay}</p>
        </div> */}
      </div>
    </FormSection>
  );
});

TripDetailsSection.displayName = "TripDetailsSection";

export default React.memo(TripDetailsSection);
