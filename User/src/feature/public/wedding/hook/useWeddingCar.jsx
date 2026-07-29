import { useQuery } from "@tanstack/react-query";
import { getAllWeddingCars } from "../api/weddingApi";

const useWeddingCar = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["wedding-cars"],
    queryFn: getAllWeddingCars,

    retry: false,

    staleTime: 1000 * 60 * 5, // 5 min

    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  return {
    cars: data?.data ?? [],
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useWeddingCar;
