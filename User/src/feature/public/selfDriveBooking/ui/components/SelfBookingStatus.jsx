import React from "react";
import { useNavigate } from "react-router";
import {
  Calendar,
  Car,
  Hash,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  IndianRupee,
  FileSearch,
} from "lucide-react";
import useMyBookingsStatusList from "../../hook/useMyBookingsStatusList";

const SelfBookingStatus = () => {
  const navigate = useNavigate();
  const { bookings = [], loading } = useMyBookingsStatusList();

  /* Premium Skeleton Loader */
  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50/70 py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="h-9 w-64 bg-slate-200/80 rounded-xl animate-pulse mx-auto" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm animate-pulse space-y-6"
              >
                <div className="flex justify-between items-center">
                  <div className="h-6 w-36 bg-slate-200/80 rounded-lg" />
                  <div className="h-7 w-24 bg-slate-200/80 rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="h-12 bg-slate-100 rounded-2xl" />
                  <div className="h-12 bg-slate-100 rounded-2xl" />
                  <div className="h-12 bg-slate-100 rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* Empty State UI */
  if (!bookings.length) {
    return (
      <section className="min-h-screen bg-slate-50/70 flex justify-center items-center p-4">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-md w-full shadow-xl">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <FileSearch size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No Bookings Found</h3>
          <p className="text-slate-500 text-sm mb-6">
            You haven't placed any car rental reservations yet.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-emerald-200"
          >
            Explore Vehicles
          </button>
        </div>
      </section>
    );
  }

  const getStatusBadge = (status) => {
    const value = status?.toLowerCase();

    if (value === "pending") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/80">
          <Clock size={14} className="text-amber-600" />
          Pending
        </span>
      );
    }

    if (value === "accepted" || value === "approved") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
          <CheckCircle2 size={14} className="text-emerald-600" />
          Accepted
        </span>
      );
    }

    if (value === "rejected") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">
          <XCircle size={14} className="text-rose-600" />
          Rejected
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
        {status || "Unknown"}
      </span>
    );
  };

  return (
    <section className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Booking Status
          </h2>
          <p className="text-slate-500 text-sm mt-1.5 font-medium">
            Track and manage your upcoming vehicle reservations
          </p>
        </div>

        {/* Booking Cards List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              onClick={() =>
                navigate(`my-booking-status-details/${booking._id}`)
              }
              className="group bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 cursor-pointer hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover accent strip */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Header */}
              <div className="flex justify-between items-center flex-wrap gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100/80 text-slate-600 rounded-xl group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    <Hash size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider block">
                      Booking ID
                    </span>
                    <h3 className="font-mono text-base font-bold text-slate-900">
                      {booking.bookingId}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(booking.bookingStatus)}
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
                
                {/* Vehicle */}
                <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3.5 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Car size={15} className="text-emerald-600" />
                    Vehicle
                  </p>
                  <h4 className="font-semibold text-slate-900 text-sm truncate">
                    {booking.name}
                  </h4>
                </div>

                {/* Pickup Date */}
                <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3.5 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Calendar size={15} className="text-emerald-600" />
                    Pickup Date
                  </p>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    {new Date(booking.pickupDate).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </h4>
                </div>

                {/* Amount */}
                <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3.5 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <IndianRupee size={15} className="text-emerald-600" />
                    Total Amount
                  </p>
                  <h4 className="font-bold text-emerald-600 text-sm">
                    ₹{booking.totalAmount}
                  </h4>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelfBookingStatus;