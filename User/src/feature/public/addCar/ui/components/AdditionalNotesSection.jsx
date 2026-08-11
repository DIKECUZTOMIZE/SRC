import React, { useState } from "react";
import { FileText, Info, ChevronDown, ChevronUp } from "lucide-react";

import {
  FormSection,
  TextareaField,
} from "../../../../../shared/components/ui/Form";

import { additionalNotesToken } from "../../../../../shared/styles";


const AdditionalNotesSection = React.memo(() => {

  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);


  const isAssamese = lang === "as";


  return (
    <FormSection
      title={
        isAssamese
          ? "অতিৰিক্ত তথ্য"
          : "Additional Information"
      }

      description={
        isAssamese
          ? "আপোনাৰ বাহন বা সেৱাৰ বিষয়ে অতিৰিক্ত তথ্য দিয়ক (ঐচ্ছিক)।"
          : "Share any extra details about your vehicle or service (optional)."
      }
    >

      <div className={additionalNotesToken.wrapper}>


        {/* Notes Field */}
        <TextareaField

          name="notes"

          label={
            isAssamese
              ? "অতিৰিক্ত মন্তব্য"
              : "Additional Notes"
          }

          placeholder={
            isAssamese
              ? `উদাহৰণ:
• বাহনৰ অৱস্থা
• ড্ৰাইভাৰ উপলব্ধ নে নাই
• AC / Non-AC
• পাৰমিট তথ্য
• বিশেষ সুবিধা`
              : `Example:
• Vehicle condition
• Driver available or not
• AC / Non-AC
• Commercial permit details
• Special features`
          }

          rows={4}

          icon={
            <FileText
              className={additionalNotesToken.icon}
            />
          }

        />



        {/* Note Card */}

        <div className={additionalNotesToken.noteCard}>


          <div className={additionalNotesToken.noteHeader}>


            {/* Title */}

            <button
              type="button"
              onClick={() =>
                setIsOpen((prev) => !prev)
              }
              className="flex items-center gap-2"
            >

              <Info
                className={additionalNotesToken.noteIcon}
              />

              <span
                className={additionalNotesToken.noteTitle}
              >
                {isAssamese
                  ? "মন কৰিবলগীয়া"
                  : "Note"}
              </span>

            </button>



            {/* Actions */}

            <div className="flex items-center gap-2">


              {/* Language */}

              <div
                className={
                  additionalNotesToken.langButtonGroup
                }
              >

                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`
                    ${additionalNotesToken.langBtn}
                    ${
                      lang === "en"
                        ? additionalNotesToken.activeLangBtn
                        : additionalNotesToken.inactiveLangBtn
                    }
                  `}
                >
                  EN
                </button>


                <button
                  type="button"
                  onClick={() => setLang("as")}
                  className={`
                    ${additionalNotesToken.langBtn}
                    ${
                      lang === "as"
                        ? additionalNotesToken.activeLangBtn
                        : additionalNotesToken.inactiveLangBtn
                    }
                  `}
                >
                  অস
                </button>

              </div>



              {/* Arrow */}

              <button
                type="button"
                onClick={() =>
                  setIsOpen((prev) => !prev)
                }
              >

                {isOpen ? (

                  <ChevronUp
                    className="h-4 w-4 text-slate-500"
                  />

                ) : (

                  <ChevronDown
                    className="h-4 w-4 text-slate-500"
                  />

                )}

              </button>


            </div>


          </div>




          {/* Content */}

          {isOpen && (

            <p className={additionalNotesToken.noteBody}>

              {isAssamese

                ? "এই অংশটো ঐচ্ছিক। অতিৰিক্ত তথ্য দিলে আমাৰ দলটোৱে আপোনাৰ বাহন সোনকালে পৰীক্ষা কৰিব পাৰিব।"

                : "This section is optional. Additional information helps our team verify your vehicle faster."

              }

            </p>

          )}


        </div>


      </div>


    </FormSection>
  );

});


AdditionalNotesSection.displayName =
  "AdditionalNotesSection";


export default AdditionalNotesSection;