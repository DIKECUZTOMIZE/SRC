import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMyBookingDetails } from "../api/selfDriveApi";

const useMyBookingDetails = () => {
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

      const response = await getMyBookingDetails(id);

      setBooking(response.data);
    } catch (error) {
      console.log("Load Booking Error:", error);
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
export default useMyBookingDetails;
