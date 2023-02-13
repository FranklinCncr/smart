import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import CategoryDetailComponent from "../../components/ProductDetail/CategoryDetailComponent/CategoryDetailComponent";

function CategoryDetail() {
  //Get id
  const params = useParams();

  //Get Data Context
  const categories = Array.from(useContext(Context)[1].data);
  useEffect(() => {
    //console.log(categories)
  }, [categories]);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryFound = categories.find(
      (category) => category.id == params.id
    );
    setCategory(categoryFound);
  }, [params.id]);

  if (category.attributes) {
    return (
      <CategoryDetailComponent
        key={category.id}
        image={category.attributes.image}
        category={category.attributes.category}
      />
    );
  }
}
export default CategoryDetail;
