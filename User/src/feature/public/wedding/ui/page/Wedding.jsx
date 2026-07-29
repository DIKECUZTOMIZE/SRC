import React from "react";
import { Heart } from "lucide-react";
import useWeddingCar from "../../hook/useWeddingCar";
import WeddingHeader from "../components/WeddingHeader";
import WeddingFilter from "../components/WeddingFilter";
import WeddingCarListCheck from "../components/WeddingCarListCheck";

const Wedding = () => {
  const { cars, isLoading, isError, error } = useWeddingCar();
 
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading wedding cars...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          {error?.response?.data?.message || "Failed to load wedding cars"}
        </p>
      </div>
    );
  }

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <WeddingHeader cars={cars}  />

        <WeddingFilter cars={cars} />

        {cars?.length > 0 ? (
          <WeddingCarListCheck cars={cars} />
        ) : (
          <div className="bg-white border rounded-2xl py-12 text-center mt-8">
            <Heart size={40} className="mx-auto text-pink-600 mb-4" />

            <h3 className="text-lg font-semibold">No Wedding Cars Available</h3>

            <p className="text-slate-500 mt-2">
              Wedding vehicles are currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Wedding);
