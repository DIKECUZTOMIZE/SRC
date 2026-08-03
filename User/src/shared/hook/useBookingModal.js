import { useState, useCallback } from "react";

const useBookingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);


    const openBookingModal = useCallback((vehicle) => {
        setSelectedVehicle(vehicle);
        setIsOpen(true);
    }, []);


    const closeBookingModal = useCallback(() => {
        setIsOpen(false);
        setSelectedVehicle(null);
    }, []);


    return {
        isOpen,
        selectedVehicle,
        openBookingModal,
        closeBookingModal,
    };
};


export default useBookingModal;