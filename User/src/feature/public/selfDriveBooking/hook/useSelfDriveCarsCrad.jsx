import { useQuery } from "@tanstack/react-query";
import { getSelfDriveCarsApi } from "../api/selfDriveApi";

export const useSelfDriveCars = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["self-drive-cars"],
    queryFn: async () => {
      const res = await getSelfDriveCarsApi();
      return res.data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30,   // 30 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });

  return {
    cars: data ?? [],
    loading: isLoading,
    isError,
    error,
    fetchCars: refetch,
  };
};