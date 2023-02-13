import Essential from "./Essential";
import "./styleEssentialList.css";
import { useEffect, useContext } from "react";
import { Context } from "../../../context/Context";
import { Link } from "react-router-dom";

function EssentialList() {
  //Get Data Context
  const essentials = useContext(Context)[3];
  useEffect(() => {
    console.log(essentials.data);
  }, [essentials]);

  if (essentials.data) {
    return (
      <>
        <h1 className="fullTextEssential">
          Daily <span className="textEssential">Essential</span>
        </h1>
        <div className="gridLayoutEssential">
          {Array.from(essentials.data).map(({ id, attributes }) => (
            <Link className="link" to={`/essential/${id}`} key={id}>
              <Essential
                key={id}
                imgEssential={attributes.imgEssential}
                nameEssential={attributes.nameEssential}
                upToOff={attributes.upToOff}
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
}
export default EssentialList;
