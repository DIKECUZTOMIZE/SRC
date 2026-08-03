import React from "react";

import useAirportBooking from "../../hook/useAirportBooking";

import TripDetailsSection from "./formSection/TripDetailsSection";
import AddressSection from "./formSection/AddressSection";

import FlightSection from "./formSection/FlightSection";
import AdditionalNotesSection from "./formSection/AdditionalNotesSection";
import PriceSummaryCard from "./formSection/PriceSummaryCard";

import { Button } from "../../../../../shared/components/ui";
import {
  Form,
  FormActions,
  SubmitButton,
} from "../../../../../shared/components/ui/Form";
import CustomerSectionSection from "./formSection/CustomerSectionSection";
import PaymentSection from "./formSection/PaymentSection";

const AirportBookingForm = ({ vehicle, onClose }) => {
  const methods = useAirportBooking(vehicle);

  return (
    <Form methods={methods} onSubmit={methods.onSubmit}>
      <TripDetailsSection vehicle={vehicle} />

      <CustomerSectionSection />

      <AddressSection />
      <PaymentSection />
      <PriceSummaryCard vehicle={vehicle} />

      {/* <AdditionalNotesSection /> */}

      <FormActions>
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <SubmitButton>Confirm Booking</SubmitButton>
      </FormActions>
    </Form>
  );
};

export default React.memo(AirportBookingForm);
