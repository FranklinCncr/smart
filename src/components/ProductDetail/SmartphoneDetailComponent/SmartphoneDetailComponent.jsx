import './styleSmartphoneDetailComponent.css'
import CountProduct from '../../../common/CountProduct/CountProduct';
import Button from '../../../common/Button/Button';
function SmartphoneDetailComponent(props) {
    return (
        <div className="smartphoneDetail">
        <div className="containerImgSmartphoneDetail">
          <img className='imgSmartphoneDetail' src={props.image} alt={props.id}/>
          <div className='offSmartphoneDetail'>{props.off}% OFF</div>
        </div>
        <div className="containerSmarphoneDetails">
          <h1 className="nameSmartphoneDetail">{props.name}</h1>
          <p className="pricesSmartphoneDetail">₹{props.priceLast} ₹{props.priceNew}</p>
          <p className="saveSmartphoneDetail">Save ₹{props.priceLast-props.priceNew}</p>
          <CountProduct/>
          <Button name='comprar'/>
        </div>
      </div> 
    );
}
export default SmartphoneDetailComponent