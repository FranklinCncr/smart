import "./styleCategoryDetailComponent.css";
import CountProduct from "../../../common/CountProduct/CountProduct";
import Button from "../../../common/Button/Button";
function CategoryDetailComponent(props) {
  return (
    <div className="categoryDetail">
      <div className="containerImgCategoryDetail">
        <img
          className="imgCategoryDetail"
          src={props.image}
          alt={props.id}
        />
      </div>
      <div className="containerCategoryDetails">
        <h1 className="nameCategoryDetail">{props.category}</h1>
        <CountProduct />
        <Button name="comprar" />
      </div>
    </div>
  );
}
export default CategoryDetailComponent;
