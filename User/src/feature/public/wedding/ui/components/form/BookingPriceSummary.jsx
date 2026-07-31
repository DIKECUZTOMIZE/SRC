import { useWatch } from "react-hook-form";

const BookingPriceSummary = () => {
  const form = useWatch();

  const totalDays = Number(form?.bookingDuration?.totalDays || 1);

  const carPricePerDay = Number(form?.vehicle?.pricePerDay || 0);

  const decorationPrice = Number(
    form?.decoration?.decorationPrice || 0
  );

  const driverCharge = Number(
    form?.driver?.totalCharge || 0
  );

  const deliveryCharge = Number(
    form?.deliveryDetails?.charge || 0
  );

  const carTotal = carPricePerDay * totalDays;

  const total =
    carTotal +
    decorationPrice +
    driverCharge +
    deliveryCharge;

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-5">
        Booking Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Car Rent</span>
          <span>₹{carTotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Decoration</span>
          <span>₹{decorationPrice}</span>
        </div>

        <div className="flex justify-between">
          <span>Driver</span>
          <span>₹{driverCharge}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₹{deliveryCharge}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold text-pink-600">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>
    </div>
  );
};

export default BookingPriceSummary;