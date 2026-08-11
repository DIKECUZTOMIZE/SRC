import React, { useState } from "react";
import { vehicleProcessSteps } from "./arrayProcess/vehicleProcessSteps";

const VehicleListingProcess = () => {
  const [language, setLanguage] = useState("en");

  const isAssamese = language === "as";

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">

        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          {isAssamese
            ? "বাহন ৰেজিষ্টাৰ প্ৰক্ৰিয়া"
            : "Vehicle Registration Process"}
        </h2>


        {/* Language Toggle */}
        <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1">

          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
              language === "en"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-white"
            }`}
          >
            English
          </button>


          <button
            type="button"
            onClick={() => setLanguage("as")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
              language === "as"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-white"
            }`}
          >
            অসমীয়া
          </button>

        </div>

      </div>


      {/* Process */}
      <div className="overflow-x-auto">

        <div className="flex items-start min-w-max gap-2 py-2">

          {vehicleProcessSteps.map((step,index)=>(

            <React.Fragment key={step.id}>

              <div className="w-28 flex flex-col items-center">

                <div className="
                  h-9 w-9 rounded-full
                  bg-blue-600 text-white
                  flex items-center justify-center
                  text-sm
                ">
                  {step.icon}
                </div>


                <h3 className="
                  mt-2 text-xs font-semibold
                  text-center text-slate-900
                ">
                  {isAssamese
                    ? step.assameseTitle
                    : step.title}
                </h3>


                <p className="
                  mt-1 text-[11px]
                  text-center text-slate-600
                  leading-4
                ">
                  {isAssamese
                    ? step.assameseDescription
                    : step.description}
                </p>

              </div>


              {index !== vehicleProcessSteps.length - 1 && (
                <div className="
                  mt-4 text-blue-500
                  text-lg font-bold
                ">
                  →
                </div>
              )}

            </React.Fragment>

          ))}

        </div>

      </div>

    </div>
  );
};


VehicleListingProcess.displayName = "VehicleListingProcess";

export default React.memo(VehicleListingProcess);