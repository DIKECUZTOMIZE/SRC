import { useFormContext } from "react-hook-form";

const CarSummary = () => {
  const { watch } = useFormContext();

  const vehicle = watch("vehicle");
  const decoration = watch("decoration");

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-xl font-semibold mb-6">Selected Vehicle</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Vehicle Image */}

        <div>
          <img
            src={vehicle?.image || "https://placehold.co/600x400?text=Car"}
            alt="vehicle"
            className="w-full h-52 object-cover rounded-lg"
          />
        </div>

        {/* Vehicle Details */}

        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">
            {vehicle?.brand || "Mercedes"} {vehicle?.model || "S-Class"}
          </h3>

          <p className="text-gray-500 mt-1">
            {vehicle?.classification || "Luxury Sedan"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="border rounded-lg p-3">
              <p className="text-sm text-gray-500">Fuel</p>

              <p className="font-medium">{vehicle?.fuel || "-"}</p>
            </div>

            <div className="border rounded-lg p-3">
              <p className="text-sm text-gray-500">Gear</p>

              <p className="font-medium">{vehicle?.transmission || "-"}</p>
            </div>

            <div className="border rounded-lg p-3">
              <p className="text-sm text-gray-500">Seats</p>

              <p className="font-medium">{vehicle?.seats || "-"}</p>
            </div>

            <div className="border rounded-lg p-3">
              <p className="text-sm text-gray-500">Price / Day</p>

              <p className="font-semibold text-green-600">
                ₹{vehicle?.pricePerDay || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decoration */}

      <div className="mt-8 border-t pt-6">
        <h2 className="text-lg font-semibold mb-4">Selected Decoration</h2>

        <div className="flex items-center gap-4">
          <img
            src={
              decoration?.decorationImage ||
              "https://placehold.co/120?text=Decoration"
            }
            alt="Decoration"
            className="w-24 h-24 rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold text-lg">
              {decoration?.decorationName || "No Decoration Selected"}
            </h3>

            <p className="text-gray-500">{decoration?.decorationType || ""}</p>

            <p className="text-xl text-green-600 font-bold mt-2">
              ₹{decoration?.decorationPrice || 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSummary;
