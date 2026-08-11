import React, { useState } from "react";
import {
  Car,
  Compass,
  Plane,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  CheckboxField,
  FormSection,
} from "../../../../../shared/components/ui/Form";
import serviceDetailsToken from "../../../../../shared/styles/serviceDetailsToken";
 

const ServiceDetailsSection = React.memo(() => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormSection
      title={language === "en" ? "Services Offered" : "উপলব্ধ সেৱাসমূহ"}
      description={
        language === "en"
          ? "Select the services you want to offer with this vehicle."
          : "এই বাহনখনৰ সৈতে আপুনি আগবঢ়াব বিচৰা সেৱাসমূহ নিৰ্বাচন কৰক।"
      }
    >
      <div className={serviceDetailsToken.wrapper}>
        {/* Day Rental */}
        <div className={serviceDetailsToken.categoryBlock}>
          <h4 className={serviceDetailsToken.categoryTitle}>
            <Car className={serviceDetailsToken.categoryIcon} />
            {language === "en" ? "Day Rental Services" : "দৈনিক ভাড়া সেৱা"}
          </h4>

          <div className={serviceDetailsToken.grid}>
            <CheckboxField
              name="services.selfDrive"
              label={language === "en" ? "Self Drive" : "নিজে চলোৱা"}
            />

            <CheckboxField
              name="services.carWithDriver"
              label={
                language === "en" ? "Car With Driver" : "চালকসহ গাড়ী"
              }
            />

            <CheckboxField
              name="services.weddingCar"
              label={language === "en" ? "Wedding Car" : "বিবাহৰ গাড়ী"}
            />
          </div>
        </div>

        {/* Long Journey */}
        <div className={serviceDetailsToken.categoryBlock}>
          <h4 className={serviceDetailsToken.categoryTitle}>
            <Compass className={serviceDetailsToken.categoryIcon} />
            {language === "en" ? "Long Journey Services" : "দীৰ্ঘ যাত্ৰা সেৱা"}
          </h4>

          <div className={serviceDetailsToken.grid}>
            <CheckboxField
              name="services.premiumCar"
              label={language === "en" ? "Premium Car" : "প্ৰিমিয়াম গাড়ী"}
            />

            <CheckboxField
              name="services.tempoTraveller"
              label={
                language === "en" ? "Tempo Traveller" : "টেম্পো ট্ৰেভেলাৰ"
              }
            />
          </div>
        </div>

        {/* Airport Transfer */}
        <div className={serviceDetailsToken.categoryBlock}>
          <h4 className={serviceDetailsToken.categoryTitle}>
            <Plane className={serviceDetailsToken.categoryIcon} />
            {language === "en" ? "Airport Transfer" : "বিমানবন্দৰ স্থানান্তৰ"}
          </h4>

          <div className={serviceDetailsToken.grid}>
            <CheckboxField
              name="services.airportTransfer"
              label={
                language === "en"
                  ? "Airport Pickup / Drop / Round Trip"
                  : "বিমানবন্দৰ পিকআপ / ড্ৰপ / অহা-যোৱা"
              }
            />
          </div>
        </div>

        {/* Collapsible Info Card */}
        <div className={serviceDetailsToken.infoCard}>
          <div
            className={serviceDetailsToken.infoHeader}
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
            <div className={serviceDetailsToken.infoTitle}>
              <Info className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
              {language === "en" ? "Service Information" : "সেৱাৰ তথ্য"}
            </div>

            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div
                className={serviceDetailsToken.langButtonGroup}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`${serviceDetailsToken.langBtn} ${
                    language === "en"
                      ? serviceDetailsToken.activeLangBtn
                      : serviceDetailsToken.inactiveLangBtn
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("as")}
                  className={`${serviceDetailsToken.langBtn} ${
                    language === "as"
                      ? serviceDetailsToken.activeLangBtn
                      : serviceDetailsToken.inactiveLangBtn
                  }`}
                >
                  অস
                </button>
              </div>

              {/* Toggle Icon */}
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
              )}
            </div>
          </div>

          {/* Collapsible Guidelines Content */}
          {isOpen && (
            <ul className={serviceDetailsToken.infoList}>
              <li>
                {language === "en"
                  ? "Day Rental includes Self Drive, Car With Driver and Wedding Car services."
                  : "দৈনিক ভাড়াত নিজে চলোৱা, চালকসহ গাড়ী আৰু বিবাহৰ গাড়ী সেৱা অন্তৰ্ভুক্ত।"}
              </li>

              <li>
                {language === "en"
                  ? "Long Journey includes Premium Cars and Tempo Travellers for multi-day trips."
                  : "দীৰ্ঘ যাত্ৰাৰ বাবে প্ৰিমিয়াম গাড়ী আৰু টেম্পো ট্ৰেভেলাৰ উপলব্ধ।"}
              </li>

              <li>
                {language === "en"
                  ? "Airport Transfer includes Airport Pickup, Drop and Round Trip bookings."
                  : "বিমানবন্দৰ সেৱাত পিকআপ, ড্ৰপ আৰু অহা-যোৱা বুকিং অন্তৰ্ভুক্ত।"}
              </li>

              <li>
                {language === "en"
                  ? "Your vehicle will only appear in the services you select."
                  : "আপোনাৰ বাহন কেৱল নিৰ্বাচিত সেৱাত দেখুওৱা হ'ব।"}
              </li>

              <li>
                {language === "en"
                  ? "You can update your services after your vehicle has been approved."
                  : "বাহন অনুমোদনৰ পিছত সেৱাসমূহ আপডেট কৰিব পাৰিব।"}
              </li>
            </ul>
          )}
        </div>
      </div>
    </FormSection>
  );
});

ServiceDetailsSection.displayName = "ServiceDetailsSection";

export default ServiceDetailsSection;