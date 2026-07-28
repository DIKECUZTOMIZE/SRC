import React from "react";
import { Crown } from "lucide-react";

import PremiumCarCard from "../components/PremiumCarCard";
import usePremiumCar from "../../hook/usePremiumCar";

const PremiumWithCar = () => {
  const { cars, isLoading, isError, error } = usePremiumCar();

  if (isLoading) {
    return (
      <div
        className="
      min-h-screen
      flex items-center
      justify-center
      "
      >
        <p className="text-slate-500">Loading premium cars...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="
      min-h-screen
      flex items-center
      justify-center
      "
      >
        <p className="text-red-500">
          {error?.response?.data?.message || "Failed to load premium cars"}
        </p>
      </div>
    );
  }

  return (
    <section
      className="
    py-10 sm:py-14
    px-4 sm:px-6
    bg-slate-50
    min-h-screen
    "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div
          className="
        mb-8
        border-b
        pb-4
        "
        >
          <div
            className="
          inline-flex
          items-center gap-2
          bg-purple-100
          text-purple-700
          px-3 py-1
          rounded-full
          text-xs
          font-bold
          mb-3
          "
          >
            <Crown size={14} />
            Guwahati Premium Fleet
          </div>

          <h2
            className="
          text-3xl
          font-bold
          text-slate-900
          "
          >
            Premium
            <span className="text-purple-600">Cars</span>
          </h2>

          <p
            className="
          text-slate-500
          mt-2
          "
          >
            Luxury and premium vehicles for special occasions.
          </p>
        </div>

        {/* <PremiumFilter /> */}

        {cars?.length > 0 ? (
          <div
            className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5 mt-8
            "
          >
            {cars.map((car) => (
              <PremiumCarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div
            className="
            bg-white
            border
            rounded-2xl
            py-12
            text-center
            mt-8
            "
          >
            <Crown
              size={40}
              className="
                mx-auto
                text-purple-600
                mb-4
                "
            />

            <h3
              className="
              text-lg
              font-semibold
              "
            >
              No Premium Cars Available
            </h3>

            <p
              className="
              text-slate-500
              mt-2
              "
            >
              Premium vehicles are currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(PremiumWithCar);
