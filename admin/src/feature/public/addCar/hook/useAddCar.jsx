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
      decorationType: "",
      decorationName: "",
      decorationPrice: 0,
    },
  });

  const [loading, setLoading] = useState(false);

  // Existing Images
  const [existingImage, setExistingImage] = useState("");
  const [existingDecorationImages, setExistingDecorationImages] = useState([]);

  const isEdit = Boolean(id);

  // ===========================
  // FETCH VEHICLE DETAILS
  // ===========================

  const fetchCar = useCallback(async () => {
    try {
      const response = await GetCarDetailsApi(id);

      const car = response.data?.data || response.data;

      // Existing Images
      setExistingImage(car.image || "");
      setExistingDecorationImages(car.decorationImages || []);

      reset({
        category: car.category || "Self Drive",

        vehicleType: car.vehicleType || "",

        brand: car.brand || "",
        model: car.model || "",
        classification: car.classification || "",

        fuel: car.fuel || "",
        transmission: car.transmission || "",

        seats: Number(car.seats || 0),

        description: car.description || "",

        pricePerHour: Number(car.pricePerHour || 0),
        pricePerDay: Number(car.pricePerDay || 0),

        driverChargePerDay: Number(car.driverChargePerDay || 0),

        loadingCapacity: car.loadingCapacity || "",

        pickupPrice: Number(car.pickupPrice || 0),
        dropPrice: Number(car.dropPrice || 0),
        roundTripPrice: Number(car.roundTripPrice || 0),

        showDecoration: Boolean(car.showDecoration),

        decorationType: car.decorationType || "",

        decorationName: car.decorationName || "",

        decorationPrice: Number(car.decorationPrice || 0),

        status: car.status || "Available",
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

  // ===========================
  // FILE HELPERS
  // ===========================

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

  // ===========================
  // CREATE / UPDATE
  // ===========================

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const data = new FormData();

      // Main Image
      appendSingleFile(formData, "image", data);

      // Decoration Images
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
          vehicleType: "",
          decorationType: "",
          decorationName: "",
          decorationPrice: 0,
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

  return {
    register,
    handleSubmit,
    errors,
    watch,
    onSubmit,
    loading,
    isEdit,

    existingImage,
    existingDecorationImages,
  };
};
