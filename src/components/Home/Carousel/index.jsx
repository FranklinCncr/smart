import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import SlideCarousel from "./SlideCarousel";
function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiperCarousel"
      >
        <SwiperSlide>
          <SlideCarousel
            description="Best Deal Online on smartwatches"
            name="SMART WEARABLE"
            offSlide={80}
            imgSlide="https://swissmilitarywatches.ch/wp-content/uploads/2022/02/SM34087.03.angle1_.png"
            color="blueSlide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCarousel
            description="Best Deal Online on smartphone"
            name="SMART MODEL"
            offSlide={80}
            imgSlide="https://www.freepnglogos.com/uploads/smartphone-png/asus-smartphone-mobile-png-6.png"
            color="yellowSlide"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Carousel;
