/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router";
import { UpdateBooking } from "../api/bookingListApi";

const useUpdateBooking = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = async (id, data) => {
    try {
 
      const response = await UpdateBooking(id, data);
 
      alert(response?.message || "Booking updated successfully");

      // navigate("/dashboard/bookings");

      return response;
    } catch (error) {
      console.error("Update Booking Error:", error);

      alert(error?.response?.data?.message || "Failed to update booking");

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleUpdate,
    loading,
  };
};

export default useUpdateBooking;
