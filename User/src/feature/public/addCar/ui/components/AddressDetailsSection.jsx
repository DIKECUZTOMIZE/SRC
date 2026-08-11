import React, { useState } from "react";
import {
  FormSection,
  InputField,
  SelectField,
} from "../../../../../shared/components/ui/Form";


const DISTRICT_OPTIONS = [
  { label: "Kamrup Metro", value: "kamrup-metro" },
  { label: "Kamrup", value: "kamrup" },
  { label: "Nalbari", value: "nalbari" },
  { label: "Barpeta", value: "barpeta" },
  { label: "Nagaon", value: "nagaon" },
  { label: "Dibrugarh", value: "dibrugarh" },
  { label: "Jorhat", value: "jorhat" },
  { label: "Golaghat", value: "golaghat" },
  { label: "Tinsukia", value: "tinsukia" },
  { label: "Sonitpur", value: "sonitpur" },
];


const AddressDetailsSection = React.memo(() => {

  const [language, setLanguage] = useState("en");


  return (

    <FormSection
      title="Address Details"
      description="Provide your current address for vehicle verification."
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


        <InputField
          name="address.fullAddress"
          label="Full Address"
          placeholder="House No, Road, Village/Town"
          required
        />


        <InputField
          name="address.landmark"
          label="Landmark"
          placeholder="Nearby landmark"
        />


        <InputField
          name="address.state"
          label="State"
          disabled
        />


        <SelectField
          name="address.district"
          label="District"
          required
          options={DISTRICT_OPTIONS}
        />


        <InputField
          name="address.policeStation"
          label="Police Station"
          placeholder="Nearest Police Station"
          required
        />


        <InputField
          name="address.pinCode"
          label="PIN Code"
          type="number"
          placeholder="781001"
          required
        />


      </div>



      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">


        <div className="flex items-center justify-between">


          <h4 className="font-semibold text-slate-900">
            {language === "en"
              ? "Address Verification"
              : "ঠিকনা পৰীক্ষণ"}
          </h4>



          <button
            type="button"
            onClick={() =>
              setLanguage((prev) =>
                prev === "en" ? "as" : "en"
              )
            }
            className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold hover:bg-slate-100"
          >
            {language === "en"
              ? "অসমীয়া"
              : "English"}
          </button>


        </div>



        <p className="mt-2 text-sm text-slate-600">

          {language === "en"
            ? "This address will only be used for vehicle verification and partner communication. It will not be displayed publicly on the website."
            : "এই ঠিকনাটো কেৱল বাহন পৰীক্ষণ আৰু অংশীদাৰ যোগাযোগৰ বাবে ব্যৱহাৰ কৰা হ'ব। এইটো ৱেবছাইটত ৰাজহুৱাভাৱে দেখুওৱা নহ'ব।"}

        </p>


      </div>


    </FormSection>

  );

});


AddressDetailsSection.displayName =
  "AddressDetailsSection";


export default AddressDetailsSection;