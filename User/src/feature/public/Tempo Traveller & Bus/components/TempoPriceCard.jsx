import React from "react";

const TempoPriceCard = ({ pricePerDay, pricePerHour }) => {
  return (
    <div
      className="
mt-4
bg-slate-50
rounded-xl
p-3
flex
justify-between
border
"
    >
      <div>
        <p className="text-xs text-slate-400">Per Day</p>

        <h3 className="font-black text-emerald-600">₹{pricePerDay}</h3>
      </div>

      <div>
        <p className="text-xs text-slate-400">Per Hour</p>

        <h3 className="font-black">₹{pricePerHour}</h3>
      </div>
    </div>
  );
};

export default React.memo(TempoPriceCard);
