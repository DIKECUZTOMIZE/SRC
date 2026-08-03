import React from "react";

import {
  FormSection,
  SelectField,
} from "../../../../../../shared/components/ui/Form";

const PaymentSection = React.memo(() => {
  return (
    <FormSection
      title="Payment Method"
      description="Choose your preferred payment method."
    >
      <SelectField
        name="paymentMethod"
        label="Payment Method"
        required
        options={[
          {
            label: "Cash ",
            value: "cash",
          },
          {
            label: "Online Payment",
            value: "online",
          },
        ]}
      />
    </FormSection>
  );
});

PaymentSection.displayName = "PaymentSection";

export default React.memo(PaymentSection);