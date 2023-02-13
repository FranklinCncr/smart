import "./styleEssentialDetailComponent.css";
import CountProduct from "../../../common/CountProduct/CountProduct";
import Button from "../../../common/Button/Button";
function EssentialDetailComponent(props) {
  return (
    <div className="essentialDetail">
      <div className="containerImgEssentialDetail">
        <img
          className="imgEssentialDetail"
          src={props.image}
          alt={props.id}
        />
      </div>
      <div className="containerEssentialDetails">
        <h1 className="nameEssentialDetail">{props.name}</h1>
        <p className="offEssentialDetail">UP to {props.off}% OFF</p>
        <CountProduct />
        <Button name="comprar" />
      </div>
    </div>
  );
}
export default EssentialDetailComponent;