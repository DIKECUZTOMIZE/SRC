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
} from "lucide-react";

const BookingDetails = () => {
  const booking = {
    id: "BK-1001",
    status: "Pending",

    // Customer
    customer: "Rahul Sharma",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    address: "Golaghat, Assam",
    emergencyContact: "9123456789",

    // Driving License
    licenseNumber: "AS0120230012345",
    licenseImage: "/license.jpg",

    // Car
    car: "Hyundai Creta",
    carNumber: "AS01AB1234",
    seats: 5,
    pricePerHour: "₹300",
    pricePerDay: "₹2200",

    // Booking
    bookingDate: "18 Jul 2026",
    bookingType: "Per Day",
    pickupDate: "20 Jul 2026",
    pickupTime: "10:00 AM",
    returnDate: "22 Jul 2026",
    returnTime: "10:00 AM",
    duration: "2 Days",

    // Delivery
    deliveryType: "Self Pickup",
    pickupLocation: "Golaghat Office",
    deliveryCharge: "₹0",

    // Price
    carCharge: "₹4400",
    securityDeposit: "₹5000",
    amount: "₹9400",
    paymentStatus: "Pending",

    // Note
    specialRequest: "Need child seat",
  };

  return (
    <section className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg">
        {/* Header */}
        <div className="bg-blue-600 text-white rounded-t-2xl p-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Booking Details</h1>
            <p className="text-blue-100 mt-1">Booking ID : {booking.id}</p>
          </div>

          <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
            {booking.status}
          </span>
        </div>

        {/* Customer Details */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <User size={22} />
            Customer Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Info title="Full Name" value={booking.fullName} />

            <Info title="Mobile Number" value={booking.mobile} />

            <Info title="WhatsApp Number" value={booking.whatsapp} />

            <Info title="Email Address" value={booking.email} />

            <Info title="Current Address" value={booking.currentAddress} />

            <Info title="City" value={booking.city} />

            <Info title="State" value={booking.state} />

            <Info title="PIN Code" value={booking.pinCode} />

            <Info title="PS" value={booking.policeStation} />
          </div>
        </div>

        {/* Vehicle Details */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Car size={22} />
            Vehicle Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Info title="Vehicle Name" value={booking.carName} />

            <Info title="Service Type" value={booking.serviceType} />
            <Info title="Transmission" value={booking.transmission} />

            <Info title="Fuel Type" value={booking.fuelType} />

            <Info title="Seating Capacity" value={booking.seats} />

            {/* Booking Summary */}
            <div className="bg-slate-50 border rounded-xl p-5 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Booking Type</p>
                  <p className="font-semibold">{booking.bookingType}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {booking.bookingType === "Hour"
                      ? "Price / Hour"
                      : "Price / Day"}
                  </p>

                  <p className="font-semibold">
                    {booking.bookingType === "Hour"
                      ? booking.pricePerHour
                      : booking.pricePerDay}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {booking.bookingType === "Hour"
                      ? "Total Hours"
                      : "Total Days"}
                  </p>

                  <p className="font-semibold">
                    {booking.bookingType === "Hour"
                      ? booking.totalHours
                      : booking.totalDays}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Total Amount</p>

                  <p className="font-bold text-blue-600 text-lg">
                    {booking.totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Admin Actions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Admin Actions</h2>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition">
              <CheckCircle size={20} />
              Approve Booking
            </button>

            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition">
              <XCircle size={20} />
              Reject Booking
            </button>

            <a
              href={`tel:${booking.mobile}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
            >
              <Phone size={20} />
              Call Customer
            </a>

            <a
              href={`https://wa.me/91${booking.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl transition"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon, title, value }) => (
  <div className="border rounded-xl p-4 bg-slate-50">
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      {icon}
      {title}
    </div>

    <h3 className="font-semibold mt-2 text-slate-800">{value}</h3>
  </div>
);

export default BookingDetails;
