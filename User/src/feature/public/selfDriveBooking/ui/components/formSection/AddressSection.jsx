import React from "react";
import { FormSection, InputField, SelectField, TextareaField } from "../../../../../../shared/components/ui/Form";
 

const AddressSection = React.memo(() => {
  return (
 <FormSection
  title="Address Details"
  description="Provide your complete pickup or destination address."
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <InputField
      name="fullAddress"
      label="Full Address"
      placeholder="House No, Street, Area"
      required
    />

    <InputField
      name="landmark"
      label="Landmark"
      placeholder="Nearby landmark (Optional)"
    />

    <InputField
      name="district"
      label="District"
      placeholder="Enter district"
      required
    />

    <InputField
      name="city"
      label="City / Town / Village"
      placeholder="Enter city or village"
      required
    />

    <InputField
      name="pincode"
      label="PIN Code"
      placeholder="781001"
      type="text"
      required
    />
   <InputField
      name="policeStation"
      label="Police Station"
      placeholder="Enter Police Station"
      required
    />
    <SelectField
      name="state"
      label="State"
      required
      options={[
        {
          label: "Assam",
          value: "assam",
        },
      ]}
    />
  </div>
</FormSection>
  );
});

AddressSection.displayName = "AddressSection";

export default AddressSection;
