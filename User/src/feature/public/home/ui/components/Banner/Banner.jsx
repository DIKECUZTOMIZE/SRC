import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const bannerImage = [
    {
      bimg: "https://images.unsplash.com/photo-1732624696692-a841984e9b99?q=80&w=1171&auto=format&fit=crop",
    },
    {
      bimg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1170&auto=format&fit=crop",
    },
    {
      bimg: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {bannerImage.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.bimg}
              alt={`Banner ${index + 1}`}
              className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
