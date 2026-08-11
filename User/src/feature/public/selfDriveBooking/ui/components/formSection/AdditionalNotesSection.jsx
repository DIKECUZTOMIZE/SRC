/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import {
  MessageSquareText,
  Baby,
  PhoneCall,
  Luggage,
  ShieldAlert,
  Check,
} from "lucide-react";
import { additionalNotesToken } from "../../../../../../shared/styles";
import { TextareaField } from "../../../../../../shared/components/ui/Form";

const MAX_CHAR_LIMIT = 300;

// Quick suggestion shortcuts for fast user input
const QUICK_NOTES = [
  { id: "call", label: "Call on arrival", icon: PhoneCall },
  { id: "seat", label: "Child seat required", icon: Baby },
  { id: "luggage", label: "Extra luggage space", icon: Luggage },
  { id: "gate", label: "Hotel gate pickup", icon: ShieldAlert },
];

const AdditionalNotesSection = () => {
  const { setValue, watch } = useFormContext() || {};
  const currentNotes = watch ? watch("notes") || "" : "";

  // Toggle quick note chip (Add or Remove if already present)
  const handleToggleQuickNote = useCallback(
    (noteLabel) => {
      if (!setValue) return;

      let updatedNotesArray = currentNotes
        ? currentNotes
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];

      const exists = updatedNotesArray.includes(noteLabel);

      if (exists) {
        // Remove item if already present
        updatedNotesArray = updatedNotesArray.filter(
          (item) => item !== noteLabel,
        );
      } else {
        // Append item
        updatedNotesArray.push(noteLabel);
      }

      const nextText = updatedNotesArray.join(", ");

      if (nextText.length <= MAX_CHAR_LIMIT) {
        setValue("notes", nextText, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    },
    [currentNotes, setValue],
  );

  const charCount = currentNotes.length;
  const isNearLimit = charCount >= MAX_CHAR_LIMIT - 20;

  return (
    <div className={additionalNotesToken.section}>
      {/* Visual Header with Icon */}
      <div className={additionalNotesToken.header}>
        <div className={additionalNotesToken.iconWrapper}>
          <MessageSquareText size={18} />
        </div>
        <div>
          <h3 className={additionalNotesToken.title}>Additional Notes</h3>
          <p className={additionalNotesToken.description}>
            Any special requests or driver instructions.
          </p>
        </div>
      </div>

      {/* Main Textarea Input */}
      <div className="space-y-2">
        <TextareaField
          name="notes"
          label="Special Instructions"
          placeholder="Example: Call me on arrival, carry a child seat, extra luggage, hotel gate pickup, etc."
          rows={3}
          maxLength={MAX_CHAR_LIMIT}
        />

        {/* Character Count Indicator */}
        <div
          className={`${additionalNotesToken.charCounter} ${
            isNearLimit ? "text-amber-600 font-semibold" : ""
          }`}
        >
          {charCount} / {MAX_CHAR_LIMIT} characters
        </div>
      </div>
    </div>
  );
};

AdditionalNotesSection.displayName = "AdditionalNotesSection";

export default React.memo(AdditionalNotesSection);
