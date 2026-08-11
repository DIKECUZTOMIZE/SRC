import React from "react";
import {
  Form,
  FormActions,
  SubmitButton,
} from "../../../../../shared/components/ui/Form";

import AddressSection from "./formSection/AddressSection";
import PriceSummaryCard from "./formSection/PriceSummaryCard";
import CustomerSectionSection from "./formSection/CustomerSectionSection";
import PaymentSection from "./formSection/PaymentSection";
import { Button } from "../../../../../shared/components/ui";
import useWeddingBooking from "../../hook/useWeddingBooking";

import TripDetailsSection from "./formSection/TripDetailsSection";
import DecorationSection from "./formSection/DecorationSection";

const WeddingBookingForm = ({ vehicle, onClose }) => {
  const methods = useWeddingBooking(vehicle);

  return (
    <Form methods={methods} onSubmit={methods.onSubmit}>
      <DecorationSection vehicle={vehicle} />
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

export default React.memo(WeddingBookingForm);
