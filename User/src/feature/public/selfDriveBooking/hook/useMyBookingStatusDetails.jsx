import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMyBookingStatusDetails } from "../api/selfDriveApi";

const useMyBookingStatusDetails = () => {
  const { id } = useParams();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBooking = async () => {
    if (!id) {
      console.log("Booking ID missing");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const response = await getMyBookingStatusDetails(id);

      setBooking(response.data);
    } catch (error) {
      console.log("Load Booking Status Details Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooking();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    booking,
    loading,
    setBooking,
    loadBooking,
  };
};

export default useMyBookingStatusDetails;
