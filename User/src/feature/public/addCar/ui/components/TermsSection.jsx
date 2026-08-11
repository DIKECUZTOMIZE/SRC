import React, { useState } from "react";
import { ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

import {
  CheckboxField,
  FormSection,
} from "../../../../../shared/components/ui/Form";

import { termsSectionToken } from "../../../../../shared/styles";


const TermsSection = React.memo(() => {

  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const isAssamese = language === "as";


  return (

    <FormSection
      title={isAssamese ? "ঘোষণা আৰু চৰ্তসমূহ" : "Declaration & Terms"}
      description={
        isAssamese
          ? "তলৰ ঘোষণা সমূহ পঢ়ি গ্ৰহণ কৰক।"
          : "Please review and accept the declarations below prior to listing submission."
      }
    >

      <div className={termsSectionToken.wrapper}>


        <div className={termsSectionToken.checkboxGroup}>


          <CheckboxField
            name="terms.confirmOwner"
            label={
              isAssamese
                ? "মই নিশ্চিত কৰিছোঁ যে মই এই বাহনৰ মালিক বা অনুমোদিত প্ৰতিনিধি।"
                : "I confirm that I am the owner or an authorized representative of this vehicle."
            }
            required
          />


          <CheckboxField
            name="terms.confirmInformation"
            label={
              isAssamese
                ? "মই নিশ্চিত কৰিছোঁ যে সকলো তথ্য আৰু আপলোড কৰা ডকুমেণ্ট সঠিক।"
                : "I confirm that all information and uploaded documents are true and accurate."
            }
            required
          />


          <CheckboxField
            name="terms.agreeVerification"
            label={
              isAssamese
                ? "মই বাহন পৰীক্ষাৰ বাবে Call / WhatsApp যোগে যোগাযোগ কৰিবলৈ সন্মতি দিছোঁ।"
                : "I agree to be contacted via Call or WhatsApp for vehicle verification and inspection."
            }
            required
          />


          <CheckboxField
            name="terms.agreeTerms"
            label={
              isAssamese
                ? "মই Terms & Conditions আৰু Privacy Policy পঢ়ি সন্মতি দিছোঁ।"
                : "I have read and agree to the Terms & Conditions and Privacy Policy."
            }
            required
          />


        </div>



        <div className={termsSectionToken.noticeCard}>


          <div
            className={termsSectionToken.noticeHeader}
            onClick={() => setIsOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {

              if (e.key === "Enter" || e.key === " ") {

                e.preventDefault();

                setIsOpen((prev) => !prev);

              }

            }}
          >


            <div className={termsSectionToken.noticeTitle}>

              <ShieldCheck className={termsSectionToken.noticeIcon} />

              {isAssamese
                ? "পৰীক্ষা প্ৰক্ৰিয়া আৰু পৰৱৰ্তী পদক্ষেপ"
                : "Verification Protocol & Next Steps"}

            </div>



            <div className="flex items-center gap-2">


              <div
                className={termsSectionToken.langButtonGroup}
                onClick={(e) => e.stopPropagation()}
              >

                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`${termsSectionToken.langBtn} ${
                    language === "en"
                      ? termsSectionToken.activeLangBtn
                      : termsSectionToken.inactiveLangBtn
                  }`}
                >
                  EN
                </button>


                <button
                  type="button"
                  onClick={() => setLanguage("as")}
                  className={`${termsSectionToken.langBtn} ${
                    language === "as"
                      ? termsSectionToken.activeLangBtn
                      : termsSectionToken.inactiveLangBtn
                  }`}
                >
                  অস
                </button>


              </div>



              {isOpen ? (

                <ChevronUp className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />

              ) : (

                <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />

              )}


            </div>


          </div>



          {isOpen && (

            <ul className={termsSectionToken.noticeList}>

              <li>
                {isAssamese
                  ? "বাহন অনুমোদনৰ আগতে পৰীক্ষাৰ বাবে অপেক্ষাত ৰখা হ'ব।"
                  : "Vehicles are queued for verification prior to public publication."}
              </li>


              <li>
                {isAssamese
                  ? "আমাৰ দল Call / WhatsApp যোগে ডকুমেণ্ট পৰীক্ষা কৰিব।"
                  : "Our onboarding desk will verify documents via Call / WhatsApp."}
              </li>


              <li>
                {isAssamese
                  ? "RC আৰু প্ৰয়োজনীয় পাৰমিটৰ পৰীক্ষা কৰা হ'ব।"
                  : "Physical or digital inspection of RC & permit will be performed."}
              </li>


              <li>
                {isAssamese
                  ? "ভেৰিফিকেচনৰ সময়ত ভাড়া, কমিশন আৰু পেমেণ্ট সময় সলনি হ'ব পাৰে।"
                  : "Rental pricing, commission, and payout timelines can be adjusted during verification."}
              </li>


            </ul>

          )}


        </div>


      </div>


    </FormSection>

  );

});


TermsSection.displayName = "TermsSection";


export default TermsSection;