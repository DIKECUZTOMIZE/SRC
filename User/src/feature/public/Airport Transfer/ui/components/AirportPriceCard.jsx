import React from "react";

const AirportPriceCard = ({ pickupPrice, dropPrice }) => {
  return (
    <div
      className="
mt-4
bg-slate-50
border rounded-xl
p-4
"
    >
      <h4 className="font-bold text-sm mb-3">Airport Pricing</h4>

      <div
        className="
flex justify-between
"
      >
        <div>
          <p className="text-xs text-slate-500">Airport Pickup</p>

          <p
            className="
font-bold
text-blue-600
"
          >
            ₹{pickupPrice || 0}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Airport Drop</p>

          <p className="font-bold">₹{dropPrice || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AirportPriceCard);
