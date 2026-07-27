import React, { useState } from "react";
import { CalendarDays, Clock, Zap, Percent } from "lucide-react";

const ExclusiveDeals = () => {
  // भाषा बदलने के लिए स्टेट (English / हिंदी)
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "Exclusive Savings & Deals",
      badge: "Auto-applied savings on eligible bookings",
      deals: [
        {
          id: 1,
          title: "Long Booking Discount",
          desc: "Save more when you book for more days. Duration-based discounts are applied automatically during checkout based on your total rental period.",
          icon: <CalendarDays size={20} className="text-blue-600" />,
          bgColor: "bg-blue-50/60",
          borderColor: "border-blue-100",
          iconBg: "bg-blue-50 border border-blue-100",
        },
        {
          id: 2,
          title: "Early Booking Benefit",
          desc: "Planning your trip early can unlock additional savings. Eligible early booking discounts are auto-applied before payment.",
          icon: <Clock size={20} className="text-emerald-600" />,
          bgColor: "bg-emerald-50/60",
          borderColor: "border-emerald-100",
          iconBg: "bg-emerald-50 border border-emerald-100",
        },
        {
          id: 3,
          title: "Special Car Deals",
          desc: "Selected cars may have limited-time special offers depending on availability, dates, and booking duration. These deals are shown automatically when applicable.",
          icon: <Zap size={20} className="text-rose-500" />,
          bgColor: "bg-rose-50/60",
          borderColor: "border-rose-100",
          iconBg: "bg-rose-50 border border-rose-100",
        },
      ],
    },
    hi: {
      title: "खास बचत और डील्स",
      badge: "योग्य बुकिंग पर ऑटोमैटिक डिस्काउंट लागू",
      deals: [
        {
          id: 1,
          title: "लंबी बुकिंग पर डिस्काउंट",
          desc: "जितने अधिक दिनों के लिए बुक करेंगे, उतनी ही अधिक बचत होगी। आपके कुल बुकिंग दिनों के आधार पर चेकआउट के समय यह डिस्काउंट अपने आप लागू हो जाएगा।",
          icon: <CalendarDays size={20} className="text-blue-600" />,
          bgColor: "bg-blue-50/60",
          borderColor: "border-blue-100",
          iconBg: "bg-blue-50 border border-blue-100",
        },
        {
          id: 2,
          title: "एडवांस बुकिंग के फायदे",
          desc: "अपनी यात्रा की योजना पहले से बनाने पर एक्स्ट्रा बचत पाएं। योग्य एडवांस बुकिंग ऑफर्स पेमेंट करने से पहले ऑटोमैटिक अप्लाई हो जाते हैं।",
          icon: <Clock size={20} className="text-emerald-600" />,
          bgColor: "bg-emerald-50/60",
          borderColor: "border-emerald-100",
          iconBg: "bg-emerald-50 border border-emerald-100",
        },
        {
          id: 3,
          title: "स्पेशल कार डील्स",
          desc: "चुनिंदा गाड़ियों पर उपलब्धता, तारीखों और समय के अनुसार लिमिटेड-टाइम ऑफर्स मिल सकते हैं। ये डील्स लागू होने पर अपने आप दिखाई देने लगती हैं।",
          icon: <Zap size={20} className="text-rose-500" />,
          bgColor: "bg-rose-50/60",
          borderColor: "border-rose-100",
          iconBg: "bg-rose-50 border border-rose-100",
        },
      ],
    },
  };

  const current = content[lang];

  return (
    <section className="bg-white py-12 px-4 font-sans border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* टॉप कंट्रोल बार: टाइटल और भाषा बदलने का बटन */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          <div className="text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              {current.title}
            </h2>
            <div className="mt-2 inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-[11px] font-bold px-3 py-1 rounded-full border border-sky-100">
              <Percent size={12} className="stroke-[2.5]" />
              {current.badge}
            </div>
          </div>

          {/* भाषा बदलने का प्रीमियम स्विच */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/50">
            <button
              onClick={() => setLang("en")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold tracking-wider transition-all duration-200 ${
                lang === "en"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              ENGLISH
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 ${
                lang === "hi"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              हिंदी
            </button>
          </div>

        </div>

        {/* 3-कॉलम ऑफर्स ग्रिड */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.deals.map((deal) => (
            <div
              key={deal.id}
              className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-md flex flex-col p-6 ${deal.borderColor}`}
            >
              {/* आइकॉन और टाइटल */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className={`p-2.5 rounded-xl flex items-center justify-center ${deal.iconBg}`}>
                  {deal.icon}
                </div>
                <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">
                  {deal.title}
                </h3>
              </div>

              {/* डिस्क्रिप्शन */}
              <p className="text-xs text-slate-500 leading-relaxed font-medium flex-1">
                {deal.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExclusiveDeals;