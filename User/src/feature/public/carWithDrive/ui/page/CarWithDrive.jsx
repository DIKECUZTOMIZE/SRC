/* eslint-disable no-unused-vars */
import React from "react";
import { SlidersHorizontal } from "lucide-react";

import DriverFilter from "../components/DriverFilter";
import DriverCarCard from "../components/DriverCarCard";
import DriverBookingModal from "../components/DriverBookingModal";
import { useState } from "react";

const CarWithDriver = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  // Temporary Dummy Data
  const cars = [
    {
      _id: "1",
      image: "https://via.placeholder.com/500x300",
      brand: "Toyota",
      model: "Innova Crysta",
      classification: "SUV",
      status: "Available",
      rating: "5.0",
      fuel: "Diesel",
      transmission: "Manual",
      seats: 7,
      pricePerHour: 500,
      pricePerDay: 3500,
    },
    {
      _id: "2",
      image: "https://via.placeholder.com/500x300",
      brand: "Maruti",
      model: "Swift Dzire",
      classification: "Sedan",
      status: "Available",
      rating: "4.9",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
      pricePerHour: 350,
      pricePerDay: 2500,
    },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between mb-8 border-b pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
              Guwahati Chauffeur Fleet
            </div>

            <h2 className="text-3xl font-bold">
              Car With Driver <span className="text-emerald-600">Rentals</span>
            </h2>
          </div>
        </div>

        {/* Filter */}
        <DriverFilter />

        {/* Car List */}
        {cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {cars.map((car) => (
              <DriverCarCard
                key={car._id}
                car={car}
                onSelectCar={setSelectedCar}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border mt-8">
            <SlidersHorizontal
              size={35}
              className="mx-auto text-emerald-600 mb-3"
            />

            <h3 className="font-bold text-lg">Vehicles will appear here</h3>

            <p className="text-gray-500 mt-2">No vehicles available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(CarWithDriver);
