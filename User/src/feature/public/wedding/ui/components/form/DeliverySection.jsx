import { useFormContext } from "react-hook-form";

const DeliverySection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const deliveryType = watch("deliveryType");

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-5">
      <h2 className="text-xl font-semibold border-b pb-3">
        Delivery Option
      </h2>

      <div>
        <label className="block mb-2 font-medium">
          Delivery Type
        </label>

        <select
          {...register("deliveryType")}
          className="w-full border rounded-lg p-3"
        >
          <option value="Self Pickup">
            Self Pickup
          </option>

          <option value="Home Delivery">
            Home Delivery
          </option>
        </select>
      </div>

      {deliveryType === "Home Delivery" && (
        <>
          <div>
            <label className="block mb-2 font-medium">
              Delivery Address
            </label>

            <textarea
              rows={3}
              {...register("deliveryDetails.address", {
                required:
                  "Delivery address is required",
              })}
              className="w-full border rounded-lg p-3"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors?.deliveryDetails?.address?.message}
            </p>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Delivery Charge
            </label>

            <input
              type="number"
              readOnly
              value={500}
              className="w-full border rounded-lg p-3 bg-gray-100"
            />

            <p className="text-sm text-gray-500 mt-1">
              Delivery charge will be added automatically.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DeliverySection;