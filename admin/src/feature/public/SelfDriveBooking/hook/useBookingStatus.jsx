import { useState } from "react";
import { UpdateBookingStatusApi } from "../api/bookingListApi";

const useBookingStatus = () => {
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async (id, status) => {
    try {
      setLoading(true);

      const response = await UpdateBookingStatusApi(id, status);

      if (response.success) {
        alert(`Booking ${status} Successfully`);

        return response.data; // Updated booking return karega
      }

      return null;
    } catch (error) {
      console.log("Update Status Error:", error);
      alert(error.response?.data?.message || "Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleUpdateStatus,
  };
};

export default useBookingStatus;
