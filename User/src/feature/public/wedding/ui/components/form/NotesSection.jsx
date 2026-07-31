import { useFormContext } from "react-hook-form";

const NotesSection = () => {
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-xl border p-6 space-y-5">
      <h2 className="text-lg font-semibold">
        Additional Notes
      </h2>

      <div>
        <label className="block text-sm font-medium mb-2">
          Special Request
        </label>

        <textarea
          rows={5}
          placeholder="Write your special requirements..."
          {...register("note")}
          className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
    </div>
  );
};

export default NotesSection;