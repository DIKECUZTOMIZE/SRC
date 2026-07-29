import React from "react";
import { Fuel, Settings, Users, Sparkles, ArrowUpRight } from "lucide-react";

import PremiumPriceCard from "./PremiumPriceCard";
import { WHATSAPP_NUMBER } from "../../../../../config/contact";

const PremiumCarCard = ({ car }) => {
  const imageUrl = car?.image
    ? `http://localhost:3000${car.image}`
    : "https://placehold.co/600x400?text=Premium+Car";

  const whatsapp = () => {
    const msg = `🚘 Premium Car Enquiry

Vehicle:
${car.brand} ${car.model}

Category:
${car.classification}

Seats:
${car.seats}

Fuel:
${car.fuel}

Transmission:
${car.transmission}

// Price Per Day:
// ₹${car.pricePerDay || 0}

// Price Per Hour:
// ₹${car.pricePerHour || 0}

Description:
${car.description}

I would like to book this Premium Car.
Please share complete pricing, availability and booking process.

Thank You.
`;

    window.open(
      `https://wa.me/$${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      overflow-hidden
      hover:shadow-xl
      transition
    "
    >
      {/* Image */}
      <div
        className="
        aspect-[16/11]
        relative
        overflow-hidden
        bg-slate-100
      "
      >
        <img
          src={imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="
          w-full
          h-full
          object-cover
          hover:scale-105
          transition
        "
        />

        <span
          className="
          absolute
          top-3
          left-3
          bg-purple-600
          text-white
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
        "
        >
          {car.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="
          text-xl
          font-bold
          text-slate-900
        "
        >
          {car.brand} {car.model}
        </h3>

        <p className="text-sm text-slate-500">{car.classification}</p>

        <PremiumPriceCard
          pricePerHour={car.pricePerHour}
          pricePerDay={car.pricePerDay}
        />

        {/* Features */}
        <div
          className="
          grid
          grid-cols-2
          gap-2
          mt-4
        "
        >
          <div
            className="
            bg-slate-50
            rounded-lg
            p-2
            flex
            gap-2
            items-center
            text-sm
          "
          >
            <Fuel size={16} />
            {car.fuel}
          </div>

          <div
            className="
            bg-slate-50
            rounded-lg
            p-2
            flex
            gap-2
            items-center
            text-sm
          "
          >
            <Settings size={16} />
            {car.transmission}
          </div>

          <div
            className="
            bg-slate-50
            rounded-lg
            p-2
            flex
            gap-2
            items-center
            text-sm
          "
          >
            <Users size={16} />
            {car.seats} Seats
          </div>

          <div
            className="
            bg-purple-50
            rounded-lg
            p-2
            flex
            gap-2
            items-center
            text-sm
            text-purple-700
          "
          >
            <Sparkles size={16} />
            Luxury
          </div>
        </div>

        {/* Description */}
        <p
          className="
          text-sm
          text-slate-500
          mt-4
          line-clamp-2
        "
        >
          {car.description}
        </p>

        {/* WhatsApp Button */}
        <button
          onClick={whatsapp}
          className="
          w-full
          mt-5
          py-3
          rounded-xl
          bg-purple-600
          hover:bg-purple-700
          text-white
          font-semibold
          flex
          justify-center
          items-center
          gap-2
          transition
        "
        >
          WhatsApp Enquiry
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(PremiumCarCard);
