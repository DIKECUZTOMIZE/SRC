import { useForm } from "react-hook-form";

const useAppForm = ({
  defaultValues = {},
  resolver,
  mode = "onSubmit",
  reValidateMode = "onChange",
  shouldFocusError = true,
} = {}) => {
  return useForm({
    defaultValues,
    resolver,
    mode,
    reValidateMode,
    shouldFocusError,
  });
};

export default useAppForm;