import Smartphone from "./Smartphone";
import "./styleSmartphoneList.css";
import { useEffect, useContext } from "react";
import { Context } from '../../../context/Context'
import {Link} from 'react-router-dom'

function SmartphoneList() {

  //Get Data Context
  const smartphones = useContext(Context)[0]  
  useEffect(() => {
    console.log(smartphones.data)
  }, [smartphones])

  if(smartphones.data){
    return (
      <>
        <h1 className="fullTextSmartphone">
          Grab the best deal on{" "}
          <span className="textSmartphone">Smartphones</span>
        </h1>
        <div className="gridLayoutSmartphone">
          {Array.from(smartphones.data).map(({ id, attributes }) => 
            <Link className="link" to={`/smartphone/${id}`} key={id}>
              <Smartphone
                key={id}
                image={attributes.image}
                name={attributes.name}
                priceNew={attributes.priceNew}
                priceLast={attributes.priceLast}
                off={attributes.off}
              />
            </Link>
          )}          
        </div>
      </>
    );
  }  
}
export default SmartphoneList;
