import { useEffect, useState } from "react";
import { GetCategoriesApi } from "../api/carListApi";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await GetCategoriesApi();

      if (response.success) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log("Fetch Category Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
  };
};
