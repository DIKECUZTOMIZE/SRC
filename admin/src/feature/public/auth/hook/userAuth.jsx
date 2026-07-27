import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/authAction";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onLoginSubmit = async (data) => {
    try {
      const result = await dispatch(loginEmployee(data)).unwrap();

      console.log("LOGIN RESULT:", result);

      // login success
      navigate("/dashboard");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onLoginSubmit,
  };
};
