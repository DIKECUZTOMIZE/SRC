import React from "react";
import {
  Form,
  FormActions,
  SubmitButton,
} from "../../../../../shared/components/ui/Form";
import TripDetailsSection from "./formSection/TripDetailsSection";
import AddressSection from "./formSection/AddressSection";
import PriceSummaryCard from "./formSection/PriceSummaryCard";
import CustomerSectionSection from "./formSection/CustomerSectionSection";
import PaymentSection from "./formSection/PaymentSection";
import { Button } from "../../../../../shared/components/ui";
import useCarWithDriverBooking from "../../hook/useCarWithDriverBooking";

const CarWithBookingForm = ({ vehicle, onClose }) => {
  const methods = useCarWithDriverBooking(vehicle);

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

export default React.memo(CarWithBookingForm);
