import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const BookingDuration = () => {
    const {
        register,
        watch,
        setValue,
    } = useFormContext();

    const bookingType = watch("bookingDuration.bookingType");

    const startDate = watch("bookingDuration.startDate");
    const endDate = watch("bookingDuration.endDate");

    useEffect(() => {

        if (
            bookingType === "Multiple Days" &&
            startDate &&
            endDate
        ) {

            const start = new Date(startDate);
            const end = new Date(endDate);

            const diff =
                Math.ceil(
                    (end - start) /
                    (1000 * 60 * 60 * 24)
                ) + 1;

            setValue(
                "bookingDuration.totalDays",
                diff > 0 ? diff : 1
            );

        }

        if (bookingType === "One Day") {
            setValue(
                "bookingDuration.totalDays",
                1
            );
        }

    }, [
        bookingType,
        startDate,
        endDate,
        setValue,
    ]);

    return (

        <div className="bg-white rounded-xl shadow border p-6">

            <h2 className="text-xl font-semibold mb-6">
                Booking Duration
            </h2>

            {/* Booking Type */}

            <div>

                <label className="block font-medium mb-3">
                    Booking Type
                </label>

                <div className="flex gap-6">

                    <label className="flex items-center gap-2">

                        <input
                            type="radio"
                            value="One Day"
                            {...register(
                                "bookingDuration.bookingType"
                            )}
                        />

                        One Day

                    </label>

                    <label className="flex items-center gap-2">

                        <input
                            type="radio"
                            value="Multiple Days"
                            {...register(
                                "bookingDuration.bookingType"
                            )}
                        />

                        Multiple Days

                    </label>

                </div>

            </div>

            {/* One Day */}

            {bookingType === "One Day" && (

                <div className="grid md:grid-cols-3 gap-5 mt-6">

                    <div>

                        <label className="block mb-2">
                            Required Date
                        </label>

                        <input
                            type="date"
                            className="w-full border rounded-lg p-3"
                            {...register(
                                "bookingDuration.startDate"
                            )}
                        />

                    </div>

                    <div>

                        <label className="block mb-2">
                            Required Time
                        </label>

                        <input
                            type="time"
                            className="w-full border rounded-lg p-3"
                            {...register(
                                "bookingDuration.startTime"
                            )}
                        />

                    </div>

                    <div>

                        <label className="block mb-2">
                            AM / PM
                        </label>

                        <select
                            className="w-full border rounded-lg p-3"
                            {...register(
                                "bookingDuration.timePeriod"
                            )}
                        >
                            <option>AM</option>
                            <option>PM</option>
                        </select>

                    </div>

                </div>

            )}

            {/* Multiple Days */}

            {bookingType === "Multiple Days" && (

                <div className="space-y-6 mt-6">

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="block mb-2">
                                Start Date
                            </label>

                            <input
                                type="date"
                                className="w-full border rounded-lg p-3"
                                {...register(
                                    "bookingDuration.startDate"
                                )}
                            />

                        </div>

                        <div>

                            <label className="block mb-2">
                                Start Time
                            </label>

                            <input
                                type="time"
                                className="w-full border rounded-lg p-3"
                                {...register(
                                    "bookingDuration.startTime"
                                )}
                            />

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="block mb-2">
                                End Date
                            </label>

                            <input
                                type="date"
                                className="w-full border rounded-lg p-3"
                                {...register(
                                    "bookingDuration.endDate"
                                )}
                            />

                        </div>

                        <div>

                            <label className="block mb-2">
                                End Time
                            </label>

                            <input
                                type="time"
                                className="w-full border rounded-lg p-3"
                                {...register(
                                    "bookingDuration.endTime"
                                )}
                            />

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="block mb-2">
                                AM / PM
                            </label>

                            <select
                                className="w-full border rounded-lg p-3"
                                {...register(
                                    "bookingDuration.timePeriod"
                                )}
                            >
                                <option>AM</option>
                                <option>PM</option>
                            </select>

                        </div>

                        <div>

                            <label className="block mb-2">
                                Total Days
                            </label>

                            <input
                                readOnly
                                className="w-full border rounded-lg bg-gray-100 p-3 font-semibold"
                                {...register(
                                    "bookingDuration.totalDays"
                                )}
                            />

                        </div>

                    </div>

                </div>

            )}

        </div>

    );
};

export default BookingDuration;