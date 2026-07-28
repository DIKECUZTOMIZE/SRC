const CategorySelect = ({ register }) => {
  return (
    <select {...register("category")} className="border rounded-xl p-3 w-full">
      <option value="">Select Category</option>

      <option value="Self Drive">Self Drive</option>

      <option value="With Driver">With Driver</option>

      <option value="Premium Car">Premium Car</option>

      <option value="Wedding Car">Wedding Car</option>

      <option value="Airport Transfer">Airport Transfer</option>

      <option value="Tempo Traveller & Bus">Tempo Traveller & Bus</option>
    </select>
  );
};

export default CategorySelect;
