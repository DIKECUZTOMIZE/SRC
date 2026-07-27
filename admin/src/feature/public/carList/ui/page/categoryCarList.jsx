import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useCategoryCarsList } from "../../hook/useCategoryCarsList";
import CarListCard from "../components/carListCard";
import {
  Car,
  Search,
  RotateCcw,
  SlidersHorizontal,
  Fuel,
  Gauge,
  Tag,
  Activity,
  ArrowLeft,
  Loader2,
  IndianRupee,
  AlertCircle,
  Filter,
} from "lucide-react";

const CategoryCarList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const decodeCategory = decodeURIComponent(category || "");

  const { cars = [], loading } = useCategoryCarsList(decodeCategory);
  const [budget, setBudget] = useState(50000);
  const [filteredCars, setFilteredCars] = useState([]);
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    fuel: "",
    transmission: "",
    classification: "",
    status: "",
  });

  useEffect(() => {
    let result = [...cars];

    if (search) {
      result = result.filter((car) =>
        `${car.brand || ""} ${car.model || ""}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        result = result.filter((car) => car[key] === filters[key]);
      }
    });

    result = result.filter((car) => Number(car.pricePerDay || 0) <= budget);
    setFilteredCars(result);
  }, [cars, search, filters, budget]);

  const handleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilter = () => {
    setSearch("");
    setBudget(50000);
    setFilters({
      fuel: "",
      transmission: "",
      classification: "",
      status: "",
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] gap-3">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
          <Car className="w-5 h-5 text-emerald-500 absolute" />
        </div>
        <p className="text-xs font-black uppercase tracking-widest text-slate-400 animate-pulse mt-2">
          Fetching {decodeCategory} Vehicles...
        </p>
      </div>
    );
  }

  const isFilterActive =
    search !== "" ||
    budget < 50000 ||
    Object.values(filters).some((val) => val !== "");

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-5 md:p-6 font-sans select-none space-y-6">
      {/* --- HEADER BLOCK --- */}
      <div className="bg-white/80 backdrop-blur-2xl shadow-xl shadow-slate-200/40 rounded-3xl border border-slate-200/80 p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-500 hover:text-emerald-600 transition-colors mb-2 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Categories</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-emerald-50 border border-emerald-200/80 rounded-xl text-emerald-600 shadow-sm">
                <Car size={22} />
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {decodeCategory} Cars
              </h1>
            </div>
            <p className="text-xs font-bold text-slate-400 pl-11">
              Showing {filteredCars.length} of {cars.length} active vehicles
            </p>
          </div>

          {/* Reset Filters CTA */}
          {isFilterActive && (
            <button
              onClick={clearFilter}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-200/80 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-sm cursor-pointer self-start md:self-auto"
            >
              <RotateCcw size={14} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* --- SEARCH & BUDGET CONTROLS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Search Input */}
        <div className="lg:col-span-1 relative bg-white/80 backdrop-blur-xl shadow-sm rounded-2xl border border-slate-200/80 p-4 flex items-center">
          <Search size={18} className="text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Brand or Model..."
            className="w-full bg-transparent text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold ml-2"
            >
              ✕
            </button>
          )}
        </div>

        {/* Budget Slider */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl shadow-sm rounded-2xl border border-slate-200/80 p-4 sm:px-6 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <IndianRupee size={15} className="text-emerald-600" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                Max Daily Rent
              </span>
            </div>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3 py-1 rounded-full text-xs font-black">
              Up to ₹{budget.toLocaleString("en-IN")} / day
            </span>
          </div>

          <input
            type="range"
            min="500"
            max="50000"
            step="500"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
          />

          <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-1.5">
            <span>₹500</span>
            <span>₹50,000+</span>
          </div>
        </div>
      </div>

      {/* --- SPECIFICATION FILTERS --- */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm rounded-2xl border border-slate-200/80 p-4">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 text-slate-400 text-xs font-black uppercase tracking-wider">
          <Filter size={14} className="text-emerald-500" />
          <span>Detailed Specs Filter</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Fuel */}
          <div className="relative">
            <select
              value={filters.fuel}
              onChange={(e) => handleFilter("fuel", e.target.value)}
              className="w-full appearance-none bg-slate-50/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
            >
              <option value="">All Fuel Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Transmission */}
          <div className="relative">
            <select
              value={filters.transmission}
              onChange={(e) => handleFilter("transmission", e.target.value)}
              className="w-full appearance-none bg-slate-50/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
            >
              <option value="">All Transmissions</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          {/* Classification */}
          <div className="relative">
            <select
              value={filters.classification}
              onChange={(e) => handleFilter("classification", e.target.value)}
              className="w-full appearance-none bg-slate-50/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
            >
              <option value="">All Body Types</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="MUV">MUV</option>
              <option value="Luxury">Luxury</option>
              <option value="Traveller">Traveller</option>
            </select>
          </div>

          {/* Status */}
          <div className="relative">
            <select
              value={filters.status}
              onChange={(e) => handleFilter("status", e.target.value)}
              className="w-full appearance-none bg-slate-50/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
            >
              <option value="">All Availability Status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Reserved">Reserved</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
        </div>
      </div>

      {/* --- VEHICLES LIST GRID OR EMPTY STATE --- */}
      {filteredCars.length === 0 ? (
        <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-dashed border-slate-300 p-12 text-center flex flex-col items-center justify-center space-y-3">
          <div className="p-3 bg-slate-100 rounded-2xl text-slate-400">
            <AlertCircle size={32} />
          </div>
          <h3 className="text-base font-black text-slate-800">
            No Matching Cars Found
          </h3>
          <p className="text-xs font-semibold text-slate-400 max-w-sm">
            We couldn't find any vehicles under "{decodeCategory}" matching
            your current search or filter preferences.
          </p>
          <button
            onClick={clearFilter}
            className="mt-2 text-xs font-black text-emerald-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw size={12} />
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <CarListCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCarList;