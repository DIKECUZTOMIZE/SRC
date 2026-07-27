import { useEffect, useState } from "react";
import { getMyBookingsStatusList } from "../api/selfDriveApi";

const useMyBookingsStatusList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      setLoading(true);

      const response = await getMyBookingsStatusList();

      setBookings(response.data);
    } catch (error) {
      console.log("Load My Bookings Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return {
    bookings,
    loading,
    setBookings,
    loadBookings,
  };
};

export default useMyBookingsStatusList;
