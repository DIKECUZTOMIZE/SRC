import { useFormContext } from "react-hook-form";

const CustomerSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white rounded-xl border shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Customer Details</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Full Name */}

        <div>
          <label className="block mb-2 font-medium">Full Name</label>

          <input
            type="text"
            placeholder="Enter Full Name"
            {...register("customer.name")}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {errors.customer?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customer.name.message}
            </p>
          )}
        </div>

        {/* Mobile */}

        <div>
          <label className="block mb-2 font-medium">Mobile Number</label>

          <input
            type="tel"
            placeholder="9876543210"
            {...register("customer.mobile")}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {errors.customer?.mobile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customer.mobile.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 font-medium">Email Address</label>

          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("customer.email")}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {errors.customer?.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customer.email.message}
            </p>
          )}
        </div>

        {/* WhatsApp */}

        <div>
          <label className="block mb-2 font-medium">WhatsApp Number</label>

          <input
            type="tel"
            placeholder="9876543210"
            {...register("customer.whatsapp")}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {errors.customer?.whatsapp && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customer.whatsapp.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
