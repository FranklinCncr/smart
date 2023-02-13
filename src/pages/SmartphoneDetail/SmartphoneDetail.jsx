import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import SmartphoneDetailComponent from "../../components/ProductDetail/SmartphoneDetailComponent/SmartphoneDetailComponent";

function SmartphoneDetail() {
  //Get id
  const params = useParams();

  //Get Data Context
  const smartphones = Array.from(useContext(Context)[0].data);
  useEffect(() => {
    //console.log(smartphones)
  }, [smartphones]);

  const [smartphone, setSmartphone] = useState([]);

  useEffect(() => {
    const smartphoneFound = smartphones.find(
      (smartphone) => smartphone.id == params.id
    );
    setSmartphone(smartphoneFound);
  }, [params.id]);

  if (smartphone.attributes) {
    return (
      <SmartphoneDetailComponent
                key={smartphone.id}
                image={smartphone.attributes.image}
                name={smartphone.attributes.name}
                priceNew={smartphone.attributes.priceNew}
                priceLast={smartphone.attributes.priceLast}
                off={smartphone.attributes.off}
      />
    );
  }
}
export default SmartphoneDetail;
