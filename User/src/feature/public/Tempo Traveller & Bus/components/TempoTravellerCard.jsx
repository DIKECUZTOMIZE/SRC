import React from "react";
import { Users, Fuel, Settings, Snowflake, ArrowUpRight } from "lucide-react";
import TempoPriceCard from "./TempoPriceCard";
import { WHATSAPP_NUMBER } from "../../../../config/contact";

const TempoTravellerCard = ({ vehicle }) => {
  const imageUrl = vehicle.image
    ? `http://localhost:3000${vehicle.image}`
    : "https://placehold.co/600x400";

  const whatsapp = () => {
    const msg = `

Vehicle:
${vehicle.brand} ${vehicle.model}

Seats:
${vehicle.seats}

Price:
₹${vehicle.pricePerDay}/Day

I want enquiry.

`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div
      className="
bg-white
rounded-2xl
border
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"
    >
      <div
        className="
aspect-[16/11]
relative
"
      >
        <img
          src={imageUrl}
          className="
w-full
h-full
object-cover
"
        />

        <span
          className="
absolute
top-3
left-3
bg-emerald-600
text-white
px-3
py-1
rounded-full
text-xs
"
        >
          {vehicle.status}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-black">
          {vehicle.brand} {vehicle.model}
        </h3>

        <p className="text-sm text-slate-500">{vehicle.classification}</p>

        <TempoPriceCard
          pricePerDay={vehicle.pricePerDay}
          pricePerHour={vehicle.pricePerHour}
        />

        <div
          className="
grid
grid-cols-2
gap-2
mt-4
"
        >
          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Users size={16} />

            {vehicle.seats}
          </div>

          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Fuel size={16} />

            {vehicle.fuel}
          </div>

          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Settings size={16} />

            {vehicle.transmission}
          </div>

          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Snowflake size={16} />
            AC
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-4">{vehicle.description}</p>

        <button
          onClick={whatsapp}
          className="
w-full
mt-5
bg-emerald-600
text-white
py-3
rounded-xl
font-bold
flex
justify-center
gap-2
"
        >
          Enquiry WhatsApp
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TempoTravellerCard);
