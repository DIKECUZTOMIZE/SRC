import { useQuery } from "@tanstack/react-query";
import { GetAllCarsApi } from "../api/homeApi";

export const useUserCars = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["userCars"],
    queryFn: async () => {
      const response = await GetAllCarsApi();

      if (!response.success) {
        throw new Error("Failed to fetch cars");
      }

      return response.data;
    },
  });

  return {
    cars: data || [],
    isLoading,
    isError,
    error,
    fetchCars: refetch,
  };
};
