import React from "react";
import { 
  ShieldCheck, 
  Wrench, 
  PhoneCall, 
  Star, 
  CheckCircle2, 
  Users, 
  Coins, 
  ShieldAlert, 
  Clock,
  Compass
} from "lucide-react";

const WhyUs = () => {
  const highlights = [
    {
      title: "Trust & Transparency",
      icon: <ShieldCheck className="text-emerald-600" size={20} />,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      points: [
        { label: "Trusted by 100K+ Travelers", desc: "See our verified 4.9★ Google Reviews" },
        { label: "Clear Damage Policy", desc: "No tricks, no hidden loop-holes" },
        { label: "In-House Fleet Only", desc: "100% owned & maintained cars, no third-party vehicles" },
        { label: "Transparent Billing", desc: "What you see is what you pay—no hidden extras" },
        { label: "Fair & Honest Pricing", desc: "Extra savings and discounts on longer bookings" }
      ]
    },
    {
      title: "Safety & Maintenance",
      icon: <Wrench className="text-blue-600" size={20} />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      points: [
        { label: "Accidental Protection Plan", desc: "Financial peace of mind in case of an mishap" },
        { label: "Rigorous Pre-Trip Inspections", desc: "OBD scan + full manual checklist before every delivery" },
        { label: "Our Own Garage", desc: "In-house servicing by certified mechanics" },
        { label: "Top-Tier Tyre Safety", desc: "Tyres maintained at 2-3 mm+ tread (Govt rule is 1.6 mm)" },
        { label: "Proactive Replacements", desc: "Brakes & clutch changed early, we don't wait for failures" }
      ]
    },
    {
      title: "Service & Support",
      icon: <PhoneCall className="text-indigo-600" size={20} />,
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100",
      points: [
        { label: "Dedicated Airport Crew", desc: "Swift, hassle-free pickup and drop-off" },
        { label: "24/7 Roadside Assistance", desc: "Complete backup support wherever you are in the Northeast" },
        { label: "7+ Years of Experience", desc: "Serving Guwahati with an unmatched track record" },
        { label: "Professional Fleet Team", desc: "Trained, polite, and fully transparent staff" },
        { label: "Instant Helpline", desc: "Real human support is always just a quick call away" }
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* टॉप हेडर */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-blue-600 mb-3">
            <Star size={12} className="fill-blue-600" /> Guwahati's Rated #1 Rental
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-blue-600">FuFu Gadi</span>?
          </h2>
          <p className="mt-2.5 text-xs md:text-sm text-slate-500 font-medium">
            7+ Years of trust, 4.9★ Google ratings, and 100K+ happy travelers. Here is why we are Guwahati's most trusted self-drive car provider.
          </p>
        </div>

        {/* 3-कॉलम बेनिफिट ग्रिड */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {highlights.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
            >
              
              {/* सेक्शन हेडर */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className={`p-2.5 rounded-xl ${section.bgColor} border ${section.borderColor}`}>
                  {section.icon}
                </div>
                <h3 className="font-extrabold text-sm md:text-base text-slate-800 tracking-tight">
                  {section.title}
                </h3>
              </div>

              {/* पॉइंट्स की लिस्ट */}
              <div className="space-y-4.5 flex-1">
                {section.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 group">
                    <span className="mt-0.5 text-blue-600 flex-shrink-0">
                      <CheckCircle2 size={15} className="stroke-[2.5]" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-150 leading-snug">
                        {point.label}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* क्विक स्टैट्स बार (नीचे का छोटा ट्रस्ट बार) */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-5 md:p-6 flex flex-wrap justify-around items-center gap-6 text-center shadow-md">
          <div className="flex items-center gap-3">
            <Users className="text-blue-400" size={22} />
            <div className="text-left">
              <p className="text-base font-black leading-none">100K+</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Happy Travelers</p>
            </div>
          </div>
          <div className="h-6 w-px bg-slate-800 hidden md:block" />
          
          <div className="flex items-center gap-3">
            <Star className="text-amber-400 fill-amber-400" size={22} />
            <div className="text-left">
              <p className="text-base font-black leading-none">4.9★ Rating</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">On Google Reviews</p>
            </div>
          </div>
          <div className="h-6 w-px bg-slate-800 hidden md:block" />

          <div className="flex items-center gap-3">
            <Compass className="text-emerald-400" size={22} />
            <div className="text-left">
              <p className="text-base font-black leading-none">7+ Years</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Experience in NE India</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;