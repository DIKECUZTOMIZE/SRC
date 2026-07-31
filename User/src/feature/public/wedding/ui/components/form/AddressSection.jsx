import { useFormContext } from "react-hook-form";

const AddressSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-5">
      <h2 className="text-lg font-semibold border-b pb-3">
        Address Details
      </h2>

      <div>
        <label className="block mb-1 font-medium">
          Current Address
        </label>

        <textarea
          rows={3}
          {...register("address.currentAddress")}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          placeholder="House No, Road, Area..."
        />

        <p className="text-red-500 text-sm">
          {errors.address?.currentAddress?.message}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block mb-1 font-medium">
            City
          </label>

          <input
            {...register("address.city")}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="City"
          />

          <p className="text-red-500 text-sm">
            {errors.address?.city?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            State
          </label>

          <input
            {...register("address.state")}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="State"
          />

          <p className="text-red-500 text-sm">
            {errors.address?.state?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            PIN Code
          </label>

          <input
            {...register("address.pinCode")}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="PIN Code"
          />

          <p className="text-red-500 text-sm">
            {errors.address?.pinCode?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;