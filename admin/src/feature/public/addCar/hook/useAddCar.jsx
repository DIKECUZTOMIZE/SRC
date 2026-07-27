/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { CreateCarApi, UpdateCarApi } from "../api/carAddApi";
import { GetCarDetailsApi } from "../../carList/api/carListApi";
import { useNavigate } from "react-router";

export const useCarForm = (id) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const isEdit = Boolean(id);

  // =========================
  // GET CAR DATA FOR EDIT
  // =========================

  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id]);

  const fetchCar = async () => {
    try {
      const response = await GetCarDetailsApi(id);

      const car = response.data?.data || response.data;

      const { image, ...rest } = car;

      reset({
        ...rest,
        seats: Number(rest.seats),
        pricePerHour: Number(rest.pricePerHour),
        pricePerDay: Number(rest.pricePerDay),
      });
    } catch (error) {
      console.log("GET CAR ERROR:", error.response?.data || error);
    }
  };
  // =========================
  // CREATE / UPDATE
  // =========================

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key === "image") {
          if (formData.image?.length) {
            data.append("image", formData.image[0]);
          }
        } else {
          data.append(key, formData[key]);
        }
      });

      let response;

      if (isEdit) {
        response = await UpdateCarApi(id, data);

        alert("Car Updated Successfully");

        navigate(`/dashboard/cars/details/${id}`);
      } else {
        response = await CreateCarApi(data);

        alert("Car Added Successfully");

        const newCarId = response.data?.data?._id || response.data?._id;

        navigate(`/dashboard/cars/details/${newCarId}`);

        reset();
      }

      return response;
    } catch (error) {
      console.log("CAR SAVE ERROR:", error.response?.data || error);

      alert(error.response?.data?.message || "Operation Failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,

    handleSubmit,

    errors,

    onSubmit,

    loading,

    isEdit,
  };
};
