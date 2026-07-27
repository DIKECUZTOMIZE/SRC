import React, { useRef } from "react";
import {
  Car,
  Fuel,
  Settings,
  Users,
  Clock,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  CreditCard,
  Building,
  Printer,
  AlertCircle,
  Tag,
  Download,
} from "lucide-react";
import useMyBookingStatusDetails from "../../hook/useMyBookingStatusDetails";

// Helper function to format 24-hr time to 12-hr format with AM/PM
const formatTimeTo12Hr = (timeString) => {
  if (!timeString) return "-";

  if (/\b(AM|PM)\b/i.test(timeString)) return timeString;

  const [hoursStr, minutesStr] = timeString.split(":");
  let hours = parseInt(hoursStr, 10);
  const minutes = minutesStr ? minutesStr.slice(0, 2) : "00";

  if (isNaN(hours)) return timeString;

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  return `${formattedHours}:${minutes} ${ampm}`;
};

const SelfBookingStatusDetails = () => {
  const { booking, loading } = useMyBookingStatusDetails();
  const printRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
        <div className="w-10 h-10 border-3 border-slate-900 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Fetching booking status...
        </p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm w-full text-center shadow-xs">
          <AlertCircle size={36} className="text-rose-500 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-slate-900">
            Booking Not Found
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            We couldn't retrieve the details for this reservation.
          </p>
        </div>
      </div>
    );
  }

  const statusLower = booking.bookingStatus?.toLowerCase();

  return (
    <section className="min-h-screen bg-slate-50/60 p-4 sm:p-8 text-slate-800 antialiased print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto space-y-6" ref={printRef}>
        {/* Top Action Bar (Hidden when exporting/printing to PDF) */}
        <div className="flex items-center justify-between print:hidden">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Booking Details
          </span>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Download size={14} />
            Save as PDF / Print
          </button>
        </div>

        {/* Header Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden print:rounded-xl print:p-6">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono font-bold text-slate-300 border border-slate-700/60 print:text-black print:border-slate-300">
                  ID: #{booking.bookingId || "N/A"}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                {booking.name || "Vehicle Booking"}
              </h1>
            </div>

            <div>
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-2xs border ${
                  statusLower === "pending"
                    ? "bg-amber-400/10 text-amber-300 border-amber-400/30"
                    : statusLower === "accepted" || statusLower === "approved"
                      ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/30"
                      : statusLower === "rejected"
                        ? "bg-rose-400/10 text-rose-300 border-rose-400/30"
                        : "bg-slate-700 text-slate-300 border-slate-600"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    statusLower === "pending"
                      ? "bg-amber-400"
                      : statusLower === "accepted" || statusLower === "approved"
                        ? "bg-emerald-400"
                        : statusLower === "rejected"
                          ? "bg-rose-400"
                          : "bg-slate-400"
                  }`}
                />
                {booking.bookingStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Admin Remark (If Present) */}
        {booking.adminRemark && (
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 text-amber-900 print:rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle
                size={18}
                className="text-amber-600 shrink-0 mt-0.5"
              />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-0.5">
                  Admin Remark
                </h4>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  {booking.adminRemark}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 print:grid-cols-3">
          {/* Main Info Columns */}
          <div className="md:col-span-2 space-y-6 print:col-span-2">
            {/* Vehicle Specifications */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 print:rounded-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-slate-100 text-slate-700 rounded-xl print:hidden">
                  <Car size={18} />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Vehicle Specifications
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5 print:grid-cols-2">
                <DetailCard
                  label="Vehicle"
                  value={booking.name}
                  icon={<Car size={13} />}
                />
                <DetailCard
                  label="Fuel"
                  value={booking.fuel}
                  icon={<Fuel size={13} />}
                />
                <DetailCard
                  label="Transmission"
                  value={booking.transmission}
                  icon={<Settings size={13} />}
                />
                <DetailCard
                  label="Seats"
                  value={booking.seats}
                  icon={<Users size={13} />}
                />
                <DetailCard
                  label="Booking Type"
                  value={booking.bookingType}
                  icon={<Tag size={13} />}
                />
                <DetailCard
                  label="Quantity"
                  value={booking.quantity}
                  icon={<Clock size={13} />}
                />
              </div>
            </div>
            {/* Pickup & Schedule */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 print:rounded-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-slate-100 text-slate-700 rounded-xl print:hidden">
                  <Clock size={18} />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Pickup & Schedule
                </h2>
              </div>

              {/* Unified 2-column grid */}
              <div className="grid sm:grid-cols-2 gap-3.5 print:grid-cols-2">
                <DetailCard
                  label="Date"
                  value={
                    booking.pickupDate
                      ? new Date(booking.pickupDate).toLocaleDateString()
                      : "-"
                  }
                  icon={<Calendar size={13} />}
                />

                <DetailCard
                  label="Time"
                  value={formatTimeTo12Hr(booking.pickupTime)}
                  icon={<Clock size={13} />}
                />

                <DetailCard
                  label="Delivery Type"
                  value={booking.deliveryType}
                  icon={<Car size={13} />}
                />

                {booking.deliveryType === "Drop" ? (
                  <div className="sm:col-span-2 print:col-span-2">
                    <DetailCard
                      label="Delivery Address"
                      value={booking.deliveryAddress || "-"}
                      icon={<MapPin size={13} />}
                    />
                  </div>
                ) : (
                  /* If not "Drop", this keeps grid balance cleanly */
                  <DetailCard
                    label="Delivery Address"
                    value="N/A (Self Pickup)"
                    icon={<MapPin size={13} />}
                  />
                )}
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 print:rounded-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-slate-100 text-slate-700 rounded-xl print:hidden">
                  <User size={18} />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Customer Details
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5 print:grid-cols-2">
                <DetailCard
                  label="Name"
                  value={booking.customer?.name}
                  icon={<User size={13} />}
                />
                <DetailCard
                  label="Mobile"
                  value={booking.customer?.mobile}
                  icon={<Phone size={13} />}
                />
                <DetailCard
                  label="Email"
                  value={booking.customer?.email}
                  icon={<Mail size={13} />}
                />
                <DetailCard
                  label="Whatsapp"
                  value={booking.customer?.whatsapp}
                  icon={<MessageCircle size={13} />}
                />
                <div className="sm:col-span-2 print:col-span-2">
                  <DetailCard
                    label="Address"
                    value={booking.customer?.currentAddress}
                    icon={<MapPin size={13} />}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Columns */}
          <div className="space-y-6 print:col-span-1">
            {/* Location Info */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 print:rounded-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-slate-100 text-slate-700 rounded-xl print:hidden">
                  <Building size={18} />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Location Info
                </h2>
              </div>

              <div className="space-y-3">
                <DetailCard
                  label="City / State"
                  value={
                    booking.address?.city || booking.address?.state
                      ? `${booking.address?.city || ""}${
                          booking.address?.city && booking.address?.state
                            ? ", "
                            : ""
                        }${booking.address?.state || ""}`
                      : "-"
                  }
                  icon={<Building size={13} />}
                />
                <DetailCard
                  label="Police Station"
                  value={booking.address?.policeStation}
                  icon={<ShieldCheck size={13} />}
                />
                <DetailCard
                  label="Pin Code"
                  value={booking.address?.pinCode}
                  icon={<MapPin size={13} />}
                />
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 print:rounded-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl print:hidden">
                  <CreditCard size={18} />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Payment Summary
                </h2>
              </div>

              <div className="space-y-3 text-xs font-medium">
                <div className="flex justify-between items-center text-slate-500">
                  <span>Payment Method</span>
                  <span className="font-semibold text-slate-800 uppercase">
                    {booking.paymentMethod || "-"}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-500">
                  <span>Base Amount</span>
                  <span className="font-semibold text-slate-800">
                    ₹{booking.baseAmount || 0}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-500">
                  <span>Delivery Charge</span>
                  <span className="font-semibold text-emerald-600">
                    ₹{booking.deliveryCharge || 0}
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-900">
                    Total Amount
                  </span>
                  <span className="text-xl font-black text-slate-900">
                    ₹{booking.totalAmount || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Display Field Component */
const DetailCard = ({ label, value, icon }) => {
  return (
    <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-3 flex flex-col justify-between print:bg-white print:border-slate-200">
      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-semibold uppercase tracking-wider print:text-slate-500">
        {icon && <span className="print:hidden">{icon}</span>}
        <span>{label}</span>
      </div>
      <h3 className="font-bold text-slate-800 text-xs mt-1.5 truncate print:text-slate-900">
        {value ?? "-"}
      </h3>
    </div>
  );
};

export default SelfBookingStatusDetails;
