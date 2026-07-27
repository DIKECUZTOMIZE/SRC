  import { useEffect, useState } from "react";

  import { DeleteCarApi, GetCarDetailsApi } from "../api/carListApi";
  import { useNavigate } from "react-router";

  export const useCarDetails = (id) => {
    const [car, setCar] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchCarDetails = async () => {
      try {
        setLoading(true);

        const response = await GetCarDetailsApi(id);

        setCar(response.data);
      } catch (err) {
        console.log(err);

        setError(err.response?.data?.message || "Car not found");
      } finally {
        setLoading(false);
      }
    };

    const navigate = useNavigate();

    const handleDelete = async () => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this car?",
      );

      if (!confirmDelete) return;

      try {
        await DeleteCarApi(id);

        alert("Car Deleted Successfully");

        navigate("/dashboard/cars");
      } catch (error) {
        console.log(error);

        alert(error.response?.data?.message || "Delete Failed");
      }
    };
    useEffect(() => {
      if (id) {
        fetchCarDetails();
      }
    }, [id]);

    return {
      car,
      loading,
      error,
      handleDelete,
    };
  };
