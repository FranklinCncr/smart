import Brand from "./Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "./styleBrandList.css";
function BrandList() {
  return (
    <>
      <h1 className="fullTextBrand">
        Top <span className="textBrand">Electronics Brands</span>
      </h1>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiperBrand"
      >
        <SwiperSlide>
          <Brand
            nameBrand="IPHONE"
            imgLogo="https://1000marcas.net/wp-content/uploads/2019/11/Apple-Logo.jpg"
            offBrand={80}
            imgBrand="https://png.monster/wp-content/uploads/2022/09/png.monster-209.png"
            color="grey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Brand
            nameBrand="REALME"
            imgLogo="https://i2.wp.com/zeevector.com/wp-content/uploads/Realme-Logo-HD.png?fit=1177%2C351&ssl=1"
            offBrand={80}
            imgBrand="https://www.pngall.com/wp-content/uploads/4/Realme-PNG.png"
            color="yellow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Brand
            nameBrand="XIAOMI"
            imgLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png"
            offBrand={80}
            imgBrand="https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914994_960_720.png"
            color="red"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Brand
            nameBrand="IPHONE"
            imgLogo="https://1000marcas.net/wp-content/uploads/2019/11/Apple-Logo.jpg"
            offBrand={80}
            imgBrand="https://png.monster/wp-content/uploads/2022/09/png.monster-209.png"
            color="grey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Brand
            nameBrand="REALME"
            imgLogo="https://i2.wp.com/zeevector.com/wp-content/uploads/Realme-Logo-HD.png?fit=1177%2C351&ssl=1"
            offBrand={80}
            imgBrand="https://www.pngall.com/wp-content/uploads/4/Realme-PNG.png"
            color="yellow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Brand
            nameBrand="XIAOMI"
            imgLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png"
            offBrand={80}
            imgBrand="https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914994_960_720.png"
            color="red"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default BrandList;
