import axiosInstance from "../../../../config/axiosInstance";

export const BookingListApi = async () => {
  try {
    const response = await axiosInstance.get("/selfDrive/bookings", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(
      "Validation Errors:",
      JSON.stringify(error.response?.data?.errors, null, 2),
    );

    throw error;
  }
};

export const BookingDetailsApi = async (id) => {
  try {
    const response = await axiosInstance.get(`/selfDrive/bookings/${id}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(
      "Validation Errors:",
      JSON.stringify(error.response?.data?.errors, null, 2),
    );

    throw error;
  }
};

export const UpdateBookingStatusApi = async (id, status) => {
  try {
    const response = await axiosInstance.patch(
      `/selfDrive/bookings/${id}/status`,
      {
        status,
      },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.log(
      "Update Booking Status Error:",
      JSON.stringify(error.response?.data, null, 2),
    );

    throw error;
  }
};

// Delete Booking (Admin)
export const DeleteBooking = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/selfDrive/booking-delete/${id}`,
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.log(
      "Delete Booking Error:",
      JSON.stringify(error.response?.data, null, 2),
    );

    throw error;
  }
};

// Update Booking (Admin)
export const UpdateBooking = async (id, data) => {
  const response = await axiosInstance.put(
    `/selfDrive/booking-update/${id}`,
    data,
    {
      withCredentials: true,
    },
  );

  return response.data;
};
