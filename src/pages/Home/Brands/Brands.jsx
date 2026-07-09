import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import amazon1 from "../../../assets/brands/amazon.png";
import casio1 from "../../../assets/brands/casio.png";
import moonstar1 from "../../../assets/brands/moonstar.png";
import randstad1 from "../../../assets/brands/randstad.png";
import star1 from "../../../assets/brands/star.png";

import { Autoplay } from "swiper/modules";

const bransLogo = [amazon, casio, moonstar, randstad, star, amazon1, casio1, moonstar1, randstad1, star1];

const Brands = () => {
  return (
    <div className="sectionStyle text-center">
      <h3 className="text-2xl font-bold">
        We've helped thousands of sales teams
      </h3>
      <Swiper className="gap-4 mt-8"
        slidesPerView={5}
        loop= {true}
        centeredSlides= {true}
        grabCursor= {true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay]}
      >
        {bransLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Brand ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
