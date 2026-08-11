import React from "react";
import {
  FormSection,
  InputField,
  SelectField,
} from "../../../../../../shared/components/ui/Form";

const CustomerSectionSection = React.memo(() => {
  return (
    <FormSection
      title="Customer Details"
      description="Provide your contact details for booking confirmation."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />

        <InputField
          name="mobile"
          label="Mobile Number"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          required
        />

        <InputField
          name="whatsapp"
          label="WhatsApp Number"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
        />

        <InputField
          name="email"
          label="Email Address (Optional)"
          type="email"
          placeholder="example@email.com"
        />
      </div>
    </FormSection>
  );
});

CustomerSectionSection.displayName = "CustomerSectionSection";

export default React.memo(CustomerSectionSection);
