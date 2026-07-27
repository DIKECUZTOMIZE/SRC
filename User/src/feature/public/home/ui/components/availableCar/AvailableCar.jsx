import React, { useState, useMemo, useCallback } from "react";
import {
  Users,
  Settings,
  Fuel,
  Snowflake,
  Star,
  CheckCircle2,
  Clock,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Car,
  RotateCcw,
  Eye,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useUserCars } from "../../../hook/useUserCarsAll";

const CAR_TYPES = ["All", "SUV", "MPV", "Mini", "Traveler", "Truck"];

const AvailableCars = () => {
  const { cars } = useUserCars();

  // --- FILTER STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);

  // Helper to check active filters
  const isFilterActive = useMemo(() => {
    return searchQuery !== "" || selectedType !== "All" || maxPrice !== 50000;
  }, [searchQuery, selectedType, maxPrice]);

  // Reset Filters Handler
  const handleResetFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedType("All");
    setMaxPrice(50000);
  }, []);

  // Filter Logic
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
    <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-slate-100/80 via-slate-50 to-slate-100/60 min-h-screen font-sans border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-[11px] font-black text-emerald-700 uppercase tracking-widest mb-3 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Fleet Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Premium Fleet
              </span>
            </h2>
          </div>

          {/* <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-emerald-600/20 active:scale-95 cursor-pointer"
            >
              <Eye size={15} />
              <span>View All Fleet</span>
            </button>
          </div> */}
        </div>

        {/* --- FILTER PANEL BAR --- */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 p-6 shadow-xl shadow-slate-200/50 mb-12 transition-all">
          <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <SlidersHorizontal size={15} />
              </div>
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                Filter Options
              </span>
            </div>

            {isFilterActive && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100/80 px-3 py-1.5 rounded-xl transition-all cursor-pointer active:scale-95"
              >
                <span>Reset Filters</span>
                <RotateCcw size={13} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Search Input */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                Search Vehicle
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Innova, Swift, Fortuner..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-800 placeholder:text-slate-400 transition-all outline-none"
                />
              </div>
            </div>

            {/* Classification Dropdown */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                Vehicle Category
              </label>
              <div className="relative">
                <Car
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={16}
                />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl py-2.5 pl-10 pr-8 text-xs font-bold text-slate-700 transition-all outline-none appearance-none cursor-pointer"
                >
                  {CAR_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type === "All" ? "All Categories" : type}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            {/* Price Slider */}
            <div className="md:col-span-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Max Daily Rate
                </label>
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-lg shadow-sm">
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
                className="w-full h-2 bg-slate-200/80 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] font-extrabold text-slate-400 mt-1.5">
                <span>₹100</span>
                <span>₹50,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- CAR CARDS GRID --- */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredCars.map((car) => {
              const isAvailable = car.status === "Available";
             
              return (
                <div
                  key={car._id}
                  className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-500/40 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Section: Compact Image & Badges */}
                  <div>
                    {/* image */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                      <img
                        src={`http://localhost:3000${car.image}`}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 opacity-80" />

                      {/* Status Badges */}
                      <div className="absolute top-2.5 inset-x-2.5 flex justify-between items-center pointer-events-none z-10">
                        <span className="bg-slate-950/70 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg border border-white/10">
                          {car.classification || "Luxury"}
                        </span>

                        {isAvailable ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-500/90 backdrop-blur-md text-white text-[8px] font-extrabold px-2 py-0.5 rounded-lg border border-emerald-400/30">
                            <CheckCircle2 size={10} strokeWidth={3} /> Available
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-amber-500/90 backdrop-blur-md text-white text-[8px] font-extrabold px-2 py-0.5 rounded-lg border border-amber-400/30">
                            <Clock size={10} strokeWidth={3} /> Reserved
                          </span>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-2 right-2.5 bg-slate-950/80 backdrop-blur-md border border-white/10 text-white px-2 py-0.5 rounded-lg flex items-center gap-1 text-[9px] font-black z-10">
                        <Star
                          size={10}
                          className="fill-amber-400 text-amber-400"
                        />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-3.5">
                      {/* Title & Arrow */}
                      <div className="flex items-center justify-between gap-1.5">
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-600 transition-colors leading-snug truncate">
                          {car.brand} {car.model}
                        </h3>
                        <div className="p-1 rounded-full bg-slate-100 text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                          <ArrowUpRight size={13} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Compact Pricing Row */}
                      <div className="mt-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wider block leading-none">
                            Per Day
                          </span>
                          <span className="text-sm font-black text-slate-900 mt-0.5 block">
                            ₹
                            {Number(car.pricePerDay || 0).toLocaleString(
                              "en-IN",
                            )}
                          </span>
                        </div>

                        <div className="h-5 w-[1px] bg-slate-200" />

                        <div className="text-right">
                          <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wider block leading-none">
                            Per Hour
                          </span>
                          <span className="text-xs font-black text-emerald-600 mt-0.5 block">
                            ₹
                            {Number(car.pricePerHour || 0).toLocaleString(
                              "en-IN",
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 gap-1.5 mt-2.5">
                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100/80 rounded-lg p-1.5 text-[9px] font-bold text-slate-700">
                          <Fuel
                            size={11}
                            className="text-emerald-600 shrink-0"
                          />
                          <span className="truncate">{car.fuel || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100/80 rounded-lg p-1.5 text-[9px] font-bold text-slate-700">
                          <Settings
                            size={11}
                            className="text-emerald-600 shrink-0"
                          />
                          <span className="truncate">
                            {car.transmission || "N/A"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100/80 rounded-lg p-1.5 text-[9px] font-bold text-slate-700">
                          <Users
                            size={11}
                            className="text-emerald-600 shrink-0"
                          />
                          <span>{car.seats || 0} Seats</span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100/80 rounded-lg p-1.5 text-[9px] font-bold text-slate-700">
                          <Snowflake
                            size={11}
                            className="text-emerald-600 shrink-0"
                          />
                          <span>Aircon</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  {/* <div className="px-3.5 pb-3.5 pt-0">
                    <button
                      type="button"
                      disabled={!isAvailable}
                      className={`w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center justify-center transition-all duration-200 ${
                        isAvailable
                          ? "bg-slate-900 hover:bg-emerald-600 text-white active:scale-95 cursor-pointer shadow-sm"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/80"
                      }`}
                    >
                      {isAvailable ? "Book This Car" : "Unavailable"}
                    </button>
                  </div> */}
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State View */
          <div className="text-center py-12 px-6 bg-white border border-slate-200/80 rounded-2xl max-w-sm mx-auto shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-3 text-emerald-600">
              <SlidersHorizontal size={20} />
            </div>

            <h3 className="font-extrabold text-slate-900 text-base">
              No Matching Vehicles
            </h3>

            <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
              Try adjusting or resetting your search filters.
            </p>

            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-4 text-[11px] font-extrabold text-white bg-slate-900 hover:bg-emerald-600 px-5 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(AvailableCars);
