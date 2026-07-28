import React from "react";
import useWeddingCar from "../../hook/useWeddingCar";
import WeddingHeader from "../components/WeddingHeader";
import WeddingFilter from "../components/WeddingFilter";
import WeddingEmpty from "../components/WeddingEmpty";
import WeddingCarListCheck from "../components/WeddingCarListCheck";

const Wedding = () => {
  const { cars, isLoading, isError, error } = useWeddingCar();
console.log(cars)
  if (isLoading) {
    return (
      <div
        className="
      min-h-screen
      flex items-center
      justify-center
      "
      >
        <p className="text-slate-500">Loading wedding cars...</p>
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
          {error?.response?.data?.message || "Failed to load wedding cars"}
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
        <WeddingHeader />

        <WeddingFilter />

        {cars?.length > 0 ? (
          <WeddingCarListCheck cars={cars} />
        ) : (
          <WeddingEmpty />
        )}
      </div>
    </section>
  );
};

export default React.memo(Wedding);
