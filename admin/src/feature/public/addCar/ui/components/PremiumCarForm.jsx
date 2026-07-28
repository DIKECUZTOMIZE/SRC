const PremiumCarForm = ({register}) => {
  return (
    <div>
        {/* Status */}
<div>
  <label className="text-sm font-bold">
    Status
  </label>

  <select
    {...register("status")}
    className="w-full border rounded-xl p-3"
  >
    <option value="Available">Available</option>
    <option value="Reserved">Reserved</option>
    <option value="Booked">Booked</option>
    <option value="Maintenance">Maintenance</option>
  </select>
</div>
      <p>Premium Car price will be handled by Call / WhatsApp</p>
    </div>
  );
};

export default PremiumCarForm;
