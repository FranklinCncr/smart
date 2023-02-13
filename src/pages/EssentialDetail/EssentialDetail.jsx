import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import EssentialDetailComponent from "../../components/ProductDetail/EssentialDetailComponent/EssentialDetailComponent";

function EssentialDetail() {
  //Get id
  const params = useParams();

  //Get Data Context
  const essentials = Array.from(useContext(Context)[3].data);
  useEffect(() => {
    //console.log(essentials)
  }, [essentials]);

  const [essential, setEssential] = useState([]);

  useEffect(() => {
    const essentialFound = essentials.find(
      (essential) => essential.id == params.id
    );
    setEssential(essentialFound);
  }, [params.id]);

  if (essential.attributes) {
    return (
      <EssentialDetailComponent
        key={essential.id}
        image={essential.attributes.imgEssential}
        name={essential.attributes.nameEssential}
        off={essential.attributes.upToOff}
      />
    );
  }
}
export default EssentialDetail;