import React from "react";
import { Heart, Flower2 } from "lucide-react";

const WeddingHeader = ({ cars = [] }) => {
  // Decoration available cars

  const decorations = cars.filter(
    (car) =>
      car.decorationType &&
      car.decorationName &&
      car.decorationPrice > 0 &&
      car.decorationImages?.length,
  );

  return (
    <div className="mb-10 border-b pb-8">
      {/* Your existing heading remains same */}

      {decorations.length > 0 && (
        <>
          <h3 className="text-2xl font-bold mt-10 mb-6">
            Available Decoration Packages
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {decorations.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border overflow-hidden shadow-sm"
              >
                <div className="flex gap-2 p-2">
                  {item.decorationImages?.map((img, i) => (
                    <img
                      key={i}
                      src={`http://localhost:3000${img}`}
                      alt=""
                      className="w-32 h-32 object-cover border rounded-2xl"
                    />
                  ))}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-pink-600 mb-2">
                    <Flower2 size={18} />
                    <span className="font-semibold">{item.decorationType}</span>
                  </div>

                  <h4 className="font-bold text-lg">{item.decorationName}</h4>

                  <p className="text-pink-600 text-xl font-bold mt-3">
                    ₹ {item.decorationPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(WeddingHeader);
