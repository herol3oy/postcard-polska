"use client";

import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export const SwapperImage = () => {
  return (
    <Swiper
      navigation
      loop
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      className="rounded-xl overflow-hidden"
    >
      {[
        "/warszawska_syrenka_postcard_front.webp",
        "/warszawska_syrenka_postcard_photo_w_miasto.webp",
      ].map((src) => (
        <SwiperSlide key={src}>
          <Image
            src={src}
            alt="Warszawska Syrenka Postcard"
            width={800}
            height={1000}
            className="object-cover w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            placeholder="blur"
            format="webp" 
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/B8AAosBxERSgsYAAAAASUVORK5CYII="
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
