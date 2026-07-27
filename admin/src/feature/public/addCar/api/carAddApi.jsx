import axiosInstance from "../../../../config/axiosInstance";

// CREATE CAR

export const CreateCarApi = async (formData) => {
  try {
    const response = await axiosInstance.post("/carAdd/create-car", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("CREATE CAR ERROR:", error.response?.data);

    throw error;
  }
};

// UPDATE CAR

export const UpdateCarApi = async (id, formData) => {
  try {
    const response = await axiosInstance.put(
      `/carAdd/update-car/${id}`,
      formData,
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.log("UPDATE CAR ERROR:", error.response?.data);
    throw error;
  }
};
