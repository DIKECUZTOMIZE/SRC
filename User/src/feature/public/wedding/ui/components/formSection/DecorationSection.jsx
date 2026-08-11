import React from "react";
import { useFormContext } from "react-hook-form";

import {
  FormSection,
  SelectField,
  InputField,
  TextareaField, // Integrated Textarea if available in your UI library
} from "../../../../../../shared/components/ui/Form";

const DECORATION_OPTIONS = [
  { label: "Flower Decoration", value: "flower" },
  { label: "Royal Decoration", value: "royal" },
  { label: "Simple Decoration", value: "simple" },
  { label: "Custom Decoration", value: "custom" },
];

const DecorationSection = React.memo(({vehicle}) => {
  const { watch } = useFormContext();
  const decorationType = watch("decorationType");
  const decorationOptions = vehicle?.decorationType
    ? [
        {
          label: `${vehicle.decorationName} - ₹${vehicle.decorationPrice}`,
          value: vehicle.decorationPrice,
        },
      ]
    : [];

  return (
    <FormSection
      title="Decoration Details"
      description="Select decoration preferences and specify event details."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* Event Type */}
        <InputField
          name="eventType"
          label="Event Type"
          placeholder="e.g., Wedding, Birthday, Anniversary"
          required
        />

        {/* Decoration Type */}
        <SelectField
          name="decorationPrice"
          label="Decoration Price"
          required
          options={decorationOptions}
        />

        {/* Conditional Custom Image Upload (Full Width Span) */}
        {decorationType === "custom" && (
          <div className="md:col-span-2 animate-in fade-in-50 duration-200">
            <InputField
              name="decorationImages"
              label="Upload Reference Images"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/webp"
              helperText="Upload reference photos (PNG, JPG, WEBP)"
            />
          </div>
        )}

        {/* Special Requirements Note (Full Width Span) */}
        <div className="md:col-span-2">
          {/* Agar aapke Form components mein TextareaField hai toh usko use karein, warna InputField work karega */}
          <InputField
            name="decorationNote"
            label="Special Requirements"
            placeholder="Mention color theme, specific flower types, or additional preferences..."
          />
        </div>
      </div>
    </FormSection>
  );
});

DecorationSection.displayName = "DecorationSection";

export default DecorationSection;
