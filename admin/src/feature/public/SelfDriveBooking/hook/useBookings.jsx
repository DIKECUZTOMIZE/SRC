import { useEffect, useState } from "react";
import socket from "../../../../socket/socket";
import { BookingListApi } from "../api/bookingListApi";

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    const data = await BookingListApi();
    setBookings(data.data);
  };

  useEffect(() => {
    getBookings();

    socket.on("new-booking", (booking) => {
      setBookings((prev) => [booking, ...prev]);
    });

    return () => {
      socket.off("new-booking");
    };
  }, []);

  return {
    bookings,
    getBookings, // <-- ye return karo
  };
};
