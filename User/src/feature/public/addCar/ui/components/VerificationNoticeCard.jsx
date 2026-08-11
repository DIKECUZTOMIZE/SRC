  import React, { useState } from "react";
  import {
    ClipboardCheck,
    PhoneCall,
    Car,
    BadgeIndianRupee,
    CheckCircle2,
    HelpCircle,
    ChevronDown,
    ChevronUp,
  } from "lucide-react";
  import verificationNoticeToken from "../../../../../shared/styles/verificationNoticeToken";

  

  const VerificationNoticeCard = React.memo(() => {
    const [language, setLanguage] = useState("en");
    const [isOpen, setIsOpen] = useState(false);

    const isAssamese = language === "as";

    return (
      <div className={verificationNoticeToken.card}>
        {/* Clickable Card Header */}
        <div
          className={verificationNoticeToken.header}
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
          <div className={verificationNoticeToken.title}>
            <HelpCircle className={verificationNoticeToken.titleIcon} />
            {isAssamese ? "পৰৱৰ্তী পদক্ষেপসমূহ" : "What Happens Next?"}
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div
              className={verificationNoticeToken.langButtonGroup}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`${verificationNoticeToken.langBtn} ${
                  language === "en"
                    ? verificationNoticeToken.activeLangBtn
                    : verificationNoticeToken.inactiveLangBtn
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("as")}
                className={`${verificationNoticeToken.langBtn} ${
                  language === "as"
                    ? verificationNoticeToken.activeLangBtn
                    : verificationNoticeToken.inactiveLangBtn
                }`}
              >
                অস
              </button>
            </div>

            {/* Accordion Toggle Icon */}
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
            )}
          </div>
        </div>

        {/* Collapsible Content */}
        {isOpen && (
          <div className={verificationNoticeToken.body}>
            <Step
              icon={<ClipboardCheck className={verificationNoticeToken.stepIcon} />}
              title={isAssamese ? "আবেদন পৰ্যালোচনা" : "Application Review"}
              text={
                isAssamese
                  ? "আমাৰ দলে আপুনি জমা দিয়া তথ্য আৰু ডকুমেণ্ট পৰীক্ষা কৰিব।"
                  : "Our team will review the information and documents you submit."
              }
            />

            <Step
              icon={<PhoneCall className={verificationNoticeToken.stepIcon} />}
              title={
                isAssamese
                  ? "Call / WhatsApp পৰীক্ষা"
                  : "Call / WhatsApp Verification"
              }
              text={
                isAssamese
                  ? "আপোনাৰ মোবাইল বা WhatsApp নম্বৰত যোগাযোগ কৰি তথ্য নিশ্চিত কৰা হ'ব।"
                  : "We will contact you on your registered Mobile or WhatsApp number to verify your details."
              }
            />

            <Step
              icon={<Car className={verificationNoticeToken.stepIcon} />}
              title={isAssamese ? "বাহন পৰিদৰ্শন" : "Vehicle Inspection"}
              text={
                isAssamese
                  ? "প্ৰয়োজন হ'লে অনুমোদনৰ আগতে বাহন পৰিদৰ্শন কৰা হ'ব।"
                  : "If required, our team may inspect the vehicle before approval."
              }
            />

            <Step
              icon={<BadgeIndianRupee className={verificationNoticeToken.stepIcon} />}
              title={isAssamese ? "মূল্য আলোচনা" : "Pricing Discussion"}
              text={
                isAssamese
                  ? "ভাড়া, উপলব্ধতা, কমিশন আৰু সেৱাৰ বিৱৰণ ভেৰিফিকেচনৰ সময়ত আলোচনা কৰা হ'ব।"
                  : "Rental pricing, availability, commission and service details will be discussed during the verification process."
              }
            />

            <Step
              icon={<CheckCircle2 className={verificationNoticeToken.stepIcon} />}
              title={isAssamese ? "বাহন Listing" : "Vehicle Listing"}
              text={
                isAssamese
                  ? "অনুমোদনৰ পিছত আপোনাৰ বাহন প্লেটফৰ্মত প্ৰকাশ পাব আৰু গ্ৰাহকে বুকিং কৰিব পাৰিব।"
                  : "Once approved, your vehicle will be published on our platform and become available for customer bookings."
              }
            />
          </div>
        )}
      </div>
    );
  });

  const Step = ({ icon, title, text }) => (
    <div className={verificationNoticeToken.stepWrapper}>
      {icon}
      <div>
        <h4 className={verificationNoticeToken.stepTitle}>{title}</h4>
        <p className={verificationNoticeToken.stepText}>{text}</p>
      </div>
    </div>
  );

  VerificationNoticeCard.displayName = "VerificationNoticeCard";

  export default VerificationNoticeCard;