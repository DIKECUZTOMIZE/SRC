import React from "react";
import {
  CheckCircle2,
  Clock,
  Car,
  Calendar,
  MapPin,
  Phone,
  CreditCard,
  Hash,
  XCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";
import useMyBookingDetails from "../../hook/useMyBookingDetails";

const SelfBooking = () => {
  const navigate = useNavigate();
  const { booking, loading } = useMyBookingDetails();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-slate-700">
        <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-slate-500 font-medium text-sm">
          Loading Booking Details...
        </p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-4">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg text-center max-w-md w-full">
          <XCircle size={56} className="text-rose-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Booking Not Found
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            We couldn't retrieve any active booking information associated with
            this ID.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-emerald-200"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Accepted":
        return {
          bg: "bg-emerald-50 border-emerald-200 text-emerald-700",
          icon: <CheckCircle2 size={15} className="text-emerald-600" />,
        };
      case "Rejected":
        return {
          bg: "bg-rose-50 border-rose-200 text-rose-700",
          icon: <XCircle size={15} className="text-rose-600" />,
        };
      default:
        return {
          bg: "bg-amber-50 border-amber-200 text-amber-700",
          icon: <Clock size={15} className="text-amber-600" />,
        };
    }
  };

  const statusStyle = getStatusBadge(booking.bookingStatus);

  return (
    <section className="min-h-screen bg-slate-100/70 py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          {/* Header Banner - Clean Emerald/Teal Light Gradient */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-9 px-6 relative">
            <div className="flex flex-col items-center relative z-10">
              <div className="p-3 bg-white/15 rounded-full backdrop-blur-md mb-3 border border-white/20">
                <CheckCircle2 size={44} className="text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Booking Submitted
              </h1>
              <p className="mt-1.5 text-emerald-100 text-sm font-normal">
                Thank you for booking with us. Your reservation is registered.
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Booking ID */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <Hash size={16} className="text-emerald-600" />
                  <span>Booking ID</span>
                </div>
                <h3 className="font-mono text-base font-bold text-slate-900">
                  {booking.bookingId}
                </h3>
              </div>

              {/* Status */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all flex flex-col justify-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Booking Status
                </p>
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusStyle.bg}`}
                  >
                    {statusStyle.icon}
                    {booking.bookingStatus}
                  </span>
                </div>
              </div>

              {/* Vehicle */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <Car size={16} className="text-emerald-600" />
                  <span>Vehicle</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {booking.name}
                </h3>
              </div>

              {/* Mobile */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <Phone size={16} className="text-emerald-600" />
                  <span>Mobile</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {booking.customer?.mobile}
                </h3>
              </div>

              {/* Pickup Date */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <Calendar size={16} className="text-emerald-600" />
                  <span>Pickup Schedule</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {new Date(booking.pickupDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </h3>
                <span className="text-xs text-emerald-700 font-medium block mt-0.5">
                  {booking.pickupTime}
                </span>
              </div>

              {/* Booking Type */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Booking Duration
                </p>
                <h3 className="text-sm font-semibold text-slate-800">
                  {booking.quantity}{" "}
                  {booking.bookingType === "day" ? "Days" : "Hours"}
                </h3>
              </div>

              {/* Customer Address */}
              <div className="bg-slate-50/90 border border-slate-200 hover:border-emerald-300 rounded-2xl p-4 sm:p-5 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <div className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
                      <MapPin size={15} />
                    </div>
                    <span>Customer Address</span>
                  </div>
                  <span className="text-[10px] font-medium bg-slate-200/60 text-slate-600 px-2.5 py-0.5 rounded-full">
                    Primary
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  {booking.customer?.currentAddress}
                </h3>

                <p className="text-xs text-slate-500 font-medium mt-1.5 flex flex-wrap items-center gap-1">
                  <span>{booking.address?.city}</span>
                  {booking.address?.city && booking.address?.state && (
                    <span>•</span>
                  )}
                  <span>{booking.address?.state}</span>
                  {booking.address?.pinCode && (
                    <span className="text-slate-700 font-mono font-semibold ml-1 bg-slate-200/50 px-1.5 py-0.5 rounded text-[11px]">
                      {booking.address?.pinCode}
                    </span>
                  )}
                </p>
              </div>

              {/* Delivery Address */}
              {booking.deliveryAddress && (
                <div className="bg-slate-50/90 border border-slate-200 hover:border-teal-300 rounded-2xl p-4 sm:p-5 transition-all shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      <div className="p-1.5 bg-teal-100 text-teal-700 rounded-lg">
                        <MapPin size={15} />
                      </div>
                      <span>Delivery Location</span>
                    </div>
                    <span className="text-[10px] font-medium bg-teal-100/60 text-teal-700 px-2.5 py-0.5 rounded-full">
                      Drop-off
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {booking.deliveryAddress}
                  </h3>
                </div>
              )}

              {/* Amount */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <CreditCard size={16} className="text-emerald-600" />
                  <span>Total Amount</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-600">
                  ₹{booking.totalAmount}
                </h3>
              </div>

              {/* Payment Method */}
              <div className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 rounded-2xl p-4 transition-all flex flex-col justify-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Payment Method
                </p>
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100/80 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    {booking.paymentMethod}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Alert Banner */}
            <div
              className={`border rounded-2xl p-4 transition-all ${
                booking.bookingStatus === "Accepted"
                  ? "bg-emerald-50/80 border-emerald-200 text-emerald-900"
                  : booking.bookingStatus === "Rejected"
                    ? "bg-rose-50/80 border-rose-200 text-rose-900"
                    : "bg-amber-50/80 border-amber-200 text-amber-900"
              }`}
            >
              <h3 className="font-bold text-sm flex items-center gap-2">
                {booking.bookingStatus === "Accepted"
                  ? "Booking Accepted"
                  : booking.bookingStatus === "Rejected"
                    ? "Booking Rejected"
                    : "Booking Under Review"}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {booking.bookingStatus === "Accepted"
                  ? "Your booking has been accepted successfully."
                  : booking.bookingStatus === "Rejected"
                    ? "Your booking request has been rejected by admin."
                    : "Your booking request is under review. We will contact you soon."}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate("/home/order")}
                className="flex-1 group bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <span>Check Booking Status</span>
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* <a
                href="tel:+919999999999"
                className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold py-3 px-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <HelpCircle size={16} className="text-slate-500" />
                <span>Contact Support</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfBooking;
