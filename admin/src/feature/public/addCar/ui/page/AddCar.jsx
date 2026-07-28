import { useCarForm } from "../../hook/useAddCar";
import AirportTransferForm from "../components/AirportTransferForm";
import CategorySelect from "../components/CategorySelect";
import PremiumCarForm from "../components/PremiumCarForm";
import SelfDriveForm from "../components/SelfDriveForm";
import TempoTravellerBusForm from "../components/TempoTravellerBusForm";
import VehicleCommonForm from "../components/VehicleCommonForm";
import WeddingCarForm from "../components/WeddingCarForm";
import WithDriverForm from "../components/WithDriverForm";

const AddCar = () => {
  const { watch, handleSubmit, register, errors, onSubmit, loading } =
    useCarForm();
  const category = watch("category");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <CategorySelect register={register} errors={errors} />

      <VehicleCommonForm register={register} errors={errors}watch={watch} />

      {category === "Self Drive" && (
        <SelfDriveForm register={register} watch={watch} />
      )}

      {category === "With Driver" && (
        <WithDriverForm register={register} watch={watch} />
      )}

      {category === "Premium Car" && <PremiumCarForm register={register} />}

      {category === "Wedding Car" && (
        <WeddingCarForm register={register} watch={watch} />
      )}

      {category === "Tempo Traveller & Bus" && (
        <TempoTravellerBusForm register={register} watch={watch} handleSubmit={handleSubmit} loading={loading} onSubmit={onSubmit}/>
      )}
      {category === "Airport Transfer" && (
        <AirportTransferForm register={register} />
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Saving..." : "Save Vehicle"}
      </button>
    </form>
  );
};
export default AddCar;
