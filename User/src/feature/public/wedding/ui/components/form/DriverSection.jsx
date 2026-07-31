import { useFormContext } from "react-hook-form";

const DriverSection = () => {

    const {
        register,
        watch,
    } = useFormContext();

    const driverRequired = watch("driverRequired");

    return (

        <div className="bg-white rounded-xl border shadow p-6">

            <h2 className="text-xl font-semibold mb-6">
                Driver Details
            </h2>

            {/* Driver Option */}

            <div className="mb-6">

                <label className="block font-medium mb-3">
                    Driver Required?
                </label>

                <div className="flex gap-8">

                    <label className="flex items-center gap-2">

                        <input
                            type="radio"
                            value="Yes"
                            {...register("driverRequired")}
                        />

                        Yes

                    </label>

                    <label className="flex items-center gap-2">

                        <input
                            type="radio"
                            value="No"
                            {...register("driverRequired")}
                        />

                        No

                    </label>

                </div>

            </div>

            {/* Driver Card */}

            {driverRequired === "Yes" && (

                <div className="border rounded-xl p-5 space-y-5">

                    <div className="flex gap-5 items-center">

                        <img
                            src={
                                watch("driver.image") ||
                                "https://placehold.co/120x120"
                            }
                            alt=""
                            className="w-24 h-24 rounded-full object-cover border"
                        />

                        <div>

                            <h3 className="text-lg font-semibold">
                                {watch("driver.name") || "Driver Name"}
                            </h3>

                            <p className="text-gray-500">
                                {watch("driver.mobile") || "Mobile Number"}
                            </p>

                        </div>

                    </div>

                    <div className="grid md:grid-cols-3 gap-5">

                        <div>

                            <label className="block mb-2">
                                Driver Charge / Day
                            </label>

                            <input
                                readOnly
                                {...register("driver.chargePerDay")}
                                className="w-full border rounded-lg bg-gray-100 p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">
                                Required Days
                            </label>

                            <input
                                type="number"
                                min="1"
                                {...register("driver.requiredDays")}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">
                                Total Driver Charge
                            </label>

                            <input
                                readOnly
                                {...register("driver.totalCharge")}
                                className="w-full border rounded-lg bg-gray-100 p-3"
                            />

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

};

export default DriverSection;