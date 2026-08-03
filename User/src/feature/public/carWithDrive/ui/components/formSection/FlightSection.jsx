import React from "react";
import { FormSection, InputField, TimeField } from "../../../../../../shared/components/ui/Form";
 

const FlightSection = React.memo(() => {
  return (
    <FormSection
    

    
      title="Flight Information"
      description="Provide your flight details for smooth pickup or drop."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          name="flightNumber"
          label="Flight Number"
          placeholder="e.g. AI729"
        />

        <InputField
          name="airline"
          label="Airline"
          placeholder="e.g. Air India"
        />

        <InputField
          name="terminal"
          label="Terminal"
          placeholder="e.g. T1 / T2"
        />

        <TimeField
          name="flightTime"
          label="Flight Arrival / Departure Time"
        />
      </div>
    </FormSection>
  );
});

FlightSection.displayName = "FlightSection";

export default React.memo(FlightSection);