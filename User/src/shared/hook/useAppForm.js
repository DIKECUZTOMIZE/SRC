import { useForm } from "react-hook-form";

const useAppForm = ({
  defaultValues = {},
  resolver,
  mode = "onSubmit",
  reValidateMode = "onChange",
  shouldFocusError = true,
} = {}) => {
  return useForm({
    defaultValues: {
      services: {
        selfDrive: false,
        carWithDriver: false,
        weddingCar: false,
        premiumCar: false,
        tempoTraveller: false,
        airportTransfer: false,
      },

      ...defaultValues,
    },

    resolver,
    mode,
    reValidateMode,
    shouldFocusError,
  });
};

export default useAppForm;