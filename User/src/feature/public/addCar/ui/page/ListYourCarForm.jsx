import React from "react";
import { ShieldCheck, CarFront, Sparkles } from "lucide-react";

import useListYourCar from "../../hook/useListYourCar";
import OwnerDetailsSection from "../components/OwnerDetailsSection";
import VehicleDetailsSection from "../components/VehicleDetailsSection";
  
import AddressDetailsSection from "../components/AddressDetailsSection";
import VehicleImagesSection from "../components/VehicleImagesSection";
import AdditionalNotesSection from "../components/AdditionalNotesSection";
import VerificationNoticeCard from "../components/VerificationNoticeCard";
import TermsSection from "../components/TermsSection";

import {
  Form,
  FormActions,
  SubmitButton,
} from "../../../../../shared/components/ui/Form";
import Button from "../../../../../shared/components/ui/Button";
import { listYourCarToken } from "../../../../../shared/styles";
import ServiceDetailsSection from "../components/ServiceDetailsSection";
import VehicleListingProcess from "../components/VehicleListingProcess";

const ListYourCarForm = ({ onClose }) => {
  const methods = useListYourCar();

  return (
    <Form
      methods={methods}
      onSubmit={methods.onSubmit}
      className={listYourCarToken.container}
    >
      {/* Form Hero Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border,#e2e8f0)]">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-primary,#0f172a)] flex items-center gap-2.5">
            <CarFront size={24} className="text-[var(--color-primary)]" />
            List Your Vehicle Form
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--color-text-secondary,#475569)]">
            Fill in the details below to publish your vehicle on our rental
            fleet network.
          </p>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-[var(--radius-sm,6px)] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 text-xs font-semibold border border-emerald-500/20">
          <ShieldCheck size={16} /> Fast Verification
        </span>
      </div>

      {/* Main Sections Body */}
      <div className={listYourCarToken.sectionSpacing}>

        <VehicleListingProcess/>
        {/* Rental Service Details */}
        <ServiceDetailsSection />

        {/* Owner Details */}
        <OwnerDetailsSection />

        {/* Vehicle Specifications */}
        <VehicleDetailsSection />

        {/* Pickup & Registered Address */}
        <AddressDetailsSection />

        {/* Gallery / Images */}
        <VehicleImagesSection />

        {/* Additional Custom Requirements */}
        <AdditionalNotesSection />

        {/* Verification Info Callout */}
        <VerificationNoticeCard />

        {/* Terms & Policy Checkboxes */}
        <TermsSection />
      </div>

      {/* Sticky Bottom Form Action Bar */}
      <div className={listYourCarToken.submitCard}>
        <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--color-text-secondary,#475569)] font-medium">
          <Sparkles size={15} className="text-amber-500 shrink-0" />
          Ensure all details match official vehicle documents.
        </div>

        <FormActions className="w-full sm:w-auto flex items-center justify-end gap-3">
          {onClose && (
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="touch-44 px-5 text-sm"
            >
              Cancel
            </Button>
          )}

          <SubmitButton className="touch-44 px-6 text-sm font-semibold shadow-sm hover:shadow-md">
            Submit Vehicle
          </SubmitButton>
        </FormActions>
      </div>
    </Form>
  );
};

export default React.memo(ListYourCarForm);
