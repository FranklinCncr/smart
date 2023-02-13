import Brand from "./Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "./styleBrandList.css";
import { useEffect, useContext } from "react";
import { Context } from "../../../context/Context";
import { Link } from "react-router-dom";

function BrandList() {
  //Get Data Context
  const brands = useContext(Context)[2];
  useEffect(() => {
    console.log(brands.data);
  }, [brands]);

  if (brands.data) {
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
          {Array.from(brands.data).map(({ id, attributes }) => (
            <SwiperSlide  key={id}>
              <Link className="link" to={`/brand/${id}`} key={id}>
                <Brand
                  key={id}
                  nameBrand={attributes.nameBrand}
                  imgLogo={attributes.imgLogo}
                  offBrand={attributes.offBrand}
                  imgBrand={attributes.imgBrand}
                  color={attributes.color}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}
export default BrandList;
