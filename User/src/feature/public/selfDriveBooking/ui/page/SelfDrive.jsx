/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useCallback } from "react";
import {
  Users,
  Settings,
  Fuel,
  Snowflake,
  Star,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Car,
  RotateCcw,
  Eye,
  Sparkles,
} from "lucide-react";
import { useSelfDriveCars } from "../../hook/useSelfDriveCarsCrad";
import SelfDriveBookingForm from "../../ui/page/SelfDriveBookingForm";

const SelfDrive = () => {
  const { cars, loading, fetchCars } = useSelfDriveCars();

  // --- FILTER STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [selectedCar, setSelectedCar] = useState(null);

  const carTypes = ["All", "SUV", "MPV", "Hatchback", "Sedan"];

  // Filter Active Check
  const isFilterActive = useMemo(() => {
    return searchQuery !== "" || selectedType !== "All" || maxPrice !== 50000;
  }, [searchQuery, selectedType, maxPrice]);

  // Reset Filters Handler
  const handleResetFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedType("All");
    setMaxPrice(50000);
  }, []);

  // --- FILTER LOGIC ---
  const filteredCars = useMemo(() => {
    return (cars || []).filter((car) => {
      const carName = `${car.brand || ""} ${car.model || ""}`.toLowerCase();
      const matchesSearch = carName.includes(searchQuery.toLowerCase());
      const matchesType =
        selectedType === "All" || car.classification === selectedType;
      const matchesPrice = Number(car.pricePerDay || 0) <= Number(maxPrice);

      return matchesSearch && matchesType && matchesPrice;
    });
  }, [cars, searchQuery, selectedType, maxPrice]);

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50/70 min-h-screen font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 pb-4 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Guwahati Fleet
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Self Drive{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Rentals
              </span>
            </h2>
          </div>

          {/* <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer self-start sm:self-center"
          >
            <Eye size={14} /> View All Cars (सभी देखें)
          </button> */}
        </div>

        {/* --- LIGHT GREEN & SLATE FILTER PANEL --- */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
                <SlidersHorizontal size={13} />
              </div>
              Filter Panel
            </span>

            {isFilterActive && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-lg transition-all active:scale-95 cursor-pointer border border-rose-100"
              >
                <RotateCcw size={12} /> Clear Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Search Input */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">
                Search Vehicles
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={15}
                />
                <input
                  type="text"
                  placeholder="Innova, Swift, Thar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 rounded-xl py-2 pl-10 pr-3 text-xs text-slate-800 font-semibold transition-all outline-none"
                />
              </div>
            </div>

            {/* Vehicle Category Dropdown */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">
                Vehicle Classification
              </label>
              <div className="relative">
                <Car
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={15}
                />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 rounded-xl py-2 pl-10 pr-8 text-xs font-bold text-slate-700 transition-all outline-none appearance-none cursor-pointer"
                >
                  {carTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "All" ? "All Categories" : type}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={15}
                />
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="md:col-span-4">
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Max Daily Budget
                </label>
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                  ₹{maxPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                <span>Min: ₹100</span>
                <span>Max: ₹50,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- CAR CARDS GRID --- */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCars.map((car) => {
              const isAvailable = car.status === "Available";

              return (
                <div
                  key={car._id}
                  className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Image Container */}
                  <div>
                    <div className="relative overflow-hidden aspect-[16/11] bg-slate-100">
                      <img
                        src={`http://localhost:3000${car.image}`}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Top Overlay Badges */}
                      <div className="absolute top-2.5 inset-x-2.5 flex justify-between items-center pointer-events-none z-10">
                        <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-xs border border-white/40">
                          {car.classification || "Car"}
                        </span>

                        {isAvailable ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                            <CheckCircle size={11} /> Available
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                            <Clock size={11} /> Reserved
                          </span>
                        )}
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute bottom-2.5 right-2.5 bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] font-bold">
                        <Star
                          size={11}
                          className="fill-amber-400 text-amber-400"
                        />
                        <span>{car.rating || "5.0"}</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-4">
                      <h3 className="font-black text-slate-900 text-base group-hover:text-emerald-600 transition-colors leading-tight truncate">
                        {car.brand} {car.model}
                      </h3>

                      {/* Pricing Block */}
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">
                            Hourly Rate
                          </span>
                          <span className="text-xs font-black text-emerald-600 block mt-0.5">
                            ₹
                            {Number(car.pricePerHour || 0).toLocaleString(
                              "en-IN",
                            )}
                          </span>
                        </div>

                        <div className="h-6 w-[1px] bg-slate-200" />

                        <div className="text-right">
                          <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">
                            Daily Rate
                          </span>
                          <span className="text-sm font-black text-slate-900 block mt-0.5">
                            ₹
                            {Number(car.pricePerDay || 0).toLocaleString(
                              "en-IN",
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-1.5 mt-3">
                        <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-1.5 text-[11px] font-semibold text-slate-600 border border-slate-100">
                          <Fuel
                            size={13}
                            className="text-emerald-500 shrink-0"
                          />
                          <span className="truncate">{car.fuel || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-1.5 text-[11px] font-semibold text-slate-600 border border-slate-100">
                          <Settings
                            size={13}
                            className="text-emerald-500 shrink-0"
                          />
                          <span className="truncate">
                            {car.transmission || "N/A"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-1.5 text-[11px] font-semibold text-slate-600 border border-slate-100">
                          <Users
                            size={13}
                            className="text-emerald-500 shrink-0"
                          />
                          <span>{car.seats || "N/A"} Seats</span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-1.5 text-[11px] font-semibold text-slate-600 border border-slate-100">
                          <Snowflake
                            size={13}
                            className="text-emerald-500 shrink-0"
                          />
                          <span>AC</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Action Button */}
                  <div className="px-4 pb-4">
                    <button
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => setSelectedCar(car)}
                      className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-extrabold text-xs transition-all duration-200 cursor-pointer ${
                        isAvailable
                          ? "bg-slate-900 hover:bg-emerald-600 text-white shadow-md hover:shadow-emerald-600/20 active:scale-[0.98]"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60"
                      }`}
                    >
                      {isAvailable ? (
                        <>
                          Book Journey{" "}
                          <ArrowUpRight size={14} strokeWidth={2.5} />
                        </>
                      ) : (
                        "Fully Reserved"
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Filter Result State */
          <div className="text-center py-12 px-4 bg-white border border-dashed border-slate-300 rounded-2xl max-w-sm mx-auto shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-3 text-emerald-600">
              <SlidersHorizontal size={20} />
            </div>

            <h3 className="font-black text-slate-800 text-base">
              No Match Found
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              There are no vehicles available matching your filter options.
            </p>

            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-4 text-xs font-black text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-5 py-2.5 rounded-xl transition-all cursor-pointer active:scale-95"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* --- BOOKING MODAL (Rendered Outside Loop) --- */}
        {selectedCar && (
          <SelfDriveBookingForm
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
          />
        )}
      </div>
    </section>
  );
};

export default React.memo(SelfDrive);
