import axiosInstance from "../../../../config/axiosInstance";

// COMMON MULTIPART CONFIG

const multipartConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
};

// CREATE VEHICLE

export const CreateCarApi = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      "/carAdd/create-car",
      formData,
      multipartConfig,
    );

    return data;
  } catch (error) {
    console.error(
      "CREATE VEHICLE ERROR:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

// UPDATE VEHICLE

export const UpdateCarApi = async (id, formData) => {
  try {
    const { data } = await axiosInstance.put(
      `/carAdd/update-car/${id}`,
      formData,
      multipartConfig,
    );

    return data;
  } catch (error) {
    console.error(
      "UPDATE VEHICLE ERROR:",
      error.response?.data || error.message,
    );

    throw error;
  }
};
