import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  EffectFade,
} from "swiper/modules";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import heroData from "../../data/hero/HeroData";
import HeroSlide from "../../components/common/hero/HeroSlide";

const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <section
      className="relative"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          Keyboard,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop
        speed={900}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {heroData?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}

      <button
        className="
        hero-prev
        absolute
        left-8
        top-1/2
        z-30
        hidden
        h-14
        w-14
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white/90
        text-[#1E311B]
        shadow-xl
        backdrop-blur
        transition
        duration-300
        hover:scale-110
        hover:bg-white
        lg:flex
        "
      >
        <HiArrowLongLeft size={28} />
      </button>

      {/* Right Arrow */}

      <button
        className="
        hero-next
        absolute
        right-8
        top-1/2
        z-30
        hidden
        h-14
        w-14
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white/90
        text-[#1E311B]
        shadow-xl
        backdrop-blur
        transition
        duration-300
        hover:scale-110
        hover:bg-white
        lg:flex
        "
      >
        <HiArrowLongRight size={28} />
      </button>

      {/* Slide Counter */}

      <div
        className="
        absolute
        bottom-8
        left-1/2
        z-30
        -translate-x-1/2
        rounded-full
        bg-white/90
        px-5
        py-2
        text-sm
        font-medium
        text-[#1E311B]
        shadow-lg
        backdrop-blur
        "
      >
        Swipe • Drag • Click
      </div>
    </section>
  );
};

export default Hero;