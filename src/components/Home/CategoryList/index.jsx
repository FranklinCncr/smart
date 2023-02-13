import Category from "./Category";
import "./styleCategoryList.css";
import { useEffect, useContext } from "react";
import { Context } from '../../../context/Context'
import { Link } from "react-router-dom";

function CategoryList() {

  //Get Data Context
  const categories = useContext(Context)[1]
  useEffect(() => {
    console.log(categories.data)
  }, [categories])

  if(categories.data){
    return (
      <>
        <h1 className="fullTextCategory">
          Shop From <span className="textCategory">Top Categories</span>
        </h1>
        <div className="gridlLayoutCategory">
          {Array.from(categories.data).map(({ id, attributes }) =>
            <Link className="link" to={`/category/${id}`} key={id}> 
              <Category
                key={id}
                image={attributes.image}
                category={attributes.category}
              />  
            </Link>
          )} 
          
        </div>
      </>
    );
  }  
}
export default CategoryList;
