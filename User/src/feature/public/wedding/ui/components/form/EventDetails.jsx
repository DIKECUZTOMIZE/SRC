import { useFormContext } from "react-hook-form";

const EventDetails = () => {

    const {
        register,
        watch,
    } = useFormContext();

    const bookingFor = watch("bookingFor");

    return (

        <div className="bg-white rounded-xl shadow border p-6">

            <h2 className="text-xl font-semibold mb-6">
                Event Details
            </h2>

            {/* Event Type */}

            <div className="mb-6">

                <label className="block font-medium mb-2">
                    Booking For
                </label>

                <select
                    {...register("bookingFor")}
                    className="w-full border rounded-lg p-3"
                >
                    <option value="">
                        Select Event
                    </option>

                    <option value="Wedding">
                        Wedding
                    </option>

                    <option value="Engagement">
                        Engagement
                    </option>

                    <option value="Reception">
                        Reception
                    </option>

                    <option value="Pre Wedding Shoot">
                        Pre Wedding Shoot
                    </option>

                    <option value="Event">
                        Event
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>

            </div>

            {/* Custom Event */}

            {bookingFor === "Other" && (

                <div className="mb-6">

                    <label className="block font-medium mb-2">
                        Custom Event Name
                    </label>

                    <input
                        type="text"
                        placeholder="Birthday Party"
                        {...register("customEventName")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

            )}

            {/* Venue */}

            <div className="grid md:grid-cols-2 gap-5">

                <div>

                    <label className="block font-medium mb-2">
                        Venue Name
                    </label>

                    <input
                        type="text"
                        placeholder="Royal Palace"
                        {...register("eventDetails.venueName")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block font-medium mb-2">
                        Venue Address
                    </label>

                    <input
                        type="text"
                        placeholder="Full Venue Address"
                        {...register("eventDetails.venueAddress")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

            </div>

            {/* Pickup Drop */}

            <div className="grid md:grid-cols-2 gap-5 mt-6">

                <div>

                    <label className="block font-medium mb-2">
                        Pickup Location
                    </label>

                    <input
                        type="text"
                        placeholder="Pickup Address"
                        {...register("eventDetails.pickupLocation")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block font-medium mb-2">
                        Drop Location
                    </label>

                    <input
                        type="text"
                        placeholder="Drop Address"
                        {...register("eventDetails.dropLocation")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

            </div>

            {/* Event Date Time */}

            <div className="grid md:grid-cols-3 gap-5 mt-6">

                <div>

                    <label className="block font-medium mb-2">
                        Event Date
                    </label>

                    <input
                        type="date"
                        {...register("eventDetails.eventDate")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block font-medium mb-2">
                        Event Time
                    </label>

                    <input
                        type="time"
                        {...register("eventDetails.eventTime")}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block font-medium mb-2">
                        AM / PM
                    </label>

                    <select
                        {...register("eventDetails.timePeriod")}
                        className="w-full border rounded-lg p-3"
                    >
                        <option value="AM">
                            AM
                        </option>

                        <option value="PM">
                            PM
                        </option>

                    </select>

                </div>

            </div>

        </div>

    );

};

export default EventDetails;