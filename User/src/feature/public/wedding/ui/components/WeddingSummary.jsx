import { useWatch } from "react-hook-form";

const WeddingSummary = () => {

    const form = useWatch();

    const vehicle = form?.vehicle || {};

    const decoration = form?.decoration || {};

    const bookingDuration = form?.bookingDuration || {};

    const driver = form?.driver || {};

    const pricing = form?.pricing || {};

    const deliveryDetails = form?.deliveryDetails || {};

    const totalAmount = form?.totalAmount || 0;

    return (

        <div className="sticky top-24">

            <div className="bg-white rounded-2xl shadow border overflow-hidden">

                {/* Header */}

                <div className="bg-pink-600 text-white p-5">

                    <h2 className="text-xl font-bold">
                        Booking Summary
                    </h2>

                    <p className="text-sm mt-1 opacity-90">
                        Review your booking details
                    </p>

                </div>

                <div className="p-6 space-y-6">

                    {/* Vehicle */}

                    <div>

                        <h3 className="font-semibold mb-3">
                            Selected Car
                        </h3>

                        <div className="flex gap-3">

                            <img
                                src={
                                    vehicle.image ||
                                    "https://placehold.co/120x90"
                                }
                                alt=""
                                className="w-24 h-20 rounded-lg object-cover border"
                            />

                            <div>

                                <h4 className="font-semibold">
                                    {vehicle.brand} {vehicle.model}
                                </h4>

                                <p className="text-sm text-gray-500">
                                    {vehicle.classification}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {vehicle.seats} Seats
                                </p>

                                <p className="text-pink-600 font-semibold mt-1">
                                    ₹{vehicle.pricePerDay || 0} / Day
                                </p>

                            </div>

                        </div>

                    </div>

                    <hr />

                    {/* Decoration */}

                    <div>

                        <h3 className="font-semibold mb-2">
                            Decoration
                        </h3>

                        <div className="flex justify-between">

                            <span>

                                {decoration.decorationName || "No Decoration"}

                            </span>

                            <span>

                                ₹{decoration.decorationPrice || 0}

                            </span>

                        </div>

                    </div>

                    <hr />

                    {/* Booking */}

                    <div>

                        <h3 className="font-semibold mb-3">
                            Booking
                        </h3>

                        <div className="space-y-2 text-sm">

                            <div className="flex justify-between">

                                <span>Booking Type</span>

                                <span>

                                    {bookingDuration.bookingType || "-"}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Total Days</span>

                                <span>

                                    {bookingDuration.totalDays || 1}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Date</span>

                                <span>

                                    {form?.eventDetails?.eventDate
                                        ? new Date(
                                            form.eventDetails.eventDate
                                        ).toLocaleDateString()
                                        : "-"}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Time</span>

                                <span>

                                    {form?.eventDetails?.eventTime || "-"}{" "}

                                    {form?.eventDetails?.timePeriod}

                                </span>

                            </div>

                        </div>

                    </div>

                    <hr />

                    {/* Driver */}

                    <div>

                        <div className="flex justify-between">

                            <span>

                                Driver

                            </span>

                            <span>

                                {form?.driverRequired}

                            </span>

                        </div>

                        {form?.driverRequired === "Yes" && (

                            <div className="flex justify-between mt-2">

                                <span>

                                    Charge

                                </span>

                                <span>

                                    ₹{driver.totalCharge || 0}

                                </span>

                            </div>

                        )}

                    </div>

                    <hr />

                    {/* Delivery */}

                    <div>

                        <div className="flex justify-between">

                            <span>

                                Delivery

                            </span>

                            <span>

                                {form?.deliveryType}

                            </span>

                        </div>

                        {form?.deliveryType === "Home Delivery" && (

                            <div className="flex justify-between mt-2">

                                <span>

                                    Charge

                                </span>

                                <span>

                                    ₹{deliveryDetails.charge || 0}

                                </span>

                            </div>

                        )}

                    </div>

                    <hr />

                    {/* Price */}

                    <div>

                        <h3 className="font-semibold mb-3">
                            Price Details
                        </h3>

                        <div className="space-y-2">

                            <div className="flex justify-between">

                                <span>Car Rent</span>

                                <span>

                                    ₹{pricing.carPrice || 0}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Decoration</span>

                                <span>

                                    ₹{pricing.decorationPrice || 0}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Driver</span>

                                <span>

                                    ₹{pricing.driverCharge || 0}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Delivery</span>

                                <span>

                                    ₹{pricing.deliveryCharge || 0}

                                </span>

                            </div>

                        </div>

                    </div>

                    <hr />

                    {/* Total */}

                    <div className="flex justify-between text-xl font-bold text-pink-600">

                        <span>

                            Total

                        </span>

                        <span>

                            ₹{totalAmount}

                        </span>

                    </div>

                    {/* Policy */}

                    <div className="bg-green-50 border rounded-lg p-4 text-sm">

                        <p>

                            ✅ Free cancellation before 24 Hours

                        </p>

                        <p className="mt-2">

                            Late cancellation charge ₹500

                        </p>

                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-3 font-semibold"
                    >
                        Confirm Booking
                    </button>

                </div>

            </div>

        </div>

    );

};

export default WeddingSummary;