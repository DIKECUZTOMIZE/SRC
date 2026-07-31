import { useState, useMemo, useCallback } from "react";

// Default Configuration

const DEFAULT_MAX_PRICE = 20000;

const useVehicleFilters = (
    cars = [],
    defaultMaxPrice = DEFAULT_MAX_PRICE,
    priceField = ["pricePerDay"]
) => {
    // Filter State Management

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [selectedSeats, setSelectedSeats] = useState("");
    const [maxPrice, setMaxPrice] = useState(defaultMaxPrice);

    // Active Filter Status

    const isFilterActive = useMemo(() => {
        return (
            searchQuery !== "" ||
            selectedType !== "All" ||
            selectedSeats !== "" ||
            maxPrice !== defaultMaxPrice
        );
    }, [
        searchQuery,
        selectedType,
        selectedSeats,
        maxPrice,
        defaultMaxPrice,
    ]);

    // Reset All Filters

    const handleResetFilters = useCallback(() => {
        setSearchQuery("");
        setSelectedType("All");
        setSelectedSeats("");
        setMaxPrice(defaultMaxPrice);
    }, [defaultMaxPrice]);

    // Vehicle Filtering Logic

    const filteredCars = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return cars.filter((car) => {
            const searchableText = [
                car.brand,
                car.model,
                car.classification,
                car.fuel,
                car.transmission,
                car.status,
                car.seats,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                !query || searchableText.includes(query);

            const matchesType =
                selectedType === "All" ||
                car.classification === selectedType;

            const matchesSeats =
                !selectedSeats ||
                Number(car.seats) === Number(selectedSeats);

            const matchesPrice =
                Number(car[priceField] || 0) <= maxPrice;

            return (
                matchesSearch &&
                matchesType &&
                matchesSeats &&
                matchesPrice
            );
        });
    }, [
        cars,
        searchQuery,
        selectedType,
        selectedSeats,
        maxPrice,
        priceField
    ]);

    // Public Hook API

    return {
        filteredCars,

        searchQuery,
        setSearchQuery,

        selectedType,
        setSelectedType,

        selectedSeats,
        setSelectedSeats,

        maxPrice,
        setMaxPrice,

        isFilterActive,
        handleResetFilters,
    };
};

export default useVehicleFilters;