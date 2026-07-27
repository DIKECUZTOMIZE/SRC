import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BookingDetailsApi, UpdateBooking } from "../api/bookingListApi";

export const useBookingDetails = () => {
  const { id } = useParams();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const emptyForm = {
    pickupDate: "",
    pickupTime: "",
    quantity: 1,
    deliveryType: "",
    deliveryAddress: "",
    deliveryAmount: 0,
    totalAmount: 0,

    customer: {
      name: "",
      mobile: "",
      whatsapp: "",
      email: "",
      currentAddress: "",
    },

    address: {
      city: "",
      state: "",
      pinCode: "",
      policeStation: "",
    },

    name: "",
    serviceType: "",
    transmission: "",
    fuel: "",
    seats: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const prepareFormData = (data) => ({
    pickupDate: data.pickupDate ? data.pickupDate.split("T")[0] : "",

    pickupTime: data.pickupTime || "",
    quantity: data.quantity || 1,

    deliveryType: data.deliveryType || "",
    deliveryAddress: data.deliveryAddress || "",
    deliveryAmount: data.deliveryAmount || data.deliveryCharge || 0,

    totalAmount: data.totalAmount || 0,

    customer: {
      name: data.customer?.name || "",
      mobile: data.customer?.mobile || "",
      whatsapp: data.customer?.whatsapp || "",
      email: data.customer?.email || "",
      currentAddress: data.customer?.currentAddress || "",
    },

    address: {
      city: data.address?.city || "",
      state: data.address?.state || "",
      pinCode: data.address?.pinCode || "",
      policeStation: data.address?.policeStation || "",
    },

    name: data.name || "",
    serviceType: data.serviceType || "",
    transmission: data.transmission || "",
    fuel: data.fuel || "",
    seats: data.seats || "",
  });

  const loadBooking = async () => {
    try {
      setLoading(true);

      const response = await BookingDetailsApi(id);

      const data = response.data;

      setBooking(data);

      setFormData(prepareFormData(data));
    } catch (error) {
      console.log("Booking load error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadBooking();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const newValue = type === "number" ? Number(value) : value;

    setFormData((prev) => {
      if (name.includes(".")) {
        const [parent, child] = name.split(".");

        return {
          ...prev,

          [parent]: {
            ...prev[parent],
            [child]: newValue,
          },
        };
      }

      return {
        ...prev,
        [name]: newValue,
      };
    });
  };

  const handleUpdate = async () => {
    try {
      setUpdateLoading(true);

      const response = await UpdateBooking(id, formData);

      if (response.success) {
        setBooking(response.data);

        setFormData(prepareFormData(response.data));

        setEditMode(false);

        alert(response.message || "Booking Updated");
      }
    } catch (error) {
      console.log(error);

      alert(error?.response?.data?.message || "Update failed");
    } finally {
      setUpdateLoading(false);
    }
  };

  return {
    booking,
    setBooking,

    loading,

    formData,
    setFormData,

    handleChange,

    editMode,
    setEditMode,

    handleUpdate,

    updateLoading,

    loadBooking,
  };
};
