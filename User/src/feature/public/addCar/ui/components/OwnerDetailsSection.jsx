import React from "react";
import { User, Phone, MessageSquare, Mail } from "lucide-react";

import {
  FormSection,
  InputField,
} from "../../../../../shared/components/ui/Form";
import ownerDetailsToken from "../../../../../shared/styles/ownerDetailsToken";
 

const OwnerDetailsSection = React.memo(() => {
  return (
    <FormSection
      title="Owner Details"
      description="Provide contact information for verification and official bookings."
    >
      <div className={ownerDetailsToken.wrapper}>
        <div className={ownerDetailsToken.grid}>
          <InputField
           name="owner.name"
            label="Owner Full Name"
            placeholder="Enter owner's full name"
            required
            icon={<User className={ownerDetailsToken.icon} />}
          />

          <InputField
           name="owner.mobileNumber"
            label="Mobile Number"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
            icon={<Phone className={ownerDetailsToken.icon} />}
          />

          <InputField
            name="owner.whatsappNumber"
            label="WhatsApp Number"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
            icon={<MessageSquare className={ownerDetailsToken.icon} />}
          />

          <InputField
            name="owner.email"
            label="Email Address"
            type="email"
            placeholder="example@email.com"
            icon={<Mail className={ownerDetailsToken.icon} />}
          />
        </div>
      </div>
    </FormSection>
  );
});

OwnerDetailsSection.displayName = "OwnerDetailsSection";

export default OwnerDetailsSection;