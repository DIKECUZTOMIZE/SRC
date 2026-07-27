import axiosInstance from "../../../../config/axiosInstance";

export const createSelfDriveBooking = async (data) => {
  try {
    const response = await axiosInstance.post("/selfDrive/book", data, {
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

export const getMyBookingDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/selfDrive/my-bookings/${id}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(
      "Get Booking Details Error:",
      JSON.stringify(error.response?.data, null, 2),
    );

    throw error;
  }
};

export const getMyBookingsStatusList = async () => {
  try {
    const response = await axiosInstance.get(
      "/selfDrive/my-bookings-status-list",
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.log(
      "Get My Bookings Error:",
      JSON.stringify(error.response?.data, null, 2),
    );

    throw error;
  }
};

export const getMyBookingStatusDetails = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/selfDrive/my-bookings-status-details/${id}`,
      {
        withCredentials: true,
      },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(
      "Get My Booking Details Error:",
      JSON.stringify(error.response?.data, null, 2),
    );

    throw error;
  }
};

// Get Self Drive Cars
export const getSelfDriveCarsApi = async () => {
  try {
    const response = await axiosInstance.get("/carAdd/cars/self-drive", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("GET SELF DRIVE CARS ERROR:", error.response?.data);
    throw error;
  }
};
