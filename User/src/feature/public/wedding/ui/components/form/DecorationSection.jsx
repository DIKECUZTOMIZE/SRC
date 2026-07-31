import { useFormContext } from "react-hook-form";

const DecorationSection = () => {

    const {
        register,
        watch,
    } = useFormContext();

    const decorationType = watch("decoration.decorationType");

    return (

        <div className="bg-white rounded-xl shadow border p-6">

            <h2 className="text-xl font-semibold mb-6">
                Decoration
            </h2>

            {/* Decoration Type */}

            <div className="mb-6">

                <label className="block font-medium mb-3">
                    Decoration Option
                </label>

                <div className="flex gap-6">

                    <label className="flex items-center gap-2">

                        <input
                            type="radio"
                            value="Our Decoration"
                            {...register(
                                "decoration.decorationType"
                            )}
                        />

                        Our Decoration

                    </label>

                    <label className="flex items-center gap-2">

                        <input
                            type="radio"
                            value="Custom Decoration"
                            {...register(
                                "decoration.decorationType"
                            )}
                        />

                        Custom Decoration

                    </label>

                </div>

            </div>

            {/* Our Decoration */}

            {decorationType === "Our Decoration" && (

                <div className="border rounded-xl p-4">

                    <h3 className="font-semibold mb-4">
                        Selected Decoration
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>

                            <label className="block mb-2">
                                Decoration Name
                            </label>

                            <input
                                type="text"
                                readOnly
                                className="w-full border rounded-lg bg-gray-100 p-3"
                                {...register(
                                    "decoration.decorationName"
                                )}
                            />

                        </div>

                        <div>

                            <label className="block mb-2">
                                Decoration Price
                            </label>

                            <input
                                type="number"
                                readOnly
                                className="w-full border rounded-lg bg-gray-100 p-3"
                                {...register(
                                    "decoration.decorationPrice"
                                )}
                            />

                        </div>

                    </div>

                    <div className="mt-5">

                        <label className="block mb-2">
                            Decoration Image
                        </label>

                        <img
                            src={
                                watch(
                                    "decoration.decorationImage"
                                ) ||
                                "https://placehold.co/600x350"
                            }
                            alt=""
                            className="h-56 rounded-xl object-cover border"
                        />

                    </div>

                </div>

            )}

            {/* Custom Decoration */}

            {decorationType === "Custom Decoration" && (

                <div className="space-y-5">

                    <div>

                        <label className="block mb-2">
                            Upload Decoration Images
                        </label>

                        <input
                            multiple
                            type="file"
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label className="block mb-2">
                            Decoration Instructions
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Describe your decoration requirements..."
                            {...register(
                                "decoration.customDecoration.note"
                            )}
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                </div>

            )}

        </div>

    );

};

export default DecorationSection;