import { useState } from "react";
import { useNavigate } from "react-router";
import { DeleteBooking } from "../api/bookingListApi";

const useDeleteBooking = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?",
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await DeleteBooking(id);

      alert("Booking deleted successfully");

      navigate("/dashboard/bookings");
    } catch (error) {
      console.log(error);
      alert("Failed to delete booking");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleDelete,
    loading,
  };
};

export default useDeleteBooking;
