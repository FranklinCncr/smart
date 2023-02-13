import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import BrandDetailComponent from "../../components/ProductDetail/BrandDetailComponent/BrandDetailComponent";

function BrandDetail() {
  //Get id
  const params = useParams();

  //Get Data Context
  const brands = Array.from(useContext(Context)[2].data);
  useEffect(() => {
    //console.log(brands)
  }, [brands]);

  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const brandFound = brands.find((brand) => brand.id == params.id);
    setBrand(brandFound);
  }, [params.id]);

  if (brand.attributes) {
    return (
      <BrandDetailComponent
        key={brand.id}
        nameBrand={brand.attributes.nameBrand}
        imgLogo={brand.attributes.imgLogo}
        offBrand={brand.attributes.offBrand}
        imgBrand={brand.attributes.imgBrand}
        color={brand.attributes.color}
      />
    );
  }
}
export default BrandDetail;
