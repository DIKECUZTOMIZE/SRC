import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCarDetails } from "../../hook/useCarListDetails";
import {
  ArrowLeft,
  Edit3,
  Trash2,
  Fuel,
  Gauge,
  Users,
  Clock,
  CalendarDays,
  Tag,
  ShieldCheck,
  AlertCircle,
  FileText,
  Car,
  Copy,
  Check,
  Sparkles,
  Maximize2,
  ChevronRight,
} from "lucide-react";

// Status Badge Styling Function
const getStatusBadgeStyle = (status = "") => {
  const s = status.toLowerCase();
  switch (s) {
    case "available":
      return "bg-emerald-500/10 text-emerald-600 border-emerald-500/30";
    case "booked":
      return "bg-amber-500/10 text-amber-600 border-amber-500/30";
    case "reserved":
      return "bg-blue-500/10 text-blue-600 border-blue-500/30";
    case "maintenance":
      return "bg-rose-500/10 text-rose-600 border-rose-500/30";
    default:
      return "bg-slate-500/10 text-slate-600 border-slate-500/30";
  }
};

const CarCategoryListDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Pure state logic - strictly untouched
  const { car, loading, error, handleDelete } = useCarDetails(id);
  console.log(car);
  const [copied, setCopied] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleCopyId = () => {
    if (car?._id) {
      navigator.clipboard.writeText(car._id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  /* --- 1. SKELETON LOADING VIEW --- */
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900/5 p-4 sm:p-6 lg:p-8 flex justify-center items-center">
        <div className="w-full max-w-5xl bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden animate-pulse">
          <div className="w-full h-80 sm:h-96 bg-slate-200" />
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="h-8 w-64 bg-slate-200 rounded-lg" />
                <div className="h-4 w-32 bg-slate-200 rounded-md" />
              </div>
              <div className="h-16 w-36 bg-slate-200 rounded-2xl" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-20 bg-slate-100 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* --- 2. ERROR STATE VIEW --- */
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex flex-col justify-center items-center">
        <div className="max-w-md w-full bg-white border border-rose-100 rounded-3xl p-8 text-center shadow-xl space-y-4">
          <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <AlertCircle size={28} />
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Error Loading Details
          </h3>
          <p className="text-sm text-slate-500">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Cars List
          </button>
        </div>
      </div>
    );
  }

  /* --- 3. NOT FOUND VIEW --- */
  if (!car) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex flex-col justify-center items-center">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-xl space-y-4">
          <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
            <Car size={28} />
          </div>
          <h3 className="text-xl font-black text-slate-900">Car Not Found</h3>
          <p className="text-sm text-slate-500">
            The requested vehicle record could not be found.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-emerald-700 transition cursor-pointer"
          >
            <ArrowLeft size={16} /> Return Back
          </button>
        </div>
      </div>
    );
  }

  const statusBadgeStyle = getStatusBadgeStyle(car.status);

  /* --- 4. MAIN HIGH-END DETAILS VIEW --- */
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 sm:p-6 lg:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* --- TOP BREADCRUMB & HEADER ACTIONS --- */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-bold text-xs uppercase tracking-wider bg-white border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-xs hover:border-emerald-300 transition duration-200 cursor-pointer"
            >
              <ArrowLeft size={16} /> Back
            </button>

            {/* Breadcrumb Info */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400">
              <span>Dashboard</span>
              <ChevronRight size={14} />
              <span>Cars</span>
              <ChevronRight size={14} />
              <span className="text-slate-800 truncate max-w-[150px]">
                {car.brand} {car.model}
              </span>
            </div>
          </div>

          {/* Vehicle ID Copy Badge */}
          <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-3 py-1.5 rounded-2xl shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              ID:
            </span>
            <code className="text-xs font-mono font-bold text-slate-700">
              {car._id?.slice(-8)}
            </code>
            <button
              onClick={handleCopyId}
              title="Copy Vehicle ID"
              className="p-1 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-emerald-600 transition cursor-pointer"
            >
              {copied ? (
                <Check size={14} className="text-emerald-600" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>

        {/* --- MAIN GLASS CARD CONTAINER --- */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50 overflow-hidden">
          {/* HERO IMAGE CONTAINER */}
          <div className="relative w-full h-80 sm:h-[440px] bg-slate-950 overflow-hidden group">
            <img
              src={car?.image ? `http://localhost:3000${car.image}` : null}
              alt={car?.model}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200";
              }}
            />

            {/* Multi-gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

            {/* Quick Action Overlay (Full Preview Button) */}
            {/* <button
              onClick={() => setIsPreviewOpen(true)}
              className="absolute top-5 left-5 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/20 shadow-lg inline-flex items-center gap-2 transition duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <Maximize2 size={14} /> Full View
            </button> */}

            {/* Status Overlay Badge */}
            <div className="absolute top-5 right-5">
              <span
                className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl ${statusBadgeStyle}`}
              >
                {car.status}
              </span>
            </div>

            {/* Floating Vehicle Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                  {car.classification || "Vehicle"}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  {car.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                {car.brand}{" "}
                <span className="text-emerald-400">{car.model}</span>
              </h1>
            </div>
          </div>

          {/* --- CONTENT BODY --- */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* PRICING HIGHLIGHT BANNER */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-wrap items-center justify-between gap-6 border border-slate-700/50 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-1">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={12} /> Rental Rates Overview
                </span>
                <h3 className="text-xl font-bold text-white">
                  Standard Price Plan
                </h3>
              </div>

              {/* Dual Rates Box */}
              <div className="flex items-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
                {/* Hourly Rate */}
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                    Hourly
                  </span>
                  <p className="text-lg sm:text-2xl font-black text-emerald-400">
                    ₹{Number(car.pricePerHour || 0).toLocaleString("en-IN")}
                    <span className="text-xs text-slate-300 font-normal">
                      {" "}
                      /hr
                    </span>
                  </p>
                </div>

                <div className="w-[1px] h-8 bg-white/20" />

                {/* Daily Rate */}
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                    Daily (Per Day)
                  </span>
                  <p className="text-lg sm:text-2xl font-black text-white">
                    ₹{Number(car.pricePerDay || 0).toLocaleString("en-IN")}
                    <span className="text-xs text-emerald-400 font-normal">
                      {" "}
                      /day
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* SPECIFICATIONS GRID */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">
                  Key Specifications
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SpecTile
                  icon={<Tag size={18} className="text-emerald-600" />}
                  title="Category"
                  value={car.category}
                />
                <SpecTile
                  icon={<ShieldCheck size={18} className="text-blue-600" />}
                  title="Classification"
                  value={car.classification}
                />
                <SpecTile
                  icon={<Fuel size={18} className="text-amber-600" />}
                  title="Fuel Type"
                  value={car.fuel}
                />
                <SpecTile
                  icon={<Gauge size={18} className="text-purple-600" />}
                  title="Transmission"
                  value={car.transmission}
                />
                <SpecTile
                  icon={<Users size={18} className="text-indigo-600" />}
                  title="Seats"
                  value={`${car.seats} Seats`}
                />
                <SpecTile
                  icon={<Clock size={18} className="text-emerald-600" />}
                  title="Price / Hour"
                  value={`₹${Number(car.pricePerHour || 0).toLocaleString("en-IN")}`}
                />
                <SpecTile
                  icon={<CalendarDays size={18} className="text-emerald-600" />}
                  title="Price / Day"
                  value={`₹${Number(car.pricePerDay || 0).toLocaleString("en-IN")}`}
                />
                <SpecTile
                  icon={<Car size={18} className="text-rose-600" />}
                  title="Status"
                  value={car.status}
                />
              </div>
            </div>

            {/* DESCRIPTION BOX */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest">
                <FileText size={16} className="text-emerald-600" />
                <span>Description & Details</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {car.description ||
                  "No specific details provided for this vehicle."}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => navigate(`/dashboard/cars/${car._id}/edit`)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.99] text-white text-xs font-black uppercase tracking-widest py-4 px-6 rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer"
              >
                <Edit3 size={16} />
                <span>Update Car Record</span>
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 active:scale-[0.99] text-white text-xs font-black uppercase tracking-widest py-4 px-6 rounded-2xl shadow-lg shadow-rose-600/20 transition-all duration-200 cursor-pointer"
              >
                <Trash2 size={16} />
                <span>Delete Car Record</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- FULLSCREEN IMAGE MODAL PREVIEW --- */}
      {isPreviewOpen && (
        <div
          onClick={() => setIsPreviewOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out animate-fadeIn"
        >
          <img
            src={`http://localhost:3000/uploads/cars/${car.image}`}
            alt={car.model}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

/* --- SPECIFICATION TILE COMPONENT --- */
const SpecTile = ({ icon, title, value }) => (
  <div className="bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300/80 rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-md transition duration-200">
    <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-100 shrink-0">
      {icon}
    </div>
    <div className="truncate">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        {title}
      </p>
      <h3 className="text-sm font-extrabold text-slate-800 mt-0.5 truncate">
        {value || "N/A"}
      </h3>
    </div>
  </div>
);

export default CarCategoryListDetails;
