import React from "react";

const WeddingPriceCard = ({ pricePerHour, pricePerDay }) => {
  return (
    <div
      className="
mt-4
rounded-xl
border
bg-pink-50
p-4
"
    >
      <h4
        className="
font-bold
text-sm
mb-3
"
      >
        Wedding Package
      </h4>

      <div
        className="
flex
justify-between
"
      >
        <div>
          <p
            className="
text-xs
text-slate-500
"
          >
            Per Hour
          </p>

          <h3
            className="
font-bold
text-pink-600
"
          >
            ₹{pricePerHour || 0}
          </h3>
        </div>

        <div>
          <p
            className="
text-xs
text-slate-500
"
          >
            Full Day
          </p>

          <h3
            className="
font-bold
"
          >
            ₹{pricePerDay || 0}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WeddingPriceCard);
