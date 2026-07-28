/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { CreateCarApi, UpdateCarApi } from "../api/carAddApi";
import { GetCarDetailsApi } from "../../carList/api/carListApi";

export const useCarForm = (id) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "Self Drive",
      status: "Available",
      showDecoration: false,
      vehicleType: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const isEdit = Boolean(id);

  // FETCH VEHICLE DETAILS (EDIT MODE)
  const fetchCar = useCallback(async () => {
    try {
      const response = await GetCarDetailsApi(id);

      const car = response.data?.data || response.data;

      const { image, decorationImages, ...rest } = car;

      reset({
        ...rest,
        vehicleType: rest.vehicleType || "",
        seats: Number(rest.seats || 0),

        pricePerHour: Number(rest.pricePerHour || 0),
        pricePerDay: Number(rest.pricePerDay || 0),

        driverChargePerDay: Number(rest.driverChargePerDay || 0),

        pickupPrice: Number(rest.pickupPrice || 0),
        dropPrice: Number(rest.dropPrice || 0),
        roundTripPrice: Number(rest.roundTripPrice || 0),

        decorationPrice: Number(rest.decorationPrice || 0),

        showDecoration: rest.showDecoration || false,
      });
    } catch (error) {
      console.error(
        "GET VEHICLE ERROR:",
        error.response?.data || error.message,
      );
    }
  }, [id, reset]);

  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id, fetchCar]);

  // FILE HELPERS
  const appendSingleFile = (formData, key, data) => {
    if (formData[key]?.length) {
      data.append(key, formData[key][0]);
    }
  };

  const appendMultipleFiles = (formData, key, data) => {
    if (!formData[key]?.length) return;

    Array.from(formData[key]).forEach((file) => {
      data.append(key, file);
    });
  };

  // CREATE / UPDATE VEHICLE
  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const data = new FormData();

      // Single Image
      appendSingleFile(formData, "image", data);

      // Multiple Decoration Images
      appendMultipleFiles(formData, "decorationImages", data);

      // Other Fields
      Object.keys(formData).forEach((key) => {
        if (key === "image" || key === "decorationImages") return;

        const value = formData[key];

        if (value !== undefined && value !== null && value !== "") {
          data.append(key, value);
        }
      });

      let response;

      if (isEdit) {
        response = await UpdateCarApi(id, data);

        alert("Vehicle Updated Successfully");

        navigate(`/dashboard/cars/details/${id}`);
      } else {
        response = await CreateCarApi(data);

        alert("Vehicle Added Successfully");

        const newId =
          response?.data?._id || response?.data?.data?._id || response?._id;

        reset({
          category: "Self Drive",
          status: "Available",
          showDecoration: false,
        });

        navigate(`/dashboard/cars/details/${newId}`);
      }

      return response;
    } catch (error) {
      console.error(
        "SAVE VEHICLE ERROR:",
        error.response?.data || error.message,
      );

      alert(error.response?.data?.message || "Operation Failed");
    } finally {
      setLoading(false);
    }
  };

  // RETURN

  return {
    register,
    handleSubmit,
    errors,
    watch,
    onSubmit,
    loading,
    isEdit,
  };
};
