import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { useCategories } from "../../hook/useCategories";
import {
  Car,
  FolderOpen,
  ArrowRight,
  Loader2,
  Sparkles,
  Layers,
  Search,
  KeyRound,
  Crown,
  Plane,
  Bus,
  Compass,
  Briefcase,
  AlertCircle,
} from "lucide-react";

// Category ke basis par custom icon selection logic
const getCategoryIcon = (categoryName = "") => {
  const lower = categoryName.toLowerCase();
  if (lower.includes("self") || lower.includes("drive")) return KeyRound;
  if (lower.includes("wedding")) return Crown;
  if (lower.includes("airport")) return Plane;
  if (lower.includes("urbania") || lower.includes("traveller")) return Bus;
  if (lower.includes("tour") || lower.includes("safari")) return Compass;
  if (lower.includes("cab")) return Briefcase;
  return Car;
};

const CarList = () => {
  const navigate = useNavigate();
  const { categories = [], loading } = useCategories();
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered categories based on search input
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    return categories.filter((cat) =>
      String(cat).toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [categories, searchQuery]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[65vh] gap-3">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
          <Car className="w-5 h-5 text-emerald-500 absolute" />
        </div>
        <p className="text-xs font-black uppercase tracking-widest text-slate-400 animate-pulse mt-2">
          Syncing Categories...
        </p>
      </div>
    );
  }

  const openCategory = (category) => {
    navigate(`/dashboard/cars/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-5 md:p-6 font-sans select-none space-y-6">
      {/* --- HEADER BLOCK --- */}
      <div className="bg-white/80 backdrop-blur-2xl shadow-xl shadow-slate-200/40 rounded-3xl border border-slate-200/80 p-5 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Title & Info */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-emerald-50 border border-emerald-200/80 rounded-xl text-emerald-600 shadow-sm">
                <Layers size={20} />
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Vehicle Categories
              </h1>
            </div>
            <p className="text-xs font-bold text-slate-400 pl-11 max-w-xl leading-relaxed">
              Browse, filter, and manage vehicle groups across your entire fleet operational network.
            </p>
          </div>

          {/* Controls: Search Bar & Count Badge */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Box */}
            <div className="relative flex-1 sm:w-64">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-200/80 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Total Badge */}
            <div className="hidden sm:inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50/80 border border-emerald-200/80 px-4 py-2.5 rounded-xl">
              <Sparkles size={14} className="text-emerald-500 fill-emerald-500" />
              <span>{filteredCategories.length} Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- EMPTY STATE --- */}
      {filteredCategories.length === 0 ? (
        <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-dashed border-slate-300 p-12 text-center flex flex-col items-center justify-center space-y-3">
          <div className="p-3 bg-slate-100 rounded-2xl text-slate-400">
            <AlertCircle size={28} />
          </div>
          <h3 className="text-base font-black text-slate-800">
            No Categories Found
          </h3>
          <p className="text-xs font-semibold text-slate-400 max-w-sm">
            {searchQuery
              ? `No category matching "${searchQuery}". Try clearing your search.`
              : "No categories currently exist in the database."}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-black text-emerald-600 hover:underline pt-2"
            >
              Clear Search Filter
            </button>
          )}
        </div>
      ) : (
        /* --- CATEGORIES GRID --- */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCategories.map((category) => {
            const IconComponent = getCategoryIcon(category);

            return (
              <div
                key={category}
                onClick={() => openCategory(category)}
                className="group relative bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-slate-200/60 rounded-2xl border border-slate-200/80 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Decorative Background Accent */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />

                <div>
                  {/* Top Bar Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3 bg-slate-50 group-hover:bg-emerald-500 text-slate-700 group-hover:text-white rounded-2xl border border-slate-200/60 group-hover:border-emerald-500 transition-all duration-300 shadow-sm">
                      <IconComponent size={20} />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors bg-slate-100/80 group-hover:bg-emerald-50 px-2.5 py-1 rounded-md">
                      Fleet Category
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {category}
                  </h2>

                  <p className="text-xs font-semibold text-slate-400 mt-1 mb-6 flex items-center gap-1.5">
                    <FolderOpen size={13} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    Manage {category} fleet
                  </p>
                </div>

                {/* Interactive View Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCategory(category);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-emerald-600/25 cursor-pointer"
                >
                  <span>View {category}</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(CarList);