import React from "react";
import {
  User,
  Car,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  FileText,
  Users,
  Fuel,
  Settings,
  CheckCircle,
  XCircle,
  MessageCircle,
  Trash2,
  Pencil,
  Printer,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Check,
  Save,
  Navigation,
  IndianRupee,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useBookingDetails } from "../../hook/useBookingDetails";
import useBookingStatus from "../../hook/useBookingStatus";
import useDeleteBooking from "../../hook/useDeleteBooking";

const BookingDetails = () => {
  const navigate = useNavigate();

  const {
    booking,
    loading,
    setBooking,
    formData,
    handleChange,
    handleUpdate,
    updateLoading,
    editMode,
    setEditMode,
  } = useBookingDetails();

  const { handleDelete, loading: deleteLoading } = useDeleteBooking();
  const { handleUpdateStatus, loading: statusLoading } = useBookingStatus();

  // Printable PDF Handler
  const handlePrint = () => {
    window.print();
  };

  /* Premium Skeleton Loader */
  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50/50 p-4 sm:p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="h-28 bg-slate-200/70 rounded-2xl animate-pulse" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="h-64 bg-slate-200/60 rounded-2xl animate-pulse" />
              <div className="h-48 bg-slate-200/60 rounded-2xl animate-pulse" />
            </div>
            <div className="h-96 bg-slate-200/60 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  /* Empty State UI */
  if (!booking) {
    return (
      <section className="min-h-screen bg-slate-50/50 flex items-center justify-center p-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 max-w-md w-full text-center shadow-xs space-y-4">
          <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto">
            <XCircle size={24} />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Booking Not Found
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            The booking record you are looking for might have been deleted or
            does not exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-all cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </button>
        </div>
      </section>
    );
  }

  /* Status Badge Helper */
  const getStatusBadge = (status) => {
    const val = status?.toLowerCase();
    if (val === "pending") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Pending Approval
        </span>
      );
    }
    if (val === "approved" || val === "accepted") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Booking Confirmed
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/80 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-rose-500" />
        Booking Declined
      </span>
    );
  };

  return (
    <section className="min-h-screen bg-slate-50/50 p-4 sm:p-8 text-slate-800 antialiased print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Navigation & Print Action Bar (Hidden in Print) */}
        <div className="flex items-center justify-between print:hidden">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft size={14} /> Back
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              <Printer size={14} />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Hero Invoice Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-slate-800/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono font-bold text-slate-300 border border-slate-700/60">
                  #{booking.bookingId || "N/A"}
                </span>
                <span className="text-slate-400 text-xs font-medium">
                  • Reservation File
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                {formData.customer?.name || "Client Booking"}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {getStatusBadge(booking.bookingStatus)}
            </div>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Details (Col-2) */}
          <div className="md:col-span-2 space-y-6">
            {/* Customer Information Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-slate-100 text-slate-700 rounded-xl">
                    <User size={18} />
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    Customer Profile
                  </h2>
                </div>
                {editMode && (
                  <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Editing Mode
                  </span>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Info
                  title="Full Name"
                  value={formData.customer?.name}
                  name="customer.name"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<User size={14} />}
                />
                <Info
                  title="Mobile Number"
                  value={formData.customer?.mobile}
                  name="customer.mobile"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Phone size={14} />}
                />
                <Info
                  title="WhatsApp Contact"
                  value={formData.customer?.whatsapp}
                  name="customer.whatsapp"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<MessageCircle size={14} />}
                />
                <Info
                  title="Email Address"
                  value={formData.customer?.email}
                  name="customer.email"
                  type="email"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Mail size={14} />}
                />
                <Info
                  title="Current Address"
                  value={formData.customer?.currentAddress}
                  name="customer.currentAddress"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<MapPin size={14} />}
                />
                <Info
                  title="City"
                  value={formData.address?.city}
                  name="address.city"
                  editMode={editMode}
                  onChange={handleChange}
                />
                <Info
                  title="State"
                  value={formData.address?.state}
                  name="address.state"
                  editMode={editMode}
                  onChange={handleChange}
                />
                <Info
                  title="PIN Code"
                  value={formData.address?.pinCode}
                  name="address.pinCode"
                  editMode={editMode}
                  onChange={handleChange}
                />
                <Info
                  title="Police Station Jurisdiction"
                  value={formData.address?.policeStation}
                  name="address.policeStation"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<ShieldCheck size={14} />}
                />
              </div>
            </div>

            {/* Vehicle & Reservation Specifications Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-slate-100 text-slate-700 rounded-xl">
                  <Car size={18} />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Vehicle Specifications
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Info
                  title="Vehicle Model"
                  value={formData.name}
                  name="name"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Car size={14} />}
                />
                <Info
                  title="Service Type"
                  value={formData.serviceType}
                  name="serviceType"
                  editMode={editMode}
                  onChange={handleChange}
                />
                <Info
                  title="Transmission"
                  value={formData.transmission}
                  name="transmission"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Settings size={14} />}
                />
                <Info
                  title="Fuel System"
                  value={formData.fuel}
                  name="fuel"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Fuel size={14} />}
                />
                <Info
                  title="Seating Capacity"
                  value={formData.seats}
                  name="seats"
                  type="number"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Users size={14} />}
                />
                <Info
                  title="Booking Duration Units"
                  value={formData.quantity}
                  name="quantity"
                  type="number"
                  editMode={editMode}
                  onChange={handleChange}
                  icon={<Clock size={14} />}
                />
                {formData.deliveryType === "Drop" && (
                  <Info
                    title="Delivery Location Address"
                    value={formData.deliveryAddress}
                    name="deliveryAddress"
                    type="text"
                    editMode={editMode}
                    onChange={handleChange}
                    icon={<Navigation size={14} />}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Financial & Sidebar Panel (Col-1) */}
          <div className="space-y-6">
            {/* Financial Summary Box */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                  <CreditCard size={18} />
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Payment Overview
                </h3>
              </div>

              <div className="space-y-3.5 text-xs font-medium">

  {/* 1 Booking Basis */}
  <div className="flex justify-between items-center text-slate-500">
    <span>Booking Basis</span>
    <span className="font-semibold text-slate-800 capitalize">
      {booking.bookingType || "N/A"}
    </span>
  </div>


  {/* 2 Duration */}
  <div className="flex justify-between items-center text-slate-500">
    <span>Total Duration</span>
    <span className="font-semibold text-slate-800">
      {booking.quantity || 0}{" "}
      {booking.bookingType === "hour" ? "Hours" : "Days"}
    </span>
  </div>


  {/* 3 Unit Rate */}
  <div className="flex justify-between items-center text-slate-500">
    <span>Unit Rate</span>
    <span className="font-semibold text-slate-800">
      ₹
      {booking.bookingType === "hour"
        ? (booking.pricePerHour || 0).toLocaleString("en-IN")
        : (booking.pricePerDay || 0).toLocaleString("en-IN")}
    </span>
  </div>


  {/* 4 Pickup Schedule */}
  <div className="flex justify-between items-center text-slate-500">
    <span>Pickup Schedule</span>
    <span className="font-semibold text-slate-800">
      {booking.pickupDate
        ? new Date(booking.pickupDate).toLocaleDateString("en-IN")
        : "N/A"}{" "}
      {booking.pickupTime ? `(${booking.pickupTime})` : ""}
    </span>
  </div>


  {/* 5 Delivery Method */}
  <div className="flex justify-between items-center text-slate-500">
    <span>Delivery Method</span>
    <span className="font-semibold text-slate-800">
      {booking.deliveryType === "Drop"
        ? "Home Delivery"
        : "Self Pickup"}
    </span>
  </div>


  {/* 6 Delivery Details */}
  {booking.deliveryType === "Drop" && (
    <>
      <div className="flex justify-between items-center text-slate-500">
        <span>Delivery Distance</span>
        <span className="font-semibold text-slate-800">
          {booking.distance || 0} KM
        </span>
      </div>


      <div className="flex justify-between items-center text-slate-500">
        <span>Delivery Fee</span>
        <span className="font-semibold text-emerald-600">
          ₹{(booking.deliveryCharge || 0).toLocaleString("en-IN")}
        </span>
      </div>
    </>
  )}


  {/* 7 Payment Method */}
  <div className="flex justify-between items-center text-slate-500">
    <span>Payment Method</span>
    <span className="font-semibold text-slate-800 uppercase tracking-wider bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md text-[10px]">
      {booking.paymentMethod ||
        booking.paymentMode ||
        "Online / UPI"}
    </span>
  </div>


  {/* Final Total */}
  <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
    <span className="text-sm font-bold text-slate-900">
      Total Payable
    </span>

    <span className="text-xl font-black text-slate-900">
      ₹{(booking.totalAmount || 0).toLocaleString("en-IN")}
    </span>
  </div>

</div>
            </div>

            {/* Quick Actions Panel (Hidden in Print) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 print:hidden">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Control Panel
              </h3>

              <div className="space-y-2.5">
                {/* Status Controls */}
                {booking.bookingStatus === "Pending" && (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      disabled={statusLoading}
                      onClick={async () => {
                        const updated = await handleUpdateStatus(
                          booking._id,
                          "Approved",
                        );
                        if (updated) setBooking(updated);
                      }}
                      className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                    >
                      <CheckCircle size={15} />
                      Approve
                    </button>

                    <button
                      disabled={statusLoading}
                      onClick={async () => {
                        const updated = await handleUpdateStatus(
                          booking._id,
                          "Rejected",
                        );
                        if (updated) setBooking(updated);
                      }}
                      className="flex items-center justify-center gap-1.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                    >
                      <XCircle size={15} />
                      Reject
                    </button>
                  </div>
                )}

                {/* Edit Controls */}
                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Pencil size={15} /> Edit Details
                  </button>
                ) : (
                  <button
                    onClick={handleUpdate}
                    disabled={updateLoading}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Save size={15} />
                    {updateLoading ? "Saving Changes..." : "Save Record"}
                  </button>
                )}

                {/* Communication */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {booking.customer?.mobile && (
                    <a
                      href={`tel:${booking.customer.mobile}`}
                      className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                    >
                      <Phone size={14} /> Call
                    </a>
                  )}

                  {booking.customer?.whatsapp && (
                    <a
                      href={`https://wa.me/91${booking.customer.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/60 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  )}
                </div>

                {/* Delete Button */}
                <div className="border-t border-slate-100 pt-2">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    disabled={deleteLoading}
                    className="w-full flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/60 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Trash2 size={14} />
                    {deleteLoading ? "Deleting..." : "Delete Booking"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Information Component */
const Info = ({
  title,
  value,
  editMode,
  name,
  onChange,
  type = "text",
  icon,
}) => {
  return (
    <div className="bg-slate-50/70 border border-slate-200/70 rounded-xl p-3 flex flex-col justify-between transition-all focus-within:border-slate-400 focus-within:bg-white">
      <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </div>

      {editMode ? (
        <input
          type={type}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 mt-1.5 text-xs font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
        />
      ) : (
        <p className="font-bold text-slate-900 text-xs mt-1.5 truncate">
          {value || "-"}
        </p>
      )}
    </div>
  );
};

export default BookingDetails;
