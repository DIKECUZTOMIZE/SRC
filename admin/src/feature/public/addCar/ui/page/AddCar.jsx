import React from "react";
import { useParams } from "react-router";
import { useCarForm } from "../../hook/useAddCar";
import {
  Car,
  Tag,
  Layers,
  Fuel,
  Settings2,
  Users,
  Clock,
  DollarSign,
  Activity,
  Image as ImageIcon,
  FileText,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const AddCar = () => {
  const { id } = useParams();

  const { register, handleSubmit, errors, onSubmit, loading, isEdit } =
    useCarForm(id);

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6 font-sans select-none">
      <div className="bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-200/80 p-5 sm:p-8">
        {/* --- FORM HEADER --- */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 bg-emerald-50 border border-emerald-200/80 rounded-lg text-emerald-600">
                <Car size={18} />
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {isEdit ? "Update Vehicle Details" : "Add New Vehicle"}
              </h2>
            </div>
            <p className="text-xs font-semibold text-slate-400 pl-9">
              {isEdit
                ? "Modify existing vehicle attributes and operational status."
                : "Register a new vehicle into the active fleet management catalog."}
            </p>
          </div>

          <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-full">
            <Sparkles size={12} className="text-emerald-500 fill-emerald-500" />
            {isEdit ? "Edit Mode" : "Fleet Catalog"}
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Category */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Tag size={14} className="text-slate-400" />
                Vehicle Category <span className="text-emerald-500">*</span>
              </label>

              <select
                {...register("category", {
                  required: "Category is required",
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="">Select Category</option>
                <option value="Self Drive">Self Drive</option>
                <option value="Cab">Cab</option>
                <option value="Urbania">Urbania</option>
                <option value="Tours">Tours</option>
                <option value="Safari">Safari</option>
                <option value="Airport">Airport</option>
                <option value="Wedding">Wedding</option>
              </select>

              {errors.category?.message && (
                <p className="text-red-500 text-xs font-bold pt-0.5">
                  {errors.category?.message}
                </p>
              )}
            </div>

            {/* Brand */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Car size={14} className="text-slate-400" />
                Brand <span className="text-emerald-500">*</span>
              </label>

              <input
                placeholder="Mahindra"
                {...register("brand", {
                  required: "Brand required",
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />

              {errors.brand?.message && (
                <p className="text-red-500 text-xs font-bold pt-0.5">
                  {errors.brand?.message}
                </p>
              )}
            </div>

            {/* Model */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Car size={14} className="text-slate-400" />
                Model <span className="text-emerald-500">*</span>
              </label>

              <input
                placeholder="XUV700"
                {...register("model", {
                  required: "Model required",
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Classification */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Layers size={14} className="text-slate-400" />
                Classification
              </label>

              <select
                {...register("classification")}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="">Select Type</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="MUV">MUV</option>
                <option value="Luxury">Luxury</option>
                <option value="Traveller">Traveller</option>
              </select>
            </div>

            {/* Fuel */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Fuel size={14} className="text-slate-400" />
                Fuel Type
              </label>

              <select
                {...register("fuel")}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="">Select Fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="CNG">CNG</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Settings2 size={14} className="text-slate-400" />
                Transmission
              </label>

              <select
                {...register("transmission")}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>

            {/* Seats */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Users size={14} className="text-slate-400" />
                Seating Capacity
              </label>

              <input
                type="number"
                placeholder="e.g. 5"
                {...register("seats", {
                  valueAsNumber: true,
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Price Hour */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Clock size={14} className="text-slate-400" />
                Price Per Hour
              </label>

              <input
                type="number"
                placeholder="0.00"
                {...register("pricePerHour", {
                  valueAsNumber: true,
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Price Day */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <DollarSign size={14} className="text-slate-400" />
                Price Per Day
              </label>

              <input
                type="number"
                placeholder="0.00"
                {...register("pricePerDay", {
                  valueAsNumber: true,
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <Activity size={14} className="text-slate-400" />
                Status
              </label>

              <select
                {...register("status")}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Reserved">Reserved</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            {/* Image */}
            <div className="space-y-1.5 md:col-span-2 lg:col-span-2">
              <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
                <ImageIcon size={14} className="text-slate-400" />
                Vehicle Image
              </label>

              <input
                type="file"
                accept="image/*"
                {...register("image", {
                  validate: {
                    fileType: (files) =>
                      !files?.[0] ||
                      files[0]?.type?.startsWith("image/") ||
                      "Only image files allowed",
                  },
                })}
                className="w-full bg-slate-50/60 border border-slate-200 rounded-xl p-2 text-sm font-semibold text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-extrabold file:bg-slate-900 file:text-white hover:file:bg-slate-800 transition-all cursor-pointer"
              />

              {errors.image?.message && (
                <p className="text-red-500 text-xs font-bold pt-0.5">
                  {errors.image?.message}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5 pt-2">
            <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
              <FileText size={14} className="text-slate-400" />
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Enter detailed specifications, features, or notes about the vehicle..."
              {...register("description")}
              className="w-full bg-slate-50/60 border border-slate-200 rounded-xl p-3.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* Submit Action Bar */}
          <div className="flex items-center justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isEdit ? "Update Vehicle" : "Save Vehicle"}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(AddCar);